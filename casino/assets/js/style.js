/*=============== SHOW MENU ===================*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if (toggle) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMenu("nav-toggle","nav-menu")

/*=============== SHOW TABS ===================*/
function changeTabs(e) {
    var tabs = document.getElementsByClassName('tab__item');
    var panes = document.getElementsByClassName('tab__pane');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active')
    }
    e.classList.add('active');
    var toggle =  e.getAttribute('toggle');
    var toggleShow = document.getElementById(toggle);
    for (var i = 0; i < panes.length; i++) {
        panes[i].classList.remove('active');
    }
    toggleShow.classList.add('active')
}

function showMore() {
    const showMoreBlur = document.querySelector(".show__more--blur");
    const paneActive = document.querySelector(".tab__pane.active");
    const iconMore = document.querySelector(".bxs-chevron-down");

    showMoreBlur.classList.toggle("hide")
    paneActive.classList.toggle('show__more')
    iconMore.classList.toggle('bxs-chevron-up')
}


