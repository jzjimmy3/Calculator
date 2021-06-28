// const plusMinus = document.getElementById('+/-');
// const percent = document.getElementById('%');
// const decimal = document.getElementById('.');


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
    if (screen.textContent === "0" || shouldResetScreen) resetScreen();
    screen.textContent += addValue;
}

const operatorButtons = document.querySelectorAll("[data-operator]");
operatorButtons.forEach((button) =>
    button.addEventListener("click", () => setOperator(button.textContent))
)
function setOperator(operator) {
    if (currentOperation !== null) evaluate();
    firstOperand = screen.textContent;
    currentOperation = operator;
    shouldResetScreen = true;
    screen.textContent += operator;
}

const AC = document.getElementById('AC');
AC.addEventListener('click', () => resetScreen())
function resetScreen() {
    screen.textContent = "";
    shouldResetScreen = false;
}

const equals = document.querySelector('[data-equals]');
equals.addEventListener("click", () => evaluate())
function evaluate() {
    if (currentOperation === null || shouldResetScreen) return;
    if (currentOperation === "÷" && screen.textContent === "0") {
        alert("You can't divide by 0!");
        clear();
        return;
    }
    secondOperand = screen.textContent;
    screen.textContent = roundResult(
        operate(currentOperation, firstOperand, secondOperand)
    );
    currentOperation = null;
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000;
}
function clear() {
    screen.textContent = "0";
    firstOperand = "";
    secondOperand = "";
    currentOperation = null;
}

function add(a, b) {
    console.log('add')
    return a + b;
}

function substract(a, b) {
    console.log('subtract')
    return a - b;
}

function multiply(a, b) {
    console.log('multiply')

    return a * b;
}

function divide(a, b) {
    return a / b;
}


function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    console.log("operator" + operator)
    console.log("a" + a)
    console.log("b" + b)
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return substract(a, b);
        case "x":
            return multiply(a, b);
        case "÷":
            if (b === 0) return null;
            else return divide(a, b);
        default:
            return null;
    }
}


