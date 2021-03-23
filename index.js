const validInputs = ["0", '1'];
const input = document.querySelector('.binary-input');
const errorDialog = document.querySelector('.tooltip');

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

input.setAttribute("oninput", "checkIfInputIsValid(binary)");
