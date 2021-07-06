"use strict";

var startBtn = document.querySelector('.start__btn');
var quizArea = document.querySelector('.quiz__area');
startBtn.addEventListener('click', function (e) {
  startBtn.classList.add('display__none');
  quizArea.classList.remove('display__none');
});
var questions = [{
  question: 'Which type of beans are used to make baked beans?',
  answers: ['Cannellini beans', 'Borlotti beans', 'Haricot beans'],
  correct: 'Haricot beans'
}, {
  question: 'Which flower does the spice saffron come from?',
  answers: ['Lily', 'Crocus', 'Orchid'],
  correct: 'Crocus'
}, {
  question: 'Why is white chocolate white?',
  answers: ['It is mostly milk', 'It has no cocoa solids', 'The colour has been bleached out'],
  correct: 'It has no cocoa solids'
}, {
  question: 'What can chocolate cause?',
  answers: ['Acne', 'Migraines', 'Both'],
  correct: 'Migraines'
}, {
  question: 'Which vegetable is a flower you can eat?',
  answers: ['Broccoli', 'Lettuce', 'Squash'],
  correct: 'Broccoli'
}, {
  question: 'What vegetable has varieties known as Bell Tower, Orobelle, and Jupiter?',
  answers: ['Onion', 'Pepper', 'Squash'],
  correct: 'Pepper'
}, {
  question: 'Where in the world did wiener schnitzel come from?',
  answers: ['Italy', 'Austria', 'Germany'],
  correct: 'Austria'
}, {
  question: 'Natural-made honey is:',
  answers: ['Bee poop', 'Bee vomit', 'Bee urine'],
  correct: 'Bee vomit'
}, {
  question: 'Chinese gooseberry is another name for:',
  answers: ['Kiwi', 'Cherry', 'Plum'],
  correct: 'Kiwi'
}, {
  question: 'What percentage of the watermelon is water?',
  answers: ['45 percent', '66 percent', '92 percent'],
  correct: '92 percent'
}]; // Requirements
// 1. Dynamic HTML
// 1.1 Change number
// 1.2 Change question
// 1.3 Change answers
// 2. Change styles of buttons on click
// 3. Make sure we get the correct answer when we do click on the
// correct one
// 4. Reset stylings when we move on
// 5. Randomisation

var shuffle = function shuffle(arr) {
  return arr.sort(function () {
    return .5 - Math.random();
  });
};

shuffle(questions);

var attachCheck = function attachCheck() {
  var buttons = document.querySelectorAll(".answer");
  buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      console.log(event.target.innerHTML);
      console.log(event);
      var answer = event.target.innerHTML;
      checkCorrectAnswer(answer);
    });
  });
}; //question check - question 1 of 10, 2 of 10


var pageNumber = 0;

var incrementPage = function incrementPage() {
  var questionCheck = document.querySelector('.question-check');
  pageNumber++;
  questionCheck.innerHTML = "Question ".concat(pageNumber, " of 10");
}; // Generate dynamic HTML


var generateHTML = function generateHTML(question, answer1, answer2, answer3) {
  // Get the main quiz area
  var main = document.querySelector(".quiz-area"); // Reset to empty

  main.innerHTML = ""; // Add in the stuff I want

  main.innerHTML = "\n    <h2>".concat(question, "</h2>\n    <section>\n      <button class=\"answer\">").concat(answer1, "</button>\n      <button class=\"answer\">").concat(answer2, "</button>\n      <button class=\"answer\">").concat(answer3, "</button>\n    </section>\n  ");
  attachCheck();
}; // start at the first question (index 0)
// When click next - increment the number
// Generate HTML again


var questionNumber = 0;

var incrementQuestion = function incrementQuestion() {
  questionNumber++;
  var question = questions[questionNumber];
  generateHTML(question.question, question.answers[0], question.answers[1], question.answers[2]);
};

var question = questions[questionNumber];
generateHTML(question.question, question.answers[0], question.answers[1], question.answers[2]);
document.querySelector(".next").addEventListener("click", function () {
  incrementQuestion();
  incrementPage();
}); // Set score to zero at the beginning of the game 

var score = 0; // When I click the button

var checkCorrectAnswer = function checkCorrectAnswer(answer) {
  // Check it against the correct answer
  var question = questions[questionNumber]; // IF answer is correct 

  if (question.correct === answer) {
    // When click the correct answer, score 1
    score++;
    console.log(score);
  } else {
    // When click the incorrect answer, score 0
    score = 0;
    console.log(score);
  }
};