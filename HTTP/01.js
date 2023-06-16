lessonCode()

async function lessonCode() {
    const apiKey = generateKey()
    const itemsURL = 'https://api.boot.dev/v1/courses_rest_api/learn-http/items';
    const items = await getItemData()
    logItems(items)

    async function getItemData() {
        const response = await fetch(itemsURL, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'X-API-Key': apiKey,
                'Content-Type': 'application/json'
            }
        })
        return response.json()
    }

    function generateKey() {
        const characters = 'ABCDEF0123456789'
        let result = ''
        for (let i = 0; i < 16; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        return result
    }

    function isIterable(obj) {
        // checks for null and undefined
        if (obj == null) {
            return false;
        }
        return typeof obj[Symbol.iterator] === 'function';
    }

    function logItems(items) {
        for (const item of items) {
            console.log(item.name)
        }
    }
}