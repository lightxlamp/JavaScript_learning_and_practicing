export function upload(elSelector) {

    var $inputField = $('#file-input');
    var $openBtn = document.createElement('button');
    console.log($openBtn);
    $openBtn.classList.add('btn');
    $openBtn.innerText = 'Open';
    $inputField.insertAfter($openBtn)
}