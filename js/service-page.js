'use strict';

(function () {
    const serviceFaqs = {
        raccoon: [
            {
                question: 'What signs may point to raccoon activity?',
                answer: 'Common signs include heavy attic noises, roofline movement, trash disturbance, droppings, odors, damaged soffits, or visible entry gaps.'
            },
            {
                question: 'Should I ask providers about attic inspection?',
                answer: 'Yes. Ask whether the provider can review attic areas, rooflines, soffits, vents, and possible access points before discussing service options.'
            },
            {
                question: 'Why compare exclusion options?',
                answer: 'Raccoons may use openings around rooflines or soffits. Exclusion questions help homeowners compare how providers address future access concerns.'
            },
            {
                question: 'Does WILDGUARD remove raccoons directly?',
                answer: 'No. WILDGUARD is an independent comparison platform that helps homeowners explore provider options. Providers are independent companies.'
            }
        ],

        squirrel: [
            {
                question: 'What signs may point to squirrel activity?',
                answer: 'Common signs include scratching sounds, chewing noises, attic movement, visible roofline activity, small gaps, or disturbed attic materials.'
            },
            {
                question: 'Why should I ask about chewed materials?',
                answer: 'Chewing can indicate access paths or vulnerable areas. Ask providers whether they review exterior materials, vents, trim, rooflines, and possible entry gaps.'
            },
            {
                question: 'Should squirrel service include exclusion questions?',
                answer: 'Many squirrel concerns involve small openings. Exclusion questions can help homeowners compare whether providers address possible future access points.'
            },
            {
                question: 'Does WILDGUARD remove squirrels directly?',
                answer: 'No. WILDGUARD is an independent comparison platform that helps homeowners explore provider options. Providers are independent companies.'
            }
        ],

        bat: [
            {
                question: 'What signs may point to bat activity?',
                answer: 'Common signs include evening flight activity, droppings near openings, attic or soffit movement, fluttering sounds, or activity around vents and chimneys.'
            },
            {
                question: 'Why is exclusion timing important for bats?',
                answer: 'Bat exclusion can involve timing considerations. Ask providers how they evaluate timing, local requirements, entry points, and prevention steps.'
            },
            {
                question: 'Should I ask about droppings?',
                answer: 'Yes. Droppings can help providers understand the area of concern. Ask whether inspection, cleanup-related, or safety-related questions are part of their process.'
            },
            {
                question: 'Does WILDGUARD remove bats directly?',
                answer: 'No. WILDGUARD is an independent comparison platform that helps homeowners explore provider options. Providers are independent companies.'
            }
        ],

        bird: [
            {
                question: 'What signs may point to bird activity around a home?',
                answer: 'Common signs include visible nesting, droppings, blocked vents, repeated activity around rooflines, ledges, gutters, or exterior openings.'
            },
            {
                question: 'Should I ask providers about vents?',
                answer: 'Yes. Vents are common areas to review. Ask whether providers evaluate attic vents, dryer vents, bathroom vents, soffits, and other exterior openings.'
            },
            {
                question: 'Can bird activity return after nesting is removed?',
                answer: 'It can return if the area remains attractive or accessible. Ask providers about prevention, deterrent, exclusion, or repeat nesting questions.'
            },
            {
                question: 'Does WILDGUARD remove birds directly?',
                answer: 'No. WILDGUARD is an independent comparison platform that helps homeowners explore provider options. Providers are independent companies.'
            }
        ],

        'opossum-skunk': [
            {
                question: 'What signs may point to opossum or skunk activity?',
                answer: 'Common signs include odors, movement near decks or sheds, crawl space activity, droppings, tracks, or repeated activity around yard structures.'
            },
            {
                question: 'Should I ask providers about crawl spaces?',
                answer: 'Yes. Crawl spaces and ground-level gaps are important areas to discuss when comparing providers for opossum or skunk-related activity.'
            },
            {
                question: 'Can prevention help with repeat activity?',
                answer: 'Prevention questions can help homeowners compare whether providers address openings, attractants, barriers, or access paths around the property.'
            },
            {
                question: 'Does WILDGUARD remove opossums or skunks directly?',
                answer: 'No. WILDGUARD is an independent comparison platform that helps homeowners explore provider options. Providers are independent companies.'
            }
        ],

        exclusion: [
            {
                question: 'What is wildlife exclusion?',
                answer: 'Wildlife exclusion generally refers to reviewing and closing possible access points so animals are less likely to re-enter a home or structure.'
            },
            {
                question: 'Which areas should I ask providers to review?',
                answer: 'Ask about vents, soffits, chimneys, rooflines, fascia, crawl spaces, foundation gaps, garage areas, deck openings, and any visible damage.'
            },
            {
                question: 'Can exclusion include repair-related services?',
                answer: 'Some providers may list repair-related services connected to damaged vents, soffits, screens, gaps, or other vulnerable areas. Verify details directly with each provider.'
            },
            {
                question: 'Does WILDGUARD perform exclusion or repairs directly?',
                answer: 'No. WILDGUARD is an independent comparison platform that helps homeowners explore provider options. Providers are independent companies.'
            }
        ]
    };

    const serviceHeroImages = {
        raccoon: 'assets/images/raccoon-hero.jpg',
        squirrel: 'assets/images/squirrel-hero.jpg',
        bat: 'assets/images/bat-hero.jpg',
        bird: 'assets/images/bird-hero.jpg',
        'opossum-skunk': 'assets/images/opossum-skunk-hero.jpg',
        exclusion: 'assets/images/exclusion-hero.jpg'
    };

    function getCurrentServiceId() {
        const bodyService = document.body.getAttribute('data-service-page');

        if (bodyService) {
            return bodyService;
        }

        if (document.body.classList.contains('page-raccoon')) {
            return 'raccoon';
        }

        if (document.body.classList.contains('page-squirrel')) {
            return 'squirrel';
        }

        if (document.body.classList.contains('page-bat')) {
            return 'bat';
        }

        if (document.body.classList.contains('page-bird')) {
            return 'bird';
        }

        if (document.body.classList.contains('page-opossum-skunk')) {
            return 'opossum-skunk';
        }

        if (document.body.classList.contains('page-exclusion')) {
            return 'exclusion';
        }

        return '';
    }

    function initServiceFaqSchema() {
        const serviceId = getCurrentServiceId();
        const faqItems = serviceFaqs[serviceId];

        if (!faqItems || !window.WildGuard || typeof window.WildGuard.createFaqSchema !== 'function') {
            return;
        }

        window.WildGuard.createFaqSchema(faqItems);
    }

    function initServiceHeroImageFallback() {
        const serviceId = getCurrentServiceId();
        const hero = document.querySelector('.service-hero');
        const imagePath = serviceHeroImages[serviceId];

        if (!hero || !imagePath) {
            return;
        }

        const image = new Image();

        image.onload = function () {
            hero.classList.add('has-hero-image');
        };

        image.onerror = function () {
            hero.classList.add('has-hero-fallback');
        };

        image.src = imagePath;
    }

    function initServiceImageFallbacks() {
        const images = document.querySelectorAll(
            '.service-intro__photo img, .service-prevention__photo img, .circle-photo img, .photo-card img'
        );

        images.forEach((image) => {
            image.addEventListener('error', function () {
                const parent = image.closest('.circle-photo, .photo-card, .service-prevention__photo');

                if (parent) {
                    parent.classList.add('is-image-missing');
                }
            });
        });
    }

    function initServiceFocusStates() {
        const focusItems = document.querySelectorAll(
            '.service-sign, .service-step, .service-related-card, .service-keypoint, .service-prevention__photo'
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

    function initRelatedServiceLabels() {
        const cards = document.querySelectorAll('.service-related-card');

        cards.forEach((card) => {
            const title = card.querySelector('strong');

            if (!title || card.getAttribute('aria-label')) {
                return;
            }

            card.setAttribute('aria-label', `View ${title.textContent.trim()}`);
        });
    }

    function initServicePageImagePreload() {
        const serviceId = getCurrentServiceId();
        const imagePath = serviceHeroImages[serviceId];

        if (!imagePath) {
            return;
        }

        const preload = document.createElement('link');
        preload.rel = 'preload';
        preload.as = 'image';
        preload.href = imagePath;

        document.head.appendChild(preload);
    }

    function initServiceFaqColumns() {
        const faqGrids = document.querySelectorAll('.service-faq .faq-grid[data-accordion]');

        faqGrids.forEach((grid) => {
            if (grid.classList.contains('faq-grid--columns') || grid.querySelector('.faq-column')) {
                return;
            }

            const items = Array.from(grid.children).filter((child) => {
                return child.hasAttribute('data-accordion-item');
            });

            if (!items.length) {
                return;
            }

            const leftColumn = document.createElement('div');
            const rightColumn = document.createElement('div');

            leftColumn.className = 'faq-column';
            rightColumn.className = 'faq-column';

            items.forEach((item, index) => {
                if (index % 2 === 0) {
                    leftColumn.appendChild(item);
                } else {
                    rightColumn.appendChild(item);
                }
            });

            grid.classList.add('faq-grid--columns');
            grid.append(leftColumn, rightColumn);
        });
    }

    function bootServicePage() {
        initServicePageImagePreload();
        initServiceFaqColumns();
        initServiceFaqSchema();
        initServiceHeroImageFallback();
        initServiceImageFallbacks();
        initServiceFocusStates();
        initRelatedServiceLabels();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bootServicePage);
    } else {
        bootServicePage();
    }
})();