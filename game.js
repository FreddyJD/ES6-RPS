// Freddy's Pseudo Code
// 1) We cache all informatio that the user/computer  needs 
//      - User 
//      - Computer
//      - Numbers
//      - UserWin
//      - ComputerWin
//      - Tie
// 1.1) Record keystroke. 
// 2) we create an algo. to generate a number between 0 - 2
// 3) Cache that number into an array - stored
// 4) Register the users response 
// 6) IF/Else statement to see if they have the correct statement
// 7) Add (1) to a leaderboard
// Quick note == 
    // R = 1
    // P = 2
    // S = 3 
// Combos 13, 21, 32 (Users win) --- 12, 23, 31 (Computer win) 11, 22, 33 (tie)

var computerSelection = Math.floor(Math.random() * 3);
console.log(computerSelection)
var userSelection = 0; 
var userWin = 0;
var computerWin = 0;
var gameTie = 0;

document.onkeyup = function(event) {
    var userSelection = event.key
    if (userSelection === "r") { 
        var userSelection = 1; 
    }

};
