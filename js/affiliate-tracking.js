/* Lightweight GA4 outbound affiliate click tracking.
   Fails silently if gtag is missing or blocked. Never delays navigation. */
(function () {
    'use strict';

    var GENERIC_CTA = /^(check|view|browse|see|shop)\b/i;

    function textOf(el) {
        if (!el) return '';
        return (el.textContent || '').replace(/\s+/g, ' ').trim();
    }

    function cleanHeading(raw) {
        return raw
            .replace(/^\d+\s*\/\/\s*/, '')
            .replace(/^deep dive:\s*/i, '')
            .replace(/\s+/g, ' ')
            .trim();
    }

    function productName(link) {
        var explicit = link.getAttribute('data-product');
        if (explicit && explicit.trim()) return explicit.trim();

        var card = link.closest('.qp-row, .hw-card, .featured-card, .card');
        if (card) {
            var named = card.querySelector('.qp-name, .hw-card-name, h2, h3, h4');
            var cardLabel = textOf(named);
            if (cardLabel) return cleanHeading(cardLabel);
        }

        var own = textOf(link);
        if (own && !GENERIC_CTA.test(own) && own.length <= 80) return own;

        var row = link.closest('tr');
        if (row) {
            var cells = row.querySelectorAll('th, td');
            for (var i = 0; i < cells.length; i++) {
                if (cells[i].contains(link)) continue;
                var cellLabel = textOf(cells[i]);
                if (cellLabel && cellLabel.length <= 120) return cellLabel;
            }
        }

        var node = link;
        while (node && node !== document.body) {
            var prev = node.previousElementSibling;
            while (prev) {
                if (prev.tagName === 'H2' || prev.tagName === 'H3') {
                    var heading = textOf(prev);
                    if (heading) return cleanHeading(heading);
                }
                prev = prev.previousElementSibling;
            }
            node = node.parentElement;
        }

        var aria = link.getAttribute('aria-label');
        if (aria) {
            var cleaned = aria.replace(/\s*\(opens in a new tab\)\s*/ig, '').trim();
            if (cleaned) return cleaned;
        }

        return own || 'Amazon link';
    }

    function placement(link) {
        var explicit = link.getAttribute('data-placement');
        if (explicit && explicit.trim()) return explicit.trim();
        if (link.closest('.quick-picks')) return 'quick_picks';

        var path = window.location.pathname || '';
        if (path === '/' || /\/index\.html$/.test(path)) return 'homepage_hardware';
        if (/calculator\.html$/.test(path)) return 'calculator';
        if (/setup-report\.html$/.test(path)) return 'setup_report';
        if (/\/articles\//.test(path)) return 'article_body';
        return 'site';
    }

    function classify(href) {
        var match = String(href).match(/\/dp\/([A-Za-z0-9]{10})(?=[/?#]|$)/);
        if (match) {
            return { asin: match[1].toUpperCase(), link_type: 'direct_asin' };
        }
        return { asin: 'search', link_type: 'search' };
    }

    function track(event) {
        try {
            var el = event.target;
            if (el && el.nodeType === 3) el = el.parentElement;
            if (!el || !el.closest) return;

            var link = el.closest('a[href*="amazon.com"]');
            if (!link) return;
            if (typeof gtag !== 'function') return;

            var href = link.href || link.getAttribute('href') || '';
            var ids = classify(href);
            gtag('event', 'affiliate_click', {
                product_name: productName(link),
                asin: ids.asin,
                link_type: ids.link_type,
                placement: placement(link),
                link_url: href,
                page_path: window.location.pathname
            });
        } catch (err) {
            /* Tracking must never surface an error or block the click. */
        }
    }

    document.addEventListener('click', track, false);
})();
