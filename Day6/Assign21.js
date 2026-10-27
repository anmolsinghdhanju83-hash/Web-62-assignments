
"use strict";

// 1. Global scope
let globalMessage = "I am a global variable";

function showGlobal() {
    console.log("Global:", globalMessage);
}

showGlobal();

// 2. Function scope
function showFunctionScope() {
    let localMessage = "I am inside a function";
    console.log("Local:", localMessage);
}

showFunctionScope();

// Uncommenting the next line would cause a ReferenceError:
// console.log(localMessage);

// 3. Block scope
if (true) {
    let blockMessage = "I am inside a block";
    const fixedMessage = "I cannot be reassigned";

    console.log("Block:", blockMessage);
    console.log("Constant:", fixedMessage);
}

// blockMessage is not available outside the if block.

// 4. Hoisting with var
console.log("Before declaration:", hoistedVar);
var hoistedVar = 100;

// 5. Function declaration hoisting
console.log("Function result:", multiply(4, 5));

function multiply(a, b) {
    return a * b;
}
