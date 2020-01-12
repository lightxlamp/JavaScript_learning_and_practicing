import "./styles.css";
import { isQuestionLengthValid } from "./utils";
import { fetchTestByStas } from "./utils";
console.log("App working...");

const form = document.getElementById("myForm");
const textField = form.querySelector("#questionTextField");
const submitButton = form.querySelector("#submitBtn");

form.addEventListener("submit", SubmitHandler);
textField.addEventListener("input", function(){ 
    submitButton.disabled = !isQuestionLengthValid(textField.value);
})

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
  textField.value = "";
  textField.className = ""; // to disable red border, after submitting (because question.length = 0)
  submitButton.disabled = false;
}
