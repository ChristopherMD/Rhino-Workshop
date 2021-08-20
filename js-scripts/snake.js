// Coded by ChristopherMD - 2020

const grid = document.querySelector('.grid');
const startButton = document.getElementById('start');
const score = document.getElementById('score');
const hiScore = document.getElementById('hi-score');
let squares = [];
let currentSnake = [2, 1, 0];
let direction = 1;
const width = 10;
let appleIndex = 0;
let speed = 1000;
let timerId = 0;

// createGrid() function creates the div elements for the game grid
function createGrid() {
  for (let i = 0; i < width * width; i++) {
    // Create 100 of these elements with a for loop
    const square = document.createElement('div'); // Create element
    square.classList.add('square'); // Add stling to these element
    grid.appendChild(square); // Put the element into our grid
    squares.push(square); // Push it into a new squares array
  }
}
createGrid(); // create game board squares

currentSnake.forEach((index) => squares[index].classList.add('snake')); // add snake class to each square in the currentSnake array

// startGame() function starts the game and resets the score
function startGame() {
  currentSnake.forEach((index) => squares[index].classList.remove('snake'));
  squares[appleIndex].classList.remove('apple');
  clearInterval(timerId);
  currentSnake = [2, 1, 0];
  score.textContent = 0;
  speed = 1000;
  direction = 1;
  timerId = setInterval(move, speed); //start game
  currentSnake.forEach((index) => squares[index].classList.add('snake'));
  generateApple();
  move();
}

// move() function
function move() {
  if (
    //if statement to end game
    (currentSnake[0] + width >= width * width && direction === width) || //if snake hits bottom
    (currentSnake[0] % width === width - 1 && direction === 1) || //if snake hits right wall
    (currentSnake[0] - width < 0 && direction === -width) || //if snake hits top wall
    (currentSnake[0] % width === 0 && direction === -1) || //if snake hits left wall
    squares[currentSnake[0] + direction].classList.contains('snake') //if snake hits itself
  ) {
    if (+score.textContent > +hiScore.textContent) {
      hiScore.textContent = score.textContent;
    }
    console.log(hiScore);
    return clearInterval(timerId); // stops game
  }

  const tail = currentSnake.pop(); // remove last element from currentSnake array
  squares[tail].classList.remove('snake'); // remove styling from last element
  currentSnake.unshift(currentSnake[0] + direction); // add square in the direction we are heading
  squares[currentSnake[0]].classList.add('snake'); // add styling so we can see it

  if (squares[currentSnake[0]].classList.contains('apple')) {
    // if statement for what happens when the snake eats an apple
    squares[currentSnake[0]].classList.remove('apple'); //remove the class of apple
    squares[tail].classList.add('snake'); //grow our snake by adding class of snake to it
    currentSnake.push(tail); //grow our snake array
    generateApple(); //generate new apple
    score.textContent = +score.textContent + 1; //add one to the score //display our score
    clearInterval(timerId); // stop movement to adjust speed
    speed = speed * 0.9; // adjust speed of snake
    timerId = setInterval(move, speed); //restart movement with new snake speed
  }
}

// generateApple() function creates a random place, not occupied by the snake, for an apple
function generateApple() {
  do {
    appleIndex = Math.floor(Math.random() * squares.length); //generate random number called appleIndex
  } while (squares[appleIndex].classList.contains('snake')); //generate new number if random is occupied
  squares[appleIndex].classList.add('apple'); //place new apple on game
}

// control() funtion controls the direction of the snake via arrow keys
function control(e) {
  switch (e.key) {
    case 'Down': // IE/Edge specific value
    case 'ArrowDown':
      direction = width;
      break;
    case 'Up': // IE/Edge specific value
    case 'ArrowUp':
      direction = -width;
      break;
    case 'Left': // IE/Edge specific value
    case 'ArrowLeft':
      direction = -1;
      break;
    case 'Right': // IE/Edge specific value
    case 'ArrowRight':
      direction = 1;
      break;
  }
  // keyCode has been Depreciated
  //   if (e.keyCode === 40) {
  //     // 40 is for the down arrow
  //     direction = width;
  //     console.log('down pressed');
  //   } else if (e.keyCode === 39) {
  //     //39 is right arrow
  //     direction = 1;
  //     console.log('right pressed');
  //   } else if (e.keyCode === 38) {
  //     // 38 is for the up arrow
  //     direction = -width;
  //     console.log('up pressed');
  //   } else if (e.keyCode === 37) {
  //     // 37 is for the left arrow
  //     direction = -1;
  //     console.log('left pressed');
  //   }
}

// Mobile Controls
document.addEventListener('keydown', control);
document.getElementById('move-up').addEventListener('click', () => {
  direction = -width;
});
document.getElementById('move-down').addEventListener('click', () => {
  direction = width;
});
document.getElementById('move-left').addEventListener('click', () => {
  direction = -1;
});
document.getElementById('move-right').addEventListener('click', () => {
  direction = 1;
});
startButton.addEventListener('click', startGame);
