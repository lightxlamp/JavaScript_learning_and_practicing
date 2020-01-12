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