const numButtons = document.querySelectorAll('.item')

let displayOne = document.querySelector('#input-1')
let displayTwo = document.querySelector('#input-2')

const plusButton = document.querySelector('.plus')
const minusButton = document.querySelector('.minus')
const equalButton = document.querySelector('.equals')
const acButton =document.querySelector('.ac')

let numArray = [];

for(let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener('click', function fun1(){
        displayTwo.innerHTML += numButtons[i].value
    })
}

plusButton.addEventListener('click', function fun2(){
   if(displayTwo.innerHTML !== "" && displayOne.innerHTML == "") {
        numArray.push(parseInt(displayTwo.innerHTML))
        displayOne.innerHTML = parseInt(displayTwo.innerHTML) + " + "
        displayTwo.innerHTML = ""
        console.log(numArray)
   } else if(displayOne.innerHTML !== "" && displayTwo.innerHTML !== "") {
    let sum = numArray[0] + parseInt(displayTwo.innerHTML)
    numArray[0] = sum
    displayOne.innerHTML = `${sum} +`
    displayTwo.innerHTML = ""
   }
})

minusButton.addEventListener('click', function fun3(){
    
})

equalButton.addEventListener('click', function fun4(){
    
})

acButton.addEventListener('click', function fun5(){
    
})