/* Open and close the menu when the icon is clicked: hamburguer and x */
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for (const element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show')
    })
}

/*When a menu item is clicked, hide the menu */
const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show');
    })
}

/* Change the page header when scrolling */

const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

window.addEventListener('scroll', function () {
    if (this.window.scrollY >= navHeight) {
        // scroll bigger than header height
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
})

/* COURSES SLIDER */

 const swiper = new Swiper('.swiper', {
     slidesPerView: 1,
     pagination: {
         el:'.swiper-pagination'
     },
     mousewheel: true,
     keyboard: true,
     breakpoints: {
         767: {
             slidesPerView: 2,
             setWrapperSize: true
         }
     }
 });


/* SCROLL REVEAL: SHOW ELEMENTS WHEN SCROLLING */

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

  scrollReveal.reveal(
    `#about .button, #about .text,
    #knowledge header, #knowledge .card,
    #courses header, #courses .courses,
    #contact .text, #contact .links,
    footer .brand, footer .social
    `,
    { interval: 100 }
  )

/* BACK TO TOP BUTTON */

const backToTopButton = document.querySelector('.back-to-top')
window.addEventListener('scroll', function() {
    if (this.window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
})

/* ACTIVE MENU */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for (const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if (checkpointStart && checkpointEnd) {
            document.querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.add('active')
        } else {
            document.querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.remove('active')
        }
    }
}

window.addEventListener('scroll', function () {
    activateMenuAtCurrentSection()
})

// DARK MODE
function changeMode(){
    changeClass();
    changeText();
}

function changeText(){
    if(body.classList.contains('dark-mode')){
    button.innerHTML = '<i class="icon-sun"></i>'
    }else{
        button.innerHTML = '<i class="icon-moon-fill"></i>'
    }
    return;
}

function changeClass(){
    button.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    logo.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    about.classList.toggle('dark-mode');
    courses.classList.toggle('dark-mode');
    knowledge.classList.toggle('dark-mode');
    contact.classList.toggle('dark-mode');
    for (const element of title) {
        element.classList.toggle('dark-mode')
}
}

const button = document.getElementById('mode-selector');
const body = document.getElementsByTagName('body')[0];
const logo = document.getElementById('logo');
const menu  = document.querySelector('nav.show .menu')
const about = document.getElementById('about')
const courses = document.getElementById('courses')
const title = document.querySelectorAll('.title');
const knowledge = document.getElementById('knowledge');
const contact = document.getElementById('contact');

 

button.addEventListener('click', changeMode)

