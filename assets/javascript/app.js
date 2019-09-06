// $(document).ready(function () {

// Declare variables, objects

var triviaQ = [
    {
        question: "Is the answer A, B, C, or D?",
        response: ["A", "B", "C", "D"],
        correctAns: "B"
    },
    {
        question: "Is the answer E, F, G, or H?",
        response: ["A", "B", "C", "D"],
        correctAns: "B"
    },
    {
        question: "Is the answer I, J, K, or L?",
        response: ["A", "B", "C", "D"],
        correctAns: "B"
    },
    {
        question: "Is the answer M, N, O, or P?",
        response: ["A", "B", "C", "D"],
        correctAns: "B"
    },
    {
        question: "Is the answer Q, R, S, or T?",
        response: ["Q", "R", "S", "T"],
        correctAns: "B"
    }
]
// for (var i = 0; i < triviaQ.length; i++) {
// askTriviaQ();
// }

function askTriviaQ() {
    console.log("START");
    for (var i = 0; i < triviaQ.length; i++) {
        $("#questionArea").html(triviaQ[i].question);
        $("#Ans1").html(triviaQ[i].response[0]);
        $("#Ans2").html(triviaQ[i].response[1]);
        $("#Ans3").html(triviaQ[i].response[2]);
        $("#Ans4").html(triviaQ[i].response[3]);
    }
}

//Start Game using Start Game button
startBtn = $('#startButton');
startBtn.on('click', askTriviaQ())

//Log and score user responses
responseBtn = $('.number');
responseBtn.on('click', function (evt) {
    console.log("Button clicked:" + this.value);
    playerResponse = this.value;
    console.log(playerResponse);

    if (playerResponse == triviaQ[i].correctAns) {
        alert("Correct!");
    } else {
        alert("WRONG!");
    }
    });

    // askTriviaQ()