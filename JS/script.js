// navbar dropdown toggle
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')
const navLogo = document.querySelector('#navbar_logo')

//Display moble Menu function that triggers the active class on the CSS
function navbarToggle() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', navbarToggle)






//Show Active menu when scrolling

const highLightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const servicesMenu = document.querySelector('#services-page')
    let scrollPos = window.scrollY
    console.log(scrollPos) //this is used just to check scroll position


    //add 'highLight' clss to my menu items
    if(window.innerWidth > 0 && scrollPos < 493){
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    }else if(window.innerWidth > 550 && scrollPos < 1333) {
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        servicesMenu.classList.remove('highlight')
        return
    }else if(window.innerWidth > 0 && scrollPos < 2445) {
        servicesMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    }


    if((elem && window.innerWidth < 960 && scrollPos < 680 || elem)){
        elem.classList.remove('highlight')
    }
};

window.addEventListener('scroll', highLightMenu);
window.addEventListener('click', highLightMenu);

//Close mobile menu when clicking on a menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('is-active')

    if(window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('clisk', hideMobileMenu)
navLogo.addEventListener('clisk', hideMobileMenu)
