// Variables can be declared in different scopes:

// Global Scope
// Local (Function) Scope
// Block-Level Scope



// Global Scope

// declare global variable
var message = "Hello Global";

function globalFn() {
    console.log(`Global Scope Local: ${message}`);
}

globalFn();

console.log(`Global Scope Global: ${message}`);
// ===============================================================================



// Local (Function) Scope
// function localFn() {

//     // local variable
//     var localMessage = "Hello Local";
    
//     console.log(`Local Scope Local: ${localMessage}`);
// }

// localFn();

// // try to access message variable
// // outside the localFn() function
// console.log(`Local Scope Global: ${localMessage}`);
// ===============================================================================




// Block-Level Scope
// function display_scopes() {
//     // declare variable in local scope
//     let blockMessage = "local";

//     if (true) {

//         // declare block-level variable
//         let blockMessage = "block-level";

//         console.log(`Block Scope inner if: ${blockMessage}`);
//     }

//     console.log(`Block Scope outer: ${blockMessage}`);
// }

// display_scopes();
