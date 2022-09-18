const toggleButton = document.querySelector('.toggle-button')
const navLinks = document.querySelector('.nav-links-media')
const navBar = document.querySelector('.nav-bar')

toggleButton.addEventListener('click',() => {

    if(navLinks.classList.contains('active')){
        navLinks.classList.remove('active')
        navLinks.classList.add('inactive')
    } else {
        navLinks.classList.remove('inactive')
        navLinks.classList.add('active')
    }
    
})

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY
    if(currentScroll !== 0){
        navBar.classList.add('pinned')
        navLinks.classList.add('pinned')

    } else {
        navBar.classList.remove('pinned')
        navLinks.classList.remove('pinned')
    }
    
})




