const navButton = document.querySelector('.nav__btn')
const navBranding = document.querySelector('.nav__branding')
const navMenu = document.querySelector('.nav__menu')

navButton.addEventListener('click', () => {
    navBranding.classList.toggle('show')
    navMenu.classList.toggle('show')
    navButton.classList.toggle('close')
})