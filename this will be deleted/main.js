const myPromise = new Promise((UberIsHere, UberLost) => {
    if(1 == 1){
        UberIsHere(1)
    } else {
        UberLost(0)
    }
})

myPromise
    .then((massage) => {
        console.log(`the promise ${massage}`)
    })
    .catch((massage) => {
        console.log(`the promise ${massage}`)
    })

console.log(myPromise)