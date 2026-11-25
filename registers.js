'use strict';
(() => {
  const root = document.querySelector('#records');
  const search = document.querySelector('#search');
  const filter = document.querySelector('#filter');
  const count = document.querySelector('#count');
  const key = document.body.dataset.filter;
  const el = (tag, text, cls) => { const n=document.createElement(tag); if(text != null)n.textContent=text; if(cls)n.className=cls; return n; };
  function link(list,label,url) {
    if (!url) return;
    try { const u=new URL(url); if(!['https:','http:'].includes(u.protocol))return; const a=el('a',label); a.href=u.href; const li=el('li'); li.append(a); list.append(li); } catch (_) {}
  }
  function render(r) {
    const article=el('article',null,'specification'); article.id=r.id;
    article.append(el('h2',r.title),el('p',[r.group,r.project].filter(Boolean).join(' · '),'accent-1'),el('p',r.summary),el('p','Status: '+r.status,'muted'));
    const links=el('ul',null,'repo-list');
    if(r.arxiv_id)link(links,'arXiv:'+r.arxiv_id,'https://arxiv.org/abs/'+encodeURIComponent(r.arxiv_id));
    for(const [label,k] of [['Upstream','upstream'],['Fork','fork'],['Repository','repository'],['Grokbait','grokbait_url']])link(links,label,r[k]);
    for(const [label,k] of [['Tweet','tweet_urls'],['Contribution','contribution_urls'],['Evidence','evidence_urls'],['Outreach','outreach_urls']]) (r[k]||[]).forEach((u,i)=>link(links,label+' '+(i+1),u));
    (r.links||[]).forEach(l=>link(links,l.label,l.url));
    if(links.children.length)article.append(links);
    for(const [label,k] of [['Leading specifications','leading_specifications'],['RLT development','rlt_development']])if(r[k]?.length)article.append(el('p',label+': '+r[k].join(' · '),'accent-1'));
    if(r.source_pin)article.append(el('p','Source pin: '+r.source_pin,'muted'));
    if(r.next)article.append(el('p','Next: '+r.next,'white-2'));
    return article;
  }
  fetch(document.body.dataset.source).then(response=>{if(!response.ok)throw Error('HTTP '+response.status);return response.json();}).then(records=>{
    if(!Array.isArray(records))throw Error('Expected JSON array');
    [...new Set(records.map(r=>r[key]).filter(Boolean))].sort().forEach(v=>{const o=el('option',v);o.value=v;filter.append(o);});
    function update(){const q=search.value.trim().toLowerCase(); const found=records.filter(r=>(!filter.value||r[key]===filter.value)&&JSON.stringify(r).toLowerCase().includes(q));root.replaceChildren(...found.map(render));count.textContent=found.length+' of '+records.length+' records';if(!found.length)root.append(el('p','No matching records.','muted'));}
    search.addEventListener('input',update);filter.addEventListener('change',update);update();
  }).catch(()=>{count.textContent='Could not load the register. Open the JSON link below or serve this directory over HTTP.';});
})();
