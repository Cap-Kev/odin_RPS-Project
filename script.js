//Write code logic to get computer choice randomly
function getComputerchoice() {
    const randomChoice = Math.floor(Math.random() * 3);

    if(randomChoice == 0) {
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


//Declare 2 variables that will keep track of the score
let humanScore = 0;
let computerScore = 0;

const playerChoiceDisplay = document.getElementById('player-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const roundWinnerDisplay = document.getElementById('round-winner');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');

//Write code logic to play a game for a single round
function playRound(humanChoice, computerChoice) {

    let roundResult;
    
    switch(humanChoice) {
        //Case when human chooses rock
        case "rock":
            //Case when computer chooses rock
            switch(computerChoice) {
                case "rock":
                    roundResult = "It's a tie!"
                    break;
                
                //Case when computer chooses paper
                case "paper":
                    roundResult = "You lose,Paper beats rock";
                    ++computerScore;
                    break;
                
                //Case when computer chooses scissors
                case "scissors":
                    roundResult = "You win,Rock beats scissors";
                    ++humanScore;
                    break;
            }
            break;

        //Case when human chooses paper
        case "paper":
            switch(computerChoice) {
                //Case when computer chooses rock
                case "rock":
                    roundResult = "You win,Paper beats rock";
                    ++humanScore;
                    break;
                
                //Case when computer chooses paper
                case "paper":
                    roundResult = "It's a Tie";
                    break;

                //Case when computer chooses scissors
                case "scissors":
                    roundResult = "You lose,Scissors beats paper";
                    ++computerScore;
                    break;
            }
            break;
        
        //Case when human chooses scissors
        case "scissors":
            switch(computerChoice) {
                //Case when computer chooses rock
                case "rock":
                    roundResult = "You lose,Rock beats scissors";
                    ++computerScore;
                    break;
                    
                //Case when computer chooses paper
                case "paper":
                    roundResult = "You win,Scissors beats paper";
                    ++humanScore;
                    break;

                case "scissors":
                    roundResult = "It's a tie!";
                    break;
            }
            break;
    }
    
    // after your switch logic
playerChoiceDisplay.textContent = humanChoice;
computerChoiceDisplay.textContent = computerChoice;
roundWinnerDisplay.textContent = roundResult;
playerScoreDisplay.textContent = humanScore;
computerScoreDisplay.textContent = computerScore;

if(humanScore === 5) {
    alert("You won the game!")
    humanScore = 0;
    computerScore = 0;
    //Reset the UI scores
    playerScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
}
if(computerScore === 5) {
    alert("Computer Won the game!")
    humanScore = 0;
    computerScore = 0;
    //Reset the UI scores
    playerScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
}


}




//UI Interactivity
const btn = document.querySelectorAll('button');

btn.forEach((button) => {
    button.addEventListener('click', () => {
        const humanChoice = button.id;
        const computerChoice = getComputerchoice();
        playRound(humanChoice, computerChoice);
    });
});

