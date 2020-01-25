import "./styles.css";
import { Question } from "./question";
import { getAuthForm, authWithEmailAndPassword } from "./auth";
import {
  fetchTestByStas,
  createModalWindow,
  isQuestionLengthValid
} from "./utils";

console.log("App working...");

const form = document.getElementById("myForm");
const textField = form.querySelector("#questionTextField");
const submitButton = form.querySelector("#submitBtn");
const modalButton = document.getElementById("modalBtn");
const listOfQuestionsDiv = document.getElementById("listOfQuestions");

window.addEventListener("load", Question.renderListOfQuestions);
form.addEventListener("submit", SubmitHandler);
textField.addEventListener("input", function() {
  submitButton.disabled = !isQuestionLengthValid(textField.value);
});
modalButton.addEventListener("click", openModal);

function SubmitHandler(event) {
  event.preventDefault();
  let question = "";
  if (isQuestionLengthValid(textField.value)) {
    question = {
      text: textField.value,
      date: moment().format("DD/MM/YYYY")
    };
    fetchTestByStas();
  }

  submitButton.disabled = true; // To prevent user's spamming this button, during server process the first request
  // Async request to server to save a question
  console.log("Question" + JSON.stringify(question, null, 4));
  Question.create(question).then(() => {
    textField.value = "";
    textField.className = ""; // to disable red border, after submitting (because question.length = 0)
    submitButton.disabled = false;
  });
}

function openModal() {
  createModalWindow("Authorization", getAuthForm());
  document
    .getElementById("authForm")
    .addEventListener("submit", authFormHandler);
}

function authFormHandler(event) {
  event.preventDefault();

  const email = event.target.querySelector("#email").value;
  const password = event.target.querySelector("#password").value;
  const loginButton = event.target.querySelector("#loginBtn");
  loginButton.disabled = true;

  authWithEmailAndPassword(email, password)
    .then(Question.getQuestionsFromDB)
    .then(renderModalAfterAuth)
    .then(() => (loginButton.disabled = false));
}

function renderModalAfterAuth(content) {
  if (typeof content === "string") {
    createModalWindow("Error", content);
  } else {
    //createModalWindow("List of questions", Question.listToHTML(content));
    listOfQuestionsDiv.innerHTML = Question.listToHTML(content);
    mui.overlay('off');
  }
}
