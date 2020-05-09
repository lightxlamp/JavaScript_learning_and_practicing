import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'

new Vue({
    el: '#app',
    data () {
        return {
            form: {
                name: '',
                value: ''
            },
            contacts: [
                {id: 1, name: 'Stanislav', value: '+996-555-40-24-25', isMarked: false},
                {id: 2, name: 'Adilet', value: '+996-777-99-77-00', isMarked: true}
            ]
        }
    },

    computed: {
        isDataValid() {
            // trim() защитит от пробелов ) ... Капара на таком ловил в Highlanders :)
            return this.form.value.trim() && this.form.name.trim();
        }
    },
        
    methods: {
        createContact() {
            console.log(this.form);
            const {...contact} = this.form // destructuring and rest operator :P Я их уже понимаю )  
            this.contacts.push({...contact, id: Date.now(), isMarked: false}); 
            console.log(contact)
            this.form.name = this.form.value = '' // Clear fields after submit
        },

        markContact(id) {
            // console.log(id);
            const contact = this.contacts.find(c => c.id === id) 
            contact.isMarked = true;
        },

        deleteContact(id) {
            this.contacts = this.contacts.filter(c => c.id !== id)
        }
    }
})

