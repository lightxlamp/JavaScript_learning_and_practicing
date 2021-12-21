let filez = [];

function noop () {}; 

export function upload(elSelector, pluginOptions = {}) {
    
    const onUpload = pluginOptions.onUpload ?? noop;
    const $inputField = document.querySelector(elSelector);
    __applyConfigs($inputField, pluginOptions);
    const $previewBlock = __createElement('div', ['preview']);
    $previewBlock.setAttribute('id', 'preview');

    const $openBtn = __createOpenBtn($inputField);
    const $uploadBtn = __createElement('button', ['btn', 'primary'], 'upload');
    $uploadBtn.setAttribute('id', 'uploadBtn');
    $uploadBtn.style.display = 'none';

    $inputField.insertAdjacentElement('afterend', $previewBlock);
    $inputField.insertAdjacentElement('afterend', $uploadBtn);
    $inputField.insertAdjacentElement('afterend', $openBtn);

    $inputField.addEventListener('change', __changeHandler);
    $previewBlock.addEventListener('click', __removeHandler);
    $uploadBtn.addEventListener('click', __uploadHandler);
}

function __bytesToSize(bytes) {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return '0 Byte';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i)) + ' ' + sizes[i];
 }

 const __createElement = (tag, classes = [], content) => {
    const node = document.createElement(tag);

    if(classes) {
        node.classList.add(...classes)
    }

    if(content) {
        node.textContent = content;
    }

    return node;
 }

function __createOpenBtn($input) {
    const $btn = __createElement('button', ['btn'], 'open');

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
    document.getElementById('preview').innerHTML = ''; // clean preview if select new file (set of files)
    const reader = new FileReader();
    reader.onload = function(event){
        console.log('e', event);
        // var dataURL = reader.result;
        const src = event.target.result;
        console.log('src', src);
            document.getElementById('preview').insertAdjacentHTML('afterbegin', `
                <div class="preview-image">
                    <div class="preview-remove" data-name="${file.name}">&times</div>
                    <img src="${src}" alt="${file.name}" />
                    <div class="preview-info">
                        <span>${file.name}</span> - 
                        <span>${__bytesToSize(file.size)}</span>
                    </div>
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

    filez = Array.from(files);

    console.log(filez);
    console.log(Array.isArray(filez));

    // small logic mistake. For in checking, I know // TODO
    $('#uploadBtn').css('display', 'inline-block');

    filez.forEach(file => {
        console.log(file.type);
        if(!file.type.match('image')) {
            return;
        }
        __openFile(file);
    });
}

function __removeHandler(event) {
    console.log('event.target.dataset', event.target.dataset);
    console.log('event.target.dataset.name', event.target.dataset.name);
    if(! event.target.dataset.name) return;

    const {name} = event.target.dataset; 
    console.log('name:', name);
    console.log('filez', filez);

    filez = filez.filter(file => file.name !== name);

    if(!filez.length) {
        $('#uploadBtn').css('display', 'none');
    }
    
    let blockToDelete = $(`.preview-remove[data-name="${name}"]`).closest('.preview-image');
    console.log('blockToDelete', blockToDelete);
    blockToDelete.addClass('removing');
    setTimeout(() => blockToDelete.remove(), 300);
}

function __uploadHandler(event) {
    
    $('.preview .preview-remove').remove(); // disable deleting file after upload started
    onUpload(filez)
}
