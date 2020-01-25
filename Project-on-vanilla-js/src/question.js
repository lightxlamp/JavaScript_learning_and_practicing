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

  static getQuestionsFromDB(token) {
    if (!token) {
      return Promise.resolve("<p class='error'>Invalid user or password</p>");
    }
    return fetch(
      `https://question-js-proj.firebaseio.com/questions.json?auth=${token}`,
      {
        method: "GET"
      }
    )
      .then(response => response.json())
      .then(response => {
        if (response && response.error) {
          return `<p class='error'>${response.error}</p>`;
        }
        return response
          ? Object.keys(response).map(key => ({ ...response[key], id: key }))
          : [];
      });
  }

  static renderListOfQuestions() {
    const allQuestions = getAllQuestionsInLocalStorage();
    const html = allQuestions.length
      ? allQuestions.map(toCard).join("")
      : `<div class="mui--text-headline">No questions yet</div>`;
    const divForQuestionsList = document.getElementById("listOfQuestions");
    divForQuestionsList.innerHTML = html;
  }

  static listToHTML(questions) {
    return questions.length
      ? `<ol>${questions.map(q => `<li>${q.text}</li>`).join("")}</ol>`
      : `<p>No questions yet</p>`;
  }
}

function addToLocalStorage(question) {
  const allQuestions = getAllQuestionsInLocalStorage();
  allQuestions.push(question);
  localStorage.setItem("questions", JSON.stringify(allQuestions));
}

function getAllQuestionsInLocalStorage() {
  console.log('localStorage.getItem("questions")', localStorage.getItem("questions"));
  return JSON.parse(localStorage.getItem("questions") || "[]");
}

function toCard(question) {
  return `<div class="mui--text-title">${question.text}</div>
    <div class="mui--text-black-54">
      By Stas <a href="#"></a> ${question.date}
    </div>`;
}
