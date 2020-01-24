export function getAuthForm() {
  return `
        <form class="mui-form" id="authForm">
            <legend>Please login or signup to see all questions</legend>
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

            <div class="testInfoDiv">
                <p>For Test puproses you could login as a "User: test@gmail.com" with a "Password: 123456"</p>
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

import {API_KEY} from './API_KEY';

export function authWithEmailAndPassword(email, password) {
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
