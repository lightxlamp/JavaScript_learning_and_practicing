// // My code
// document.querySelector('input[type="button"]').addEventListener('click', function() {
//     let fieldValue = document.querySelector('input[type="text"]').value;
//     if(fieldValue) {
//       localStorage.setItem('fieldValue', fieldValue)
//     }
// })

// My code
// window.onload = function() {
//     let field = document.querySelector('input[type="text"]');
//     let savedFieldValue  = localStorage.getItem('fieldValue');
//     if(savedFieldValue) {
//         field.value = savedFieldValue;
//     }
// } 

// Code from the lesson
document.querySelector('input[type="button"]').addEventListener('click', function() {
    let fieldValue = document.querySelector('input[type="text"]').value;

    var obj = {
        text: fieldValue
    }

    if(fieldValue) {
      localStorage.setItem('fieldValue', JSON.stringify(obj))
    }
})

// Code from the lesson
// document.addEventListener('DOMContentLoaded', function() {
//     let field = document.querySelector('input[type="text"]');
//     let savedFieldValue  = localStorage.getItem('fieldValue');
//     if(savedFieldValue && savedFieldValue.trim()) {
//         field.value = savedFieldValue;
//     }
// })

// Code from the lesson
document.addEventListener('DOMContentLoaded', function() {
    let field = document.querySelector('input[type="text"]');
    let obj; // undefined 
    try {
       obj  = JSON.parse(localStorage.getItem('fieldValue'));
    }
    catch(e) {
        obj = {}
    }
 
    // undefined.text 
    if(obj && obj.text && obj.text.trim()) {
        field.value = obj.text;
    }
})