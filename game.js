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
    // R = 0
    // P = 1
    // S = 2 
// Combos 02, 10, 21 (Users win) --- 01, 12, 20 (Computer win) 00, 11, 22 (tie)

var userWins = 0;
var computerWins = 0;
var gameTie = 0;

document.onkeyup = function(event) {
    var computerSelection = Math.floor(Math.random() * 3);
    console.log("Computer choosed " + computerSelection)

    var userSelection = event.key
    if (userSelection === "r") { 
        var userSelection = "0"; 

    } else if (userSelection === "p") {
        var userSelection = "1";

    } else { 
        var userSelection = "2"; 
}

var userSelection = userSelection; 

if (userSelection + computerSelection === "02") { 
    document.getElementById('userWins_tag').innerHTML = userWins++;
    document.getElementById('console_tag').innerHTML = "You won! Console choosed Scissors";

} else if (userSelection + computerSelection == "10") { 
    document.getElementById('userWins_tag').innerHTML = userWins++;
    document.getElementById('console_tag').innerHTML = "You won! Console choosed Rock";

} else if (userSelection + computerSelection == "21") { 
    document.getElementById('userWins_tag').innerHTML = userWins++;
    document.getElementById('console_tag').innerHTML = "You won! Console choosed Paper";

} else if (userSelection + computerSelection == "01") { 
    document.getElementById('computerWins_tag').innerHTML = computerWins++;
    document.getElementById('console_tag').innerHTML = "You lose! Console choosed Paper";

} else if (userSelection + computerSelection == "12") { 
    document.getElementById('computerWins_tag').innerHTML = computerWins++;
    document.getElementById('console_tag').innerHTML = "You lose! Console choosed Scissors";

} else if (userSelection + computerSelection == "20") { 
    document.getElementById('computerWins_tag').innerHTML = computerWins++;
    document.getElementById('console_tag').innerHTML = "You lose! Console choosed Rock";

} else if (userSelection + computerSelection == 00 || 11 || 22) {
    document.getElementById('gameTie_tag').innerHTML = gameTie++;
    document.getElementById('console_tag').innerHTML = "Tie. Console choosed the same!";
}
}
