const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show');
        } );
    }
}

showMenu('nav-toggle', 'nav-menu');

gsap.from('.header__title', {opacity: -1, duration: 1.5, delay: 1})
gsap.from('.header__description', {opacity: 0, duration: 1, delay: 1, x: 100})
gsap.from('.header__button', {opacity: 0, duration: 1.2, delay: 1.2, y: 30})

