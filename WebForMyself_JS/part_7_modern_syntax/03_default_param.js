function createPost(topic, text, date = new Date().toLocaleDateString()) {
    return {
        topic : topic,
        text : text,
        date : date
    }
}

myPost = createPost('HPTY', 'Hapy Birthday dear friend')
console.log(myPost);