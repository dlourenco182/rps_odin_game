function computerPlay() {
    var play = Math.floor(Math.random() * (3 + 1));
    if (play == 1) {
        return "scissors";
    }
    if (play == 2) {
        return "paper";
    } else {
        return "rock";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "It's a tie! You can't beat scissors with scissors!";
    }
    if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lose! Rock > Scissors";
    }
    if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! Scissors > Paper";
    }
    if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock > Scissors";
    }
    if (playerSelection == "rock" && computerSelection == "rock") {
        return "It's a tie! You can't beat rock with rock!";
    }
    if (playerSelection == "rock" && computerSelection == "paper") {
        return "You win! Rock > Paper";
    }
    if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose! Scissors > Paper";
    }
    if (playerSelection == "paper" && computerSelection == "rock") {
        return "You lose! Rock > Paper";
    }
    if (playerSelection == "paper" && computerSelection == "paper") {
        return "It's a tie! You can't beat paper with paper!";
    } else {
        return "something wrong happens!"
    }
}

function game() {
    var playerWins = 0;
    var pcWins = 0;
    var tie = 0;
    var playerSelection = computerPlay();
    var computerSelection = computerPlay();
    console.log("the beginning!");
    for (var index = 5; index > 0; index--) {
        var sign = window.prompt("What's your play?");
        playerSelection = sign.toLowerCase();
        var result = playRound(playerSelection, computerSelection);
        if(result[4]=="l"){pcWins++;}
        if(result[4]=="w"){playerWins++;}
        if(result[4]!="l" && result[4]!="w"){tie++;}
        console.log(result);
    }
    console.log("Result:");
    console.log("Player: " + playerWins);
    console.log("PC: " + pcWins);
    console.log("Ties: " + tie );
}

game();