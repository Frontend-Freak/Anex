//СЛФЙДЕР НОМЕР 1
const toursSwiper = new Swiper('.tours__slider', {
    slidesPerView: 3.7,
    
    scrollbar: {
        el: '.tours__scrollbar',
        draggable: true,
    },

    breakpoints: {
        1024: {
            slidesPerView: 5.3,
        },
        430: {
            slidesPerView: 1.3,
        },
    },
});


//СЛФЙДЕР НОМЕР 2
const hotelsSwiper = new Swiper('.hotels__slider', {
    slidesPerView: 1,
    

    scrollbar: {
        el: '.hotels__scrollbar',
        draggable: true,
    },
    breakpoints: {
        430: {
            slidesPerView: 3,
            spaceBetween: 60,
            centeredSlides: true,
            loop: true,
        },
    },
});

/* const hotelsSwiper = new Swiper('.hotels__slider', {
    slidesPerView: 2.6,
    spaceBetween: 60,
    centeredSlides: true,
    loop: true,
    
    scrollbar: {
        el: '.hotels__scrollbar',
        draggable: true,
    },
    
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 60,
            centeredSlides: true,
            loop: true,
        },
    },
}); */

//СЛФЙДЕР НОМЕР 3
const reviewsSwiper = new Swiper('.reviews__slider', {
    slidesPerView: 2.7, 
    spaceBetween: 32,
    loop: true,

    scrollbar: {
        el: '.reviews__scrollbar',
        draggable: true,
    },

    breakpoints: {

        1440: {
            slidesPerView: 3.5,
        },
        1024: {
            slidesPerView: 4,
        },
        430:{
            slidesPerView: 1.5,
        }
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


//аккордеон

document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            header.classList.remove('active');
        } else {
            
            document.querySelectorAll('.accordion-content').forEach(item => {
                item.style.maxHeight = null;
                item.previousElementSibling.classList.remove('active');
            });

            content.style.maxHeight = content.scrollHeight + "px";
            header.classList.add('active');
        }
    });
});

//слайдер priority
const prioritySwiper = new Swiper('.relaxation-priority__slider', {
    slidesPerView: 4,
    spaceBetween: 32,
    loop: true,
    scrollbar: {
        el: '.relaxation-priority__scrollbar',
        draggable: true,
    },

    /* breakpoints: {
        1024: {
            slidesPerView: 5.3,
        },
        430: {
            slidesPerView: 1.3,
        },
    }, */
});


//слайдер выбор тура

const toursSelectionSwiper = new Swiper('.tour-selection__slider', {
    slidesPerView: 1,
    spaceBetween: 32,
    loop: true,
    scrollbar: {
        el: '.tour-selection__scrollbar',
        draggable: true,
    },
});