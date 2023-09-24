const axios = require("axios");

// Робимо запит для користувача з даним ID
axios
  .get("http://localhost:4500/profile")
  .then((response) => {
    // обробка успішного запиту
    console.log(response.data);
  })
  .catch(function (error) {
    // обробка помилки
    console.log(error);
  })
  .finally(function () {
    // виконується завжди
  });

let res = fetch("http://localhost:4500/profile");
console.log(res);
