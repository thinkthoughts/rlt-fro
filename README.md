# RLT-FRO website
Static dark-mode site. Copy these files to the web root. For local testing: `python3 -m http.server 8000` in this directory. JSON fetch requires HTTP(S); the homepage has a static fallback.

- `research.json`: ordered research entries and current message (set message to null to hide it). Change the message ID for each new message so prior dismissals do not suppress it. No visible dates. The static fallback in index.html should be updated when publishing new entries if no-JS parity is required.
- `site.js`: JSON renderer and per-message localStorage dismissal. No dependencies.
- `styles.css`: shared palette and components; set `data-accent` to green, blue or pink on any section. Pink shades are provisional.
- `style-guide.html`: visual reference.
- `about.html`: directory based on https://www.convergentresearch.org/ecosystem; RLT-FRO is explicitly proposed and independent. [C]Worthy is sorted under C. Atlas Ignota is omitted because it is listed as an ecosystem member, not an FRO.

The PiπΠ text is a temporary wordmark; replace it with the existing Translate Pi logo asset when available. No logo artwork was supplied or retrieved. Research is not represented as completed verification. The repository's existing Apache 2.0 LICENSE should be retained.
