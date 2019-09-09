// $(document).ready(function () {

// Declare variables, objects

var i = 0;  // Count incrementor
var score = 0;  // Game score
var gameStarted = false;
var countdownTimer;

var triviaQ = [
    {
        question: "Let's start with an easy one.  Which of these is the flag of Canada?",
        response: ["United Kingdom", "Canada", "USA", "China"],
        correctAns: "B"
    },
    {
        question: "We're off to Scandinavia.  Which of these is the flag for Norway?",
        response: ["Finland", "Sweden", "Denmark", "Norway"],
        correctAns: "D"
    },
    {
        question: "Okay, South America here we come!  Which of these is the flag of Brazil?",
        response: ["Brazil", "Argentina", "Chile", "Uruguay"],
        correctAns: "A"
    },
    {
        question: "That was easy - but they will get harder.  Which of these is the flag of England?",
        response: ["Scotland", "Wales", "England", "Northern Ireland"],
        correctAns: "C"
    },
    {
        question: "Which of these is the flag of Portugal?",
        response: ["Spain", "Portugal", "France", "Italy"],
        correctAns: "B"
    },
    {
        question: "Okay, a tough one: Which of these is the flag of Peru?",
        response: ["Austria", "Monaco", "Hungary", "Peru"],
        correctAns: "D"
    },
    {
        question: "Let's make our way to North Africa.  Which of these is the flag of Morocco? Take your time.",
        response: ["Morocco", "Algeria", "Tunisia", "Egypt"],
        correctAns: "A"
    },
    {
        question: "Fan of a tricolore?  Which of these 3-colored flag is flown in the Republic of Ireland",
        response: ["Italy", "Hungary", "Republic of Ireland", "The Netherlands"],
        correctAns: "C"
    },
    {
        question: "Time to head to Asia?  Which of these is the flag for Hong Kong?",
        response: ["China", "Hong Kong", "Taiwan", "South Korea"],
        correctAns: "B"
    },
    {
        question: "Let's stay in Asia.  Which of these is the flag of North Korea?",
        response: ["North Korea", "Indonesia", "Malaysia", "Philippines"],
        correctAns: "A"
    },
    {
        question: "Now it's getting really tough.  Which of these is the flag of Austria?",
        response: ["Austria", "Peru", "Monaco", "Hungary"],
        correctAns: "A"
    },
    {
        question: "Okay, which of these is the flag of Mexico?",
        response: ["India", "Republic of Ireland", "Mexico", "Hungary"],
        correctAns: "C"
    },
    {
        question: "Time to set a course for Central America.  Can you find the flag for Nicaragua?",
        response: ["Belize", "Nicaragua", "Honduras", "Costa Rica"],
        correctAns: "B"
    },
    {
        question: "All these flags making you feel blue?  Keep going!  Which of these blue flags represents Uruguay?",
        response: ["Uruguay", "El Salvador", "Nicaragua", "Honduras"],
        correctAns: "A"
    },
    {
        question: "I admit, this one is just cruel.  Which of these flags would you find flying in Colombia?",
        response: ["Bolivia", "Peru", "Venezuela", "Colombia"],
        correctAns: "D"
    },
    {
        question: "Flagging yet?.  Hope not.  Which of these is the Pakistani flag?",
        response: ["India", "Pakistan", "Sri Lanka", "Bangladesh"],
        correctAns: "B"
    },
    {
        question: "Back to Europe for a blur of color.  Which of these is the flag of Luxembourg?",
        response: ["Belgium", "The Netherlands", "Germany", "Luxembourg"],
        correctAns: "D"
    },
    {
        question: "Seeing stars?  Hope so.  Because you now need to find the flag of New Zealand?",
        response: ["Australia", "New Zealand", "Israel", "Morocco"],
        correctAns: "B"
    },
    {
        question: "Almost there.  But first back to the Middle East.  Which of these is the flag of Lebanon?",
        response: ["Jordan", "Israel", "Lebanon", "Egypt"],
        correctAns: "D"
    },
    {
        question: "Let's take a trip to Eastern Europe.  Which of these is the flag of Bulgaria?",
        response: ["Bulgaria", "Romania", "Serbia", "Hungary"],
        correctAns: "D"
    }

]

function askTriviaQ() {

    if (i >= triviaQ.length) {
        displayFinalScore();
    } else {
        clearAnswers();
        $("#questionNumber").html("Question " + (i + 1) + " of " + triviaQ.length);

        $("#questionArea").html(triviaQ[i].question);
        console.log("Question: " + triviaQ[i].question);
        $("#image1").html("<img src='assets/images/" + triviaQ[i].response[0] + ".png' width=150 height=100 />");
        console.log("Response 1: " + triviaQ[i].response[0]);
        $("#image2").html("<img src='assets/images/" + triviaQ[i].response[1] + ".png' width=150 height=100 />");
        console.log("Response 2: " + triviaQ[i].response[1]);
        $("#image3").html("<img src='assets/images/" + triviaQ[i].response[2] + ".png' width=150 height=100 />");
        console.log("Response 3: " + triviaQ[i].response[2]);
        $("#image4").html("<img src='assets/images/" + triviaQ[i].response[3] + ".png' width=150 height=100 />");
        console.log("Response 4: " + triviaQ[i].response[3]);
        console.log("correctAns: " + triviaQ[i].correctAns);

        displayTimer();
    }
}

// Detect what player clicks
var responseBtn = $('.number');
responseBtn.on('click', function (evt) {
    console.log("Button clicked:" + this.value);
    playerResponse = this.value;
    console.log("playerResponse : " + playerResponse);

    if (playerResponse === triviaQ[i].correctAns) {
        score++;
        $("#scoreBoard").html("Correct! Your score is " + score);
        displayAnswers();
        console.log("i : " + i);
        console.log("Score: " + score);
        // Wait 1.5 seconds before main question timer is reset next question appears
        clearTimeout(countdownTimer);
        var pauseVar = setTimeout(function () {
            $("#scoreBoard").text("");
            i++;
            askTriviaQ();
        }
            , 1500);
    } else {
        $("#scoreBoard").html("Incorrect - the correct answer is " + triviaQ[i].correctAns);
        displayAnswers();
        // Wait 1.5 seconds before main question timer is reset next question appears
        clearTimeout(countdownTimer);
        var pauseVar = setTimeout(function () {
            // window.clearTimeout(timerVar);
            $("#scoreBoard").text("");
            i++;
            askTriviaQ();
        }
            , 1500);
    }
});

// Display answers
function displayAnswers() {
    $("#image1").append(triviaQ[i].response[0]);
    $("#image2").append(triviaQ[i].response[1]);
    $("#image3").append(triviaQ[i].response[2]);
    $("#image4").append(triviaQ[i].response[3]);
}

// Display answers
function clearAnswers() {
    $("#Ans1").html("");
    $("#Ans2").html("");
    $("#Ans3").html("");
    $("#Ans4").html("");
}


// Count down timer
function displayTimer() {
    var t = 10;
    countdownTimer = setInterval(function () {
        $("#Timer").text(t + " seconds")
        t = t - 1;
        if (t <= 0) {
            clearTimeout(countdownTimer);
            i++;
            askTriviaQ();
        }
    }, 1000);
}


// Start Game using Start Game button
startBtn = $('#startButton');
startBtn.on('click', askTriviaQ())

function playGame() {
    if (gameStarted !== true) {
        gameStarted = true;
    } else if (i < triviaQ.length) {
        i++;
        askTriviaQ();
    }
}

// playGame();