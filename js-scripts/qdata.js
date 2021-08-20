// Coded by ChristopherMD - 2020

// Questions NO CHEATING!!!!
const quizData = [
  {
    num: '1',
    q: `What has Christopher done before?`,
    a: `Finished in the top 20 at a Boston Marathon.`,
    b: `Attended a Britiney Spears wedding.`,
    c: `Been in a shark cage off Guadalupe Island, Mexico.`,
    d: `Flown a fully armed AH-64 Apache helicopter.`,
    e: `Has won a bull riding competition.`,
    correct: `x`,
  },
  {
    num: '2',
    q: `What was the occupation of Christopher's father?`,
    a: `A Comedy Writer.`,
    b: `An Astrophysicist.`,
    c: `A US Army Helicopter Pilot.`,
    d: `A FORTRAN Programmer.`,
    e: `An NFL Defensive Coordinator.`,
    correct: `x`,
  },
  {
    num: '3',
    q: `What was the occupation of Christopher's mother?`,
    a: `A Fashion Designer.`,
    b: `A FORTRAN Programmer.`,
    c: `An Leading Activist for the Feminist Movement.`,
    d: `A Playboy Bunny.`,
    e: `A Botanist.`,
    correct: `x`,
  },
  {
    num: '4',
    q: `What is true about Christopher?`,
    a: `He burned his family house down, doing experiments in the garage at age 12.`,
    b: `He has base jumped off a building in 4 major cities.`,
    c: `He worked on the NFL's investigation of the N.E. Patriot's Deflategate Scandal.`,
    d: `He had acting roles in several major motion pictures and prime-time TV shows.`,
    e: `He was a US Olympic Athelete of the 2012 Summer Games.`,
    correct: `x`,
  },
  {
    num: '5',
    q: `What other skills does Christopher have besides coding?`,
    a: `A licensed Helicopter Pilot.`,
    b: `A certified Open Water Scuba Instructor.`,
    c: `A certified Paralegal.`,
    d: `A certified Phlebotomist.`,
    e: `A certified Defensive Driver (assassination & kidnapping scenerios).`,
    correct: `x`,
  },
  {
    num: '6',
    q: `When did Christopher build his first website?`,
    a: `2016`,
    b: `2011`,
    c: `2001`,
    d: `2021`,
    e: `Never, he hired someone to build this site.`,
    correct: `x`,
  },
  {
    num: '7',
    q: `What is true about Christopher?`,
    a: `He played minor league baseball.`,
    b: `He played minor league ice hockey.`,
    c: `He was an Olympic athelete.`,
    d: `He was a professional Rodeo Clown.`,
    e: `None of the above.`,
    correct: `x`,
  },
  {
    num: '8',
    q: `What type of animal did Christopher once have as a house pet?`,
    a: `A Fennec Fox.`,
    b: `A Racoon.`,
    c: `A Kinkajou.`,
    d: `A Chimpanzee.`,
    e: `A tiger.`,
    correct: `x`,
  },
  {
    num: '9',
    q: `Which one is true about Christopher?`,
    a: `He has been caught in a major Earthquake.`,
    b: `He has been caught in a major Hurricane.`,
    c: `He has been caught in a major Tornado.`,
    d: `He has been caught in a major Tsunami.`,
    e: `None of the above.`,
    correct: `x`,
  },
  {
    num: '10',
    q: `What was Christopher once hired to do?`,
    a: `Be a tow truck driver.`,
    b: `Be a model scout for Playboy Magazine.`,
    c: `Pose for a record album that went gold.`,
    d: `Be a bodygaurd for Tom Selleck.`,
    e: `All of the above.`,
    correct: `x`,
  },
  {
    num: '11',
    q: `What is true about Christopher?`,
    a: `He successfully hacked the FBI.`,
    b: `He has programmed a video game.`,
    c: `He built & programmed a full standing Rasberry Pi arcade machine.`,
    d: `Rooted his cell phone a built a custom operating system.`,
    e: `Created several plugins for WordPress.`,
    correct: `x`,
  },
  {
    num: '12',
    q: `What is true about Christopher?`,
    a: `He was inside the control room during a Space X rocket launch.`,
    b: `Help set a Guinness World Record for Most People on an Elephant.`,
    c: `He fell overboard on a cruise ship and was rescued 2 days later.`,
    d: `He played guitar for a band that opened for Metallica.`,
    e: `All of the above.`,
    correct: `x`,
  },
  {
    num: '13',
    q: `What is true about Christopher?`,
    a: `He is a dietary coach for the Carnivore Diet.`,
    b: `He has built several Aquaponic Systems.`,
    c: `He has experimented with magnetic self-propelled generators.`,
    d: `He has been on archeological digs.`,
    e: `He is a competative bird caller.`,
    correct: `x`,
  },
  {
    num: '14',
    q: `What is true about Christopher?`,
    a: `He attended a Worlds Fair in another country with press credentials.`,
    b: `He has ghost hunted in several states.`,
    c: `He has met four U.S. Presidents.`,
    d: `He has returned a lost briefcase with $36,000 to its rightful owner.`,
    e: `All of the above.`,
    correct: `x`,
  },
  {
    num: '15',
    q: `How old was Christopher when he earned his first paycheck?`,
    a: `7`,
    b: `5`,
    c: `12`,
    d: `16`,
    e: `Still haven't found a job to this day.`,
    correct: `x`,
  },
  {
    num: '16',
    q: `What is true about Christopher?`,
    a: `He once had dinner with Dr. Timothy Leary.`,
    b: `He once had dinner with Bill Gates.`,
    c: `He once had dinner with Steve Jobs.`,
    d: `He once had dinner with Jeffrey Dahmer.`,
    e: `He once had dinner with Colin Kaepernick.`,
    correct: `x`,
  },
  {
    num: '17',
    q: `What is the largest crowd Christopher has had to speak to?`,
    a: `1,000`,
    b: `5,000`,
    c: `10,000`,
    d: `50,000`,
    e: `Not more than 10, he has glossophobia.`,
    correct: `x`,
  },
  {
    num: '18',
    q: `What language did Christopher NOT get an 'A' in, for his programming degree?`,
    a: `JavaScript`,
    b: `HTML5`,
    c: `CSS3`,
    d: `PHP`,
    e: `None of the above. He got all A's.`,
    correct: `x`,
  },
  {
    num: '19',
    q: `What electronic devises does Christopher NOT own?`,
    a: `Oculus Developers Kit 2`,
    b: `XP-Pen`,
    c: `Apple Watch Series 6`,
    d: `Oculus Rift S`,
    e: `Israeli Army Night Vision Goggles`,
    correct: `x`,
  },
  {
    num: '20',
    q: `What sport hasn't christopher played as an adult?`,
    a: `Ice Hockey`,
    b: `Baseball`,
    c: `Bowling`,
    d: `Basketball`,
    e: `Golf`,
    correct: `x`,
  },
];

