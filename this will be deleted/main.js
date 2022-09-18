const trackerButtons = document.querySelectorAll('.tracker-btn')
const slide = document.querySelectorAll('.slide')
const intervalTime = 5000;

trackerButtons.forEach(element => {
    element.addEventListener('click', function fun1(){
        //clear the interval at each click and start it again
        clearInterval(myInterval)
        myInterval = setInterval(() => {
            const currentButton = document.querySelector('.current-btn')
            const currentSlide = document.querySelector('.current-slide')
            if(currentButton.classList.contains('third-btn')){
                currentButton.classList.remove('current-btn')
                currentSlide.classList.remove('current-slide')
                trackerButtons[0].classList.add('current-btn')
                slide[0].classList.add('current-slide')
            }
            currentButton.classList.remove('current-btn')
            currentButton.nextElementSibling.classList.add('current-btn')
            currentSlide.classList.remove('current-slide')
            currentSlide.nextElementSibling.classList.add('current-slide')
            
        }, intervalTime);

        const currentButton = document.querySelector('.current-btn')
        currentButton.classList.remove('current-btn')
        element.classList.add('current-btn')

        const currentSlide = document.querySelector('.current-slide')
        currentSlide.classList.remove('current-slide')

        // these if statements matches the current-btn to current-slide
        if(document.querySelector('.first-btn').classList.contains('current-btn')) {
            slide[0].classList.add('current-slide')
        } else if(document.querySelector('.second-btn').classList.contains('current-btn')) {
            slide[1].classList.add('current-slide')
        } else {
            slide[2].classList.add('current-slide')
        }
        
    })
})

myInterval = setInterval(() => {
    const currentButton = document.querySelector('.current-btn')
    const currentSlide = document.querySelector('.current-slide')
    if(currentButton.classList.contains('third-btn')){
        currentButton.classList.remove('current-btn')
        currentSlide.classList.remove('current-slide')
        trackerButtons[0].classList.add('current-btn')
        slide[0].classList.add('current-slide')
    }
    currentButton.classList.remove('current-btn')
    currentButton.nextElementSibling.classList.add('current-btn')
    currentSlide.classList.remove('current-slide')
    currentSlide.nextElementSibling.classList.add('current-slide')
    
}, intervalTime);