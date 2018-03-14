var questions = ["What is the average ammount of spikes a porcupine has?", "How many times a day does the average person go to the loo?", "What is the average age a woman gets married in Texas?", "What is the average distance flown by a British Airways B747 in a week? (in miles)", "What is the average number of touchdowns in an NFL game?", "What is the average annual water usage of a UK family of 5? (in litres)", "What is the average UK salary? (in GBP)", "How many pairs of shoes does the average British woman own?", "How many tastebuds does the average person have?", "On average,  how many times will your skin replace itself in your lifetime?", "How many snapchats does the average user send a day?", "On an average day,  how many tweets are posted on Twitter?", "What is the average life span in years of a squirrel?", "What is the average amount of food a human consumes in a life time,  in Tons?", "What is the average life span of a mosquito in days?", "What is the average amount of blood vessels in the average person, in KM?", "What is the average amount of leaves a mature oak tree sheds in Autumn?", "What is the average amount of glasses of milk a cow produces in a day?", "What is the average age American Presidents have taken office at?"];
var answers = [30000, 6, 25, 45500, 5, 523, 27300, 20, 10000, 900, 19, 500000000, 9, 35, 14, 97000, 700000, 40, 50];

var ready;
var currentAnswer;
var x;
var questionNumber = 1;
var questionNumberCorrect = 0;
var startingQuestionNumber = answers.length;
var i;
var askedQuestions = [];
var repeat;
var questionState = true;
var gameEnded = false;

window.addEventListener("keypress", function(e) {
  var keycode = e.keyCode;
  if (keycode == 13) {
    e.preventDefault();
    enterKeyChoose();
  }
}, false);


function play() {
  nextQuestion();
  autoSelectInput();
  console.log("play");
}

function autoSelectInput() {
  var input = document.getElementById('current_answer');
  input.focus();
  input.select();
}

function randomQuestion() {
  i = Math.floor(Math.random() * Math.floor(answers.length));
  //noRepeatQuestion();
  console.log("randomQuestion");
}

function deleteFromArray() {
  questions.splice(i, 1);
  answers.splice(i, 1);
  console.log("deleteFromArray");
}

function enterKeyChoose() {
  if (gameEnded == false) {
    if (questionState) {
      document.getElementById("check_answer_btn").click();
    } else {
      document.getElementById("next_question_btn").click();
    }
  }
  console.log("enterKeyChoose");
}

function checkAnswer() {
  x = document.getElementById("answer_input");
  currentAnswer = x.elements["answer"].value;
  if (currentAnswer == answers[i]) {
    document.getElementById('correct_incorrect').innerHTML = "You got it RIGHT!";
    questionNumberCorrect++;
  } else {
    document.getElementById('correct_incorrect').innerHTML = "You got it WRONG!";
    document.getElementById('correct_answer').innerHTML = "The correct answer is " + answers[i];
  }
  reset();
  questionState = false;
  console.log("checkAnswer");
}

function reset() {
  questionNumber++;
  deleteFromArray();
  hideQuestion();
  showAnswer();
  document.getElementById("answer_input").reset();
  if (questionNumber >= startingQuestionNumber) {
    end();
  }
  console.log("reset");
}

function nextQuestion() {
  randomQuestion();
  document.getElementById('question').innerHTML = questions[i];
  showQuestion();
  hideAnswer();
  autoSelectInput();
  document.getElementById('question_number').innerHTML = "Question Number: " + questionNumber;
  document.getElementById('correct_number').innerHTML = "Number Correct: " + questionNumberCorrect;
  questionState = true;
  console.log("nextQuestion");
}

function showQuestion() {
  document.getElementById('question').style.display = "block";
  document.getElementById('answer_input').style.display = "block";
  document.getElementById('check_answer_btn').style.display = "block";
  console.log("showQuestion");
}

function showAnswer() {
  document.getElementById('next_question_btn').style.display = "block";
  document.getElementById('correct_incorrect').style.display = "block";
  document.getElementById('correct_answer').style.display = "block";
  console.log("showAnswer");
}

function hideQuestion() {
  document.getElementById('question').style.display = "none";
  document.getElementById('answer_input').style.display = "none";
  document.getElementById('check_answer_btn').style.display = "none";
  console.log("hideQuestion");
}

function hideAnswer() {
  document.getElementById('next_question_btn').style.display = "none";
  document.getElementById('correct_incorrect').style.display = "none";
  document.getElementById('correct_answer').style.display = "none";
  console.log("hideAnswer");
}

function end() {
  hideQuestion();
  hideAnswer();
  gameEnded = true;
  console.log("end");
}
