const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success");
  }, 2000);
});

const delay = ms =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Delay: ${ms}`);
    }, ms);
  });

p.then(data => console.log(data));

delay(3000)
    .then(data => delay(2000))
    .then(data => console.log(data));
