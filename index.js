const choices = document.querySelector('#choices');
const resetButton = document.querySelector('.reset');
const whoWonTheRound = document.querySelector('#log');
const computerLog = document.querySelector('#computer');
const humanLog = document.querySelector('#human');



//Computer Brain, selects random number between 0-2 and chooses a switch case.
const getComputerChoice = () => {
    let randomNum = Math.floor(Math.random() * 3);

    let text = '';
    switch(randomNum){
        case 0:
            text = `rock`;
            break; 
        case 1:
            text =  `paper`;
            break;
        case 2:
            text = `scisscor`
            break;
    }
    return text
};

//See's who wins the round
const playRound = (playerSelection, computerSelection) => {
    if(playerSelection === 'rock' && computerSelection === 'paper'){
        return whoWonTheRound.textContent = `You lose Paper beats Rock`;
    }else if(playerSelection === 'rock' && computerSelection === 'scisscor'){
        return whoWonTheRound.textContent = `You win Rock beats Scisscor`;
    }else if(playerSelection === 'rock' && computerSelection === 'rock'){
        return whoWonTheRound.textContent = `It's a DRAW!`
    }else if(playerSelection === 'paper' && computerSelection === 'scisscor'){
        return whoWonTheRound.textContent = `You lose Scisscor beats Paper`;
    }else if(playerSelection === 'paper' && computerSelection === 'rock'){
        return whoWonTheRound.textContent = `You win Paper beats Rock`;
    }else if(playerSelection === 'paper' && computerSelection === 'paper'){
        return whoWonTheRound.textContent = `It's a DRAW!`
    }else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        return whoWonTheRound.textContent = `You lose Rock beats Scissor`;
    }else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        return whoWonTheRound.textContent = `You win Scissor beats Paper`;
    }else if(playerSelection === 'scissors' && computerSelection === 'scissor'){
        return whoWonTheRound.textContent = `It's a DRAW!`;
    }
};


/*Adding function togather              *DECIDED TO NOT USE THIS*
const playerSelection = rock
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

Calls the playRound() which plays one round to play 5 rounds using for loop
function game(){
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection)
    }
};*/

//Add's event listener to parent node to give children node events
let gameCount = 0;
choices.addEventListener('click', e => {
  if (e.target.tagName != 'BUTTON') return;
  if (gameCount++ === 5) {
    whoWonTheRound.textContent = '5 round played. Game is over';
    return;
  }
  playRound(e.target.textContent.toLowerCase(), getComputerChoice())
});

function reloadPage(){
    location.reload()
};
resetButton.addEventListener('click', reloadPage)