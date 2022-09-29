document.querySelector('#btn').addEventListener('click',addUser)

function addUser() {
    const xhr =new XMLHttpRequest()
    xhr.open('GET', "users.json", true)
    xhr.onload = function(){
            var users = JSON.parse(this.responseText)
        var randomUser = Math.round(Math.random()*30)
        output = ""
        output += `<div class="container">
                        <img src="${users[randomUser].avatar_url}">
                        <ul>
                            <li>ID: ${users[randomUser].id}</li>
                            <li>UserName: ${users[randomUser].login}</li>
                            <li>UserType: ${users[randomUser].type}</li>
                        </ul>
                   </div>`
                   document.querySelector('body').innerHTML += output
    }

    xhr.send()
}