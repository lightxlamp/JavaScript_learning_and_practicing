const xhr = new XMLHttpRequest();

function sendRequest(method, url) {
    return new Promise(function(resolve, reject) {
        xhr.open(method, url) 

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

        xhr.send();  
    })
}

requestURL = 'https://jsonplaceholder.typicode.com/users'
sendRequest('GET', requestURL)
    .then(data => console.log(data))
    .catch(err => console.log(err));