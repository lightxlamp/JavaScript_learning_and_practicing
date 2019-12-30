// XHR is more reliavble method. Works with all browsers (code the same for all browsers)
requestURL = 'https://jsonplaceholder.typicode.com/users'

function sendGetRequest() {
    return fetch(requestURL).then(response => {
        return response.json()
    })
}

function sendPostRequest(body = null) {
    const headers = {
        'Content-Type': 'application/json'   
    }
    return fetch(requestURL, {
        method: 'POST', 
        body: JSON.stringify(body), 
        headers: headers
    }).then(response => {
        if(response.ok)
        {
            return response.json()
        }
        
    })
}

const body = {
    name: 'Stanislav', 
    age: 30
} 

// sendGetRequest()
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

sendPostRequest(body)
    .then(data => console.log(data))
    .catch(err => console.log(err));