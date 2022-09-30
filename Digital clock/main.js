const clock = document.querySelector('.clock')

// this function returns any passed-in number in two digits
function twoDigit(number) {
    if(number < 10){
        return `0${number}`
    } else {
        return number
    }
}

function digitalClock() {
    setInterval(() => {
        const time = new Date();
        const hour = time.getHours();
        const minute = time.getMinutes();
        const second = time.getSeconds();
        clock.innerHTML = `${twoDigit(hour)}:${twoDigit(minute)}:${twoDigit(second)}`
    }, 1000);
}



digitalClock()
