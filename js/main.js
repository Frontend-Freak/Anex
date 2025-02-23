//СЛФЙДЕР НОМЕР 1
const toursSwiper = new Swiper('.tours__slider', {
    slidesPerView: 4,
    spaceBetween: 32,
        
    scrollbar: {
        el: '.tours__scrollbar',
        draggable: true,
    },
});

//СЛФЙДЕР НОМЕР 2
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

//СЛФЙДЕР НОМЕР 1
const reviewsSwiper = new Swiper('.reviews__slider', {
    slidesPerView: 3, 
    spaceBetween: 32,
        oop: true,

    scrollbar: {
        el: '.reviews__scrollbar',
        draggable: true,
    },
});

//БУРГЕР МЕНЮ
document.getElementById('burger__button').addEventListener('click', function() {
    const menu = document.getElementById('burger__menu');
    menu.classList.toggle('show'); 
    const lines = document.querySelectorAll('.line');
    lines[0].classList.toggle('line1');
    lines[1].classList.toggle('line2');
    lines[2].classList.toggle('line3');
});


//МОДАЛКА
const btn = document.querySelector('.header__btn')
const modal = document.querySelector('.modal')
const body = document.body


const openModal = () => {
    modal.classList.add('modal--open')
    body.classList.add('body--fixed')
}


const closeModal = () => {
    modal.classList.remove('modal--open')
    body.classList.remove('body--fixed')
}

btn.addEventListener('click', openModal)

modal.addEventListener('click', event =>{
    const target = event.target

    if(target && target.classList.contains('modal') || target.classList.contains('modal__close-btn')){
        closeModal()
    }
})

document.addEventListener('keydown', event => {
    if(event.code === 'Escape' && modal.classList.contains('modal--open')){
        closeModal()
    }
})



document.querySelector('.modal__form').addEventListener('submit', function(event) {
    event.preventDefault();
    swal('Ваше сообщение успешно отправлено!');
});