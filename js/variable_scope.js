// Variables can be declared in different scopes:

// Global Scope
// Local (Function) Scope
// Block-Level Scope



// Global Scope

// declare global variable
var message = "Hello";

function globalFn() {
    console.log(`Local: ${message}`);
}

globalFn();

console.log(`Global: ${message}`);
// ===============================================================================



// Local (Function) Scope
function localFn() {

    // local variable
    var localMessage = "Hello";
    
    console.log(`Local: ${localMessage}`);
}

localFn();

// try to access message variable
// outside the localFn() function
console.log(`Global: ${localMessage}`);
// ===============================================================================




// Block-Level Scope
function display_scopes() {
    // declare variable in local scope
    let message = "local";

    if (true) {

        // declare block-level variable
        let message = "block-level";

        console.log(`inner scope: ${message}`);
    }

    console.log(`outer scope: ${message}`);
}

display_scopes();
