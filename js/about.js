'use strict';

(function () {
    function initAboutHeroImageFallback() {
        const hero = document.querySelector('.about-hero');

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

        image.src = 'assets/images/about-hero.jpg';
    }

    function initAboutImageFallbacks() {
        const images = document.querySelectorAll('.about-approach__photo img, .circle-photo img');

        images.forEach((image) => {
            image.addEventListener('error', function () {
                const parent = image.closest('.circle-photo, .photo-card');

                if (parent) {
                    parent.classList.add('is-image-missing');
                }
            });
        });
    }

    function initAboutCardFocusStates() {
        const focusItems = document.querySelectorAll(
            '.about-circle-card, .about-process-step, .testimonial-card, .about-marquee__group a'
        );

        focusItems.forEach((item) => {
            item.addEventListener('focus', function () {
                item.classList.add('is-focused');
            });

            item.addEventListener('blur', function () {
                item.classList.remove('is-focused');
            });
        });
    }

    function initAboutMarqueeAccessibility() {
        const marquee = document.querySelector('.about-marquee');

        if (!marquee) {
            return;
        }

        const track = marquee.querySelector('.about-marquee__track');

        if (!track) {
            return;
        }

        marquee.addEventListener('focusin', function () {
            track.style.animationPlayState = 'paused';
        });

        marquee.addEventListener('focusout', function () {
            track.style.animationPlayState = '';
        });
    }

    function initTestimonialStarsLabel() {
        const starGroups = document.querySelectorAll('.testimonial-card__stars');

        starGroups.forEach((group) => {
            if (!group.getAttribute('aria-label')) {
                group.setAttribute('aria-label', '5 out of 5 stars');
            }
        });
    }

    function bootAboutPage() {
        initAboutHeroImageFallback();
        initAboutImageFallbacks();
        initAboutCardFocusStates();
        initAboutMarqueeAccessibility();
        initTestimonialStarsLabel();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bootAboutPage);
    } else {
        bootAboutPage();
    }
})();