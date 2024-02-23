const promesseResolue = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promesse résolue");
  }, 1000);
}).then((message) => {
  console.log(message);
});

const promesseRejetee = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promesse rejetée");
  }, 2000);
}).catch((message) => {
  console.log(message);
});
