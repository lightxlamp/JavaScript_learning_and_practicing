export function upload(elSelector, pluginOptions = {}) {

    const $inputField = document.querySelector(elSelector);
    if(pluginOptions.isMultiSelectAllowed) {
        $inputField.setAttribute('multiple', true)
    }
    if(pluginOptions.acceptedTypes && Array.isArray(pluginOptions.acceptedTypes)) { 
        $inputField.setAttribute('accept', pluginOptions.acceptedTypes.join(','))
    }

    const $openBtn = document.createElement('button');
    $openBtn.classList.add('btn');
    $openBtn.textContent = 'Open';
    $openBtn.addEventListener('click', function() {
       $inputField.click(); 
    })

    $inputField.insertAdjacentElement('afterend', $openBtn);
    $inputField.addEventListener('change', function(event){
        if(event.target.files === 0) {
            return;
        }
        let {files} = event.target;
        console.log(files);
        console.log(Array.isArray(files));
        files = Array.from(files);
        console.log(files);
        console.log(Array.isArray(files));
        files.forEach(file => {
            console.log(file.type);
            if(!file.type.match('image')) {
                return;
            }
            
        });
    });
}