import { Component } from "../core/component";
import { Form } from '../core/form'

export class CreateComponent extends Component {
    constructor(id) {
        super(id)
    }

    init() {
        this.$el.addEventListener('submit', submitHandler.bind(this))

        // 'Angular-like' validation
        this.form = new Form(this.$el, {
            title: [],
            fullText: []
        });
    }
}

function submitHandler(event) {
    event.preventDefault();

    const formData = {
        type: this.$el.type.value,
        ...this.form.value()
    }
    // console.log(formData, this.form.value());
    console.log('Submit', formData)
}