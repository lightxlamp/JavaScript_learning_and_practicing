export function getAuthForm() {
  return `
        <form class="mui-form" id="authForm">
            <legend>Ask a question</legend>
            <div
                class="mui-textfield mui-textfield--float-label"
                id="textField"
            >
                <input
                    type="email"
                    id="email"
                    required
                />
                <label for="email">Email</label>
            </div>

            <div
                class="mui-textfield mui-textfield--float-label"
                id="textField"
            >
                <input
                type="password"
                id="password"
                required
                />

                <label for="password">Password</label>
            </div>

            <button
                id="loginBtn"
                type="submit"
                class="mui-btn mui-btn mui-btn--primary"
                >
                Login
            </button>
        </form>`;
}

export function authWithEmailAndPassword(email, password) {
    const API_KEY = 'AIzaSyDtz5gze8pDIqYxZhROoLPbIYoLFHQ4G3w';
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, 
            {
                method: 'POST', 
                body: JSON.stringify({email: email, password: password, returnSecureToken: true}),
                headers: {
                    'Content-Type': 'application/json'
                } 
            })
            .then(response => response.json())
            .then(data => data.idToken)
}
