// $(document).ready(function () {

// Declare variables, objects

var i = 0;  // Count incrementor
var score = 0;  // Game score
var gameStarted = false;
var countdownTimer;

var triviaQ = [
    {
        question: "Is the answer A, B, C, or D?",
        response: ["A", "B", "C", "D"],
        correctAns: "A"
    },
    {
        question: "Is the answer E, F, G, or H?",
        response: ["E", "F", "G", "H"],
        correctAns: "B"
    },
    {
        question: "Is the answer I, J, K, or L?",
        response: ["I", "J", "K", "L"],
        correctAns: "C"
    },
    {
        question: "Is the answer M, N, O, or P?",
        response: ["M", "N", "O", "P"],
        correctAns: "D"
    },
    {
        question: "Is the answer Q, R, S, or T?",
        response: ["Q", "R", "S", "T"],
        correctAns: "A"
    },
    {
        question: "Is the answer A, B, C, or D?",
        response: ["A", "B", "C", "D"],
        correctAns: "A"
    },
    {
        question: "Is the answer E, F, G, or H?",
        response: ["E", "F", "G", "H"],
        correctAns: "B"
    },
    {
        question: "Is the answer I, J, K, or L?",
        response: ["I", "J", "K", "L"],
        correctAns: "C"
    },
    {
        question: "Is the answer M, N, O, or P?",
        response: ["M", "N", "O", "P"],
        correctAns: "D"
    },
    {
        question: "Is the answer Q, R, S, or T?",
        response: ["Q", "R", "S", "T"],
        correctAns: "A"
    }
]

function askTriviaQ() {

    if (i >= triviaQ.length) {
        displayFinalScore();
    } else 
    {
    $("#scoreBoard").html("Question " + (i + 1) + " of " + triviaQ.length);

    $("#questionArea").html(triviaQ[i].question);
    console.log("Question: " + triviaQ[i].question);
    // $("#image1").html("<img src='assets/images/scotland.jpg' width=150 height=150 />");
    $("#Ans1").html(triviaQ[i].response[0]);    
    console.log("Response 1: " + triviaQ[i].response[0]);
    $("#Ans2").html(triviaQ[i].response[1]);
    console.log("Response 2: " + triviaQ[i].response[1]);
    $("#Ans3").html(triviaQ[i].response[2]);
    console.log("Response 3: " + triviaQ[i].response[2]);
    $("#Ans4").html(triviaQ[i].response[3]);
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

// Count down timer
function displayTimer() {
    var t = 30;
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