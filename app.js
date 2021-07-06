const startBtn = document.querySelector('.start__btn');
const quizArea = document.querySelector('.quiz__area');


startBtn.addEventListener('click', (e) => {
  startBtn.classList.add('display__none');
  quizArea.classList.remove('display__none');
})


const questions = [ 
  {
    question: 'Which type of beans are used to make baked beans?',
    answers: ['Cannellini beans', 'Borlotti beans', 'Haricot beans'],
    correct: 'Haricot beans' 
  },
  {
    question: 'Which flower does the spice saffron come from?',
    answers: ['Lily', 'Crocus', 'Orchid'],
    correct: 'Crocus'
  },
  {
    question: 'Why is white chocolate white?',
    answers: ['It is mostly milk', 'It has no cocoa solids', 'The colour has been bleached out'],
    correct: 'It has no cocoa solids'
  },
  {
    question: 'What can chocolate cause?',
    answers: ['Acne', 'Migraines', 'Both'],
    correct: 'Migraines'
  },
  {
    question: 'Which vegetable is a flower you can eat?',
    answers: ['Broccoli', 'Lettuce', 'Squash'],
    correct: 'Broccoli'
  },
  {
    question: 'What vegetable has varieties known as Bell Tower, Orobelle, and Jupiter?',
    answers: ['Onion', 'Pepper', 'Squash'],
    correct: 'Pepper'
  },
  {
    question: 'Where in the world did wiener schnitzel come from?',
    answers: ['Italy',  'Austria', 'Germany'],
    correct: 'Austria'
  },
  {
    question: 'Natural-made honey is:',
    answers: ['Bee poop', 'Bee vomit', 'Bee urine'],
    correct: 'Bee vomit'
  },
  {
    question: 'Chinese gooseberry is another name for:',
    answers: ['Kiwi', 'Cherry', 'Plum'],
    correct: 'Kiwi'
  },
  {
    question: 'What percentage of the watermelon is water?',
    answers: ['45 percent', '66 percent', '92 percent'],
    correct: '92 percent'
  }
];

// Requirements
// 1. Dynamic HTML
// 1.1 Change number
// 1.2 Change question
// 1.3 Change answers
// 2. Change styles of buttons on click
// 3. Make sure we get the correct answer when we do click on the
// correct one
// 4. Reset stylings when we move on
// 5. Randomisation

const shuffle = arr => arr.sort(() => .5 - Math.random());
shuffle(questions);

const attachCheck = () => {
  const buttons = document.querySelectorAll(".answer");
  buttons.forEach(button => {
    button.addEventListener("click", (event) => {
      console.log(event.target.innerHTML)
      console.log(event)
      const answer = event.target.innerHTML;
      checkCorrectAnswer(answer);
    })
  })
}

//question check - question 1 of 10, 2 of 10

let pageNumber = 0;
const incrementPage = () => {
  const questionCheck = document.querySelector('.question-check');
  pageNumber++ 
  questionCheck.innerHTML = `Question ${pageNumber} of 10`;
}

// Generate dynamic HTML
const generateHTML = (question, answer1, answer2, answer3) => {
  // Get the main quiz area
  const main = document.querySelector(".quiz-area");
  // Reset to empty
  main.innerHTML = "";
  // Add in the stuff I want
  main.innerHTML = `
    <h2>${question}</h2>
    <section>
      <button class="answer">${answer1}</button>
      <button class="answer">${answer2}</button>
      <button class="answer">${answer3}</button>
    </section>
  `;
  attachCheck();
};
// start at the first question (index 0)
// When click next - increment the number
// Generate HTML again
let questionNumber = 0;
const incrementQuestion = () => {
  questionNumber++;
  const question = questions[questionNumber];
  generateHTML(
    question.question,
    question.answers[0],
    question.answers[1],
    question.answers[2],
  );
};

const question = questions[questionNumber];
generateHTML(
  question.question,
  question.answers[0],
  question.answers[1],
  question.answers[2],
);
document.querySelector(".next").addEventListener("click", () => {
  incrementQuestion();
  incrementPage();
})


// Set score to zero at the beginning of the game 
let score = 0;
// When I click the button
const checkCorrectAnswer = (answer) => {
  // Check it against the correct answer
  const question = questions[questionNumber]
  // IF answer is correct 
  if (question.correct === answer) {
    // When click the correct answer, score 1
    score++
    console.log(score);
  } else {
    // When click the incorrect answer, score 0
    score = 0
    console.log(score);
  }
}





