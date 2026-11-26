#!/usr/bin/env python3
"""Fetch Lean Weekly and atomically publish a minimal link index. Python 3.8+."""
import json
import os
import tempfile
import sys
from html.parser import HTMLParser
from pathlib import Path
from datetime import datetime, timezone
from urllib.parse import urlsplit, urljoin
from urllib.request import Request, urlopen

SOURCE = 'https://leanweekly.news/feed.json'
DEST = Path(__file__).resolve().with_name('feed.json')
LIMIT = 8 * 1024 * 1024

def safe_url(value):
    if not isinstance(value, str):
        return False
    try:
        u = urlsplit(value)
        return u.scheme in ('https', 'http') and bool(u.hostname) and not u.username and not u.password and not any(c.isspace() for c in value)
    except ValueError:
        return False

class Links(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.urls = []
    def handle_starttag(self, tag, attrs):
        if tag == 'a':
            href = dict(attrs).get('href')
            if href:
                url = urljoin(SOURCE, href)
                if safe_url(url) and url not in self.urls:
                    self.urls.append(url)

def normalize(data):
    if not isinstance(data, dict) or data.get('version') not in ('https://jsonfeed.org/version/1', 'https://jsonfeed.org/version/1.1') or not isinstance(data.get('items'), list) or not data['items']:
        raise ValueError('Unexpected or empty JSON Feed')
    items, seen = [], set()
    for row in data['items']:
        if not isinstance(row, dict):
            raise ValueError('Invalid item')
        ident, title, url = (row.get(k) for k in ('id', 'title', 'url'))
        if not isinstance(ident, str) or not ident or not isinstance(title, str) or not title.strip() or not safe_url(url):
            raise ValueError('Missing item identity, title or URL')
        if ident in seen:
            raise ValueError('Duplicate item identity')
        seen.add(ident)
        tags = row.get('tags', [])
        if not isinstance(tags, list) or not all(isinstance(t, str) for t in tags):
            raise ValueError('Invalid tags')
        links = Links()
        links.feed(row.get('content_html') or '')
        links.close()
        items.append(dict(id=ident, title=title, url=url, category=tags[0] if tags else 'Other', tags=tags, links=links.urls))
    return dict(source=SOURCE, retrieved_at=datetime.now(timezone.utc).isoformat(), items=items)

def publish(data, dest):
    tmp = None
    try:
        with tempfile.NamedTemporaryFile(mode='w', encoding='utf-8', dir=dest.parent, delete=False) as f:
            tmp = Path(f.name)
            json.dump(data, f, ensure_ascii=False, indent=2)
            f.write('\n')
            f.flush()
            os.fsync(f.fileno())
        tmp.chmod(0o644)
        os.replace(tmp, dest)
    finally:
        if tmp is not None and tmp.exists():
            tmp.unlink()

def main():
    try:
        req = Request(SOURCE, headers={'User-Agent': 'RLT-FRO feed discovery (https://rlt-fro.now/)', 'Accept': 'application/json'})
        with urlopen(req, timeout=30) as response:
            raw = response.read(LIMIT + 1)
        if len(raw) > LIMIT:
            raise ValueError('Feed exceeds size limit')
        data = normalize(json.loads(raw))
        publish(data, DEST)
        print('Updated {} headlines'.format(len(data['items'])))
    except Exception as exc:
        print('Feed update failed; previous cache retained: {}'.format(exc), file=sys.stderr)
        return 1
    return 0

if __name__ == '__main__':
    sys.exit(main())
