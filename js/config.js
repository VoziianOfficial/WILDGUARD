'use strict';

window.SITE_CONFIG = {
    company: {
        name: 'WILDGUARD',
        companyId: 'WGD-WR-4827',
        phoneRaw: '+18885550192',
        phoneDisplay: '(888) 555-0192',
        phoneButtonLabel: 'Call Now',
        email: 'hello@wildguardcompare.com',
        address: '1846 Cedar Ridge Parkway, Denver, CO 80202, USA',
        serviceArea: 'United States',
        footerText: 'Independent wildlife removal comparison platform for homeowners across the United States.'
    },

    legal: {
        disclaimer: 'Disclaimer: This site is a free service to assist homeowners in connecting with local service providers. All contractors/providers are independent and this site does not warrant or guarantee any work performed. It is the responsibility of the homeowner to verify that the hired contractor furnishes the necessary license and insurance required for the work being performed. All persons depicted in a photo or video are actors or models and not contractors listed on this site.'
    },

    cta: {
        primary: 'Compare Providers',
        secondary: 'View Services',
        phone: 'Call Now',
        email: 'Send Request',
        start: 'Start Comparing',
        request: 'Send Request',
        viewServices: 'View Services',
        learnMore: 'Learn More',
        exploreOptions: 'Explore Options'
    },

    pages: {
        home: 'index.html',
        services: 'services.html',
        about: 'about.html',
        contact: 'contact.html',
        privacy: 'privacy-policy.html',
        cookies: 'cookie-policy.html',
        terms: 'terms-of-service.html'
    },

    images: {
        homeHero: 'assets/images/home-hero.jpg',
        servicesHero: 'assets/images/services-hero.jpg',
        aboutHero: 'assets/images/about-hero.jpg',
        contactHero: 'assets/images/contact-hero.jpg',

        raccoonHero: 'assets/images/raccoon-hero.jpg',
        squirrelHero: 'assets/images/squirrel-hero.jpg',
        batHero: 'assets/images/bat-hero.jpg',
        birdHero: 'assets/images/bird-hero.jpg',
        opossumSkunkHero: 'assets/images/opossum-skunk-hero.jpg',
        exclusionHero: 'assets/images/exclusion-hero.jpg',

        raccoonService: 'assets/images/raccoon-service.jpg',
        squirrelService: 'assets/images/squirrel-service.jpg',
        batService: 'assets/images/bat-service.jpg',
        birdService: 'assets/images/bird-service.jpg',
        opossumSkunkService: 'assets/images/opossum-skunk-service.jpg',
        exclusionService: 'assets/images/exclusion-service.jpg',

        atticEntry: 'assets/images/attic-entry.jpg',
        rooflineProtection: 'assets/images/roofline-protection.jpg',
        humaneRemoval: 'assets/images/humane-removal.jpg',
        wildlifeSigns: 'assets/images/wildlife-signs.jpg',
        ctaWildlife: 'assets/images/cta-wildlife.jpg'
    },

    nav: [
        {
            label: 'Home',
            url: 'index.html'
        },
        {
            label: 'Services',
            url: 'services.html'
        },
        {
            label: 'About',
            url: 'about.html'
        },
        {
            label: 'Contact',
            url: 'contact.html'
        }
    ],

    services: [
        {
            id: 'raccoon',
            title: 'Raccoon Removal',
            shortTitle: 'Raccoons',
            slug: 'raccoon-removal.html',
            image: 'assets/images/raccoon-service.jpg',
            heroImage: 'assets/images/raccoon-hero.jpg',
            icon: 'raccoon',
            excerpt: 'Compare local providers who handle raccoon activity, attic concerns, roofline entry points, and exclusion needs.',
            bullets: [
                'Attic and roofline activity',
                'Entry point review',
                'Exclusion-focused options'
            ]
        },
        {
            id: 'squirrel',
            title: 'Squirrel Removal',
            shortTitle: 'Squirrels',
            slug: 'squirrel-removal.html',
            image: 'assets/images/squirrel-service.jpg',
            heroImage: 'assets/images/squirrel-hero.jpg',
            icon: 'squirrel',
            excerpt: 'Explore provider options for squirrel activity, scratching sounds, attic nesting, and chewed entry areas.',
            bullets: [
                'Scratching or chewing sounds',
                'Attic nesting signs',
                'Roofline gap concerns'
            ]
        },
        {
            id: 'bat',
            title: 'Bat Removal',
            shortTitle: 'Bats',
            slug: 'bat-removal.html',
            image: 'assets/images/bat-service.jpg',
            heroImage: 'assets/images/bat-hero.jpg',
            icon: 'bat',
            excerpt: 'Compare providers experienced with bat activity, attic or soffit concerns, droppings, and exclusion timing questions.',
            bullets: [
                'Attic or soffit activity',
                'Dropping concerns',
                'Exclusion timing questions'
            ]
        },
        {
            id: 'bird',
            title: 'Bird Removal',
            shortTitle: 'Birds',
            slug: 'bird-removal.html',
            image: 'assets/images/bird-service.jpg',
            heroImage: 'assets/images/bird-hero.jpg',
            icon: 'bird',
            excerpt: 'Review local provider options for bird nesting, vent issues, roofline activity, ledges, and prevention categories.',
            bullets: [
                'Vent and ledge nesting',
                'Roofline activity',
                'Prevention options'
            ]
        },
        {
            id: 'opossum-skunk',
            title: 'Opossum & Skunk Removal',
            shortTitle: 'Opossum & Skunk',
            slug: 'opossum-skunk-removal.html',
            image: 'assets/images/opossum-skunk-service.jpg',
            heroImage: 'assets/images/opossum-skunk-hero.jpg',
            icon: 'paw',
            excerpt: 'Find provider options for crawl spaces, under-deck activity, yard structures, odors, and practical safety-aware support.',
            bullets: [
                'Crawl space concerns',
                'Under-deck activity',
                'Odor-related issues'
            ]
        },
        {
            id: 'exclusion',
            title: 'Wildlife Exclusion & Damage Repair',
            shortTitle: 'Exclusion',
            slug: 'wildlife-exclusion-damage-repair.html',
            image: 'assets/images/exclusion-service.jpg',
            heroImage: 'assets/images/exclusion-hero.jpg',
            icon: 'shield-home',
            excerpt: 'Compare providers who offer exclusion and repair-related services for vents, soffits, chimneys, gaps, and entry points.',
            bullets: [
                'Entry point sealing',
                'Vent and soffit review',
                'Repair-related provider options'
            ]
        }
    ],

    homeServices: [
        'raccoon',
        'squirrel',
        'bat',
        'exclusion'
    ],

    wildlifeProblems: [
        {
            title: 'Raccoons',
            icon: 'raccoon',
            text: 'Roofline activity, attic noises, trash disturbance, and entry concerns.'
        },
        {
            title: 'Squirrels',
            icon: 'squirrel',
            text: 'Scratching sounds, chewed materials, and attic nesting signs.'
        },
        {
            title: 'Bats',
            icon: 'bat',
            text: 'Soffit activity, droppings, and timing-sensitive exclusion questions.'
        },
        {
            title: 'Birds',
            icon: 'bird',
            text: 'Nesting around vents, ledges, rooflines, and exterior openings.'
        },
        {
            title: 'Exclusion',
            icon: 'shield-home',
            text: 'Entry point review, prevention, and repair-related service options.'
        }
    ],

    activitySigns: [
        {
            title: 'Noises in the attic',
            icon: 'volume'
        },
        {
            title: 'Droppings or odors',
            icon: 'droppings'
        },
        {
            title: 'Scratching in walls',
            icon: 'scratch'
        },
        {
            title: 'Damaged vents or soffits',
            icon: 'vent'
        },
        {
            title: 'Nesting around rooflines',
            icon: 'nest'
        },
        {
            title: 'Entry holes around the home',
            icon: 'hole'
        }
    ],

    footerLinks: {
        navigation: [
            {
                label: 'Home',
                url: 'index.html'
            },
            {
                label: 'Services',
                url: 'services.html'
            },
            {
                label: 'About',
                url: 'about.html'
            },
            {
                label: 'Contact',
                url: 'contact.html'
            }
        ],
        legal: [
            {
                label: 'Privacy Policy',
                url: 'privacy-policy.html'
            },
            {
                label: 'Cookie Policy',
                url: 'cookie-policy.html'
            },
            {
                label: 'Terms of Service',
                url: 'terms-of-service.html'
            }
        ]
    },

    serviceRelations: {
        raccoon: ['squirrel', 'bat', 'exclusion'],
        squirrel: ['raccoon', 'bat', 'exclusion'],
        bat: ['bird', 'exclusion', 'raccoon'],
        bird: ['bat', 'exclusion', 'squirrel'],
        'opossum-skunk': ['raccoon', 'bird', 'exclusion'],
        exclusion: ['raccoon', 'squirrel', 'bat']
    },

    logoSvg: `
        <svg width="260" height="260" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
            <defs>
                <linearGradient id="shieldFill" x1="52" y1="24" x2="208" y2="236" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stop-color="#21362E"/>
                    <stop offset="45%" stop-color="#0E1713"/>
                    <stop offset="100%" stop-color="#050706"/>
                </linearGradient>

                <linearGradient id="greenEdge" x1="58" y1="28" x2="202" y2="226" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stop-color="#7DDB83"/>
                    <stop offset="45%" stop-color="#5FBF6B"/>
                    <stop offset="100%" stop-color="#1F5A49"/>
                </linearGradient>

                <linearGradient id="furLight" x1="75" y1="82" x2="185" y2="185" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stop-color="#F6FAF4"/>
                    <stop offset="55%" stop-color="#CAD4CB"/>
                    <stop offset="100%" stop-color="#89938D"/>
                </linearGradient>

                <linearGradient id="furDark" x1="76" y1="78" x2="184" y2="188" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stop-color="#56615B"/>
                    <stop offset="50%" stop-color="#171F1B"/>
                    <stop offset="100%" stop-color="#050706"/>
                </linearGradient>

                <linearGradient id="maskDark" x1="76" y1="116" x2="184" y2="154" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stop-color="#1A2420"/>
                    <stop offset="50%" stop-color="#030504"/>
                    <stop offset="100%" stop-color="#121A16"/>
                </linearGradient>

                <filter id="softShadow" x="26" y="12" width="208" height="238" filterUnits="userSpaceOnUse">
                    <feDropShadow dx="0" dy="0" stdDeviation="5" flood-color="#5FBF6B" flood-opacity="0.22"/>
                    <feDropShadow dx="0" dy="14" stdDeviation="18" flood-color="#000000" flood-opacity="0.45"/>
                </filter>
            </defs>

            <g filter="url(#softShadow)">
                <path d="M130 20L208 52V112C208 169 176 213 130 238C84 213 52 169 52 112V52L130 20Z" fill="url(#shieldFill)" stroke="url(#greenEdge)" stroke-width="5" stroke-linejoin="round"/>
                <path d="M130 37L190 62V112C190 156 166 190 130 211C94 190 70 156 70 112V62L130 37Z" stroke="#2C6B55" stroke-width="3" stroke-linejoin="round" opacity="0.9"/>
                <path d="M73 117C70 82 89 57 116 80L103 131L73 117Z" fill="#0A0F0C" stroke="#DCE5DD" stroke-width="3" stroke-linejoin="round"/>
                <path d="M187 117C190 82 171 57 144 80L157 131L187 117Z" fill="#0A0F0C" stroke="#DCE5DD" stroke-width="3" stroke-linejoin="round"/>
                <path d="M87 107C86 89 96 77 110 87L102 114L87 107Z" fill="#F6FAF4" opacity="0.75"/>
                <path d="M173 107C174 89 164 77 150 87L158 114L173 107Z" fill="#F6FAF4" opacity="0.75"/>
                <path d="M130 76C101 76 78 98 75 127C72 159 96 188 130 188C164 188 188 159 185 127C182 98 159 76 130 76Z" fill="url(#furDark)"/>
                <path d="M93 101C104 87 116 80 130 78C144 80 156 87 167 101C154 93 142 90 130 91C118 90 106 93 93 101Z" fill="#67716B" opacity="0.55"/>
                <path d="M97 90L111 105L116 82L130 105L144 82L149 105L163 90L154 116H106L97 90Z" fill="#2A3530" opacity="0.92"/>
                <path d="M76 139C88 119 102 106 120 101C112 119 101 132 88 144C100 141 111 138 123 137C108 154 92 162 72 164C82 156 89 149 94 143C87 146 79 147 70 145C72 143 74 141 76 139Z" fill="url(#furLight)"/>
                <path d="M184 139C172 119 158 106 140 101C148 119 159 132 172 144C160 141 149 138 137 137C152 154 168 162 188 164C178 156 171 149 166 143C173 146 181 147 190 145C188 143 186 141 184 139Z" fill="url(#furLight)"/>
                <path d="M76 139C90 116 109 112 130 124C151 112 170 116 184 139C169 158 149 158 130 143C111 158 91 158 76 139Z" fill="url(#maskDark)"/>
                <path d="M84 130C96 114 113 112 126 121C111 130 96 135 84 130Z" fill="#F5FAF4"/>
                <path d="M176 130C164 114 147 112 134 121C149 130 164 135 176 130Z" fill="#F5FAF4"/>
                <path d="M96 132C100 126 109 126 114 132C109 138 100 138 96 132Z" fill="#030504"/>
                <path d="M146 132C151 126 160 126 164 132C160 138 151 138 146 132Z" fill="#030504"/>
                <circle cx="106" cy="131" r="2.2" fill="#7DDB83"/>
                <circle cx="154" cy="131" r="2.2" fill="#7DDB83"/>
                <path d="M104 158C110 143 121 137 130 137C139 137 150 143 156 158C153 176 141 184 130 184C119 184 107 176 104 158Z" fill="url(#furLight)"/>
                <path d="M115 154C117 146 123 142 130 142C137 142 143 146 145 154C143 164 137 168 130 168C123 168 117 164 115 154Z" fill="#030504"/>
                <path d="M121 153C124 150 127 149 130 149C133 149 136 150 139 153" stroke="#8C9890" stroke-width="1.8" stroke-linecap="round" opacity="0.45"/>
                <path d="M130 168V176" stroke="#050706" stroke-width="2.4" stroke-linecap="round"/>
                <path d="M119 176C123 180 127 181 130 181C133 181 137 180 141 176" stroke="#050706" stroke-width="2.4" stroke-linecap="round"/>
                <path d="M104 160C89 155 78 154 66 155" stroke="#E3ECE4" stroke-width="1.5" stroke-linecap="round" opacity="0.55"/>
                <path d="M105 167C91 167 80 169 69 173" stroke="#E3ECE4" stroke-width="1.5" stroke-linecap="round" opacity="0.45"/>
                <path d="M156 160C171 155 182 154 194 155" stroke="#E3ECE4" stroke-width="1.5" stroke-linecap="round" opacity="0.55"/>
                <path d="M155 167C169 167 180 169 191 173" stroke="#E3ECE4" stroke-width="1.5" stroke-linecap="round" opacity="0.45"/>
                <path d="M83 176C95 195 112 208 130 218C148 208 165 195 177 176" stroke="#7DDB83" stroke-width="4" stroke-linecap="round" opacity="0.9"/>
                <path d="M130 22L208 52V112C208 169 176 213 130 238V22Z" fill="#FFFFFF" opacity="0.04"/>
            </g>
        </svg>
    `
};