const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const answerEl = document.querySelectorAll('.answers');
const answerA = document.getElementById('answer-a');
const answerB = document.getElementById('answer-b');
const answerC = document.getElementById('answer-c');
const answerD = document.getElementById('answer-d');
const answerE = document.getElementById('answer-e');
const submitBtn = document.getElementById('btn');

let currentQuestion = 0;
let score = 0;

const randomArray = [];
numOfQuestions = 7;
function questionPack() {
  for (let i = 0; i < numOfQuestions; i++) {
    let randomNum = randomNumber();
    if (randomArray.includes(randomNum)) {
      randomNum = randomNumber();
      i--;
    } else {
      randomArray.push(randomNum);
    }
  }
}
questionPack();
let questionNum = 0;
function randomNumber() {
  let x = Math.floor(Math.random() * 20);
  return x;
}
loadQuiz();
function loadQuiz() {
  deselectAnswers();
  questionNum = randomArray[currentQuestion];
  const currentQuizData = quizData[questionNum];

  questionEl.innerText = currentQuizData.q;

  answerA.innerText = currentQuizData.a;
  answerB.innerText = currentQuizData.b;
  answerC.innerText = currentQuizData.c;
  answerD.innerText = currentQuizData.d;
  answerE.innerText = currentQuizData.e;
}

function selectedAnswer() {
  let answer = undefined;

  answerEl.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEl.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener('click', () => {
  if (currentQuestion > 6) {
    window.open('contact.html', '_top');
  } else {
    const answer = selectedAnswer();

    if (answer) {
      if (answer === quizData[questionNum].correct) {
        score++;
      }
      currentQuestion++;
    }
    if (currentQuestion < 7) {
      loadQuiz();
    } else {
      answerEl.forEach((answerEl) => {
        answerEl.style.display = 'none';
      });
      answerA.style.display = 'none';
      answerB.style.display = 'none';
      answerC.style.display = 'none';
      answerD.style.display = 'none';
      answerE.style.display = 'none';
      submitBtn.textContent = 'Contact Christopher';
      if (score == 7) {
        questionEl.textContent = `Wow, you got a perfect score! You must have Jedi mind powers. You probably also know what an amazing addition I'll be to your team. Select that contact button and lets get this hiring process started!`;
      } else if (score > 3) {
        questionEl.textContent = `Your judging skills are impressive. You got ${score} out of 7 right. If you are curious what you knew about me, select that contact button and lets get an interview started.`;
      } else if (score > 0) {
        questionEl.textContent = `Hmm, judging a book by it's cover is not your forte, you only got ${score} out of 7 right. Let me fill you in on what you got right and how I will be a great addition to your team by selecting the contact button.`;
      } else {
        questionEl.textContent = `Yikes! You missed every one. Looks like you need a little more information. Allow me to share the details of how I will make a great addition to your team by selecting the contact button.`;
      }
    }
  }
});
