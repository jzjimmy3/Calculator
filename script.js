const AC = document.getElementById('AC');
const plusMinus = document.getElementById('+/-');
const percent = document.getElementById('%');
const divideSign = document.getElementById('/');
const plusSign = document.getElementById('+');
const decimal = document.getElementById('.');
const equals = document.getElementById('=');
const minusSign = document.getElementById('-');
const multiplySign = document.getElementById('x')
const numberButtons = document.querySelectorAll("[data-number]");

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

let number1Clicked;
let number2Clicked;
let addClicked = false;

function operate(operate) {
    if (addClicked == true) {
        let sum = add(number1Clicked, number2Clicked)
        console.log(sum)
        display.length = 0;
        display.push(sum);
        output.textContent = display.join('');
    }
    return sum
}




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
let displayValue1 = [];
let displayValue2 = [];

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

AC.addEventListener('click', function () {
    number2Clicked = NaN;
    console.log(number2Clicked)
    console.log(isNaN(number2Clicked))
    number1Clicked = NaN;
    console.log(number1Clicked)
    console.log(number1Clicked == NaN)


    output.textContent = '0';
    display.length = 0;
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
    addClicked = true;
    display.push(' + ');
    output.textContent = display.join('');
})
decimal.addEventListener('click', function () {
    display.push('.');
    output.textContent = display.join('');
})
equals.addEventListener('click', function () {
    operate()
})
minusSign.addEventListener('click', function () {
    display.push(' - ');
    output.textContent = display.join('');
})
multiplySign.addEventListener('click', function () {
    display.push(' * ');
    output.textContent = display.join('');



})

// zero.addEventListener('click', function () {
//     display.push('0');
//     Number(display.join(''))
//     output.textContent = display.join('');
//     // number1Clicked = 0;
//     // check to see if 1 is clicked. If yes, set it as num 2, if no. set it as no. 1
//     if (number1Clicked == NaN) {
//         number1Clicked = 0;
//     } else {
//         number2Clicked = 0;
//     }
// })
// one.addEventListener('click', function () {
//     display.push('1');
//     Number(display.join(''))
//     output.textContent = display.join('');
//     if (isNaN(number1Clicked)) {
//         number1Clicked = 1;
//         console.log(number1Clicked)
//     } else {
//         number2Clicked = 1;
//         console.log(number2Clicked)
//     }
// })
// two.addEventListener('click', function () {
//     display.push('2');
//     Number(display.join(''))
//     output.textContent = display.join('');
//     if (isNaN(number1Clicked)) {
//         number1Clicked = 2;
//         console.log(number1Clicked)
//     } else {
//         number2Clicked = 2;
//         console.log(number2Clicked)
//     }

// })
// three.addEventListener('click', function () {
//     display.push('3');
//     display.join('')
//     output.textContent = display.join('');
//     if (isNaN(number1Clicked)) {
//         number1Clicked = 3;
//         console.log(number1Clicked)
//     } else {
//         number2Clicked = 3;
//         console.log(number2Clicked)
//     }
// })
// four.addEventListener('click', function () {
//     display.push('4');
//     display.join('')
//     output.textContent = display.join('');
//     if (isNaN(number1Clicked)) {
//         number1Clicked = 4;
//         console.log(number1Clicked)
//     } else {
//         number2Clicked = 4;
//         console.log(number2Clicked)
//     }
// })
// five.addEventListener('click', function () {
//     display.push('5');
//     output.textContent = display.join('');
//     if (isNaN(number1Clicked)) {
//         number1Clicked = 5;
//         console.log(number1Clicked)
//     } else {
//         number2Clicked = 5;
//         console.log(number2Clicked)
//     }
// })
// six.addEventListener('click', function () {
//     display.push('6');
//     output.textContent = display.join('');
//     number1Clicked = 6;
// })
// seven.addEventListener('click', function () {
//     display.push('7');
//     output.textContent = display.join('');
//     displayValue1 = Number(display.join(""));
//     if (isNaN(number1Clicked)) {
//         number1Clicked = 7;
//         console.log(number1Clicked)
//     } else {
//         number2Clicked = 7;
//         console.log(number2Clicked)
//     }

// })
// eight.addEventListener('click', function () {
//     display.push('8');
//     display.join('')
//     displayValue1 = Number(display.join(""));
//     output.textContent = display.join('');
//     if (isNaN(number1Clicked)) {
//         number1Clicked = 8;
//         console.log(number1Clicked)
//     } else {
//         number2Clicked = 8;
//         console.log(number2Clicked)
//     }

// })
// nine.addEventListener('click', function () {
//     display.push('9');
//     join = display.join('')
//     displayValue1 = Number(display.join(""));
//     output.textContent = display.join('');
//     if (isNaN(number1Clicked)) {
//         number1Clicked = 9;
//         console.log(number1Clicked)
//     } else {
//         number2Clicked = 9;
//         console.log(number2Clicked)
//     }
// })

// Press a button and add it to an Array1, press another button and 
// add it to the same array.
// If an operator is pressed, press a button into Array 2 

const screen = document.querySelector("[data-screen]");
numberButtons.forEach((button) =>
    button.addEventListener("click", () => appendNumber(button.textContent))
);

function appendNumber(number) {
    if (screen.textContent === "0");
    screen.textContent += number;
}

