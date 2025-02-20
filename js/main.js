
    const toursSwiper = new Swiper('.tours__slider', {
        // Опции Swiper
        slidesPerView: 4, // Количество слайдов, отображаемых одновременно
        spaceBetween: 32,
        
        scrollbar: {
            el: '.tours__scrollbar',
            draggable: true,
        },
    });


    const hotelsSwiper = new Swiper('.hotels__slider', {
        // Опции Swiper
        slidesPerView: 3, // Количество слайдов, отображаемых одновременно
        spaceBetween: 60,
        centeredSlides: true,
        loop: true,

        scrollbar: {
            el: '.hotels__scrollbar',
            draggable: true,
        },
    });

    const reviewsSwiper = new Swiper('.reviews__slider', {
        // Опции Swiper
        slidesPerView: 3, // Количество слайдов, отображаемых одновременно
        spaceBetween: 32,
        loop: true,

        scrollbar: {
            el: '.reviews__scrollbar',
            draggable: true,
        },
    });

