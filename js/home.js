'use strict';

(function () {
    const homeFaqItems = [
        {
            question: 'How do I compare local wildlife removal providers?',
            answer: 'Start by identifying the animal activity, then compare providers by service category, inspection availability, exclusion options, quote details, and customer feedback.'
        },
        {
            question: 'What should I ask before choosing a wildlife removal company?',
            answer: 'Ask about inspection steps, humane handling methods, exclusion recommendations, service area, pricing structure, licensing, insurance, and follow-up options.'
        },
        {
            question: 'What is wildlife exclusion?',
            answer: 'Wildlife exclusion usually refers to reviewing and sealing possible entry points so animals are less likely to re-enter a home after the issue is addressed.'
        },
        {
            question: 'Can animals return after removal?',
            answer: 'They may return if entry points remain open. That is why many homeowners ask providers about prevention, exclusion, and property protection steps.'
        },
        {
            question: 'Do providers help with attic damage?',
            answer: 'Some providers may offer repair-related or cleanup-related options. Homeowners should compare each provider’s listed services and verify details directly.'
        },
        {
            question: 'Are quotes from providers usually free?',
            answer: 'Quote and inspection policies can vary by provider and location. Review provider details and ask directly before scheduling.'
        }
    ];

    function initHomeFaqSchema() {
        if (!window.WildGuard || typeof window.WildGuard.createFaqSchema !== 'function') {
            return;
        }

        window.WildGuard.createFaqSchema(homeFaqItems);
    }

    function initHomeHeroImageFallback() {
        const hero = document.querySelector('.home-hero');

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

        image.src = 'assets/images/home-hero.jpg';
    }

    function initHomeServiceImageFallbacks() {
        const images = document.querySelectorAll('.home-service-row__photo img, .circle-photo img');

        images.forEach((image) => {
            image.addEventListener('error', function () {
                const parent = image.closest('.photo-card, .circle-photo');

                if (parent) {
                    parent.classList.add('is-image-missing');
                }
            });
        });
    }

    function initHomeProblemHoverDescriptions() {
        const items = document.querySelectorAll('.home-problem');

        items.forEach((item) => {
            item.addEventListener('focus', function () {
                item.classList.add('is-focused');
            });

            item.addEventListener('blur', function () {
                item.classList.remove('is-focused');
            });
        });
    }

    function bootHome() {
        initHomeFaqSchema();
        initHomeHeroImageFallback();
        initHomeServiceImageFallbacks();
        initHomeProblemHoverDescriptions();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bootHome);
    } else {
        bootHome();
    }
})();