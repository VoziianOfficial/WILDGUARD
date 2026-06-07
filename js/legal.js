'use strict';

(function () {
    function getCurrentPage() {
        const page = window.location.pathname.split('/').pop();
        return page || 'index.html';
    }

    function initLegalActiveLink() {
        const currentPage = getCurrentPage();
        const links = document.querySelectorAll('.legal-sidebar__links a');

        links.forEach((link) => {
            const href = link.getAttribute('href');

            if (href === currentPage) {
                link.classList.add('is-active');
                link.setAttribute('aria-current', 'page');
            } else {
                link.classList.remove('is-active');
                link.removeAttribute('aria-current');
            }
        });
    }

    function initLegalHeroImageFallback() {
        const hero = document.querySelector('.legal-hero');

        if (!hero) {
            return;
        }

        const image = new Image();

        image.onload = function () {
            hero.classList.add('has-hero-image');
        };

        image.onerror = function () {
            hero.classList.add('has-hero-fallback');
        };

        image.src = 'assets/images/cta-wildlife.jpg';
    }

    function initLegalFocusStates() {
        const focusItems = document.querySelectorAll(
            '.legal-sidebar__links a, .legal-card, .legal-note, .legal-contact-box, .legal-meta span'
        );

        focusItems.forEach((item) => {
            item.addEventListener('focusin', function () {
                item.classList.add('is-focused');
            });

            item.addEventListener('focusout', function () {
                item.classList.remove('is-focused');
            });
        });
    }

    function initLegalSectionAnchors() {
        const sections = document.querySelectorAll('.legal-section[id]');

        sections.forEach((section) => {
            const heading = section.querySelector('h2, h3');

            if (!heading) {
                return;
            }

            heading.setAttribute('tabindex', '-1');
        });
    }

    function initLegalPrintClass() {
        const legalCard = document.querySelector('.legal-card');

        if (!legalCard) {
            return;
        }

        legalCard.setAttribute('data-printable-policy', 'true');
    }

    function initLegalPolicyName() {
        const body = document.body;
        const policyNameTarget = document.querySelector('[data-policy-name]');

        if (!policyNameTarget) {
            return;
        }

        if (body.classList.contains('page-privacy')) {
            policyNameTarget.textContent = 'Privacy Policy';
            return;
        }

        if (body.classList.contains('page-cookies')) {
            policyNameTarget.textContent = 'Cookie Policy';
            return;
        }

        if (body.classList.contains('page-terms')) {
            policyNameTarget.textContent = 'Terms of Service';
        }
    }

    function initLegalContactLinks() {
        const emailLinks = document.querySelectorAll('.legal-contact-box a[data-email-link]');
        const phoneLinks = document.querySelectorAll('.legal-contact-box a[data-phone-link]');

        emailLinks.forEach((link) => {
            if (!link.getAttribute('aria-label')) {
                link.setAttribute('aria-label', 'Email WILDGUARD');
            }
        });

        phoneLinks.forEach((link) => {
            if (!link.getAttribute('aria-label')) {
                link.setAttribute('aria-label', 'Call WILDGUARD');
            }
        });
    }

    function bootLegalPage() {
        initLegalActiveLink();
        initLegalHeroImageFallback();
        initLegalFocusStates();
        initLegalSectionAnchors();
        initLegalPrintClass();
        initLegalPolicyName();
        initLegalContactLinks();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bootLegalPage);
    } else {
        bootLegalPage();
    }
})();