document.querySelector('input[type="button"]').addEventListener('click', function() {
    let fieldValue = document.querySelector('input[type="text"]').value;
    if(fieldValue) {
      localStorage.setItem('fieldValue', fieldValue)
    }
})

window.onload = function() {
    let field = document.querySelector('input[type="text"]');
    let savedFieldValue  = localStorage.getItem('fieldValue');
    if(savedFieldValue) {
        field.value = savedFieldValue;
    }
} 