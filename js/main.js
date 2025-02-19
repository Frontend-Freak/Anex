const toursSwiper = new Swiper('.tours__swiper', {
        // Опции Swiper
        slidesPerView: 4.7, // Количество слайдов, отображаемых одновременно
        spaceBetween: 32, // Расстояние между слайдами
        loop: true,
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
    });
