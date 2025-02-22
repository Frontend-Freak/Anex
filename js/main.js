
const toursSwiper = new Swiper('.tours__slider', {
    slidesPerView: 4,
    spaceBetween: 32,
        
    scrollbar: {
        el: '.tours__scrollbar',
        draggable: true,
    },
});


const hotelsSwiper = new Swiper('.hotels__slider', {
    slidesPerView: 3,
    spaceBetween: 60,
    centeredSlides: true,
    loop: true,

    scrollbar: {
        el: '.hotels__scrollbar',
        draggable: true,
    },
});


const reviewsSwiper = new Swiper('.reviews__slider', {
    slidesPerView: 3, 
    spaceBetween: 32,
        oop: true,

    scrollbar: {
        el: '.reviews__scrollbar',
        draggable: true,
    },
});

