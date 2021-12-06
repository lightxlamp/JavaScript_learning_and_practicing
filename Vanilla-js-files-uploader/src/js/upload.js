export function upload(elSelector, pluginOptions = {}) {
    
    const $inputField = document.querySelector(elSelector);
    __applyConfigs($inputField, pluginOptions);
    const $previewBlock = document.createElement('div');
    $previewBlock.classList.add('preview');
    const $openBtn = __createOpenBtn($inputField);
    $inputField.insertAdjacentElement('afterend', $previewBlock);
    $inputField.insertAdjacentElement('afterend', $openBtn);

    $inputField.addEventListener('change', __changeHandler)
}

function __createOpenBtn($input) {
    const $btn = document.createElement('button');
    $btn.classList.add('btn');
    $btn.textContent = 'Open';
    $btn.addEventListener('click', function() {
        $input.click(); 
     })
    return $btn;
}

function __applyConfigs($input, pluginOptions) {
    if(pluginOptions.isMultiSelectAllowed) {
        $input.setAttribute('multiple', true)
    }
    if(pluginOptions.acceptedTypes && Array.isArray(pluginOptions.acceptedTypes)) { 
        $input.setAttribute('accept', pluginOptions.acceptedTypes.join(','))
    }
}

var __openFile = function(file) {
    const reader = new FileReader();
    reader.onload = function(event){
        var dataURL = reader.result;
        //   var output = document.getElementById('output');
        //   output.src = dataURL;
            $previewBlock.insertAdjacentElement(`
                <div class="preview-image">
                    <img src="${dataURL}">
                </div>
            `);
    };
    reader.readAsDataURL(file);
  };

function __changeHandler(event) {
    if(!event.target.files) {
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
        __openFile(file);
    });
}

