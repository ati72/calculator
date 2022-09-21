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
const displayCurrentOperand = document.querySelector('.current-operand');
const displayPreviousOperand = document.querySelector('.prev-operand');
const btnNumbers = document.querySelectorAll('.number');
const btnOperators = document.querySelectorAll('.operator');
const btnEquals = document.querySelector('.equals');
const btnClear = document.querySelector('.clear');

let currentOperand;
let operator;
let previousOperand;

btnClear.addEventListener('click', () => {
    displayCurrentOperand.innerHTML = '';
    displayPreviousOperand.innerHTML = '';
    currentOperand = null;
    previousOperand = null;
    operator = null;
});

btnNumbers.forEach(btn => btn.addEventListener('click', () => {
    if(displayCurrentOperand.innerHTML === '0' && btn.innerHTML === '0') return;
    if(displayCurrentOperand.innerHTML === '0' && btn.innerHTML !== '0') displayCurrentOperand.innerHTML = '';
    displayCurrentOperand.innerHTML += btn.innerHTML;
    currentOperand = parseInt(displayCurrentOperand.innerHTML);
}));

btnOperators.forEach(btn => btn.addEventListener('click', () => {
    operator = btn.innerHTML;
    previousOperand = currentOperand;
    displayPreviousOperand.innerHTML += currentOperand;
    displayPreviousOperand.innerHTML += operator;
    currentOperand = null;
    displayCurrentOperand.innerHTML = '';
}));

btnEquals.addEventListener('click', () => {
    displayCurrentOperand.innerHTML = operate(operator, previousOperand, currentOperand);
    displayPreviousOperand.innerHTML += currentOperand;
})