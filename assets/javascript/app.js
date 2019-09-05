// $(document).ready(function () {


var tgtNumber = 0;  // tgtNumber is the number the computer randomly selects, between 19 and 120
var latestTotal = 0;  // Holds the total of all numbers guessed so far
var crystal1 = 0;  //Score for crystal1
var crystal2 = 0;  //Score for crystal2
var crystal3 = 0;  //Score for crystal3
var crystal4 = 0;  //Score for crystal4
var crysNumLog = [];  //Stores the number already selected for previous crystals, so as not to duplicate
var shuttleDistance = 0; //Distance shuttle will move with an individual crystal click
var gamesWon = 0;  //Stores games won
var gamesLost = 0;  //Stores games lost

// Computer randomly chooses a target number
function chooseTgtNumber() {
    // Clears target number from previous plays
    tgtNumber = 0;
    // Target number must be above 19 and less than 120
    while (tgtNumber < 20) {
        tgtNumber = Math.floor(Math.random() * 121);
    }
    console.log("tgtNumber:" + tgtNumber);
    //Target number displayed to the screen
    $("#targetNumber").html(tgtNumber);
}

// Random number assigned to each of the 4 crystals
function chooseCrystalNumber(crystal) {
    var crystalRdmNmbr = 0;
    while (crystalRdmNmbr < 1 || crysNumLog.indexOf(crystalRdmNmbr) > -1) {
        crystalRdmNmbr = Math.floor(Math.random() * 13);
    }
    crysNumLog.push(crystalRdmNmbr);
    //Log crystal values
    if (crysNumLog.length === 4) {
        console.log("crysNumLog:" + crysNumLog);
    }
    crystal = crystalRdmNmbr;
    return crystal;
}

// (COULD NOT GET THE DATA ATTRIBUTE WORKING - HENCE THE 4 ITERATIONS OF THE CODE BELOW)
// crysDiv = $('.crystalsDiv');
// //When crystal is clicked...
// crysDiv.on('click', function (evt) {
//     //Add value of crystal to the latestTotal
//     // console.log(crysDiv.attr("crystalnumber"));
//     latestTotal = latestTotal + crystal;
//     console.log("latestTotal:" + latestTotal);
//     //Print latestTotal to screen
//     displayUpdate(latestTotal);
//     checkWinLose();
// })

crystal1Div = $('#Crystal1');
//When crystal is clicked...
crystal1Div.on('click', function (evt) {
    if (latestTotal < tgtNumber) {
        //Add value of crystal to the latestTotal
        latestTotal = latestTotal + crystal1;
        console.log("latestTotal:" + latestTotal);
        //Move shuttle
        animateShuttle();
        //Print latestTotal to screen
        displayUpdate(latestTotal);
        checkWinLose();
    }
});

crystal2Div = $('#Crystal2');
//When crystal is clicked...
crystal2Div.on('click', function (evt) {
    if (latestTotal < tgtNumber) {
        //Add value of crystal to the latestTotal
        latestTotal = latestTotal + crystal2;
        console.log("latestTotal:" + latestTotal);
        //Move shuttle
        animateShuttle();
        //Print latestTotal to screen
        displayUpdate(latestTotal);
        checkWinLose();
    }
})

crystal3Div = $('#Crystal3');
//When crystal is clicked...
crystal3Div.on('click', function (evt) {
    if (latestTotal < tgtNumber) {
        //Add value of crystal to the latestTotal
        latestTotal = latestTotal + crystal3;
        console.log("latestTotal:" + latestTotal);
        //Move shuttle
        animateShuttle();
        //Print latestTotal to screen
        displayUpdate(latestTotal);
        checkWinLose();
    }
})

crystal4Div = $('#Crystal4');
//When crystal is clicked...
crystal4Div.on('click', function (evt) {
    if (latestTotal < tgtNumber) {
        //Add value of crystal to the latestTotal
        latestTotal = latestTotal + crystal4;
        console.log("latestTotal:" + latestTotal);
        //Move shuttle
        animateShuttle();
        //Print latestTotal to screen
        displayUpdate(latestTotal);
        checkWinLose();
    }
})

function checkWinLose() {
    // Check if targetNumber reached or exceeded
    if (latestTotal < tgtNumber) {
        //Win message
    } else if (latestTotal === tgtNumber) {
        $("#scoreBoardMsg").html("One small step for man...");
        gamesWon++;
        $("#gamesWon").html("Missions completed: " + gamesWon);
        //Restart game
        restartGame();
        // Lose message
    } else if (latestTotal > tgtNumber) {
        $("#scoreBoardMsg").html("Houston we have a problem!");
        gamesLost++;
        $("#gamesLost").html("Lost in space: " + gamesLost);
        //Restart game
        restartGame();
    }
}

function animateShuttle() {
    // Log starting point for shuttle
    var rocketToMoonPosition = $("#rocketToMoon").position();
    console.log("rocketToMoonContainer position:" + rocketToMoonPosition.left + rocketToMoonPosition.top);
    // Log end point for shuttle (to calculate how far it moves with each crystal click)
    var moonContPosition = $("#moonContainer").position();
    console.log("moonContainer position:" + moonContPosition.left + moonContPosition.top);
    // Logs distance shuttle has to travel (distance between earth and moon)
    var rocketTrackLength = parseInt((moonContPosition.left - rocketToMoonPosition.left) - 80);
    // Animate shuttle with each click
    var shuttlePosition = $("#shuttle").position();
    shuttleDistance = parseInt((latestTotal / tgtNumber) * rocketTrackLength);
    var shuttle = $("#shuttle");
    $("#shuttle").animate({ left: shuttleDistance }, 500);
}

function restartGame() {
    // Wait 3 seconds before clearing
    setTimeout(function () {
        // Move shuttle back to starting position
        $("#shuttle").animate({ left: "-0px" }, 2000);
        // Reset shuttle position counter
        shuttleDistance = 0;
        // Reset won/lose message
        var blankDisplay = [];
        $("#scoreBoardMsg").html(blankDisplay);
        // Clear log of crystal numbers
        crysNumLog = [];
        // Select new target and crystal numbers
        chooseTgtNumber();
        crystal1 = chooseCrystalNumber();
        crystal2 = chooseCrystalNumber();
        crystal3 = chooseCrystalNumber();
        crystal4 = chooseCrystalNumber();
        //Reset scoreboard
        latestTotal = 0;
        $("#latest").html(latestTotal);

    }, 3000);
}




function displayUpdate(latest) {
    $("#latest").html(latest);
}


//FUNCTION CALLS FOR PROGRAM EXECUTION   
chooseTgtNumber();
crystal1 = chooseCrystalNumber();
crystal2 = chooseCrystalNumber();
crystal3 = chooseCrystalNumber();
crystal4 = chooseCrystalNumber();