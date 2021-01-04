const loadBtn = document.querySelector('#loadUsers');
loadBtn.addEventListener('click', loadUsers)

function loadUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    console.log('Loading started');

    fetch(url).then((response) => {
        console.log(response);
        return response.json()
    }).then((data) => {
        const ul = document.querySelector('#list');

        let html = data.map(jsonRecord => {
            return `<li>${jsonRecord.id}. ${jsonRecord.name} ${jsonRecord.email}</li>`
        }).join(' ')

        ul.innerHTML = html;
        console.log(data);
    })
}

// https://stackoverflow.com/questions/16126960/what-is-the-difference-between-appendchild-insertadjacenthtml-and-innerhtml
// What is the difference between appendChild, insertAdjacentHTML, and innerHTML
// when writing to innerHTML, it will overwrite the content of the source element. 
// That means the HTML has to be loaded and re-parsed. This is not very efficient especially when using inside loops.