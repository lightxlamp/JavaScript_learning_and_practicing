export function upload(elSelector) {

    var $inputField = document.getElementById('file-input');
    var $openBtn = document.createElement('button');
    $openBtn.classList.add('btn');
    $openBtn.textContent = 'Open';
    $openBtn.addEventListener('click', function() {
       $inputField.click();
    })

    $inputField.insertAdjacentElement('afterend', $openBtn)
}