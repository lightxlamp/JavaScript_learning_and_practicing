const xhr = new XMLHttpRequest(),
      requestURL = 'https://jsonplaceholder.typicode.com/users',
      method = 'GET'

xhr.open(method, requestURL) 
//xhr.responseType = 'json'

// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequestEventTarget/onload
xhr.onload = function callback () {
    if (xhr.status >= 400){
        console.error(xhr.response)
    }
    else {
        console.log(xhr.response);
        console.log('Response type:', typeof xhr.response);
        console.log(JSON.parse(xhr.response));
    }
};

// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequestEventTarget/onerror

xhr.onerror = () => {
    console.log("** An error occurred during the transaction");
};

xhr.send();