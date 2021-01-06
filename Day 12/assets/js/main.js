const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            console.log("test");
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu');


const navLink = document.querySelectorAll('.nav__link');
function linkActive() {
    navLink.forEach(nav => nav.classList.remove('active'))
    this.classList.add('active');

    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove('show')
}

navLink.forEach(nav => nav.addEventListener('click',linkActive));