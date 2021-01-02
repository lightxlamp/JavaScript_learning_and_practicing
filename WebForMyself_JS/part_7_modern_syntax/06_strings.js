const createLink = ({path, name}) => '<a href="' + path + '" target="_blank">' + name + '</a>'
const createLinkV2 = ({path, name}) => `<a href="${path}" target="_blank">${name}</a>`

const ul = document.querySelector('ul')

ul.insertAdjacentHTML('afterbegin', '<li>' + createLink({path: 'https://google.com', name: 'Google'}) + '</li>')
ul.insertAdjacentHTML('afterbegin', '<li>' + createLink({path: 'https://ya.ru', name: 'Yandex'}) + '</li>')
ul.insertAdjacentHTML('afterbegin', '<li>' + createLinkV2({path: 'https://igromania.ru', name: 'Igromania'}) + '</li>')

const s = `
    Hello 
        World 
            I am new tab   
        :)
`

console.log(s);