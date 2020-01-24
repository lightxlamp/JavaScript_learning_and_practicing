export function isQuestionLengthValid(question) {
  return question.length >= 3 && question.length <= 256;
}

export function fetchTestByStas() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      console.log(response);
      console.log(response.json);
      return response.json();
    })
    .then(myJson => {
      console.log(myJson);
    });
}

export function createModalWindow(title, content) {
  //https://www.muicss.com/docs/v1/css-js/overlay
  const modalWindow = document.createElement('div');
  modalWindow.classList.add('modalWindow')

  const html = `
    <h2 id="authTitle">${title}</h2>
    <div class="modal-content">${content}</div>
  `
  modalWindow.innerHTML = html;

  mui.overlay('on', modalWindow);
}