// operations
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
// switch for operations
function operate(a,b, operator) {
 switch (operator){
    case "+":
        return add(a,b);
        break;
    case "-":
        return subtract(a,b);
        break;
    case "*":
        return multiply(a,b);
        break;
    case "/":
        return divide(a,b);
        break;
 }   
};

// DOM ELEMENTS
const numberKeys = document.querySelectorAll('.number')
const operations = document.querySelectorAll('.operation')
const clearBtn = document.querySelector('.clear')
const deleteBtn = document.querySelector('.delete')
const atual = document.querySelector('.atual')
const stored = document.querySelector('.stored')
const equalKey = document.querySelector('.equal')
atual.textContent = 0;
stored.textContent = 0;


// variables

let storedNum = "";
let currentNum = "";
let secondNum = "";
let result = "";
let operator = "";


//update the display

numberKeys.forEach((button)=> {
    button.addEventListener('click', function(){
        currentNum += button.innerHTML;
        atual.textContent = currentNum;
    })
})

operations.forEach((button) =>{
    button.addEventListener('click', function(){
        if (storedNum !== null ){
        secondNum = currentNum;
        operator = button.innerHTML;
        currentNum = "";
        atual.textContent = `${secondNum} ${operator}`;
        }
        else {
            storedNum = currentNum;
            operator = button.innerHTML;
            currentNum = "";
            atual.textContent = `${storedNum} ${operator}`
        }
    })
})

equalKey.addEventListener('click', function(){
    result = operate(parseFloat(currentNum), parseFloat(secondNum), operator);
    storedNum = result;
    currentNum = storedNum;
    stored.textContent = `${storedNum}`
});