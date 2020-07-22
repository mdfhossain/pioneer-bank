//Login Event Handler
const loginBtn = document.getElementById('btnLogin');
loginBtn.addEventListener('click', function () {
    const loginArea = document.getElementById('loginArea');
    loginArea.style.display = 'none';

    const dashboardArea = document.getElementById('dashboardArea');
    dashboardArea.style.display = 'flex';
});


//Deposit Event Handler
const depositBtn = document.getElementById('btnDeposit');
depositBtn.addEventListener('click', function () {
    const depositNumber = getAmount('depositAmount');
    updateBalance('currentDeposit', depositNumber);
    updateBalance('currentTotalBalance', depositNumber);
    document.getElementById('depositAmount').value = '';
});


//Withdraw Event Handler
const withDrawBtn = document.getElementById('btnWithDraw');
withDrawBtn.addEventListener('click', function () {
    const withDrawNumber = getAmount('withDrawAmount');
    updateBalance('currentWithDraw', withDrawNumber);
    updateBalance('currentTotalBalance', -1 * withDrawNumber);
    document.getElementById('withDrawAmount').value = '';
});


function getAmount(id) {
    const amount = document.getElementById(id).value;
    const withDrawNumber = parseFloat(amount);
    return withDrawNumber;
}


function updateBalance(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}

