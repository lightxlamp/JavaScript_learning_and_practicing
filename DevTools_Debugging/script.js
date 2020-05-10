document.addEventListener('DOMContentLoaded', () => {

    const num1 = document.querySelector('#num1');
    const num2 = document.querySelector('#num2');
    const btnAdd = document.querySelector('#add');
    const btnSub = document.querySelector('#sub');
    const output = document.querySelector('#output');

    function getInputValues() {
        const val1 = +num1.value; 
        const val2 = parseInt(num2.value); 

        return [val1, val2] 
    }

    function addHandler() {
        const values = getInputValues();
        console.log(values);
        const result = values[0] + values[1];
        displayResult(result);
        console.trace();
    }

    function subHandler() {
        const values = getInputValues();
        const result = values[0] - values[1];
        displayResult(result);
    }

    function displayResult(result) {
        output.closest('.card').style.display = 'block'; //классно не знал про Closest
        output.innerHTML = `Result = ${result}`;
    }

    console.log(btnAdd);
    btnAdd.addEventListener('click', addHandler)
    btnSub.addEventListener('click', subHandler)

});