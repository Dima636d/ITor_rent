let username = "";
let password = "";
let money = 100; 
let proms = { proms1: "QWERTY123456", proms2: "ZXCASD", proms3: "QRII1488" };

const colorPicker = document.getElementById('colorPicker');

function start() {
    username = localStorage.getItem("username");
    password = localStorage.getItem("password");
    money = parseInt(localStorage.getItem("money")) || 100;
    localStorage.setItem("money", money);
    savedColor = localStorage.getItem('bgColor');
    let tokens = parseInt(localStorage.getItem("token"))
    document.getElementById('name').innerHTML = username ? username : "Гость"; 
    document.getElementById('pass').innerHTML = password + " пароль";
    document.getElementById('moneyy').innerHTML = money ? money : "no money";
    document.getElementById('tokens').innerHTML = tokens ? tokens : "no tokens";
    console.log("money print", money);
}
start();

function addmoney() {
    let enteredprom = document.getElementById('promInput').value.trim();

    if (enteredprom === proms.proms1) {
        money = parseInt(money) + 50;  
        localStorage.setItem("money", money);  
        money = parseInt(localStorage.getItem("money"));
        document.getElementById('moneyy').innerHTML = money; 
        console.log("money save", money);
    }

    if (enteredprom === proms.proms2) {
        money = parseInt(money) + 142;  
        localStorage.setItem("money", money);  
        money = parseInt(localStorage.getItem("money"));
        document.getElementById('moneyy').innerHTML = money; 
        console.log("money save", money);
    }
    if (enteredprom === proms.proms3) {
        money = parseInt(money) + 1488;
        localStorage.setItem("money", money)
        money = parseInt(localStorage.getItem("money"));
        document.getElementById('moneyy').innerHTML = money;
        console.log("money save", money);
    }
}


colorPicker.addEventListener('input', function() {
    document.body.style.backgroundColor = colorPicker.value;
    localStorage.setItem('bgColor', colorPicker.value);
});