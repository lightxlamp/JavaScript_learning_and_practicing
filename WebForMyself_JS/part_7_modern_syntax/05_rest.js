const form = document.querySelector('form')

form.addEventListener('submit', event => {
    event.preventDefault();
    const title = form.title.value
    const text = form.text.value
    const desc = form.desc.value

    saveForm(title, text, desc) // passing 3 params instead of obj! Pay attention
})

// Rest 
function saveForm(...args) {
    const [title, text, desc] = args
    const formData = {
        date: new Date().toLocaleDateString(),
        title, text, desc
    }
    console.log('formData', formData);
}
