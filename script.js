// Function to handle button clicks
function solve(val) {
    var display = document.querySelector(".display");
    var currentValue = display.value.trim();

    // Check if trying to input * / + at the beginning or after another operator
    if ((currentValue === '' && ['*', '/', '+'].includes(val)) ||
        (isOperator(currentValue.slice(-1)) && ['*', '/', '+'].includes(val))) {
        return; // Do nothing
    }

    // Convert '005' into '5'
    if (currentValue === '0' && !isOperator(val)) {
        display.value = val;
    } else {
        display.value += val;
    }
}

// Function to evaluate the expression
function result() {
    var display = document.querySelector(".display");
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}

// Function to delete last character
function del() {
    var display = document.querySelector(".display");
    display.value = display.value.slice(0, -1);
}

// Function to clear the display completely
function clearAll() {
    var display = document.querySelector(".display");
    display.value = "";
}

// Function to handle button clicks and keyboard input
function handleInput(event) {
    var key = event.key;
    var display = document.querySelector(".display");

    if (event.ctrlKey && key === "Backspace") {
        clearAll();
        event.preventDefault();
    } else if (/[0-9\.\/\*\-\+]/.test(key)) {
        solve(key);
    } else if (key === "Enter") {
        event.preventDefault();
        result();
    } else if (key === "Backspace") {
        event.preventDefault();
        del();
    }
}

// Event listener for keyboard input
document.addEventListener("keydown", handleInput);

// Helper function to check if the input is an operator
function isOperator(val) {
    return ['+', '-', '*', '/'].includes(val);
}
