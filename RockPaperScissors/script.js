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
    /* Lose/Win/Tie Condition */
    let condition = 0;
    /* Parameters to win/lose by  */
    const param = [playerSelection, computerSelection]

    /* Check for tie */
    if (playerSelection == computerSelection) {
        condition = 2;
    }

    /* Player chooses Rock */
    else if (playerSelection == 'Rock') {
        if (computerSelection == 'Scissors') {
            condition = 1;
        }
    }

    /* Player chooses Paper */
    else if (playerSelection == 'Paper') {
        if (computerSelection == 'Rock') {
            condition = 1;
        }
    }

    /* Player chooses Scissors */
    else if (playerSelection == 'Scissors') {
        if (computerSelection == 'Paper') {
            condition = 1;
        }
    }

    /* Write Final Message */
    if (condition == 0) {
        return [0, 'Oh no! You lost. ' + param[1] + ' beats ' + param[0]]
    }
    else if (condition == 1) {
        return [1, 'Lets go! You won. ' + param[0] + ' beats ' + param[1]]
    }
    else {
        return [2, 'Great minds think alike! Tie game!']
    }
}

/* Play a game - first to 5 rounds */

function game() {
    /* Initialize Scores */
    let playerScore = 0;
    let computerScore = 0;

    /* Run rounds until either one gets to a score of 5 */
    while (playerScore <= 4 && computerScore <= 4) {
        /* Run a round and print the outcome */
        let round = playRound(playerSelection(), computerPlay())
        let condition = round[0]
        console.log(round[1])

        /* Increase score depending on who won */
        if (condition == 0) {
            computerScore ++;
        }
        else if (condition == 1) {
            playerScore ++;
        }
    } 

    console.log('Game Done')
}

/* Run the game */
game()