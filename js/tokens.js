let money = 100;
let token = 0;

function start() {
    money = parseInt(localStorage.getItem("money")) || 100; 
    token = parseInt(localStorage.getItem("token")) || 0;

    document.getElementById('tokens').innerHTML = "token: " + token;
    document.getElementById('moneys').innerHTML = "money: " + money;
}
start();

function comptoken() {
    if (money >= 100) { 
        money -= 100;
        token += 50;

        localStorage.setItem("money", money);
        localStorage.setItem("token", token);

        document.getElementById('moneys').innerHTML = "money: " + money;
        document.getElementById('tokens').innerHTML = "token: " + token;
    } else {
        alert("деняг нема");
    }
}
