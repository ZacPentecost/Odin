/* ----------------- ROCK PAPER SCISSORS ----------------- */

/* Generate Random Number between min (including) and max (not including) */
const random = (min, max) => Math.floor(Math.random() * (max-min)) + min;

/* Make the computer randomly choose either rock, paper or scissors */
function computerPlay() {
    const number = random(0,3);
    if (number == 0) {
        return 'Rock'
    } 
    else if (number == 1) {
        return 'Paper'
    }
    else if (number == 2) {
        return 'Scissors'
    }
}

/* Capitalize the first letter in the string while making all the rest lower case */
function capitalize(string) {
    const lower = string.toLowerCase()
    return string.charAt(0).toUpperCase() + lower.slice(1)
  }

/* Make the player choose rock, paper or scissors */
function playerSelection() {
    let select = prompt("Rock, Paper or Scissors?")
    return capitalize(select)
}

/* Play a round of rock, paper, scissors */
function playRound(playerSelection, computerSelection) {
    /* Check for tie */
    if (playerSelection == computerSelection) {
        return "It seems you both have the same idea!"
    }

    /* Player chooses Rock */
    else if (playerSelection == 'Rock') {
        if (computerSelection == 'Paper') {
            return "You Lose! Paper beats Rock"
        }
        else 
            return "You Win! Rock beats Scissors"
    }

    /* Player chooses Paper */
    else if (playerSelection == 'Paper') {
        if (computerSelection == 'Rock') {
            return "You Win! Paper beats Rock"
        }
        else 
            return "You Lose! Scissors beats Paper"
    }

    /* Player chooses Scissors */
    else if (playerSelection == 'Scissors') {
        if (computerSelection == 'Paper') {
            return "You Win! Scissors beats Paper"
        }
        else 
            return "You Lose! Rock beats Scissors"
    }
}


console.log(playRound(playerSelection(), computerPlay()))
