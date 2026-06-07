'use strict';

(function () {
    const contactFaqItems = [
        {
            question: 'Do I need to know which animal it is?',
            answer: 'No. You can describe the signs you are seeing, such as noises, droppings, odors, nesting, or entry holes, and compare relevant categories from there.'
        },
        {
            question: 'Can I request exclusion options?',
            answer: 'Yes. You can choose entry point or exclusion concern in the form and compare providers who list exclusion or repair-related services.'
        },
        {
            question: 'Do providers inspect attic areas?',
            answer: 'Inspection availability depends on the provider. Homeowners should ask whether attic, roofline, vent, soffit, chimney, or crawl space areas can be reviewed.'
        },
        {
            question: 'Can I compare more than one service type?',
            answer: 'Yes. Many wildlife situations involve both animal activity and entry-point concerns, so comparing more than one category can be useful.'
        }
    ];

    function initContactFaqSchema() {
        if (!window.WildGuard || typeof window.WildGuard.createFaqSchema !== 'function') {
            return;
        }

        window.WildGuard.createFaqSchema(contactFaqItems);
    }

    function initContactHeroImageFallback() {
        const hero = document.querySelector('.contact-hero');

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

        image.src = 'assets/images/contact-hero.jpg';
    }

    function initContactImageFallbacks() {
        const images = document.querySelectorAll('.contact-side-card__photo img');

        images.forEach((image) => {
            image.addEventListener('error', function () {
                const parent = image.closest('.photo-card');

                if (parent) {
                    parent.classList.add('is-image-missing');
                }
            });
        });
    }

    function initPhoneFormatting() {
        const phoneInput = document.querySelector('#phone');

        if (!phoneInput) {
            return;
        }

        phoneInput.addEventListener('input', function () {
            const digits = phoneInput.value.replace(/\D/g, '').slice(0, 10);
            const partOne = digits.slice(0, 3);
            const partTwo = digits.slice(3, 6);
            const partThree = digits.slice(6, 10);

            if (digits.length > 6) {
                phoneInput.value = `(${partOne}) ${partTwo}-${partThree}`;
                return;
            }

            if (digits.length > 3) {
                phoneInput.value = `(${partOne}) ${partTwo}`;
                return;
            }

            if (digits.length > 0) {
                phoneInput.value = `(${partOne}`;
            }
        });
    }

    function initZipFormatting() {
        const zipInput = document.querySelector('#zip-code');

        if (!zipInput) {
            return;
        }

        zipInput.addEventListener('input', function () {
            zipInput.value = zipInput.value.replace(/[^\d-]/g, '').slice(0, 10);
        });
    }

    function initContactFormFocus() {
        const formCard = document.querySelector('.contact-form-card');
        const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea, .contact-form select');

        if (!formCard || !inputs.length) {
            return;
        }

        inputs.forEach((input) => {
            input.addEventListener('focus', function () {
                formCard.classList.add('is-focused');
            });

            input.addEventListener('blur', function () {
                const activeInside = formCard.contains(document.activeElement);

                if (!activeInside) {
                    formCard.classList.remove('is-focused');
                }
            });
        });
    }

    function initContactSubmitMessage() {
        const form = document.querySelector('.contact-form');
        const message = document.querySelector('[data-form-message]');

        if (!form || !message) {
            return;
        }

        form.addEventListener('submit', function () {
            window.setTimeout(function () {
                message.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest'
                });
            }, 80);
        });
    }

    function initContactCardFocusStates() {
        const focusItems = document.querySelectorAll('.contact-next-step, .contact-side-card, .contact-support__list .line-item');

        focusItems.forEach((item) => {
            item.addEventListener('focusin', function () {
                item.classList.add('is-focused');
            });

            item.addEventListener('focusout', function () {
                item.classList.remove('is-focused');
            });
        });
    }

    function bootContactPage() {
        initContactFaqSchema();
        initContactHeroImageFallback();
        initContactImageFallbacks();
        initPhoneFormatting();
        initZipFormatting();
        initContactFormFocus();
        initContactSubmitMessage();
        initContactCardFocusStates();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bootContactPage);
    } else {
        bootContactPage();
    }
})();