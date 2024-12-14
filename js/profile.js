let username = "";
let password = "";

function load() {
    username = localStorage.getItem("username");
    password = localStorage.getItem("password")
    document.getElementById('name').innerHTML = username ? username : "Гость"; 
    document.getElementById('pass').innerHTML = password ? password : "пароль потерялся";
}

load();
