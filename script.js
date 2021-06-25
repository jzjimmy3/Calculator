const plusMinus = document.getElementById('+/-');
const percent = document.getElementById('%');
const decimal = document.getElementById('.');


let firstOperand = "";
let secondOperand = "";
let currentOperation = null;
let shouldResetScreen = false;

const numberButtons = document.querySelectorAll("[data-number]");
numberButtons.forEach((button) =>
    button.addEventListener("click", () => addToScreen(button.textContent))
);

const screen = document.querySelector("[data-screen]");
function addToScreen(addValue) {
    if (screen.textContent === "0");
    screen.textContent += addValue;
    firstOperand = screen.textContent
}

const operatorButtons = document.querySelectorAll("[data-operator]");
operatorButtons.forEach((button) =>
    button.addEventListener("click", () => setOperator(button.textContent))
)

function setOperator(operator) {
    screen.textContent += operator;
}

const AC = document.getElementById('AC');
AC.addEventListener('click', () => resetScreen())
function resetScreen() {
    screen.textContent = '0';
    firstOperand = "";
    secondOperand = "";
}

const equals = document.getElementById('=');
equals.addEventListener('click', () => evaluate())
function evaluate() {
    if (currentOperation === "÷" && screen.textContent === "0") {
        alert("You can't divide by 0!");
        clear();
        return;
    }
    secondOperand = screen.textContent;
    console.log("The first" + firstOperand)
    screen.textContent = operate('+', firstOperand, secondOperand);
    console.log(screen.textContent)
    currentOperation = null;
}

function add(a, b) {
    return a + b;
}
function divide(a, b) {
    return a / b;
}
function multiply(a, b) {
    return a * b;
}
function subtract(a, b) {
    return a - b;
}

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case "+":
            return add(a, b);
        case "−":
            return substract(a, b);
        case "×":
            return multiply(a, b);
        case "÷":
            if (b === 0) return null;
            else return divide(a, b);
        default:
            return null;
    }
}




