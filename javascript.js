
function add(a,b) {    
let num1 = a;
let num2 = b;
let operand = '+';
    return num1 + num2;
}

function multiply(a,b){
let num1 = a;
let num2 = b;
let operand = '*';
    return num1 * num2;
}

function subtract(a,b){
let num1 = a;
let num2 = b;
let operand = '-';
    return num1 - num2;
}

function divide(a,b){
let num1 = a;
let num2 = b;
let operand = '/';
if (num1 === 0 || num2 === 0){
    return console.log('Cannot Divide by 0');
}
    return num1/num2;
}

function operate() {

}