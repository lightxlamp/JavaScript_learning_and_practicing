export function upload(elSelector, pluginOptions = {}) {

    var $inputField = document.querySelector(elSelector);
    if(pluginOptions.isMultiSelectAllowed) {
        $inputField.setAttribute('multiple', true)
    }
    if(pluginOptions.acceptedType && Array.isArray(pluginOptions.acceptedType)) { 
        $inputField.setAttribute('accept', pluginOptions.acceptedType.join(','))
    }

    var $openBtn = document.createElement('button');
    $openBtn.classList.add('btn');
    $openBtn.textContent = 'Open';
    $openBtn.addEventListener('click', function() {
       $inputField.click(); 
    })

    $inputField.insertAdjacentElement('afterend', $openBtn);
    $inputField.addEventListener('change', function(event){
        console.log(event.target.files);
    });
}