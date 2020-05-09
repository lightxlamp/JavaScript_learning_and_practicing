const express = require('express')
const path = require('path'); // Для работы с путями подключаем метод
const app = express()
const port = 1789

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