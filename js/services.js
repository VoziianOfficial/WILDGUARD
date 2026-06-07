'use strict';

(function () {
    const servicesFaqItems = [
        {
            question: 'How do I know which service category to compare?',
            answer: 'Start with the signs you notice, such as noises, droppings, odors, nesting, roofline gaps, or visible animal activity. Then review the matching category.'
        },
        {
            question: 'Can I compare exclusion options separately?',
            answer: 'Yes. Exclusion and repair-related services can be compared as their own category, especially when entry points, vents, soffits, or chimneys need review.'
        },
        {
            question: 'Do all providers handle every animal?',
            answer: 'Provider coverage can vary by location, animal type, licensing, and service model. Homeowners should verify service details directly with any provider they consider.'
        },
        {
            question: 'What affects wildlife removal pricing?',
            answer: 'Pricing may depend on the animal type, inspection needs, access points, exclusion work, cleanup-related tasks, and provider availability.'
        },
        {
            question: 'Should I ask about prevention after removal?',
            answer: 'Yes. Many wildlife issues involve entry points. Asking about exclusion, sealing, and prevention options can help reduce future access concerns.'
        }
    ];

    function initServicesFaqSchema() {
        if (!window.WildGuard || typeof window.WildGuard.createFaqSchema !== 'function') {
            return;
        }

        window.WildGuard.createFaqSchema(servicesFaqItems);
    }

    function initServicesHeroImageFallback() {
        const hero = document.querySelector('.services-hero');

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

        image.src = 'assets/images/services-hero.jpg';
    }

    function initServiceBlockImageFallbacks() {
        const images = document.querySelectorAll('.service-block__photo img, .humane-prevention__photo img');

        images.forEach((image) => {
            image.addEventListener('error', function () {
                const parent = image.closest('.photo-card, .circle-photo');

                if (parent) {
                    parent.classList.add('is-image-missing');
                }
            });
        });
    }

    function initServiceBlockFocus() {
        const blocks = document.querySelectorAll('.service-block');

        blocks.forEach((block) => {
            const link = block.querySelector('a');

            if (!link) {
                return;
            }

            link.addEventListener('focus', function () {
                block.classList.add('is-focused');
            });

            link.addEventListener('blur', function () {
                block.classList.remove('is-focused');
            });
        });
    }

    function initIssuePillFocus() {
        const pills = document.querySelectorAll('.issue-pill, .protect-area, .entry-point');

        pills.forEach((pill) => {
            pill.addEventListener('focus', function () {
                pill.classList.add('is-focused');
            });

            pill.addEventListener('blur', function () {
                pill.classList.remove('is-focused');
            });
        });
    }

    function bootServicesPage() {
        initServicesFaqSchema();
        initServicesHeroImageFallback();
        initServiceBlockImageFallbacks();
        initServiceBlockFocus();
        initIssuePillFocus();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bootServicesPage);
    } else {
        bootServicesPage();
    }
})();