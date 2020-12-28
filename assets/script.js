const dataAnime = document.querySelectorAll('[data-anime]');
const animate =  'animate';
//Variaveis Header
var menuBtn = document.querySelector('.nav__bars'),
    burger = document.querySelector('.nav__burger'),
    navLogo = document.querySelector('.nav__logo'),
    navList = document.querySelector('.nav__list'),
    navbar = document.querySelector('.nav'),
    header = document.querySelector('#header'),
    navLink = document.getElementsByClassName('nav__link'),
    menuOpen = false;


//Eventos
menuBtn.addEventListener('click', btnAnimation);
menuBtn.addEventListener('click', ativarNavbar);
window.addEventListener('scroll', stickyNav);


if(dataAnime.length) {
    window.addEventListener('scroll', animeScroll);
}

//Sticky nav top

//Sticky nav
function stickyNav() {
    header.classList.toggle('sticky', window.scrollY > 20);
    //Mudando cores items nav
    if(window.scrollY > 20) {
        navLogo.style.color = '#599e8e';
        burger.classList.add('burger--sticky');
        burger.classList.add('nav__burger--sticky');
        for(var i = 0; i < navLink.length; i++) {
            navLink[i].style.color = '#292929';
            navbar.style.padding = '25px 0';
        }
    } else {
        navLogo.style.color = '';
        navbar.style.padding = '';
        burger.classList.remove('nav__burger--sticky');
        burger.classList.remove('burger--sticky');
        for(var i = 0; i < navLink.length; i++) {
            navLink[i].style.color = '';
        }
    }
};

//Ativar nav
function ativarNavbar() {
    navList.classList.toggle('hidden');

};

//Animação menu bars
function btnAnimation(){
    if (menuOpen == false) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
};

//Animate on scroll
function animeScroll() {
    const topoDoSite = window.pageYOffset + ((window.innerHeight * 3) / 4);
    dataAnime.forEach(function(e){
        if((topoDoSite) > e.offsetTop) {
            e.classList.add(animate);
        } 
    });
}


animeScroll();


