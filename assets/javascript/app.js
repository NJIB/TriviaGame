// $(document).ready(function () {

// Declare variables, objects


var i = 0;  // Count incrementor
var playMode = false;  //Play mode
var t = 20;  // Time per question
var score = 0;  // Game score
var gameStarted = false;  // Used to activate the start button, and display main content at the right time
var countdownTimer; // Main timer variable
var flagClicked = 0;  // Indicator to prevent a flag being clicked twice (and messing up the sequence)
var r = 0;  // Variable to hold random question index
var rLog = []; // Array to indices of questions already asked 

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
        question: "All these flags making you feel blue?  Keep going!  Which of these blue flags represents Greece?",
        response: ["Greece", "El Salvador", "Nicaragua", "Honduras"],
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
        response: ["Monaco", "Poland", "Singapore", "Indonesia"],
        correctAns: "D"
    },
    {
        question: "Now I bet you're really seeing red.  Which flag is Poland's?",
        response: ["Poland", "Austria", "Indonesia", "Monaco"],
        correctAns: "A"
    },
    {
        question: "Let's finish off in the Caribbean.  Find the flag for Bermuda?",
        response: ["Barbados", "Dominican Republic", "Cayman Islands", "Bermuda"],
        correctAns: "D"
    }


]

function askTriviaQ() {
    // Only populate question if game has started
    if (gameStarted === false) {
    }
    else {
        clearAnswers();
        flagClicked = 0;
        $("#questionNumber").html("Question " + (i + 1) + " of " + questionCount);

        //If a question has already been chosen, the program will select another
        while (rLog.includes(r)) {
            console.log("rLog records: " + rLog.length);
            r = parseInt(Math.random() * questionCount);
        }
        // Log question, so not asked twice
        console.log("r: " + r);
        rLog[i] = r;
        console.log("rLog: " + r);

        $("#questionArea").html(triviaQ[r].question);
        $("#image1").html("<img src='assets/images/" + triviaQ[r].response[0] + ".png' width=150 height=100 />");
        $("#image2").html("<img src='assets/images/" + triviaQ[r].response[1] + ".png' width=150 height=100 />");
        $("#image3").html("<img src='assets/images/" + triviaQ[r].response[2] + ".png' width=150 height=100 />");
        $("#image4").html("<img src='assets/images/" + triviaQ[r].response[3] + ".png' width=150 height=100 />");

        // Display count down timer, if still questions to be asked
        if (i < questionCount) {
            displayTimer();
        }
    }
}

// Detect what player clicks
var responseBtn = $('.number');
responseBtn.on('click', function (evt) {

    // Set flagClicked to 'clicked'
    flagClicked++;

    // Only register first click
    if (flagClicked === 1) {

        // Register which flag the player selected
        playerResponse = this.value;

        document.getElementById("scoreBoard").style.display = "flex";

        // IF the player guesses correctly, display congratulatory message and increment score
        if (playerResponse === triviaQ[r].correctAns) {
            score++;
            $("#resultMessage").html("Correct! The answer is " + triviaQ[r].correctAns);
            $("#scoreBoard").html("Your score: " + score + "/" + (i + 1));

            // Display country names
            displayAnswers();

            // If all questions asked, display final score
            displayFinalScore();

            // If player guesses incorrectly, display message and update score    
        } else {
            $("#resultMessage").html("Incorrect - the correct answer is " + triviaQ[r].correctAns);
            $("#scoreBoard").html("Your score: " + score + "/" + (i + 1));

            // Display country names
            displayAnswers();

            // Check questions left, or trigger next question
            displayFinalScore();
        }
    }
});

// Display answers
function displayAnswers() {
    $("#Ans1").html(triviaQ[r].response[0]);
    $("#Ans2").html(triviaQ[r].response[1]);
    $("#Ans3").html(triviaQ[r].response[2]);
    $("#Ans4").html(triviaQ[r].response[3]);
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
    // Start timer
    countdownTimer = setInterval(function () {
        $("#Timer").text(t + " seconds")
        t = t - 1;
        if (t <= -1) {

            // Increment i if timer timed out (does not happen otherwise)
            if (flagClicked === 0) {
                displayFinalScore();
            }
            // Test
            $("#scoreBoard").html("Your score: " + score + "/" + (i));
        }
    }, 1000);
}

function displayFinalScore() {
    // Increment counter for next loop
    i++;
    console.log("i: " + i);

    // If all questions asked, display final score.  Hide other elements.
    if (i >= questionCount) {
        $("#questionArea").html("You scored " + score + " out of " + questionCount);
        document.getElementById("Timer").style.display = "none";
        document.getElementById("questionNumber").style.display = "none";
        document.getElementById("scoreBoard").style.display = "none";
        document.getElementById("Ans1").style.display = "none";
        document.getElementById("Ans2").style.display = "none";
        document.getElementById("Ans3").style.display = "none";
        document.getElementById("Ans4").style.display = "none";
        document.getElementById("resultMessage").style.display = "none";

        //Display Play Again button
        document.getElementById("pressToRestart").style.display = "flex";

        // If still more questions to be asked, trigger next question
    } else {
        // Wait 1.5 seconds before main question timer is reset next question appears
        clearTimeout(countdownTimer);
        var pauseVar = setTimeout(function () {
            $("#resultMessage").text("");

            // Trigger next question
            askTriviaQ();
        }
            , 1000);
    }
}

// Restart button click handling, including resetting vars, displaying elements
restartBtn = $('#pressToRestart');
restartBtn.on('click', function (evt) {
    gameStarted = true;
    playMode = confirm("Which mode would you like to play this time? \nDifficult (10 seconds per question):  OK \nEasier (20 seconds per question):  Cancel");
    questionCount = prompt("And how many questions would you like to answer? \n You can choose to answer between 1 and " + triviaQ.length);
    if (questionCount === null || questionCount === "") {
        questionCount = triviaQ.length;
    }
    document.getElementById("pressToRestart").style.display = "none";
    document.getElementById("Timer").style.display = "flex";
    document.getElementById("questionNumber").style.display = "flex";
    document.getElementById("Ans1").style.display = "flex";
    document.getElementById("Ans2").style.display = "flex";
    document.getElementById("Ans3").style.display = "flex";
    document.getElementById("Ans4").style.display = "flex";
    document.getElementById("resultMessage").style.display = "flex";
    clearTimeout(countdownTimer);
    rLog = [];
    i = 0;
    score = 0;
    askTriviaQ();
})

// Start Game using Start Game button
gameStarted = false;

startBtn = $('#startButton');
startBtn.on('click', function (evt) {
    gameStarted = true;
    playMode = confirm("Do you want to play Difficult mode? \nDifficult (10 seconds per question):  OK \nEasier (20 seconds per question):  Cancel");
    questionCount = prompt("And how many questions would you like to answer? \n You can choose to answer between 1 and " + triviaQ.length);
    if (questionCount === null || questionCount === "") {
        questionCount = triviaQ.length;
    }
    $("#startButton").fadeOut(1000, function () { });
    $("#colA").html("A");
    $("#colB").html("B");
    $("#colC").html("C");
    $("#colD").html("D");
    askTriviaQ();
})
