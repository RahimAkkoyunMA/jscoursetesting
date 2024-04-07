// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
    }
    show();
    
    //console.log(functionVar); // Throws ReferenceError
    //console.log(functionLet); // Throws ReferenceError
    //console.log(functionConst); // Throws ReferenceError

/*
    Practice:
    Create one block using {} and declare variables using let, const, and var.
    Then, try to reassign these variables within the curly braces {}. Check for any errors that may occur.
    
    Next, try to reassign the same variables outside the block {} and check if assignment outside the sope of variables where the variables are assigned can be done or not.
*/

{
    // Declare variables using let, const, and var
    let blockLet = "I'm a block-scoped let";
    const blockConst = "I'm a block-scoped const";
    var blockVar = "I'm a block-scoped var";

    // Try to reassign these variables within the curly braces
    try {
        blockLet = "Reassigned block-scoped let";
        blockConst = "Reassigned block-scoped const"; // This will throw an error
        blockVar = "Reassigned block-scoped var";
    } catch (error) {
        console.log(error);
    }
}

// Try to reassign the same variables outside the block
try {
    blockLet = "Reassigned block-scoped let outside the block"; // This will throw an error
    blockConst = "Reassigned block-scoped const outside the block"; // This will throw an error
    blockVar = "Reassigned block-scoped var outside the block";
} catch (error) {
    console.log(error);
}

console.log(blockVar); // This will log "Reassigned block-scoped var outside the block"