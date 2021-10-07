// import functions
import { add } from './calculations.js';

console.log(add(50, 212));

// reference needed DOM elements
const addNumber1 = document.getElementById('add-number-1');
const addNumber2 = document.getElementById('add-number-2');
const addButton = document.getElementById('add-button');
const addAnswer = document.getElementById('add-answer');


// set event listeners 
addButton.addEventListener('click', () => {
    
    // get user input(s)
    const num1 = +addNumber1.value;
    const num2 = +addNumber2.value;

   
    // do any needed work with the value(s)
   const sum =  add(num1, num2);

    // update DOM to reflect new value(s)
    addAnswer.textContent = sum;

});