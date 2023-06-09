/*=============== SHOW MENU ===============*/
let navList = document.querySelector('.nav__list'),
    navToggle = document.querySelector('.nav__toggle'),
    navClose = document.querySelector('.nav__close')
    /*==== MENU SHOW ====*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navList.classList.add('show-menu')
        setTimeout(() => {
            navToggle.classList.add('display-none')
            navClose.classList.remove('display-none')

        }, 400);
    })
}
/*==== MENU HIDDEN ====*/
if (navClose) {
    navClose.addEventListener('click', () => {
        navList.classList.remove('show-menu')
        setTimeout(() => {
            navClose.classList.add('display-none')
            navToggle.classList.remove('display-none')
        }, 100);
    })
};
/*=============== REMOVE MENU MOBILE ===============*/
let navLink = document.querySelectorAll('.nav__link'),
    linkAction = () => {
        let navList = document.querySelector('.nav__list')
        setTimeout(() => {
            navList.classList.remove('show-menu')
            navClose.classList.add('display-none')
            navToggle.classList.remove('display-none')
        }, 400);
    }
navLink.forEach(l => l.addEventListener('click', linkAction));

/*=============== CAROUSEL ===============*/
$('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        },
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true
    })
    /*=============== Contact ===============*/
let form = document.querySelector('.contact__form'),
    message = document.querySelector('.form-message'),
    name = document.getElementById('name'),
    email = document.getElementById('email'),
    number = document.getElementById('number'),
    subject = document.getElementById('subject'),
    userMessage = document.getElementById('user-message');
const formAction = (e) => {
    e.preventDefault();
    if (name.value === '' || email.value === '' || number.value === '' || subject.value === '' || userMessage.value === '') {

        message.textContent = 'Please fill out the empty failds to contact me'
        setTimeout(() => {
            message.textContent = ''
        }, 5000)
    } else {
        setTimeout(() => {
            name.value = ''
            email.value = ''
            number.value = ''
            subject.value = ''
            userMessage.value = ''
        }, 500)
        setTimeout(() => {
            message.textContent = 'thanks for your feedback will contact you as soon possible'
        }, 100)

        setTimeout(() => {
            message.textContent = ''
        }, 5000)
    }
}
form.addEventListener('submit', formAction)
    /*=============== SHOW SCROLL UP ===============*/

const scrollTop = () => {
    const scrollTop = document.querySelector('#scroll-up')
    this.scrollY >= 350 ? scrollTop.classList.add('show-scroll') : scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)
    /*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})
sr.reveal(`.home__data,.section__data,.map-map,.process__container,.about__container,.subscribe__container,.testimonial__container,.skills__one, .process__card,.about__one,footer`)
sr.reveal(`.home__img-img,.skills__img`, { delay: 700, origin: 'bottom' })
sr.reveal(`.about__two,.subscribe__button,.form-btn`, { delay: 700, origin: 'bottom' })
sr.reveal(`.services__card`, { delay: 900, origin: 'left' })
sr.reveal(`.form-group`, { delay: 900, origin: 'bottom' })
sr.reveal(`.about__card,.skills-png,.contact-png,.logo__card,.blog__card,.subscribe__description,.contact__lists`, { delay: 1400, origin: 'top' })