const AC = document.getElementById('AC')
const zero = document.getElementById('zero');
const one = document.getElementById('one');

const digit = document.getElementsByClassName('digits');
for (var i = 0; i < digit.length; i++) {
    let value = true;
    digit[i].addEventListener('click', function () {
        console.log(digit[0].value)
        if (digit[0].value == 7) {
            display.push('7');
            output.textContent = display.join('');
            value = false;
        }
    })
}


console.log(digit);







const output = document.getElementById('output');
const display = [''];

function add(num1, num2) {
    return num1 + num2;
}
function divide(num1, num2) {
    return num1 / num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}


function operate(operator, num1, num2) {
}

AC.addEventListener('click', function () {
    output.textContent = '0';
})

zero.addEventListener('click', function () {
    display.push('0');
    output.textContent = display.join('');
})
one.addEventListener('click', function () {
    display.push('1');
    output.textContent = display.join('');
})

