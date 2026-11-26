'use strict';
(() => {
  const search = document.getElementById('search');
  const filter = document.getElementById('filter');
  const status = document.getElementById('status');
  const records = document.getElementById('records');
  const el = (tag, text, cls) => { const n = document.createElement(tag); if (text !== undefined) n.textContent = text; if (cls) n.className = cls; return n; };
  function link(url, label) {
    try { const u = new URL(url); if (!['http:', 'https:'].includes(u.protocol) || u.username || u.password) return null;
      const a = el('a', label || (u.hostname + (u.pathname === '/' ? '' : u.pathname))); a.href = u.href; a.style.overflowWrap = 'anywhere'; return a;
    } catch (_) { return null; }
  }
  let items = [], stale = false;
  function render() {
    const q = search.value.trim().toLowerCase();
    const shown = items.filter(x => (!filter.value || x.category === filter.value) && [x.title, x.category, ...x.tags, ...x.links].join(' ').toLowerCase().includes(q));
    records.replaceChildren();
    status.textContent = `${shown.length} of ${items.length} headlines` + (stale ? ' · Cached feed may be outdated' : '');
    for (const x of shown) {
      const article = el('article', undefined, 'specification');
      const h = el('h2'); const a = link(x.url, x.title); if (a) { a.style.color = 'var(--gold)'; h.append(a); } else h.textContent = x.title; article.append(h);
      article.append(el('p', x.category, 'accent-1'));
      if (x.tags.length > 1) article.append(el('p', x.tags.slice(1).join(' · '), 'muted'));
      const ul = el('ul', undefined, 'repo-list');
      for (const url of x.links) { const a = link(url); if (a) { const li = el('li'); li.append(a); ul.append(li); } }
      if (ul.childElementCount) article.append(ul);
      records.append(article);
    }
  }
  search.addEventListener('input', render); filter.addEventListener('change', render);
  fetch('feed.json', {cache:'no-store'}).then(r => { if (!r.ok) throw Error('Feed unavailable'); return r.json(); }).then(data => {
    if (!Array.isArray(data.items) || !data.items.length) throw Error('Empty feed');
    items = data.items;
    const fetched = Date.parse(data.retrieved_at); stale = !Number.isFinite(fetched) || Date.now() - fetched > 3 * 3600000;
    for (const name of [...new Set(items.map(x => x.category))].sort()) { const o = el('option', name); o.value = name; filter.append(o); }
    render();
  }).catch(() => { status.textContent = 'Feed cache unavailable. Read Lean Weekly directly using the link above.'; });
})();
