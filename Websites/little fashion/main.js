const toggleButton = document.querySelector('.toggle-button')
const navLinks = document.querySelector('.nav-links-media')
const navBar = document.querySelector('.nav-bar')
//carousel inputs
const slide = document.querySelectorAll('.slide')
const trackerButtons = document.querySelectorAll('.tracker-btn')

// menu toggle
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


// carousel
trackerButtons.forEach(element => {
    element.addEventListener('click',  nextSlide)
});

// functions
function nextSlide() {
    //remove the current classes
    removeCurrentBtn()
    removeCurrentSlide()
    // add current btn
    this.classList.add('current-btn')
    //add current slide
    const currentSlide = document.querySelector(`#${this.id}-slide`)
    currentSlide.classList.add('current-slide')
}

function removeCurrentBtn() {
    trackerButtons.forEach(button => button.classList.remove('current-btn'))
}

function removeCurrentSlide() {
    slide.forEach(slide => slide.classList.remove('current-slide'))
}

const myInterval = setInterval(function myFun() {
    const CurrentBtn = document.querySelector('.current-btn')
    const CurrentSlide = document.querySelector('.current-slide')
    removeCurrentSlide()
    removeCurrentBtn()
    if(CurrentBtn.id == "third") {
        slide[0].classList.add('current-slide')
        trackerButtons[0].classList.add('current-btn')
    } else {
        CurrentBtn.nextElementSibling.classList.add('current-btn')
        CurrentSlide.nextElementSibling.classList.add('current-slide')
    }
}, 5000)