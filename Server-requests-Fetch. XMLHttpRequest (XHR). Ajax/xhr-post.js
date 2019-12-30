function sendRequest(method, url, body = null) {
    return new Promise(function(resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url) 
        xhr.responseType = 'json'
        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.onload = function callback () {
            if (xhr.status >= 400){
                reject(xhr.response)
            }
            else {
                resolve(xhr.response);
            }
        };

        xhr.onerror = () => {
            reject("** An error occurred during the transaction");
        };
            
        xhr.send(JSON.stringify(body));  
    })
}

const body = {
    name: 'Stanislav', 
    age: 30
} 

requestURL = 'https://jsonplaceholder.typicode.com/users'
sendRequest('POST', requestURL, body)
    .then(data => console.log(data))
    .catch(err => console.log(err));


