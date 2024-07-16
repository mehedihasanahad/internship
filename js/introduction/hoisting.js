// Hoisting With 'var'
// When we declare a variable using var, it is hoisted to the top of its current scope. For example,

// use the message variable before declaration
console.log(message);

// variable declaration using var keyword
var message;

// Output: undefined



// =====================================================================


// Hoisting With 'let' and 'const'
// When we declare a variable using let or const, it is hoisted to the top of its current scope. However, the variable does not have a default value when it is hoisted (unlike when declared using var).

// Let's take a look at the example below.
// use the message variable before declaration

// console.log(message);

// // variable declaration using let keyword
// let message;


// =========================================================

// Function Hoisting
// In JavaScript, function hoisting allows us to call the function before its declaration.
// function call

// greeting(); 

// // function declaration
// function greeting() {
//   console.log("Welcome to Programiz.");
// }








// =============================================================

// Initializations Are Not Hoisted
// JavaScript moves the declaration of variables to the top of its scope before the code runs.

// However, the initialization part stays in the original place in the code. For example

// display number
// console.log(number);
// var number = 5;

// Output: undefined
