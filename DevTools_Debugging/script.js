const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const btnAdd = document.querySelector('#add ');
const btnSub = document.querySelector('#sub');
const output = document.querySelector('#output');

function getInputValues() {
    const val1 = num1.value; 
    const val2 = num2.value; 

    return [val1, val2] 
}

function addHandler() {
    const values = getInputValues();
    const result = values[0] + values[1];
    output.innerHTML = `Result =  ${result}`;
}

function subHandler() {

}

btnAdd.addEventListener('click', addHandler)
btnSub.addEventListener('click', subHandler)

