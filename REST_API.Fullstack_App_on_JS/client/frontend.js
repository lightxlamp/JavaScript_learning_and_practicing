import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'

new Vue({
    el: '#app',
    data () {
        return {
            form: {
                name: '',
                value: ''
            },
            contacts: []
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
        },
    }
})

// Async / Await - синтаксический сахар, оторый удобнее нам позволяет взаимодействовать с Promise'ами 
async  function request(url, method = 'GET', data = null) {
     try {
        const headers = {}
        let body

        if (data) {
            headers['Content-Type'] = 'application/json' 
            body = JSON.stringify(data)
        }

        // метод встроенный в браузер... для AJAX запросов      
        const response = await fetch(url, {method, headers, body  }) 

        return await response.json(); 
     }
     catch(e) {
        console.warn('Error', e.message )
     }
}

