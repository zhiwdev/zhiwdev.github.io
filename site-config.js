(function () {
    window.SITE_CONFIG = Object.assign({}, window.SITE_CONFIG, {
        overdueStudioUrl: 'https://overduestudio.pages.dev/'
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

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applySiteLinks);
    } else {
        applySiteLinks();
    }
})();
