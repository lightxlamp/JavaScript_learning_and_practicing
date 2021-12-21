import {upload} from './upload.js'

upload('#file-input', {
    isMultiSelectAllowed: true,
    acceptedTypes: ['.jpg', '.jpeg', '.png', '.gif'],
    onUpload(files) {
        console.log('Files to upload', files);
    }
});