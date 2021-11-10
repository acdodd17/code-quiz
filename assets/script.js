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
var results = document.getElementById("results-box");
var scoreTextEl = document.getElementById("score-text");
var timeLeft = 75;
var timeInterval;

var questions = [
    {
        question: "Commonly used data types DO NOT include:", 
        choices: ["1. strings","2. booleans", "3. alerts",  "4. numbers"], 
        answer: [false, false, true, false]
    },
    {
        question: "The condition in an if/else statement is enclosed with ____________.", 
        choices: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"], 
        //answer: "3. parentheses"
        answer: [false, false, true, false]
    },
    {
        question: "Arrays in JavaScript can be used to store ___________.", 
        choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above", ],
        //answer: "4. all of the above"
        answer: [false, false, true, false]
    },
    {
        question: "String values must be enclosed within __________ when being assigned to variables.", 
        choices: ["1. commas", "2. curly brackets", "3. quotes","4. parenthesis",],
        //answer: "3. quotes"
        answer: [false, false, true, false]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:", 
        choices: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log", ], 
        //answer: "4. console.log"
        answer: [false, false, true, false]
    }
]; 

var currentQuestion = 0;
var lastQuestion = questions.length-1;

var countdown = function () {
    
   timeInterval = setInterval(function() {
        if (timeLeft === 0) {
          clearInterval(timeInterval);
          timerEl.textContent = "Time: 0";
        } else {
            timerEl.textContent = "Time: " + timeLeft;
            timeLeft--;
        }
    }, 1000);
};

var startQuiz = function () {
    countdown();
    console.log("Started");
    questionContainerEl.classList.remove("hide");
    pageContentEl.classList.add("hide");
    currentQuestion = 0;
    setNextQuestion();
};

var setNextQuestion = function () {
    if (questions[currentQuestion] === undefined) {
        finished();
    } else {
        for (i = 0; i <= questions.length; i++) {
            //console.log(questions[currentQuestion]);
            var newQuestion = questions[currentQuestion];
            questionEl.innerHTML = newQuestion.question;
            answer1.innerText = newQuestion.choices[0];
            answer1.setAttribute("answer", newQuestion.answer[0]);
            answer1.addEventListener("click", checkAnswer);
            answer2.innerText = newQuestion.choices[1];
            answer2.setAttribute("answer", newQuestion.answer[1]);
            answer2.addEventListener("click", checkAnswer);
            answer3.innerText = newQuestion.choices[2];
            answer3.setAttribute("answer", newQuestion.answer[2]);
            answer3.addEventListener("click", checkAnswer);
            answer4.innerText = newQuestion.choices[3];  
            answer4.setAttribute("answer", newQuestion.answer[3]);
            answer4.addEventListener("click", checkAnswer);
            
        }
    }
    currentQuestion++
};

// NOT WORKING!
var checkAnswer = function (event) { 
   
    // If Correct
    if (event.target === true) {
        response.textContent = "Correct!";
    } else {
    // If wrong, lose 10 seconds
        timeLeft = timeLeft - 10;
        response.textContent = "Wrong!";
    }

    setNextQuestion();
};

var finished = function () {
    //stop timer
    clearInterval(timeInterval);
    // show results box
    results.classList.remove("hide");
    questionContainerEl.classList.add("hide");

    // Calculates time remaining and uses it as score
    if (timeLeft >= 0) {
        var score = document.createElement("span");
        scoreTextEl.appendChild(score);
        score.textContent = timeLeft;
    }

};


startBtnEl.addEventListener("click", startQuiz);
