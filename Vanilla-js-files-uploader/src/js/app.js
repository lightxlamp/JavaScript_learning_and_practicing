import {upload} from './upload.js'

upload('#file-input', {
    isMultiSelectAllowed: true,
    acceptedType: ['.jpg', '.jpeg', '.png', '.gif']
});