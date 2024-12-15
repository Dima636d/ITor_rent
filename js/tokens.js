let money = 100;
let token = 0;

function comptoken() {
    money = parseInt(localStorage.getItem("money"));
    money = parseInt(money) - 100;
    localStorage.setItem("money", money);
    token = parsetInt(token) + 50;
}