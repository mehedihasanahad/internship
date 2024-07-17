// JavaScript Destructuring
// The destructuring assignment introduced in ES6 makes it easy to assign array values and object properties to distinct variables. For example,

// Before ES6:

// assigning object attributes to variables
const person = {
    name: 'Sara',
    age: 25,
    gender: 'female'    
}

let name = person.name;
let age = person.age;
let gender = person.gender;

console.log(name); // Sara
console.log(age); // 25
console.log(gender); // female



// =======================================================

// From ES6:
// assigning object attributes to variables
// const person = {
//     name: 'Sara',
//     age: 25,
//     gender: 'female'    
// }

// // destructuring assignment
// let { name, age, gender } = person;

// console.log(name); // Sara
// console.log(age); // 25
// console.log(gender); // female








// ==========================================================
// If you want to assign different variable names for the object key, you can use:

// const person = {
//     name: 'Sara',
//     age: 25,
//     gender: 'female'    
// }

// // destructuring assignment
// // using different variable names
// let { name: name1, age: age1, gender: gender1 } = person;

// console.log(name1); // Sara
// console.log(age1); // 25
// console.log(gender1); // female




// ========================================================================
// Array Destructuring
// const arrValue = ['one', 'two', 'three'];

// // destructuring assignment in arrays
// const [x, y, z] = arrValue;

// console.log(x); // one
// console.log(y); // two
// console.log(z); // three



// ==========================================================


// Assign Default Values
// let arrValue = [10];

// // assigning default value 5 and 7
// let [x = 5,  y = 7] = arrValue;

// console.log(x); // 10
// console.log(y); // 7


// ==================================================================


// Skip Items
// You can skip unwanted items in an array without assigning them to local variables. For example,


// const arrValue = ['one', 'two', 'three'];

// // destructuring assignment in arrays
// const [x, , z] = arrValue;

// console.log(x); // one
// console.log(z); // three



// ===========================================================

// Assign Remaining Elements to a Single Variable
// const arrValue = ['one', 'two', 'three', 'four'];

// const [x, ...y] = arrValue;

// console.log(x); // one
// console.log(y); // ["two", "three", "four"]


// object

// const person = {
//     name: 'Sara',
//     age: 25,
//     gender: 'female'    
// }

// let { name, ...rest } = person;

// console.log(name); // Sara
// console.log(rest); // {age: 25, gender: "female"}






// ====================================================================

// Nested Destructuring Assignment
// const arrValue = ['one', ['two', 'three']];

// // nested destructuring assignment in arrays
// const [x, [y, z]] = arrValue;

// console.log(x); // one
// console.log(y); // two
// console.log(z); // three




// object
// const person = {
//     name: 'Jack',
//     age: 26,
//     hobbies: {
//         read: true,
//         playGame: true
//     }
// }
// // nested destructuring 
// const {name, hobbies: {read, playGame}} = person;

// console.log(name); // Jack
// console.log(read); // true
// console.log(playGame); // true