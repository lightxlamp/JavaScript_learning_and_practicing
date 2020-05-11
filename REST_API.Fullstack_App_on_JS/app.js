const express = require('express')
const path = require('path')   // Для работы с путями подключаем метод
const {v4} = require('uuid')
const app = express()
const port = 1789

// It is like DB :P on server
let CONTACTS = [
    {id: 1, name: 'Stanislav', phone: '+996-555-40-24-25', isMarked: false},
    {id: 2, name: 'Adilet', phone: '+996-777-99-77-00', isMarked: true}
]

// Поначалу request не умеет работать с JSON мы научим его с помощью Middleware 
app.use(express.json() )

app.get('/api/contacts', (req, res) => {
    setTimeout(() => {
        res.status(200).json(CONTACTS);
    }, 1500)
})

app.post('/api/contacts', (req, res) => {
    console.log(req.body);
    // In real applications - client validation goes here. 
    const contact = {...req.body, id: v4(), isMarked: false}
    CONTACTS.push(contact)
    // 201 Created. The request has been fulfilled and has resulted in one or more new resources being created
    res.status(201).json(contact);
})

app.delete('/api/contacts/:id', (req, res) => {
    console.log('Delete ');
    CONTACTS = CONTACTS.filter(c => c.id !== req.params.id)
    res.status(200).json({message: 'Contact has been deleted'})
})

app.put('/api/contacts/:id', (req, res) => {
    const indexOfObject = CONTACTS.findIndex(c => c.id === req.params.id)
    CONTACTS[indexOfObject] = req.body
    // No need to write status 200, every time (200 is default status)
    res.json(CONTACTS[indexOfObject])
})

// Для того чтобы корректно отдавать статические файлы с Client мы должны обозначить данную папку как статическую
// С помощью USE добавляем middleware (вот оно и middleware)
// Пришлось загуглить :P Потому, что пропустил эту тему в "Nuxt - Vue on Steroids" курсе (не дошел)
// HTTP Middleware (посредники) - это фильтры обработки HTTP-запроса. Так, например, в Laravel включены middlewares для проверки аутентификации
// Папку Client мы делаем статической потому, что в index файле используется CDN скрипт 
app.use(express.static(path.resolve(__dirname, 'client')))
// Когда мы выполняем метод GET по любым Router'ам. То выполняй ф-ию
app.get('*', (req, res) => {
    // обратиться к текущей директории. Найти папку client и в ней файл.
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
})

app.listen(port, () => console.log('Server has been started on port: ' + port + '...'))