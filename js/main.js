
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


document.getElementById('burger__button').addEventListener('click', function() {
    const menu = document.getElementById('burger__menu');
    menu.classList.toggle('show'); 
    const lines = document.querySelectorAll('.line');
    lines[0].classList.toggle('line1');
    lines[1].classList.toggle('line2');
    lines[2].classList.toggle('line3');
});

