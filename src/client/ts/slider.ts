import Swiper, { Navigation, Pagination, Keyboard  } from 'swiper';
Swiper.use([Navigation, Pagination, Keyboard ]);

const slider = () => {
    const swipe = document.querySelector('.swiper') as HTMLDivElement
    if (!swipe) return
    new Swiper(swipe, {
        // Optional parameters
        zoom: true,
        slidesPerView: 1,
        centeredSlides: true,
        lazy: true,
        loop: false,
        // autoHeight: true,
        keyboard: {
            enabled: true,
        },
        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
            type: "fraction"
        },
        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

export {slider}