// 1. this Inside Global Scope

// let a = this;
// console.log(a);  // Window {}

// this.name = 'Sarah';
// console.log(window.name); // Sarah



// ========================================================

// this Inside Function
// function greet() {

//     // this inside function
//     // this refers to the global object
//     console.log(this);
// }

// greet(); // Window {}






// ================================================================

// this Inside Constructor Function
// function Person() {

//     this.name = 'Jack';
//     console.log(this);

// }

// let person1 = new Person();
// console.log(person1.name);


// ====================================================

// this Inside Object Method
// const person = {
//     name : 'Jack',
//     age: 25,

//     // this inside method
//     // this refers to the object itself
//     greet() {
//         console.log(this);
//         console.log(this.name);
//     }
// }

// person.greet();


// =========================================================

// this Inside Inner Function
// const person = {
//     name : 'Jack',
//     age: 25,

//     // this inside method
//     // this refers to the object itself
//     greet() {
//         console.log(this);        // {name: "Jack", age ...}
//         console.log(this.age);  // 25

//         // inner function
//         function innerFunc() {
        
//             // this refers to the global object
//             console.log(this);       // Window { ... }
//             console.log(this.age);    // undefined
            
//         }

//         innerFunc();

//     }
// }

// person.greet();


// =====================================================================

// this Inside Arrow Function

// const greet = () => {
//     console.log(this);
// }
// greet(); // Window {...}


// const greetObj = {
//     name: 'Jack',
//     context: this,

//     // method
//     sayHi: () => {
//         console.log(this);
//     }
// }

// console.log(greetObj.context);
// greetObj.sayHi(); // window


// ===============================================================

// this Inside Function with Strict Mode
// 'use strict';
// this.name = 'Jack';

// function greet() {

//     // this refers to undefined
//     console.log(this);
// }

// console.log(this);
// greet(); // undefined


