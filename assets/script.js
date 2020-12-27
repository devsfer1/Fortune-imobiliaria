const dataAnime = document.querySelectorAll('[data-anime]');
const animate =  'animate';
var menuBtn = document.querySelector('.nav__bars'),
    burger = document.querySelector('.nav__burger'),
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
    console.log('teste');
}

//Sticky nav top

//Sticky nav
function stickyNav() {
    header.classList.toggle('sticky', window.scrollY > 20);
    menuBtn.style.color = 'black';
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
console.log(window.innerHeight);
console.log(window.scrollY);

