var timerEl = document.getElementById("counter");
var startBtnEl = document.getElementById("start-btn");
var pageContentEl = document.getElementById("page-content");
var questionContainerEl = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById("answer-buttons");
var response = document.getElementById("response");

var questions = [
    {
        question: "Commonly used data types DO NOT include:", 
        choices: ["1. strings","2. booleans", "3. alerts",  "4. numbers"], 
        answer: "3. alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed with ____________.", 
        choices: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"], 
        answer: "3. parentheses"
    },
    {
        question: "Arrays in JavaScript can be used to store ___________.", 
        choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above", ],
        answer: "4. all of the above"
    },
    {
        question: "String values must be enclosed within __________ when being assigned to variables.", 
        choices: ["1. commas", "2. curly brackets", "3. quotes","4. parenthesis",],
        answer: "3. quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:", 
        choices: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log", ], 
        answer: "4. console.log"
    }
]; 

var currentQuestion = 0;
var lastQuestion = questions.length-1;

var startQuiz = function () {
    countdown();
    console.log("Started");
    questionContainerEl.classList.remove("hide");
    pageContentEl.classList.add("hide");
    currentQuestion = 0;
    setNextQuestion();
};

var setNextQuestion = function () {
    
    for (i = 0; i <= questions.length; i++) {
        var newQuestion = questions[currentQuestion];
        questionEl.innerHTML = newQuestion.question;

        var choices = newQuestion.choices; 
        
        choices.forEach(choice => {
            var button = document.getElementsByClassName('ans-btn');
            button.innerHTML = choice;

            button.addEventListener('click', checkAnswer);
                
            answerButtonsEl.appendChild(button);
        });
        
        currentQuestion++
    }
    
};

var selectAnswer = function (event) {
    var selectedButton = event.target;
    var answer = questions[i].answer;

    checkAnswer();

    if (currentQuestion < lastQuestion) {
        currentQuestion++;
        setNextQuestion();
    } else if (currentQuestion >= questions.length) {
        finished();
        createDiv.textContent = "End of Quiz!"
    };
};

// NOT WORKING!
var checkAnswer = function () { 
    
    // If Correct
    if (answer === selectedButton.innerHTML) {
        response.textContent = "Correct!";
    } else {
    // If wrong, lose 10 seconds
        timeLeft = timeLeft - 10;
        response.textContent = "Wrong!";
    }
};

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

var finished = function () {
    
    // Calculates time remaining and replaces it with score
    if (timeLeft >= 0) {
       
    }

    

};


startBtnEl.addEventListener("click", startQuiz);
