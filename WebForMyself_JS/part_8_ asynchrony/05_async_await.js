// not supported in all browsers 
// https://caniuse.com/?search=await

const loadBtn = document.querySelector('#loadUsers');
loadBtn.addEventListener('click', loadUsers)
const url = 'https://jsonplaceholder.typicode.com/users';

async function loadUsers() {
    // fetch(url).then((response) => {
    //     console.log(response);
    //     return response.json()
    // }).then((data) => {
    //     const ul = document.querySelector('#list');

    //     let html = data.map(jsonRecord => {
    //         return `<li>${jsonRecord.id}. ${jsonRecord.name} ${jsonRecord.email}</li>`
    //     }).join(' ')

    //     ul.innerHTML = html;
    //     console.log(data);
    // })

    let response = await fetch(url);
    let data = await response.json(); 

    let html = data.map(jsonRecord => {
        return `<li>${jsonRecord.id}. ${jsonRecord.name} ${jsonRecord.email}</li>`
    }).join(' ')

    document.querySelector('#list').innerHTML = html;
    console.log(data);
} 