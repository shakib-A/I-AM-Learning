const navPage = document.querySelector('.nav-page')
const navIcon = document.querySelector('.nav-icon')

navIcon.addEventListener('click', () => {
    navPage.classList.toggle('show')
    navIcon.classList.toggle('close')
})