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
    return a -b;
}

function divide(a,b){
let num1 = a;
let num2 = b;
if (num1 === 0 || num2 === 0){
    console.log('Can\'t divide by zero')
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
        
        return subtract(b,a);
        break;
    case "*":
        return multiply(a,b);
        break;
    case "/":
        if(storedNum == 0){
            atual.textContent = "ERROR! Can\'t divide by 0"
        }
        return divide(b,a);
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

let storedNum = parseFloat(0);
let currentNum = "";
let secondNum = parseFloat(0);
let result = "";
let operator = "";



//update the display

numberKeys.forEach((button)=> {
    button.addEventListener('click', function(){
        currentNum += button.innerHTML;
        atual.textContent = parseFloat(currentNum);
        
    })
})

operations.forEach((button) =>{
    button.addEventListener('click', function(){
          if(storedNum == 0){
        secondNum = currentNum;
        currentNum = "";
        operator = button.innerHTML;
        atual.textContent = `${storedNum} ${operator}`;
        } else  {
            secondNum = storedNum;
            currentNum = "";
            operator = button.innerHTML;
            atual.textContent = `${storedNum} ${operator}`
        }
        
        // if (storedNum !== undefined ){
        // secondNum = currentNum;
        // operator = button.innerHTML;
        // currentNum = "";
        // atual.textContent = `${storedNum} ${operator}`;
        // }
        // else {

        //     secondNum = storedNum;
        //     operator = button.innerHTML;
        //     currentNum = "";
        //     atual.textContent = `${storedNum} ${operator}`
        // }
    })
})

clearBtn.addEventListener('click', function(){
    atual.textContent = 0;
    stored.textContent = 0;
    currentNum = "";
    storedNum = "";
    secondNum = "";
})

equalKey.addEventListener('click', getResult);


function getResult (){
    result = operate(parseFloat(currentNum), parseFloat(secondNum), operator);
    storedNum = parseFloat(result);
    secondNum = secondNum;
    currentNum = parseFloat(currentNum);
    atual.textContent = `${result} ${operator}`
    stored.textContent = `${parseFloat(secondNum)} ${operator} ${currentNum} = ${storedNum} `
}