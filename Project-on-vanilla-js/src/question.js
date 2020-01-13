export class Question {
  static create(question) {
    return fetch("https://question-js-proj.firebaseio.com/questions.json", {
      method: "POST",
      body: JSON.stringify(question),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => {
        console.log("response: ", response);
        question.id = response.name;
        return question;
      })
      .then(addToLocalStorage)
      .then(Question.renderListOfQuestions);
  }

  static renderListOfQuestions() {
    const allQuestions = getAllQuestionsInLocalStorage();
    const html = allQuestions.length
      ? allQuestions.map(toCard).join("")
      : `<div class="mui--text-headline">No questions yet</div>`;
    const divForQuestionsList = document.getElementById('listOfQuestions');
    divForQuestionsList.innerHTML = html;
  }
}

function addToLocalStorage(question) {
  const allQuestions = getAllQuestionsInLocalStorage();
  allQuestions.push(question);
  localStorage.setItem("questions", JSON.stringify(allQuestions));
}

function getAllQuestionsInLocalStorage() {
  return JSON.parse(localStorage.getItem("questions") || "[]");
}

function toCard(question) {
    return `<div class="mui--text-title">${question.text}</div>
    <div class="mui--text-black-54">
      By <a href="#">Stas</a> ${question.date}
    </div>`
}
