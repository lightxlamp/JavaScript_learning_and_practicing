export class Form {
    constructor(form, controls) {
        this.form = form;
        this.controls = controls;
    }

    value() {
        const value = {}

        console.log('this.controls', this.controls);
         
        Object.keys(this.controls).forEach(control => {
            value[control] = this.form[control].value
        })

        return value
    }

    clear () {
        Object.keys(this.controls).forEach(control => {
            this.form[control].value = ''
        })
    }

    isValid() {
        let isFormValid = true;

        Object.keys(this.controls).forEach(control => {
            const validators = this.controls[control];

            let isFieldValid = true;

            validators.forEach(validator => {
                isFieldValid = validator(this.form[control].value) && isFieldValid
            })
            
            isFieldValid ? clearError(this.form[control]) : setError(this.form[control])

            isFormValid = isFormValid && isFieldValid;
        })

        return isFormValid;
    }
}

function setError($field) {
    clearError($field);
    const error = '<p class="validation-error">Enter correct value</p>'
    $field.classList.add('invalid')
    $field.insertAdjacentHTML('afterend', error);
}

function clearError($field) {
    $field.classList.remove('invalid')

    if($field.nextSibling) {
        $field.closest('.form-control').removeChild($field.nextSibling)
    }
}