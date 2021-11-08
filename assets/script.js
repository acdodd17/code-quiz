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

var currentQuestion = 0
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
    var newQuestion = questions[currentQuestion];
    questionEl.textContent = newQuestion.question;
    answer1.textContent = newQuestion.choices[0];
    answer2.textContent = newQuestion.choices[1];
    answer3.textContent = newQuestion.choices[2];
    answer4.textContent = newQuestion.choices[3];
};

var selectAnswer = function () {
    answerButtonsEl.addEventListener("click", selectAnswer);
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
    var response = document.createElement("div");
    response.setAttribute("id", "answer");
    questionContainerEl.appendChild(response);
    // If Correct
    if (questions[currentQuestion].answer === event.target.textContent) {
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
    questionContainerEl.innerHTML = "";
    timerEl.innerHTML = "";

    // Header
    var headerDone = document.createElement("h1");
    headerDone.setAttribute("id", "header-done");
    headerDone.textContent = "All Done!"

    questionContainerEl.appendChild(headerDone);

    // Paragraph
    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    questionContainerEl.appendChild(createP);

    // Calculates time remaining and replaces it with score
    if (secondsLeft >= 0) {
        var timeRemaining = timeLeft;
        var createP2 = document.createElement("p");
        clearInterval(timeInterval);
        createP.textContent = "Your final score is: " + timeRemaining;

        questionContainerEl.appendChild(createP2);
    }

    // Label
    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your initials: ";

    questionContainerEl.appendChild(createLabel);

    // input
    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";

    questionContainerEl.appendChild(createInput);

    // submit
    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";

    questionContainerEl.appendChild(createSubmit);

    // Event listener to capture initials and local storage for initials and score
    createSubmit.addEventListener("click", function () {
        var initials = createInput.value;

        if (initials === null) {

            console.log("No value entered!");

        } else {
            var finalScore = {
                initials: initials,
                score: timeRemaining
            }
            console.log(finalScore);
            var allScores = localStorage.getItem("allScores");
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);
        }
    });

};


startBtnEl.addEventListener("click", startQuiz);
