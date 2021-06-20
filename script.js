const AC = document.getElementById('AC');
const plusMinus = document.getElementById('+/-');
const percent = document.getElementById('%');
const divideSign = document.getElementById('/');
const plusSign = document.getElementById('+');
const decimal = document.getElementById('.');
const equals = document.getElementById('=');
const minusSign = document.getElementById('-');
const multiplySign = document.getElementById('x')

const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');




// const digit = document.getElementsByClassName('digits');
// for (var i = 0; i < digit.length; i++) {
//     digit[i].addEventListener('click', function () {

//         console.log(digit[0].value)
//         console.log(document.getElementById('seven').clicked)
//         if (document.getElementById('seven').onclick function () {
//             display.push('7');
//             output.textContent = display.join('');
//         }) {
//     } else if (document.getElementById('eight').id == "eight") {
//         display.push('8');
//         output.textContent = display.join('');

//     }
// })
// }








const output = document.getElementById('output');
const display = [];

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
    display.length = 0;
    console.log("Display:" + display)
})

plusMinus.addEventListener('click', function () {
    display.push('+');
    output.textContent = display.join('');
})
percent.addEventListener('click', function () {
    display.push('%');
    output.textContent = display.join('');
})
divideSign.addEventListener('click', function () {
    display.push(' / ');
    output.textContent = display.join('');
})
plusSign.addEventListener('click', function () {
    display.push(' + ');
    output.textContent = display.join('');
})
decimal.addEventListener('click', function () {
    display.push('.');
    output.textContent = display.join('');
})
equals.addEventListener('click', function () {
    display.push('=');
    output.textContent = display.join('');
})
minusSign.addEventListener('click', function () {
    display.push(' - ');
    output.textContent = display.join('');
})
multiplySign.addEventListener('click', function () {
    display.push(' * ');
    output.textContent = display.join('');
})

zero.addEventListener('click', function () {
    display.push('0');
    output.textContent = display.join('');
})
one.addEventListener('click', function () {
    display.push('1');
    output.textContent = display.join('');
})
two.addEventListener('click', function () {
    display.push('2');
    output.textContent = display.join('');
})
three.addEventListener('click', function () {
    display.push('3');
    output.textContent = display.join('');
})
four.addEventListener('click', function () {
    display.push('4');
    output.textContent = display.join('');
})
five.addEventListener('click', function () {
    display.push('5');
    output.textContent = display.join('');
})
six.addEventListener('click', function () {
    display.push('6');
    output.textContent = display.join('');
})
seven.addEventListener('click', function () {
    display.push('7');
    output.textContent = display.join('');
})
eight.addEventListener('click', function () {
    display.push('8');
    output.textContent = display.join('');
})
nine.addEventListener('click', function () {
    display.push('9');
    output.textContent = display.join('');
})
