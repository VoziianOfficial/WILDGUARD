'use strict';

(function () {
    const config = window.SITE_CONFIG || {};

    const selectors = {
        headerMount: '[data-site-header]',
        footerMount: '[data-site-footer]',
        logo: '[data-logo]',
        icon: '[data-icon]',
        bg: '[data-bg-key]',
        accordion: '[data-accordion]',
        cookieBanner: '[data-cookie-banner]',
        mobileMenu: '[data-mobile-menu]',
        mobileOpen: '[data-mobile-open]',
        mobileClose: '[data-mobile-close]',
        mobileOverlay: '[data-mobile-overlay]'
    };

    const iconSet = {
        phone: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7.3 4.4 9.7 6.8c.6.6.7 1.5.2 2.2l-.9 1.3a11.2 11.2 0 0 0 4.7 4.7l1.3-.9c.7-.5 1.6-.4 2.2.2l2.4 2.4c.5.5.6 1.3.2 1.9-.7 1.2-2 2.1-3.5 2.1C9.1 20.7 3.3 14.9 3.3 7.7c0-1.5.8-2.8 2.1-3.5.6-.4 1.4-.3 1.9.2Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `,
        mail: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4.5 6.5h15v11h-15v-11Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
                <path d="m5 7 7 6 7-6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `,
        menu: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
        `,
        close: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 6 18 18M18 6 6 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
        `,
        arrow: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h13" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/>
                <path d="m13 6 6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `,
        chevron: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m7 10 5 5 5-5" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `,
        plus: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/>
            </svg>
        `,
        minus: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/>
            </svg>
        `,
        search: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="10.8" cy="10.8" r="5.8" fill="none" stroke="currentColor" stroke-width="1.8"/>
                <path d="m15.2 15.2 4.3 4.3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
            </svg>
        `,
        calendar: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 5.8h14v14H5v-14Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
                <path d="M8 3.8v4M16 3.8v4M5 9.5h14" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
                <path d="M8.2 13h2.2M13.6 13h2.2M8.2 16h2.2M13.6 16h2.2" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
        `,
        shield: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3.4 19 6v5.2c0 4.3-2.7 7.8-7 9.4-4.3-1.6-7-5.1-7-9.4V6l7-2.6Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
                <path d="m8.7 12 2.1 2.1 4.7-5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `,
        'shield-home': `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3.4 19 6v5.1c0 4.4-2.6 7.9-7 9.5-4.4-1.6-7-5.1-7-9.5V6l7-2.6Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
                <path d="m8.3 12 3.7-3.1 3.7 3.1v4.1H8.3V12Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                <path d="M10.6 16.1v-3h2.8v3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
            </svg>
        `,
        home: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m4 11.5 8-6.8 8 6.8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.2 10.2v9h11.6v-9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
                <path d="M10 19.2v-5.1h4v5.1" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
            </svg>
        `,
        paw: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <ellipse cx="7.1" cy="8.2" rx="2" ry="2.7" fill="currentColor"/>
                <ellipse cx="12" cy="6.6" rx="2.1" ry="2.9" fill="currentColor"/>
                <ellipse cx="16.9" cy="8.2" rx="2" ry="2.7" fill="currentColor"/>
                <ellipse cx="6.2" cy="13.1" rx="1.8" ry="2.3" fill="currentColor"/>
                <ellipse cx="17.8" cy="13.1" rx="1.8" ry="2.3" fill="currentColor"/>
                <path d="M8.1 17.4c.5-2.7 2.1-4.2 3.9-4.2s3.4 1.5 3.9 4.2c.3 1.8-.9 3.2-3.9 3.2s-4.2-1.4-3.9-3.2Z" fill="currentColor"/>
            </svg>
        `,
        raccoon: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.1 10.6 3.8 6.8l4.3 1.4c1-.8 2.3-1.3 3.9-1.3s2.9.5 3.9 1.3l4.3-1.4-2.3 3.8c.2.6.3 1.2.3 1.8 0 3.2-2.7 5.8-6.2 5.8s-6.2-2.6-6.2-5.8c0-.6.1-1.2.3-1.8Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                <path d="M5.9 12.2c1.7-1.5 3.6-2.1 6.1-1.2 2.5-.9 4.4-.3 6.1 1.2-1.1 1.7-3.3 2.2-6.1.8-2.8 1.4-5 .9-6.1-.8Z" fill="currentColor" opacity=".25"/>
                <circle cx="9.4" cy="12.2" r=".8" fill="currentColor"/>
                <circle cx="14.6" cy="12.2" r=".8" fill="currentColor"/>
                <path d="M11 15.2c.6.4 1.4.4 2 0" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
            </svg>
        `,
        squirrel: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.2 14.8c-1.4-.4-2.4-1.6-2.4-3.1 0-1.8 1.4-3.2 3.2-3.2h2.5c2.7 0 4.9 2.2 4.9 4.9v3.8H9.5c-.7 0-1.3-.4-1.3-1.1v-1.3Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
                <path d="M15.4 10.8c2.6-.2 4.4-1.7 4.4-4.1 0-1.6-.9-3.1-2.5-3.1-1.9 0-2.8 1.9-2.3 4.1" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
                <path d="M6.6 9.9 4.7 8.1M8.2 8.7 7.6 5.8" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <circle cx="9.2" cy="11.6" r=".7" fill="currentColor"/>
                <path d="M9.5 17.2v2.2M14.8 17.2v2.2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </svg>
        `,
        bat: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 10.4c1.2-2.3 3.5-4 7.7-4.4-.8 1.8-.9 3.3-.1 4.6-1.7-.3-3 .1-3.8 1.1 1.7.5 2.8 1.5 3.4 3.3-2.7-.9-4.8-.6-6.2 1.3L12 18l-1-1.7c-1.4-1.9-3.5-2.2-6.2-1.3.6-1.8 1.7-2.8 3.4-3.3-.8-1-2.1-1.4-3.8-1.1.8-1.3.7-2.8-.1-4.6 4.2.4 6.5 2.1 7.7 4.4Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                <path d="M10.1 10.5h3.8l-1.9 2.2-1.9-2.2Z" fill="currentColor" opacity=".35"/>
            </svg>
        `,
        bird: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4.1 13.7c3.4-3.9 6.2-5.7 9.8-5.3 2.3.2 4.2 1.5 5.7 3.4l2.2.5-2.1 1.1c-.7 3.1-3.3 5.1-6.7 5.1-3.1 0-5.6-1.6-6.8-4.2l-2.1-.6Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
                <path d="M8.3 12.1c2.4.1 4.3.9 5.9 2.6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <circle cx="16.2" cy="11.1" r=".65" fill="currentColor"/>
                <path d="M11.8 18.5 10.6 21M14.5 18.4l1.2 2.6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
        `,
        volume: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4.2 9.4h3.1l4-3.1v11.4l-4-3.1H4.2V9.4Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
                <path d="M15.1 9.1c.8.8 1.2 1.8 1.2 2.9s-.4 2.1-1.2 2.9M17.9 6.7c1.5 1.4 2.3 3.2 2.3 5.3s-.8 3.9-2.3 5.3" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
            </svg>
        `,
        droppings: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <ellipse cx="7" cy="9" rx="2.4" ry="1.5" fill="currentColor"/>
                <ellipse cx="13" cy="7" rx="2.2" ry="1.4" fill="currentColor"/>
                <ellipse cx="17.5" cy="11.5" rx="2.4" ry="1.5" fill="currentColor"/>
                <ellipse cx="10.5" cy="15.5" rx="2.7" ry="1.6" fill="currentColor"/>
                <ellipse cx="16" cy="17" rx="2.1" ry="1.3" fill="currentColor"/>
            </svg>
        `,
        scratch: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 4 5.6 20M13 4l-2.4 16M18 4l-2.4 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
            </svg>
        `,
        vent: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 6.5h16v11H4v-11Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
                <path d="M7 9.5h10M7 12h10M7 14.5h10" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </svg>
        `,
        nest: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 14.8c1.4 3.2 4 4.8 7 4.8s5.6-1.6 7-4.8H5Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
                <path d="M6.6 14.7c1.2-1.4 3-2.2 5.4-2.2s4.2.8 5.4 2.2M8.3 11.3c.8-2 2.1-3 3.7-3s2.9 1 3.7 3" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
                <circle cx="10.6" cy="11.1" r="1" fill="currentColor"/>
                <circle cx="13.4" cy="11.1" r="1" fill="currentColor"/>
            </svg>
        `,
        hole: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <ellipse cx="12" cy="12" rx="7.3" ry="5.2" fill="none" stroke="currentColor" stroke-width="1.7"/>
                <ellipse cx="12" cy="12" rx="4.2" ry="2.9" fill="currentColor" opacity=".3"/>
                <path d="M5.2 10.5c1.4-2.4 3.8-3.7 6.8-3.7s5.4 1.3 6.8 3.7" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".65"/>
            </svg>
        `,
        attic: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m3.8 11.5 8.2-7 8.2 7" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 10.2v9.2h12v-9.2" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
                <path d="M9 13h6M9 16h6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
        `,
        roof: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3.5 12 12 5l8.5 7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.4 11.2h11.2l1.3 5.7H5.1l1.3-5.7Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
            </svg>
        `,
        chimney: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m3.7 12 8.3-6.8 8.3 6.8" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7 11v8h10v-8" fill="none" stroke="currentColor" stroke-width="1.7"/>
                <path d="M15 5.6h3v4.8" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
            </svg>
        `,
        garage: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m4 10.8 8-5.6 8 5.6v8.7H4v-8.7Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
                <path d="M7.5 13h9v6.5h-9V13ZM8.8 15.1h6.4M8.8 17.1h6.4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
        `,
        crawl: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 15c1.5-4.2 4.2-6.3 8-6.3s6.5 2.1 8 6.3" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
                <path d="M5.5 15h13v4H5.5v-4Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
                <path d="M8 17h8" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
        `,
        star: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m12 3.8 2.4 5 5.5.8-4 3.9.9 5.5-4.8-2.6L7.2 19l.9-5.5-4-3.9 5.5-.8L12 3.8Z" fill="currentColor"/>
            </svg>
        `,
        quote: `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9.2 6.2c-2.8 1.4-4.4 3.8-4.4 6.7 0 2.2 1.3 3.7 3.1 3.7 1.5 0 2.6-1.1 2.6-2.6 0-1.4-.9-2.4-2.2-2.6.2-1.4 1-2.6 2.4-3.6L9.2 6.2Zm9 0c-2.8 1.4-4.4 3.8-4.4 6.7 0 2.2 1.3 3.7 3.1 3.7 1.5 0 2.6-1.1 2.6-2.6 0-1.4-.9-2.4-2.2-2.6.2-1.4 1-2.6 2.4-3.6l-1.5-1.6Z" fill="currentColor"/>
            </svg>
        `
    };

    const serviceDescriptions = {
        raccoon: 'Compare local provider options for roofline activity, attic noises, trash disturbance, and entry-point concerns.',
        squirrel: 'Review options for scratching sounds, attic nesting, chewed materials, and roofline gap concerns.',
        bat: 'Explore provider categories for attic or soffit activity, droppings, exclusion timing, and careful removal considerations.',
        bird: 'Compare services related to nesting, vents, ledges, rooflines, droppings, and prevention options.',
        'opossum-skunk': 'Find provider options for crawl spaces, under-deck activity, yard structures, odors, and safety-aware inspection needs.',
        exclusion: 'Compare providers who offer exclusion and repair-related services for vents, soffits, chimneys, gaps, and entry points.'
    };

    function qs(selector, scope = document) {
        return scope.querySelector(selector);
    }

    function qsa(selector, scope = document) {
        return Array.from(scope.querySelectorAll(selector));
    }

    function createElementFromHTML(html) {
        const template = document.createElement('template');
        template.innerHTML = html.trim();
        return template.content.firstElementChild;
    }

    function getCurrentPage() {
        const path = window.location.pathname.split('/').pop();
        return path || 'index.html';
    }

    function getServiceById(id) {
        return (config.services || []).find((service) => service.id === id);
    }

    function getServiceBySlug(slug) {
        return (config.services || []).find((service) => service.slug === slug);
    }

    function getImagePath(key) {
        return config.images && config.images[key] ? config.images[key] : '';
    }

    function getIcon(name) {
        return iconSet[name] || iconSet.paw;
    }

    function renderIcon(name, label) {
        const ariaLabel = label ? ` aria-label="${label}" role="img"` : ' aria-hidden="true"';
        return `<span class="svg-icon" data-icon-rendered="${name}"${ariaLabel}>${getIcon(name)}</span>`;
    }

    function renderLogo() {
        return `
            <span class="brand-mark" aria-hidden="true">
                ${config.logoSvg || ''}
            </span>
        `;
    }

    function setText(selector, value) {
        qsa(selector).forEach((element) => {
            element.textContent = value || '';
        });
    }

    function setHref(selector, value) {
        qsa(selector).forEach((element) => {
            element.setAttribute('href', value || '#');
        });
    }

    function initConfigBindings() {
        const company = config.company || {};
        const legal = config.legal || {};
        const phoneHref = company.phoneRaw ? `tel:${company.phoneRaw}` : '#';
        const emailHref = company.email ? `mailto:${company.email}` : '#';

        setText('[data-company-name]', company.name);
        setText('[data-company-id]', company.companyId);
        setText('[data-phone-display]', company.phoneDisplay);
        setText('[data-phone-label]', company.phoneButtonLabel || (config.cta && config.cta.phone));
        setText('[data-email]', company.email);
        setText('[data-address]', company.address);
        setText('[data-service-area]', company.serviceArea);
        setText('[data-disclaimer]', legal.disclaimer);
        setText('[data-current-year]', new Date().getFullYear());

        setHref('[data-phone-link]', phoneHref);
        setHref('[data-email-link]', emailHref);

        qsa('[data-logo]').forEach((element) => {
            element.innerHTML = renderLogo();
        });

        qsa('[data-bg-key]').forEach((element) => {
            const key = element.getAttribute('data-bg-key');
            const image = getImagePath(key);

            if (image) {
                element.style.setProperty('--section-bg-image', `url("../${image}")`);
                element.style.backgroundImage = `var(--hero-overlay, linear-gradient(90deg, rgba(7,9,8,.9), rgba(7,9,8,.36))), url("${image}")`;
            }
        });

        qsa('[data-icon]').forEach((element) => {
            const name = element.getAttribute('data-icon');
            if (!element.hasAttribute('data-icon-ready')) {
                element.innerHTML = getIcon(name);
                element.setAttribute('data-icon-ready', 'true');
            }
        });
    }

    function createHeader() {
        const currentPage = getCurrentPage();
        const isServicePage = (config.services || []).some((service) => service.slug === currentPage);

        const servicesList = (config.services || []).map((service) => {
            return `
                <a class="site-dropdown__link" href="${service.slug}">
                    ${renderIcon(service.icon)}
                    <span>${service.title}</span>
                </a>
            `;
        }).join('');

        const mobileServicesList = (config.services || []).map((service) => {
            return `
                <a class="mobile-menu__service" href="${service.slug}">
                    ${renderIcon(service.icon)}
                    <span>${service.title}</span>
                </a>
            `;
        }).join('');

        const navLinks = (config.nav || []).map((item) => {
            const active = item.url === currentPage || (item.url === 'services.html' && isServicePage);
            const hasDropdown = item.label.toLowerCase() === 'services';

            if (hasDropdown) {
                return `
                    <div class="site-nav__item site-nav__item--dropdown" data-services-dropdown>
                        <a class="site-nav__link ${active ? 'is-active' : ''}" href="${item.url}" aria-haspopup="true">
                            <span>${item.label}</span>
                            ${renderIcon('chevron')}
                        </a>
                        <div class="site-dropdown" aria-label="Service pages">
                            ${servicesList}
                        </div>
                    </div>
                `;
            }

            return `
                <a class="site-nav__link ${active ? 'is-active' : ''}" href="${item.url}">
                    ${item.label}
                </a>
            `;
        }).join('');

        return `
            <a class="skip-link" href="#main">Skip to content</a>

            <header class="site-header" data-header>
                <div class="site-header__shell">
                    <a class="site-brand" href="index.html" aria-label="${config.company.name} home">
                        ${renderLogo()}
                        <span class="site-brand__text">
                            <span>WILD</span><strong>GUARD</strong>
                        </span>
                    </a>

                    <nav class="site-nav" aria-label="Primary navigation">
                        ${navLinks}
                    </nav>

                    <div class="site-header__actions">
                        <a class="icon-button icon-button--phone" href="tel:${config.company.phoneRaw}" data-phone-link aria-label="Call WILDGUARD">
                            ${renderIcon('phone')}
                        </a>

                        <a class="icon-button" href="contact.html#contact-form" aria-label="Open contact form">
                            ${renderIcon('mail')}
                        </a>

                        <button class="mobile-toggle" type="button" data-mobile-open aria-label="Open menu" aria-controls="mobile-menu" aria-expanded="false">
                            ${renderIcon('menu')}
                        </button>
                    </div>
                </div>
            </header>

            <div class="mobile-menu" id="mobile-menu" data-mobile-menu aria-hidden="true">
                <button class="mobile-menu__overlay" type="button" data-mobile-overlay aria-label="Close menu"></button>

                <div class="mobile-menu__panel" role="dialog" aria-modal="true" aria-label="Mobile navigation">
                    <div class="mobile-menu__top">
                        <a class="site-brand site-brand--mobile" href="index.html" aria-label="${config.company.name} home">
                            ${renderLogo()}
                            <span class="site-brand__text">
                                <span>WILD</span><strong>GUARD</strong>
                            </span>
                        </a>

                        <button class="mobile-menu__close" type="button" data-mobile-close aria-label="Close menu">
                            ${renderIcon('close')}
                        </button>
                    </div>

                    <div class="mobile-menu__content">
                        <div class="mobile-menu__group">
                            <p class="mobile-menu__label">Navigation</p>
                            <a href="index.html">Home</a>
                            <a href="services.html">Services</a>
                            <a href="about.html">About</a>
                            <a href="contact.html">Contact</a>
                        </div>

                        <div class="mobile-menu__group">
                            <p class="mobile-menu__label">Wildlife services</p>
                            <div class="mobile-menu__services">
                                ${mobileServicesList}
                            </div>
                        </div>

                        <div class="mobile-menu__contact">
                            <a class="button button--primary" href="contact.html#contact-form">
                                <span>Compare Providers</span>
                                ${renderIcon('arrow')}
                            </a>

                            <div class="mobile-menu__contact-row">
                                <a href="tel:${config.company.phoneRaw}" data-phone-link>
                                    ${renderIcon('phone')}
                                    <span data-phone-display>${config.company.phoneDisplay}</span>
                                </a>

                                <a href="mailto:${config.company.email}" data-email-link>
                                    ${renderIcon('mail')}
                                    <span data-email>${config.company.email}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    function createFooter() {
        const servicesLinks = (config.services || []).map((service) => {
            return `<li><a href="${service.slug}">${service.title}</a></li>`;
        }).join('');

        const navigationLinks = (config.footerLinks.navigation || []).map((link) => {
            return `<li><a href="${link.url}">${link.label}</a></li>`;
        }).join('');

        const legalLinks = (config.footerLinks.legal || []).map((link) => {
            return `<li><a href="${link.url}">${link.label}</a></li>`;
        }).join('');

        return `
            <footer class="site-footer">
                <div class="container">
                    <div class="site-footer__grid">
                        <div class="site-footer__brand">
                            <a class="site-brand site-brand--footer-small" href="index.html" aria-label="${config.company.name} home">
                                ${renderLogo()}
                                <span class="site-brand__text">
                                    <span>WILD</span><strong>GUARD</strong>
                                </span>
                            </a>

                            <p>${config.company.footerText}</p>

                            <ul class="footer-contact">
                                <li>
                                    ${renderIcon('shield')}
                                    <span>ID: <span data-company-id>${config.company.companyId}</span></span>
                                </li>
                                <li>
                                    ${renderIcon('home')}
                                    <span data-address>${config.company.address}</span>
                                </li>
                            </ul>
                        </div>

                        <div class="site-footer__column">
                            <h3>Navigation</h3>
                            <ul>
                                ${navigationLinks}
                            </ul>
                        </div>

                        <div class="site-footer__column">
                            <h3>Services</h3>
                            <ul>
                                ${servicesLinks}
                            </ul>
                        </div>

                        <div class="site-footer__column">
                            <h3>Legal</h3>
                            <ul>
                                ${legalLinks}
                            </ul>
                        </div>

                        <div class="site-footer__column site-footer__column--contact">
                            <h3>Contact</h3>
                            <ul>
                                <li>
                                    <a href="tel:${config.company.phoneRaw}" data-phone-link>
                                        ${renderIcon('phone')}
                                        <span data-phone-display>${config.company.phoneDisplay}</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:${config.company.email}" data-email-link>
                                        ${renderIcon('mail')}
                                        <span data-email>${config.company.email}</span>
                                    </a>
                                </li>
                                <li>
                                    ${renderIcon('paw')}
                                    <span>Service area: <span data-service-area>${config.company.serviceArea}</span></span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="site-footer__disclaimer">
                        <p data-disclaimer>${config.legal.disclaimer}</p>
                    </div>

                    <div class="site-footer__bottom">
                        <p>© <span data-current-year>${new Date().getFullYear()}</span> <span data-company-name>${config.company.name}</span>. All rights reserved.</p>
                        <div class="site-footer__bottom-links">
                            <a href="privacy-policy.html">Privacy Policy</a>
                            <a href="cookie-policy.html">Cookie Policy</a>
                            <a href="terms-of-service.html">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }

    function injectHeaderFooter() {
        const headerMount = qs(selectors.headerMount);
        const footerMount = qs(selectors.footerMount);

        if (headerMount) {
            headerMount.innerHTML = createHeader();
        }

        if (footerMount) {
            footerMount.innerHTML = createFooter();
        }
    }

    function initHeaderState() {
        const header = qs('[data-header]');

        if (!header) {
            return;
        }

        const updateHeader = () => {
            header.classList.toggle('is-scrolled', window.scrollY > 8);
        };

        updateHeader();
        window.addEventListener('scroll', updateHeader, { passive: true });
    }

    function initMobileMenu() {
        const menu = qs(selectors.mobileMenu);
        const openButton = qs(selectors.mobileOpen);
        const closeButton = qs(selectors.mobileClose);
        const overlay = qs(selectors.mobileOverlay);

        if (!menu || !openButton) {
            return;
        }

        const focusableSelector = 'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])';
        let lastFocusedElement = null;

        const openMenu = () => {
            lastFocusedElement = document.activeElement;
            menu.classList.add('is-open');
            menu.setAttribute('aria-hidden', 'false');
            openButton.setAttribute('aria-expanded', 'true');
            document.body.classList.add('menu-open');

            const firstFocusable = qs(focusableSelector, menu);
            if (firstFocusable) {
                firstFocusable.focus();
            }
        };

        const closeMenu = () => {
            menu.classList.remove('is-open');
            menu.setAttribute('aria-hidden', 'true');
            openButton.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('menu-open');

            if (lastFocusedElement) {
                lastFocusedElement.focus();
            }
        };

        openButton.addEventListener('click', openMenu);

        if (closeButton) {
            closeButton.addEventListener('click', closeMenu);
        }

        if (overlay) {
            overlay.addEventListener('click', closeMenu);
        }

        qsa('a', menu).forEach((link) => {
            link.addEventListener('click', closeMenu);
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && menu.classList.contains('is-open')) {
                closeMenu();
            }
        });

        menu.addEventListener('keydown', (event) => {
            if (event.key !== 'Tab' || !menu.classList.contains('is-open')) {
                return;
            }

            const focusable = qsa(focusableSelector, menu).filter((element) => !element.disabled);

            if (!focusable.length) {
                return;
            }

            const first = focusable[0];
            const last = focusable[focusable.length - 1];

            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        });
    }

    function initServicesDropdown() {
        qsa('[data-services-dropdown]').forEach((dropdown) => {
            const trigger = qs('.site-nav__link', dropdown);

            dropdown.addEventListener('mouseenter', () => {
                dropdown.classList.add('is-open');
            });

            dropdown.addEventListener('mouseleave', () => {
                dropdown.classList.remove('is-open');
            });

            dropdown.addEventListener('focusin', () => {
                dropdown.classList.add('is-open');
            });

            dropdown.addEventListener('focusout', (event) => {
                if (!dropdown.contains(event.relatedTarget)) {
                    dropdown.classList.remove('is-open');
                }
            });

            if (trigger) {
                trigger.addEventListener('keydown', (event) => {
                    if (event.key === 'ArrowDown') {
                        event.preventDefault();
                        dropdown.classList.add('is-open');

                        const firstLink = qs('.site-dropdown__link', dropdown);
                        if (firstLink) {
                            firstLink.focus();
                        }
                    }
                });
            }
        });
    }

    function initAccordions() {
        qsa(selectors.accordion).forEach((accordion) => {
            const items = qsa('[data-accordion-item]', accordion);

            items.forEach((item, index) => {
                const trigger = qs('[data-accordion-trigger]', item);
                const panel = qs('[data-accordion-panel]', item);

                if (!trigger || !panel) {
                    return;
                }

                const panelId = panel.id || `accordion-panel-${Date.now()}-${index}`;
                panel.id = panelId;
                trigger.setAttribute('aria-controls', panelId);
                trigger.setAttribute('aria-expanded', item.classList.contains('is-open') ? 'true' : 'false');

                if (!item.classList.contains('is-open')) {
                    panel.hidden = true;
                }

                trigger.addEventListener('click', () => {
                    const isOpen = item.classList.contains('is-open');

                    if (accordion.hasAttribute('data-accordion-single')) {
                        items.forEach((otherItem) => {
                            if (otherItem === item) {
                                return;
                            }

                            const otherTrigger = qs('[data-accordion-trigger]', otherItem);
                            const otherPanel = qs('[data-accordion-panel]', otherItem);

                            otherItem.classList.remove('is-open');

                            if (otherTrigger) {
                                otherTrigger.setAttribute('aria-expanded', 'false');
                            }

                            if (otherPanel) {
                                otherPanel.hidden = true;
                            }
                        });
                    }

                    item.classList.toggle('is-open', !isOpen);
                    trigger.setAttribute('aria-expanded', String(!isOpen));
                    panel.hidden = isOpen;
                });
            });
        });
    }

    function createCookieBanner() {
        if (localStorage.getItem('wildguardCookieChoice')) {
            return '';
        }

        return `
            <div class="cookie-banner" data-cookie-banner role="dialog" aria-live="polite" aria-label="Cookie notice">
                <div class="cookie-banner__content">
                    <strong>Privacy preferences</strong>
                    <p>
                        WILDGUARD uses basic cookies and storage to improve site experience.
                        Review our
                        <a href="privacy-policy.html">Privacy Policy</a>,
                        <a href="cookie-policy.html">Cookie Policy</a>, and
                        <a href="terms-of-service.html">Terms of Service</a>.
                    </p>
                </div>

                <div class="cookie-banner__actions">
                    <button class="button button--secondary button--small" type="button" data-cookie-decline>Decline</button>
                    <button class="button button--primary button--small" type="button" data-cookie-accept>Accept</button>
                </div>
            </div>
        `;
    }

    function initCookieBanner() {
        if (!localStorage.getItem('wildguardCookieChoice')) {
            document.body.insertAdjacentHTML('beforeend', createCookieBanner());
        }

        const banner = qs(selectors.cookieBanner);

        if (!banner) {
            return;
        }

        const closeBanner = (choice) => {
            localStorage.setItem('wildguardCookieChoice', choice);
            banner.classList.add('is-hiding');

            window.setTimeout(() => {
                banner.remove();
            }, 220);
        };

        const accept = qs('[data-cookie-accept]', banner);
        const decline = qs('[data-cookie-decline]', banner);

        if (accept) {
            accept.addEventListener('click', () => closeBanner('accepted'));
        }

        if (decline) {
            decline.addEventListener('click', () => closeBanner('declined'));
        }
    }

    function initSmoothAnchors() {
        qsa('a[href^="#"]').forEach((link) => {
            link.addEventListener('click', (event) => {
                const targetId = link.getAttribute('href');

                if (!targetId || targetId === '#') {
                    return;
                }

                const target = qs(targetId);

                if (!target) {
                    return;
                }

                event.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        });
    }

    function initExternalLinkSafety() {
        qsa('a[target="_blank"]').forEach((link) => {
            if (!link.getAttribute('rel')) {
                link.setAttribute('rel', 'noopener noreferrer');
            }
        });
    }

    function initFormFeedback() {
        qsa('[data-demo-form]').forEach((form) => {
            form.addEventListener('submit', (event) => {
                event.preventDefault();

                const message = qs('[data-form-message]', form.parentElement || document);

                if (message) {
                    message.textContent = 'Thank you. Your request details have been captured for provider comparison follow-up.';
                    message.classList.add('is-visible');
                }

                form.reset();
            });
        });
    }

    function createFaqSchema(faqItems) {
        if (!Array.isArray(faqItems) || !faqItems.length) {
            return;
        }

        const schema = {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map((item) => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: item.answer
                }
            }))
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
    }

    function renderFaqItems(items) {
        if (!Array.isArray(items)) {
            return '';
        }

        return items.map((item, index) => {
            return `
                <div class="faq-item" data-accordion-item>
                    <button class="faq-item__button" type="button" data-accordion-trigger>
                        <span>${item.question}</span>
                        <span class="faq-item__icon">
                            ${renderIcon('plus')}
                            ${renderIcon('minus')}
                        </span>
                    </button>
                    <div class="faq-item__panel" data-accordion-panel ${index === 0 ? '' : 'hidden'}>
                        <p>${item.answer}</p>
                    </div>
                </div>
            `;
        }).join('');
    }

    function renderServiceMiniLink(serviceId) {
        const service = getServiceById(serviceId);

        if (!service) {
            return '';
        }

        return `
            <a class="mini-service-link shine-card" href="${service.slug}">
                ${renderIcon(service.icon)}
                <span>
                    <strong>${service.title}</strong>
                    <small>${serviceDescriptions[service.id] || service.excerpt}</small>
                </span>
                ${renderIcon('arrow')}
            </a>
        `;
    }

    function initPawDecorations() {
        qsa('[data-paw-field]').forEach((field) => {
            if (field.hasAttribute('data-paw-ready')) {
                return;
            }

            field.setAttribute('data-paw-ready', 'true');

            for (let i = 0; i < 5; i += 1) {
                const paw = document.createElement('span');
                paw.className = `paw-print paw-print--${i + 1}`;
                paw.innerHTML = getIcon('paw');
                field.appendChild(paw);
            }
        });
    }

    function boot() {
        injectHeaderFooter();
        initConfigBindings();
        initHeaderState();
        initMobileMenu();
        initServicesDropdown();
        initAccordions();
        initCookieBanner();
        initSmoothAnchors();
        initExternalLinkSafety();
        initFormFeedback();
        initPawDecorations();

        window.WildGuard = {
            config,
            getIcon,
            renderIcon,
            getServiceById,
            getServiceBySlug,
            renderFaqItems,
            renderServiceMiniLink,
            createFaqSchema
        };
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot);
    } else {
        boot();
    }
})();
