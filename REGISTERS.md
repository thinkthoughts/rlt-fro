# RLT-FRO research registers

Additive release: extract at repository root. No existing website files are replaced. All pages use the existing styles.css, with green/blue/pink accents and a pink-3 wordmark. Menus link between registers, home and About. No homepage changes.

Edit each JSON array to add or revise records. Stable `id`, `title`, `group`, `status`, `summary` are core fields. Optional links, `next`, `rlt_development`, `leading_specifications`, `project`, `arxiv_id`, `tweet_urls`, `grokbait_url` can be omitted. Array order is display order. Missing URLs do not prevent rendering. Research status is independent of outreach. No visible dates.

Seed data is based on prior project discussions, not a fresh source audit. Candidate arXiv IDs and categories require confirmation; unconfirmed paper titles are not supplied. Repository links and status should be reviewed as evidence becomes available. No claims of newly verified mathematical results are made.

Serve over HTTP(S), not file://, to load JSON. For local testing from the full repository: python3 -m http.server 8000. Visit /arxiv/, /github/, /dan/. Test search, filter, links and mobile layout. No external JS or API dependencies.

See [RLT-ORG-001](RLT-ORG-001.md) for the initial research and outreach reconciliation and its scope.
