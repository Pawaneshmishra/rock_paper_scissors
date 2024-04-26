let humanScore=0, computerScore=0;

function playround(){

function getComputerChoice(){
    let x = Math.floor(Math.random()*3)+1;
    
    if(x==1) return "rock";
    else if(x==2) return "paper";
    else return "scissors";
}

function getHumanChoice(x){
    if(x==1) return "rock";
    else if(x==2) return "paper";
    else if(x==3) return "scissors";
    else return "Invalid Choice";
}

function playRound(humanChoice, computerChoice) {
    console.log("New Round !!!")
    console.log("----------");

    if(humanChoice == "rock" && computerChoice == "scissors"){
        humanScore++;
        console.log("You win this round!");
        console.log(`${humanChoice} beats ${computerChoice}`);
    }

    else if(humanChoice == "paper" && computerChoice == "rock"){
        humanScore++;
        console.log("You win this round!");
        console.log(`${humanChoice} beats ${computerChoice}`);
    }

    else if(humanChoice == "scissors" && computerChoice == "paper"){
        humanScore++;
        console.log("You win this round!");
        console.log(`${humanChoice} beats ${computerChoice}`);
    }
    
    else if(humanChoice == computerChoice){
        console.log("Nobody wins the round!!");
    }

    else if(humanChoice == "Invalid Choice"){
        console.log("Wrong Inout by User!");
    }

    else {
        computerScore++;
        console.log("Computer wins this round!");
        console.log(`${computerChoice} beats ${humanChoice}`)

    }
  }

const humanSelection = getHumanChoice(prompt("Enter your choice: 1->rock, 2->paper, 3->scissors"));                                                            
let computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
}

for(let i=0; i<5; i++) playround();

if(humanScore > computerScore) console.log("You Win This Game!!!");
else if (humanScore == computerScore) console.log("Nobody Wins This Game!!!");
else console.log("Computer wins this Game!!!!")