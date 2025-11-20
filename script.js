//Declare 2 variables that will keep track of the score
let humanScore = 0;
let computerScore = 0;

//Write code Logic to get human choice input and output their choice
function getHumanchoice() {
    const humanChoice = prompt("Enter rock paper or scissors...").toLowerCase().trim();
    
    if(humanChoice == "rock") {
        console.log("You chose Rock");
    }
    else if(humanChoice == "paper") {
        console.log("You chose Paper");
    }
    else if(humanChoice == "scissors") {
        console.log("You chose Scissors");
    }
    else {
        console.log("Invalid choice,Try Again");
        return getHumanchoice();
    }
    
    return humanChoice;
}

//Write code logic to get computer choice randomly
function getComputerchoice() {
    const randomChoice = Math.floor(Math.random() * 3);

    if(randomChoice== 0) {
        return "rock";
    }
    else if(randomChoice == 1) {
        return "paper";
    }
    else if(randomChoice == 2) {
        return "scissors";
    }

    return randomChoice;
}

//Write code logic to play a game for a single round
function playRound(humanChoice, computerChoice) {
    
    switch(humanChoice) {
        //Case when human chooses rock
        case "rock":
            //Case when computer chooses rock
            switch(computerChoice) {
                case "rock":
                    console.log("It's a Tie!");
                    break;
                
                //Case when computer chooses paper
                case "paper":
                    console.log("You lose,Paper beats rock");
                    ++computerScore;
                    break;
                
                //Case when computer chooses scissors
                case "scissors":
                    console.log("You win,Rock beats scissors");
                    ++humanScore;
                    break;
            }
            break;

        //Case when human chooses paper
        case "paper":
            switch(computerChoice) {
                //Case when computer chooses rock
                case "rock":
                    console.log("You win,Paper beats rock");
                    ++humanScore;
                    break;
                
                //Case when computer chooses paper
                case "paper":
                    console.log("It's a Tie");
                    break;

                //Case when computer chooses scissors
                case "scissors":
                    console.log("You lose,Scissors beats paper");
                    ++computerScore;
                    break;
            }
            break;
        
        //Case when human chooses scissors
        case "scissors":
            switch(computerChoice) {
                //Case when computer chooses rock
                case "rock":
                    console.log("You lose,Rock beats scissors");
                    ++computerScore;
                    break;
                
                //Case when computer chooses paper
                case "paper":
                    console.log("You win,Scissors beats paper");
                    ++humanScore;
                    break;

                case "scissors":
                    console.log("It's a tie!");
                    break;
            }
            break;
    }
}

function playGame() {
    for(let i = 0; i < 5; i++) {
        const humanSelection = getHumanchoice();
        const computerSelection = getComputerchoice();
        playRound(humanSelection, computerSelection);
        console.log("Computer chose:",computerSelection);
    }

    if(humanScore > computerScore) {
        console.log("\nCongrats,You win!");
    }
    else if(computerScore > humanScore) {
        console.log("\nComputer Wins!")
    }
    
    
    console.log("Your Score is: ",humanScore);
    console.log("Computer's score is: ",computerScore);
}

playGame();