import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'

new Vue({
    el: '#app',
    data () {
        return {
            form: {
                name: '',
                value: ''
            }
        }
    },
    methods: {
        createContact() {
            console.log(this.form);
            const {...contact} = this.form // destructuring and rest operator :P Я их уже понимаю )  
            console.log(contact)
            this.form.name = this.form.value = '' // Clear fields after submit
        }
    }
})

