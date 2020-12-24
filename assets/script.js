const dataAnime = document.querySelectorAll('[data-anime]');
const animate =  'animate';

//Eventos
if(dataAnime.length) {
    window.addEventListener('scroll', animeScroll);
    console.log('teste');
}



function animeScroll() {
    const topoDoSite = window.pageYOffset + ((window.innerHeight * 3) / 4);
    dataAnime.forEach(function(e){
        if((topoDoSite) > e.offsetTop) {
            e.classList.add(animate);
        } 
    });
}


animeScroll();
