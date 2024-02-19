let computerMove;
let playerMove
const losesTo = new Map([
    ["rock", ["paper", "spock"]],
    ["paper", ["scissors", "lizard"]],
    ["scissors", ["rock", "spock"]],
    ["lizard", ["rock", "scissors"]],
    ["spock", ["lizard", "paper"]]
]
) 
document.querySelectorAll(".player").forEach(button => button.addEventListener("click", playerMoves))
/*
Rock loses to 
Paper Spock
Paper loses to
Scissors Lizard
Scissors loses to
Rock Spock
Lizard loses to
rock scissors
Spock loses to
Lizard paper
*/

function playerMoves(){
    playerMove = this.id
    computerMoves()
    checkForWin()
}
function computerMoves(){
    switch (Math.floor((Math.random() * 5) + 1)){
        case 1:
            computerMove = "rock";
            break;
        case 2:
            computerMove = "paper";
            break;
        case 3:
            computerMove = "scissors";
            break;
        case 4:
            computerMove = "lizard"
            break;
        case 5:
            computerMove = "spock"
            break;
    }
}
function checkForWin(){
    if (playerMove == computerMove){
        document.getElementById("winner").innerHTML = "Its a tie"
    }
    else if (losesTo.get(playerMove).includes(computerMove) == true){
        document.getElementById("winner").innerHTML = "You Lose!"
    }
    else{
        document.getElementById("winner").innerHTML = "Its a Win!"
    }
    document.getElementById("player").innerHTML = "You Chose: " + playerMove
    document.getElementById("computer").innerHTML = "Computer Chose: " + computerMove
}
  

