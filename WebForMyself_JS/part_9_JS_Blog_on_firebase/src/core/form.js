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

    isValid() {
        let isFormValid = true;

        Object.keys(this.controls).forEach(control => {
            const validators = this.controls[control];

            let isFieldValid = true;

            validators.forEach(validator => {
                isFieldValid = validator(this.form[control].value) && isFieldValid
            })
            
            isFormValid = isFormValid && isFieldValid;
        })

        return isFormValid;
    }
}