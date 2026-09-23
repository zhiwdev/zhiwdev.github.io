(function () {
    window.SITE_CONFIG = Object.assign({}, window.SITE_CONFIG, {
        overdueStudioUrl: 'https://overduestudio.pages.dev/',
        // Newsletter: set your Substack publication subdomain here to activate
        // the subscribe form, e.g. 'zhiwang' for zhiwang.substack.com.
        // Leave empty to show the "launching soon" note instead.
        substackSubdomain: ''
    });

    function formatLinkText(url, mode) {
        if (mode === 'full') {
            return url;
        }
        return url.replace(/^https?:\/\//, '');
    }

    function applySiteLinks() {
        var links = document.querySelectorAll('[data-site-link]');
        links.forEach(function (link) {
            var key = link.getAttribute('data-site-link');
            var url = window.SITE_CONFIG[key];
            if (!url) {
                return;
            }

            link.setAttribute('href', url);

            if (link.getAttribute('data-site-link-autotext') === 'true') {
                var mode = link.getAttribute('data-site-link-text') || 'no-protocol';
                link.textContent = formatLinkText(url, mode);
            }
        });
    }

    function renderSubscribeEmbed() {
        var mount = document.getElementById('subscribe-embed');
        if (!mount) {
            return;
        }
        var sub = window.SITE_CONFIG.substackSubdomain;
        if (!sub) {
            return; // not configured yet — the "launching soon" note stays
        }
        var iframe = document.createElement('iframe');
        iframe.src = 'https://' + sub + '.substack.com/embed';
        iframe.title = 'Subscribe to the newsletter';
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('scrolling', 'no');
        iframe.className = 'subscribe-iframe';
        mount.innerHTML = '';
        mount.appendChild(iframe);
    }

    function init() {
        applySiteLinks();
        renderSubscribeEmbed();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
