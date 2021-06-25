const numberButtons = document.querySelectorAll("[data-number]");
numberButtons.forEach((button) =>
    button.addEventListener("click", () => addToScreen(button.textContent))

);

const screen = document.querySelector("[data-screen]");
function addToScreen(addValue) {
    if (screen.textContent === "0");
    screen.textContent += addValue;
}

const operatorButtons = document.querySelectorAll("[data-operator]");
operatorButtons.forEach((button) =>
    button.addEventListener("click", () => operate('*'))

    // for each index in the array, I want to listen for an event (click)
    // if clicked I want to run another function 
    // That function is going to depend on the operater function
    // The operater function inlcudes a switch satement (if) so if it hears "*"
    // then it knows to multiply.  
)


function operate(operate) {
    if (operate === "*") {
        alert('hello')
    }
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


