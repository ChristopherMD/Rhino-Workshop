// Coded by ChristopherMD - 2019

let displayTitle = document.getElementById('display-title');
const btn = document.getElementById('btn');
const month = document.getElementById('months');
const day = document.getElementById('day');
const year = document.getElementById('year');
const game = document.getElementById('game');
const numbers = document.getElementById('winning-numbers');
let numerologyDisplay = document.getElementById('numerology-total');
let dateTotal;
let numerologyNumber;

// default actions
displayTitle.textContent = `Your LUCKY LOTTO numbers.`;

// Number Generator
btn.addEventListener('click', function () {
  numbers.textContent = '';
  dateTotal = +month.value + +day.value + +year.value;
  numerologyNumber = 0;
  while (dateTotal) {
    numerologyNumber += dateTotal % 10;
    dateTotal = Math.floor(dateTotal / 10);
  }
  if (numerologyNumber > 9) {
    dateTotal = numerologyNumber;
    numerologyNumber = 0;
    while (dateTotal) {
      numerologyNumber += dateTotal % 10;
      dateTotal = Math.floor(dateTotal / 10);
    }
  }
  if (numerologyNumber > 9) {
    dateTotal = numerologyNumber;
    numerologyNumber = 0;
    while (dateTotal) {
      numerologyNumber += dateTotal % 10;
      dateTotal = Math.floor(dateTotal / 10);
    }
  }
  numerologyDisplay.textContent = numerologyNumber;
  let balls;
  let bonusBall;
  let allNumbers = new Array();
  switch (game.value) {
    // Mega Millions
    case '1':
      for (let i = 0; i < 5; i++) {
        balls = roll(1, 71) + +numerologyNumber;
        if (balls > 70) {
          balls %= 70;
        }
        while (allNumbers.includes(balls)) {
          balls = roll(1, 71) + +numerologyNumber;
          if (balls > 70) {
            balls %= 70;
          }
        }
        allNumbers[i] = balls;
      }
      bonusBall = roll(1, 26) + +numerologyNumber;
      if (bonusBall > 25) {
        bonusBall %= 25;
      }
      allNumbers.sort((a, b) => a - b);
      allNumbers.forEach((num) => (numbers.textContent += num + ' '));
      numbers.textContent += ' BB: ' + bonusBall;
      gameName = 'Mega-Millions';
      break;
    // Powerball
    case '2':
      for (let i = 0; i < 5; i++) {
        balls = roll(1, 70) + +numerologyNumber;
        if (balls > 69) {
          balls %= 69;
        }
        while (allNumbers.includes(balls)) {
          balls = roll(1, 70) + +numerologyNumber;
          if (balls > 69) {
            balls %= 69;
          }
        }
        allNumbers[i] = balls;
      }
      bonusBall = roll(1, 27) + +numerologyNumber;
      if (bonusBall > 26) {
        bonusBall %= 26;
      }
      allNumbers.sort((a, b) => a - b);
      allNumbers.forEach((num) => (numbers.textContent += num + ' '));
      numbers.textContent += ' BB: ' + bonusBall;
      gameName = 'Power-Ball';
      break;
    // TEXAS LOTTO
    case '3':
      for (let i = 0; i < 6; i++) {
        balls = roll(1, 55) + +numerologyNumber;
        if (balls > 54) {
          balls %= 54;
        }
        while (allNumbers.includes(balls)) {
          balls = roll(1, 55) + +numerologyNumber;
          if (balls > 54) {
            balls %= 54;
          }
        }
        allNumbers[i] = balls;
      }
      allNumbers.sort((a, b) => a - b);
      allNumbers.forEach((num) => (numbers.textContent += num + ' '));
      gameName = 'Lotto-Texas';
      break;
    // TEXAS TWO STEP
    case '4':
      for (let i = 0; i < 4; i++) {
        balls = roll(1, 36) + +numerologyNumber;
        if (balls > 35) {
          balls %= 35;
        }
        while (allNumbers.includes(balls)) {
          balls = roll(1, 36) + +numerologyNumber;
          if (balls > 35) {
            balls %= 35;
          }
        }
        allNumbers[i] = balls;
      }
      allNumbers.sort((a, b) => a - b);
      allNumbers.forEach((num) => (numbers.textContent += num + ' '));
      bonusBall = roll(1, 36) + +numerologyNumber;
      if (bonusBall > 35) {
        bonusBall %= 35;
      }

      numbers.textContent += ' BB: ' + bonusBall;
      gameName = 'Texas Two-Step';
      break;
    default:
      break;
  }
  displayTitle.textContent =
    "Here's your LUCKY LOTTO WINNING " + gameName + ' NUMBERS!';
});

// Roll function
function roll(min, max, floatFlag) {
  let r = Math.random() * (max - min) + min;
  return floatFlag ? r : Math.floor(r);
}
