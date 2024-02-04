
function add(a,b) {    
let num1 = a;
let num2 = b;
    return num1 + num2;
}

function multiply(a,b){
let num1 = a;
let num2 = b;
    return num1 * num2;
}

function subtract(a,b){
let num1 = a;
let num2 = b;
    return num1 - num2;
}

function divide(a,b){
let num1 = a;
let num2 = b;
if (num1 === 0 || num2 === 0){
    return console.log('Cannot Divide by 0');
}
    return num1/num2;
}

function operate(a,b, operator) {
 switch (operator){
    case "+":
        return add(a,b);
    case "-":
        return subtract(a,b);
    case "*":
        return multiply(a,b);
    case "/":
        return divide(a,b);
 }   
};



const atual = document.querySelector('.atual')
atual.textContent = "asd";
const stored = document.querySelector('.stored')
stored.textContent = "ads";
