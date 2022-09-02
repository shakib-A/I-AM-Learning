const input = document.getElementById('pass')

function showPassword(){
    if(input.type === 'password'){
        input.type = 'text'
    } else {
        input.type = 'password'
    }
}


