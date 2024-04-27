let humanScore = 0, computerScore = 0;

const this_round = document.querySelector('.this_round');
const computer = document.querySelector('.computer');
const person = document.querySelector('.person');
const final = document.querySelector('.final');


function playround(humanSelection) {

    function getComputerChoice() {
        let x = Math.floor(Math.random() * 3) + 1;

        if (x == 1) return "rock";
        else if (x == 2) return "paper";
        else return "scissors";
    }

    function playRound(humanChoice, computerChoice) {
        console.log("----------New Round !!!----------");

        if (humanChoice == "rock" && computerChoice == "scissors") {
            humanScore++;
            console.log("You win this round!");
            this_round.textContent = "You win this round!";
            person.textContent = "You - " + humanScore;
            console.log(`${humanChoice} beats ${computerChoice}`);
        }

        else if (humanChoice == "paper" && computerChoice == "rock") {
            humanScore++;
            console.log("You win this round!");
            this_round.textContent = "You win this round!";
            person.textContent = "You - " + humanScore;
            console.log(`${humanChoice} beats ${computerChoice}`);
        }

        else if (humanChoice == "scissors" && computerChoice == "paper") {
            humanScore++;
            console.log("You win this round!");
            this_round.textContent = "You win this round!";
            person.textContent = "You - " + humanScore;
            console.log(`${humanChoice} beats ${computerChoice}`);
        }

        else if (humanChoice == computerChoice) {
            console.log("Nobody wins the round!!");
            this_round.textContent = "Nobody Wins this round!";
        }

        else {
            computerScore++;
            console.log("Computer wins this round!");
            this_round.textContent = "Computer wins this round!";
            computer.textContent = "Computer - " + computerScore;
            console.log(`${computerChoice} beats ${humanChoice}`)

        }

        if(humanScore>=5 && computerScore>=5){
            final.textContent = "Restart the game- Game is over!!!"
        }

        else if (humanScore>=5){
            final.textContent = "You win the game!! - Restart the game to start again!!"
        }
        else if (computerScore>=5){
            final.textContent = "Computer Wins the game!! - Restart the game to start again!!"
        }
    }

    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

let humanSelection = '';

const rock = document.querySelector("#rock");
rock.addEventListener('click', () => {
    humanSelection = 'rock';
    playround(humanSelection);
});

const paper = document.querySelector("#paper");
paper.addEventListener('click', () => {
    humanSelection = 'paper';
    playround(humanSelection);
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener('click', () => {
    humanSelection = 'scissors';
    playround(humanSelection);
});

