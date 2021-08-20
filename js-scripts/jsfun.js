// Coded by ChristopherMD - 2020

let appDetails = document.getElementById('js-details');
const quiz = document.getElementById('quiz');
const jokes = document.getElementById('jokes');
const lotto = document.getElementById('lotto');
const snake = document.getElementById('snake');

// QUIZ HOVER FUNCTION
quiz.addEventListener('mouseenter', function (e) {
  let appDescription = e.target.getAttribute('data-name');
  appDetails.textContent = appDescription;
  e.target.addEventListener('mouseleave', function () {
    appDetails.textContent =
      'A brief description will display here, upon the hover of each app.';
  });
});
// JOKES HOVER FUNCTION
jokes.addEventListener('mouseenter', function (e) {
  let appDescription = e.target.getAttribute('data-name');
  appDetails.textContent = appDescription;
  e.target.addEventListener('mouseleave', function () {
    appDetails.textContent =
      'A brief description will display here, upon the hover of each app.';
  });
});
// LOTTO HOVER FUNCTION
lotto.addEventListener('mouseenter', function (e) {
  let appDescription = e.target.getAttribute('data-name');
  appDetails.textContent = appDescription;
  e.target.addEventListener('mouseleave', function () {
    appDetails.textContent =
      'A brief description will display here, upon the hover of each app.';
  });
});
// LOTTO HOVER FUNCTION
snake.addEventListener('mouseenter', function (e) {
  let appDescription = e.target.getAttribute('data-name');
  appDetails.textContent = appDescription;
  e.target.addEventListener('mouseleave', function () {
    appDetails.textContent =
      'A brief description will display here, upon the hover of each app.';
  });
});
