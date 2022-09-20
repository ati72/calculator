function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    switch(operator) {
        case '+': return add(a, b);
        case '-': return subtract(a, b);
        case '*': return multiply(a, b);
        case '/': return divide(a, b);
    }
}

const display = document.querySelector('.display');
const btnNumbers = document.querySelectorAll('.number');
const btnOperators = document.querySelectorAll('.operator');
const btnEquals = document.querySelector('.equals');
const btnClear = document.querySelector('.clear');

btnNumbers.forEach(btn => btn.addEventListener('click', () => display.innerHTML += btn.innerHTML));
btnClear.addEventListener('click', () => display.innerHTML = '');