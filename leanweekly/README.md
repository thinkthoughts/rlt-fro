# Lean Weekly discovery register

Additive page. Uses the existing root styles.css. No changes to existing pages.
The updater retrieves https://leanweekly.news/feed.json (JSON Feed 1.1), retains IDs, headlines, tags and links, and omits article body HTML and dates from the public UI. First tag is treated as the category (current source convention). No external HTML is injected. The generated local feed.json is ignored by Git; a failed update leaves the previous cache intact. The page warns when a cache is more than three hours old. Reload to see new headlines. This is a rolling discovery list, not a permanent archive or independent verification record. The future /lean/ register is deliberately not linked until it exists.

## VPS (run as dan)

    cd /var/www/rlt-fro
    git pull --ff-only
    python3 leanweekly/update-feed.py
    curl -I https://rlt-fro.now/leanweekly/
    curl -I https://rlt-fro.now/leanweekly/feed.json
    crontab -e

Append one line (do not replace existing cron jobs):

    17 * * * * /usr/bin/python3 /var/www/rlt-fro/leanweekly/update-feed.py >> /home/dan/leanweekly-feed.log 2>&1

Check the log periodically. No Nginx restart or additional dependencies needed. Python 3.8+.
