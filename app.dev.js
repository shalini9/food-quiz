"use strict";

//Variables
//const startPage = document.querySelector('.start__page');
var startBtn = document.querySelector('.start__button');
var optionBtn = document.querySelectorAll('.options button');
var questionText = document.querySelector('.question__h2');
var questionArea = document.querySelector('.question');
var optionsClick = document.querySelector('.options'); // Start button

startBtn.addEventListener('click', function (e) {
  startBtn.classList.add('dis-none');
  questionArea.classList.remove('dis-none');
  optionsClick.classList.remove('dis-none');
}); //Quiz questions

var quiz = [{
  question: 'Which type of beans are used to make baked beans?',
  options: ['Cannellini beans', 'Borlotti beans', 'Haricot beans'],
  answer: 'Haricot beans'
}, {
  question: 'Which flower does the spice saffron come from?',
  options: ['Lily', 'Crocus', 'Orchid'],
  answer: 'Crocus'
}, {
  question: 'Why is white chocolate white?',
  options: ['It is mostly milk', 'It has no cocoa solids', 'The colour has been bleached out'],
  answer: 'It has no cocoa solids'
}, {
  question: 'What can chocolate cause?',
  options: ['Acne', 'Migraines', 'Both'],
  answer: 'Migraines'
}, {
  question: 'Which vegetable is a flower you can eat?',
  options: ['Broccoli', 'Lettuce', 'Squash'],
  answer: 'Broccoli'
}, {
  question: 'What vegetable has varieties known as Bell Tower, Orobelle, and Jupiter?',
  options: ['Onion', 'Pepper', 'Squash'],
  answer: 'Pepper'
}, {
  question: 'Where in the world did wiener schnitzel come from?',
  options: ['Italy', 'Austria', 'Germany'],
  answer: 'Austria'
}, {
  question: 'Natural-made honey is:',
  options: ['Bee poop', 'Bee vomit', 'Bee urine'],
  answer: 'Bee vomit'
}, {
  question: 'Chinese gooseberry is another name for:',
  options: ['Kiwi', 'Cherry', 'Plum'],
  answer: 'Kiwi'
}, {
  question: 'What percentage of the watermelon is water?',
  options: ['45 percent', '66 percent', '92 percent'],
  answer: '92 percent'
}]; //Math.random() to select random questions 

var random = Math.random();
var roundNumber = Math.round(random * 10); // Display the question in h2 tag 

questionText.innerHTML = quiz[roundNumber].question; // Display 3 answers inside 3 buttons

optionBtn[0].innerHTML += quiz[roundNumber].options[0];
optionBtn[1].innerHTML += quiz[roundNumber].options[1];
optionBtn[2].innerHTML += quiz[roundNumber].options[2]; //click event answer buttons, if statement score

var score = 0;
optionBtn.forEach(function (button) {
  button.addEventListener('click', function (e) {
    if (e.target.innerHTML === quiz[roundNumber].answer) {
      score++;
      console.log(score);
    } else if (e.target.innerHTML !== quiz[roundNumber].answer) {
      score = 0;
      console.log(score);
    }
  });
});