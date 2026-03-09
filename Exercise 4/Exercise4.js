// Define numeric variables
const num1 = 10;
const num2 = 5;

// Function for addition
function add(a, b) {
    return a + b;
}

// Function for subtraction
function subtract(a, b) {
    return a - b;
}

// Function for multiplication
function multiply(a, b) {
    return a * b;
}

// Function for division
function divide(a, b) {
    return a / b;
}

// Call the functions and store results
let sum = add(num1, num2);
let difference = subtract(num1, num2);
let product = multiply(num1, num2);
let quotient = divide(num1, num2);

// Display results using template literals
console.log(`The result of ${num1} + ${num2} is ${sum}.`);
console.log(`The result of ${num1} - ${num2} is ${difference}.`);
console.log(`The result of ${num1} * ${num2} is ${product}.`);
console.log(`The result of ${num1} / ${num2} is ${quotient}.`);