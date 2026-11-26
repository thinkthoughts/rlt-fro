
'use strict';

// The JSON is the research record; this file only renders it.
const message = document.querySelector('#message');
const dismiss = document.querySelector('#dismiss');
const feed = document.querySelector('#research-feed');

function showMessage(record) {
  if (!message || !dismiss) return;
  const key = record?.id ? `rlt-fro:message:${record.id}` : null;
  let closed = !key || !record.text;

  try {
    if (key && localStorage.getItem(key) === '1') closed = true;
  } catch (_) {}

  message.textContent = closed ? '' : record.text;
  dismiss.hidden = closed;

  dismiss.onclick = () => {
    try {
      localStorage.setItem(key, '1');
    } catch (_) {}

    message.textContent = '';
    dismiss.hidden = true;
  };
}

function element(tag, text, cls) {
  const e = document.createElement(tag);
  if (text) e.textContent = text;
  if (cls) e.className = cls;
  return e;
}

function link(text, url) {
  const a = element('a', text);
  const parsed = new URL(url, location.href);
  if (['https:', 'http:'].includes(parsed.protocol)) {
    a.href = parsed.href;
  }
  return a;
}

function render(entry) {
  const a = element('article', '', 'specification');
  a.id = entry.id;

  a.dataset.accent = ['green', 'blue', 'pink'].includes(entry.accent)
    ? entry.accent
    : 'green';

  a.append(
    element('h2', entry.title),
    element('p', entry.subtitle, 'accent-1'),
    element('p', entry.description)
  );

  if (entry.url) {
    const p = element('p');
    p.append(link('Research overview', entry.url));
    a.append(p);
  }

  if (entry.tweet) {
    const p = element('p');
    p.append(link('Discussion on X', entry.tweet));
    a.append(p);
  }

  if (entry.repositories?.length) {
    a.append(element('p', 'Research repositories', 'white-2'));

    const ul = element('ul', '', 'repo-list');

    for (const repo of entry.repositories) {
      const li = element('li');
      li.append(link(repo.name, repo.url));
      ul.append(li);
    }

    a.append(ul);
  }

  if (entry.status) {
    a.append(element('p', entry.status, 'muted'));
  }

  return a;
}

showMessage({
  id: 'fro-definition-001',
  text: 'A FRO is a Focused Research Organization.'
});

fetch('research.json')
  .then(r => {
    if (!r.ok) throw Error('Feed unavailable');
    return r.json();
  })
  .then(data => {
    if (data.schemaVersion !== 1 || !Array.isArray(data.entries)) {
      throw Error('Invalid feed');
    }

    const entries = data.entries.map(render);

    if (feed) feed.replaceChildren(...entries);

    showMessage(data.message);
  })
  .catch(() => {
    // Keep the initial static research entries available.
  });
