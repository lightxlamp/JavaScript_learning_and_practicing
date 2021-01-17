class ApiService {
    constructor(baseUrl) {
        this.url = baseUrl
    }

    async createPost(post) {
        try {
            const request = new Request(this.url + '/posts.json', {
                method: 'post', 
                body: JSON.stringify(post)
            })
            return sendRequest(request)
        }
        catch(e) {
            console.error(e);
        }   
    }    
    
    async getPosts() {
        try {
            const request = new Request(this.url + '/posts.json', {
                method: 'get'
            })
            return sendRequest(request)
        }
        catch(e) {
            console.error(e);
        }   
    }
}

async function sendRequest(request) {
    const response = await fetch(request)
    return await response.json();
}

export const apiService = new ApiService('https://wfm-js-890b3-default-rtdb.firebaseio.com')