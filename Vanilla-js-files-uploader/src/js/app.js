import {upload} from './upload.js'

upload('#file-input', {
    isMultiSelectAllowed: true,
    acceptedTypes: ['.jpg', '.jpeg', '.png', '.gif']
});