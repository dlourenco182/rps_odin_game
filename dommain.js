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

function playRound(playerSelection) {
    computerSelection = computerPlay();
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
    var container = document.querySelector('#gamelog');
    var content = document.createElement('div');
    content.classList.add('content');
    content.textContent = "the beginning!";
    container.appendChild(content);

    content.textContent = "What's your play?";
    container.appendChild(content);
    
    playerSelection = sign.toLowerCase();
    var result = playRound(playerSelection);
    if (result[4] == "l") {
        pcWins++;
    }
    if (result[4] == "w") {
        playerWins++;
    }
    if (result[4] != "l" && result[4] != "w") {
        tie++;
    }
    content.textContent = result;
    container.appendChild(content);
    content.textContent = "Result:";
    container.appendChild(content);
    content.textContent = "Player: " + playerWins;
    container.appendChild(content);
    content.textContent = "PC: " + pcWins;
    container.appendChild(content);
    content.textContent = "Ties: " + tie;
    container.appendChild(content);
}

game();