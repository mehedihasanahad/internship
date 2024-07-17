// JavaScript Nested Function
// In JavaScript, a function can also contain another function. This is called a nested function. For example,


// nested function example

// outer function
function greet(name) {

    // inner function
    function displayName() {
        console.log('Hi' + ' ' + name);
    }

    // calling inner function
    displayName();
}

// calling outer function
greet('John'); // Hi John


// ==================================================================


// Returning a Function
// In JavaScript, you can also return a function within a function. For example,

// function greet(name) {
//     function displayName() {
//         console.log('Hi' + ' ' + name);
//     }

//     // returning a function
//     return displayName;
// }

// const g1 = greet('John');
// console.log(g1); // returns the function definition
// g1(); // calling the function




// ========================================================

// JavaScript Closures
// In JavaScript, closure provides access to the outer scope of a function from inside the inner function, even after the outer function has closed. For example,
// javascript closure example

// outer function
// function greet() {

//     // variable defined outside the inner function
//     let count = 0;

//     // inner function
//     function displayName() {

//         // accessing name variable
//         return 'Number is' + ' ' + ++count;
      
//     }

//     return displayName;
// }

// const displayNameFn = greet();

// console.log(displayNameFn()); // returns the value
// console.log(displayNameFn()); // returns the value
// console.log(displayNameFn()); // returns the value