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
    if(b === 0) return 'How dare you?!';
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

function resetCalculator() {
    displayCurrentOperand.innerHTML = '';
    displayPreviousOperand.innerHTML = '';
    currentOperand = null;
    previousOperand = null;
    operator = null;
    equalsPressed = false;
}

function inputNumber(number) {
    displayCurrentOperand.innerHTML += number;    
}

function equalsFunction() {
    if(currentOperand === null || previousOperand === null || operator === null) return;
    displayCurrentOperand.innerHTML = operate(operator, previousOperand, currentOperand);
    displayPreviousOperand.innerHTML += currentOperand;
    previousOperand = operate(operator, previousOperand, currentOperand);
    currentOperand = null;
    equalsPressed = true;
}

const display = document.querySelector('.display');
const displayCurrentOperand = document.querySelector('.current-operand');
const displayPreviousOperand = document.querySelector('.prev-operand');
const btnNumbers = document.querySelectorAll('.number');
const btnOperators = document.querySelectorAll('.operator');
const btnEquals = document.querySelector('.equals');
const btnClear = document.querySelector('.clear');

let currentOperand = null;
let operator = null;
let previousOperand = null;
let equalsPressed = false;

btnClear.addEventListener('click', () => {
    resetCalculator();
});

btnNumbers.forEach(btn => btn.addEventListener('click', () => {
    if(displayCurrentOperand.innerHTML === '0' && btn.innerHTML === '0') return;
    if(displayCurrentOperand.innerHTML === '0' && btn.innerHTML !== '0') displayCurrentOperand.innerHTML = '';
    if(equalsPressed) {
        resetCalculator();
        displayCurrentOperand.innerHTML += btn.innerHTML;
        currentOperand = parseInt(displayCurrentOperand.innerHTML);
        return;
    }
    displayCurrentOperand.innerHTML += btn.innerHTML;
    currentOperand = parseInt(displayCurrentOperand.innerHTML);
}));

btnOperators.forEach(btn => btn.addEventListener('click', () => {
    if(equalsPressed) equalsPressed = false;
    if(currentOperand === null && previousOperand === null && operator === null) return;
    if(currentOperand === null) {
        operator = btn.innerHTML;
        displayPreviousOperand.innerHTML = previousOperand;
        displayPreviousOperand.innerHTML += operator;
        currentOperand = null;
        displayCurrentOperand.innerHTML = '';
        return;
    }

    if(operator !== null) {
        previousOperand = operate(operator, previousOperand, currentOperand);
        displayPreviousOperand.innerHTML = previousOperand;
        displayPreviousOperand.innerHTML += operator;
        operator = btn.innerHTML;
        currentOperand = null;
        displayCurrentOperand.innerHTML = '';
        return;
    }

    operator = btn.innerHTML;
    previousOperand = currentOperand;
    displayPreviousOperand.innerHTML += currentOperand;
    displayPreviousOperand.innerHTML += operator;
    currentOperand = null;
    displayCurrentOperand.innerHTML = '';
}));

btnEquals.addEventListener('click', () => {
    if(currentOperand === null || previousOperand === null || operator === null) return;
    displayCurrentOperand.innerHTML = operate(operator, previousOperand, currentOperand);
    displayPreviousOperand.innerHTML += currentOperand;
    previousOperand = operate(operator, previousOperand, currentOperand);
    currentOperand = null;
    equalsPressed = true;
})