import "./styles.css";
import { Question } from "./question";
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
  createModalWindow("Authorization", "Enter user name and password");
}
