var timerEl = document.getElementById("counter");
var startBtnEl = document.getElementById("start-btn");
var pageContentEl = document.getElementById("page-content");
var questionContainerEl = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById("answer-buttons");
var answer1 = document.getElementById("1");
var answer2 = document.getElementById("2");
var answer3 = document.getElementById("3");
var answer4 = document.getElementById("4");
var scores 

var questions = [
    {
        question: "Commonly used data types DO NOT include:", 
        answers: [
            {text: "1. strings", correct: false}, 
            {text: "2. booleans", correct: false}, 
            {text: "3. alerts", correct: true}, 
            {text: "4. numbers", correct: false}
        ]
    },
    {
        question: "The condition in an if/else statement is enclosed with ____________.", 
        answers: [
            {text: "1. quotes", correct: false}, 
            {text: "2. curly brackets", correct: false}, 
            {text: "3. parenthesis", correct: true}, 
            {text: "4. square brackets", correct: false}
        ]
    },
    {
        question: "Arrays in JavaScript can be used to store ___________.", 
        answers: [
            {text: "1. numbers and strings", correct: false}, 
            {text: "2. other arrays", correct: false}, 
            {text: "3. booleans", correct: false}, 
            {text: "4. all of the above", correct: true}
        ]
    },
    {
        question: "String values must be enclosed within __________ when being assigned to variables.", 
        answers: [
            {text: "1. commas", correct: false}, 
            {text: "2. curly brackets", correct: false}, 
            {text: "3. quotes", correct: true}, 
            {text: "4. parenthesis", correct: false}
        ]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:", 
        answers: [
            {text: "1. JavaScript", correct: false}, 
            {text: "2. terminal/bash", correct: false}, 
            {text: "3. for loops", correct: false}, 
            {text: "4. console.log", correct: true}
        ]
    }
]; 

var currentQuestion = 0
var lastQuestion = questions.length-1;

var startQuiz = function () {
    console.log("Started");
    countdown();
    questionContainerEl.classList.remove("hide");
    pageContentEl.classList.add("hide");
    currentQuestion = 0;
    setNextQuestion();
};

var setNextQuestion = function () {
    var newQuestion = questions[currentQuestion];
    questionEl.textContent = newQuestion.question;
    answer1.textContent = newQuestion.answers[0].text;
    answer2.textContent = newQuestion.answers[1].text;
    answer3.textContent = newQuestion.answers[2].text;
    answer4.textContent = newQuestion.answers[3].text;
};


var selectAnswer = function () {
    if (questions[currentQuestion].answers.correct === true ) {
        answerCorrect();
    } else {
        console.log("Wrong!");
    }

    if (currentQuestion < lastQuestion) {
        currentQuestion++;
        setNextQuestion();
    }
};

var answerCorrect = function () {
    var correctAnswer = document.createElement('h3');
    correctAnswer.textContent = "Correct!";
    correctAnswer.className = "answer-response";
    correctAnswer.style.borderBottom = "2px solid grey";
    correctAnswer.style.color = "grey";
};

answer1.addEventListener("click", selectAnswer);
answer2.addEventListener("click", selectAnswer);
answer3.addEventListener("click", selectAnswer);
answer4.addEventListener("click", selectAnswer);

function countdown () {
    var timeLeft = 75;

    var timeInterval = setInterval(function() {
        if (timeLeft === 0) {
          clearInterval(timeInterval);
          timerEl.textContent = "Time: 0";
        } else {
            timerEl.textContent = "Time: " + timeLeft;
            timeLeft--;
        }
    }, 1000);
};

var saveScores = function () {

};


startBtnEl.addEventListener("click", startQuiz);
