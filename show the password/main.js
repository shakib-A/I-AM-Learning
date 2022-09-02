const myInput = document.getElementById('password')

function showPassword() {
    if(myInput.type === 'password'){   
        myInput.type = 'text'
    } else {
        myInput.type = 'password'
    }
}