export function getInfoForm() {
  return `
        <form class="mui-form" id="infoForm">
            <legend>Please login or signup to see all questions</legend>

            <div class="testInfoDiv">
                <p>This project was written to:</p>
                <ul style="list-style-type: none">
                    <li>* Practise Vanilla JavaScript</li>
                    <li>* Try one more material design css</li>
                    <li>* To work with Firebase one more time</li>
                </ul>
            </div>

            <div class="buttonWrapper">
                <button
                    id="loginBtn"
                    type="submit"
                    class="mui-btn mui-btn mui-btn--primary"
                    >
                    Login
                </button>
            </div>
        </form>`;
}