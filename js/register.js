let username = '';
let password = '';

function SavePass() {
    password = document.getElementById('regInput').value.trim();
    console.log("password save!");
    localStorage.setItem("password", password); 
}

function SaveName() {
    username = document.getElementById('nameInput').value.trim();
    console.log("name saved!");
    localStorage.setItem("username", username); 
}

function logpas() {
    let enteredPass = document.getElementById('logInput').value.trim();

    let storedPassword = localStorage.getItem("password");

    if (enteredPass === storedPassword) {
        window.location.href = "index2.html"; 
    } else {
        console.log("Неверный пароль"); 
    }
}