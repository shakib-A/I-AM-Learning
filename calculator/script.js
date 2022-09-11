class Calculator {
    constructor(dispOne, dispTwo) {
        this.dispOne = dispOne
        this.dispTwo = dispTwo
    }

    clearAll() {
      this.dispTwo.innerHTML = ""
      this.dispOne.innerHTML = ""
    }

    sumUp() {

    }

    minus() {

    }

    operate() {

    }

    updateDisplays() {
        if(dispTwo) {

        }
    }
}

const numberButton = document.querySelectorAll('.item')
const equalButton = document.querySelector('.equals')
const plusButton = document.querySelector('.plus')
const minusButton = document.querySelector('.minus')
const acButton = document.querySelector('.ac')
const dispOne = document.querySelector('#input-1')
const dispTwo = document.querySelector('#input-2')


const calculate = new Calculator(dispOne, dispTwo)
console.log(calculate)

for(let i = 0; i < numberButton.length; i++) {
    numberButton[i].addEventListener('click', function numberClicked(){
        dispTwo.innerHTML += numberButton[i].value
    })
}

plusButton.addEventListener('click', () => {
    calculate.updateDisplays()
})

equalButton.addEventListener('click', () => {
    calculate.operate()
    calculate.updateDisplays()
})

acButton.addEventListener('click', () => {
    calculate.clearAll() 
})