const form = document.querySelector('form')

form.addEventListener('submit', event => {
    event.preventDefault();
    const title = form.title.value
    const text = form.text.value
    const desc = form.desc.value

    saveForm({title, text, desc})
})

// function saveForm(data) {
//     // const formData = {
//     //     date: new Date().toLocaleDateString(),
//     //     title: data.title,
//     //     text: data.text,
//     //     desc: data.desc,
//     // }

//     const {title, text, desc} = data
//     const formData = {
//         date: new Date().toLocaleDateString(),
//         title,
//         text,
//         desc,
//     }

//     console.log('formData', formData);
// }

// function saveForm({title, text, desc}) {
//     const formData = {
//         date: new Date().toLocaleDateString(),
//         title, text, desc,
//     }
//     console.log('formData', formData);
// }

// Spread 
function saveForm(data) {
    const formData = {
        date: new Date().toLocaleDateString(),
        ...data
    }
    console.log('formData', formData);
}
