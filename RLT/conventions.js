'use strict';
(() => {
  const rows = document.querySelector('#conventions');
  const status = document.querySelector('#conventions-status');
  fetch('conventions.json').then(r => {
    if (!r.ok) throw new Error('HTTP '+r.status);
    return r.json();
  }).then(items => {
    if (!Array.isArray(items)) throw new Error('Expected array');
    rows.replaceChildren(...items.map(item => {
      const tr = document.createElement('tr');
      const th = document.createElement('th'); th.scope='row'; th.textContent=item.id; th.style.fontSize='1.5rem';
      const td = document.createElement('td');
      const title = document.createElement('strong'); title.textContent=item.title;
      const summary = document.createElement('p'); summary.className='white-2'; summary.textContent=item.summary;
      const details = document.createElement('p'); details.className='muted'; details.textContent=item.requirement;
      td.append(title,summary,details); tr.append(th,td); return tr;
    }));
  }).catch(() => { status.textContent='Could not load evidence conventions. See Conventions JSON below.'; });
})();
