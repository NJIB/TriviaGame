// $(document).ready(function () {

// Declare variables, objects

var i = 0;  // Count incrementor
var playMode = false;  //Play mode
var t = 20;  // Time per question
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
        question: "Going round in circles?  Find the Turkish flag from these.",
        response: ["Turkey", "Bangladesh", "Japan", "Brazil"],
        correctAns: "A"
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
        question: "Flagging yet?  Hope not.  Which of these is the Pakistani flag?",
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
        response: ["Australia", "Israel", "New Zealand", "Morocco"],
        correctAns: "B"
    },
    {
        question: "Almost there.  But first back to the Middle East.  Which of these is the flag of Lebanon?",
        response: ["Jordan", "Israel", "Lebanon", "Egypt"],
        correctAns: "C"
    },
    {
        question: "Let's take a trip to Eastern Europe.  Which of these is the flag of Bulgaria?",
        response: ["Bulgaria", "Romania", "Serbia", "Hungary"],
        correctAns: "A"
    },
    {
        question: "Getting cross yet?  Find the Icelandic flag from these.",
        response: ["Norway", "England", "Iceland", "Finland"],
        correctAns: "C"
    },
    {
        question: "Find the Indonesian flag from these.",
        response: ["Monaco", "Austria", "Singapore", "Indonesia"],
        correctAns: "D"
    }


]

function askTriviaQ() {
    // Only populate question if game has started
    if (gameStarted === false) {

    } else {
        // If more questions to be asked, populate questions and appropriate flags
        if (i <= triviaQ.length) {
            clearAnswers();
            $("#questionNumber").html("Question " + (i + 1) + " of " + triviaQ.length);
            $("#questionArea").html(triviaQ[i].question);
            $("#image1").html("<img src='assets/images/" + triviaQ[i].response[0] + ".png' width=150 height=100 />");
            $("#image2").html("<img src='assets/images/" + triviaQ[i].response[1] + ".png' width=150 height=100 />");
            $("#image3").html("<img src='assets/images/" + triviaQ[i].response[2] + ".png' width=150 height=100 />");
            $("#image4").html("<img src='assets/images/" + triviaQ[i].response[3] + ".png' width=150 height=100 />");

            // Display count down timer
            displayTimer();
        } else
            // If all questions asked, display final score
            displayFinalScore();
    }
}


// Detect what player clicks
var responseBtn = $('.number');
responseBtn.on('click', function (evt) {
    playerResponse = this.value;

    if (playerResponse === triviaQ[i].correctAns) {
        score++;
        $("#resultMessage").html("Correct! The answer is " + triviaQ[i].correctAns);
        $("#scoreBoard").html("Your score: " + score + "/" + (i + 1));

        // Display country names
        displayAnswers();

        // Increment counter for next loop
        i++;

        // Wait 1.5 seconds before main question timer is reset next question appears
        clearTimeout(countdownTimer);
        var pauseVar = setTimeout(function () {
            $("#resultMessage").text("");
            // Trigger next question
            askTriviaQ();
        }
            , 1500);
    } else {
        $("#resultMessage").html("Incorrect - the correct answer is " + triviaQ[i].correctAns);
        $("#scoreBoard").html("Your score: " + score + "/" + (i + 1));

        displayAnswers();

        // Increment counter for next loop
        i++;

        // Wait 1.5 seconds before main question timer is reset next question appears
        clearTimeout(countdownTimer);
        var pauseVar = setTimeout(function () {
            // window.clearTimeout(timerVar);
            $("#resultMessage").text("");

            // Trigger next question
            askTriviaQ();
        }
            , 1500);
    }
});

// Display answers
function displayAnswers() {
    $("#Ans1").html(triviaQ[i].response[0]);
    $("#Ans2").html(triviaQ[i].response[1]);
    $("#Ans3").html(triviaQ[i].response[2]);
    $("#Ans4").html(triviaQ[i].response[3]);
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
    // Sets the right countdown, depending on Difficult or Easy mode
    if (playMode === false) {
        t = 20;
    } else {
        t = 10;
    }
    console.log("t: " + t);
    countdownTimer = setInterval(function () {
        $("#Timer").text(t + " seconds")
        t = t - 1;
        if (t <= 0) {
            // Increment counter for next loop
            i++;
            // Brief pause when timer hits 0
            var pauseVar = setTimeout(function () {
                clearTimeout(countdownTimer);

                // Trigger next question
                askTriviaQ();
            }
                , 1000);
        }
    }, 1000);
}


// Start Game using Start Game button
gameStarted = false;

startBtn = $('#startButton');
startBtn.on('click', function (evt) {
    gameStarted = true;
    playMode = confirm("Do you want to play Difficult mode? \nDifficult (10 seconds per question):  OK \nEasier (20 seconds per question):  Cancel");
    console.log("playMode: " + playMode);
    $("#startButton").fadeOut(1000, function(){
      });
    askTriviaQ();
})
