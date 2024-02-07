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
        if(currentNum == 0){
          alert('Can\'t divide by zero'), clear();
        }
        return divide(b,a);
        break;
 }   
};

// DOM ELEMENTS
const numberKeys = document.querySelectorAll('.number')
const operations = document.querySelectorAll('.operation')
const clearBtn = document.querySelector('.clear')
const deleteBtn = document.querySelector('.backspace')
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
         if (result != Number && storedNum == NaN){
            result = 0;
            stored = 0;
         }
         else if (storedNum == 0){
        secondNum = currentNum;
        currentNum = "";
        operator = button.innerHTML;
        atual.textContent = `${parseFloat(secondNum)} ${operator}`;
       
        } else  {
            secondNum = storedNum;
            currentNum = "";
            operator = button.innerHTML;
            atual.textContent = `${parseFloat(storedNum)} ${operator}`
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

clearBtn.addEventListener('click', clear);


equalKey.addEventListener('click', getResult);

deleteBtn.addEventListener('click', function(){
    atual.textContent
})

function getResult (){
    if (currentNum === ""){
        currentNum = 0;
    } 
     else {
    result = operate(parseFloat(currentNum), parseFloat(secondNum), operator);
    storedNum = parseFloat(result).toFixed(2);
    secondNum = secondNum;
    currentNum = parseFloat(currentNum);
    atual.textContent = `${parseFloat(result.toFixed(2))} ${operator}`
    stored.textContent = `${parseFloat(secondNum)} ${operator} ${currentNum} = ${parseFloat(storedNum)} `
}}
function clear(){
    atual.textContent = 0;
    stored.textContent = 0;
    currentNum = 0;
    storedNum = 0;
    secondNum = 0;
    result = 0;
}
