let humanScore = 0, computerScore = 0;

function playround(humanSelection) {

    function getComputerChoice() {
        let x = Math.floor(Math.random() * 3) + 1;

        if (x == 1) return "rock";
        else if (x == 2) return "paper";
        else return "scissors";
    }

    function playRound(humanChoice, computerChoice) {
        console.log("New Round !!!")
        console.log("----------");

        if (humanChoice == "rock" && computerChoice == "scissors") {
            humanScore++;
            console.log("You win this round!");
            console.log(`${humanChoice} beats ${computerChoice}`);
        }

        else if (humanChoice == "paper" && computerChoice == "rock") {
            humanScore++;
            console.log("You win this round!");
            console.log(`${humanChoice} beats ${computerChoice}`);
        }

        else if (humanChoice == "scissors" && computerChoice == "paper") {
            humanScore++;
            console.log("You win this round!");
            console.log(`${humanChoice} beats ${computerChoice}`);
        }

        else if (humanChoice == computerChoice) {
            console.log("Nobody wins the round!!");
        }

        else {
            computerScore++;
            console.log("Computer wins this round!");
            console.log(`${computerChoice} beats ${humanChoice}`)

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

if (humanScore > computerScore) console.log("You Win This Game!!!");
else if (humanScore == computerScore) console.log("Nobody Wins This Game!!!");
else console.log("Computer wins this Game!!!!")