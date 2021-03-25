const validInputs = ["0", '1'];
const input = document.querySelector('.binary-input');
const errorDialog = document.querySelector('.tooltip');
const submitButton = document.querySelector('.submit-button');
const decimal = document.querySelector('.decimal');

function checkIfInputIsValid(inputValue) {
    var value = inputValue.value;
    var lastInput = value[value.length - 1]; 

    if (!validInputs.includes(lastInput)) {
        input.value = value.substring(0, value.length - 1);
        errorDialog.style.display = "flex";
    } else {
        errorDialog.style.display = "none";
    }
}

function getKeyAndSubmit(e) {
    if (e.keyCode === 13) {
        submitFunction(e);
    }
}

function submitFunction(e) {
    e.preventDefault();
    if (input.value) {
        decimal.innerHTML = parseInt(input.value, 2);
    }
}

input.setAttribute("oninput", "checkIfInputIsValid(input)");

document.addEventListener('submit', submitFunction);
document.addEventListener('keydown', getKeyAndSubmit);
