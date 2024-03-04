let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")
let computerMove;
let playerMove
const beats = new Map([
    ["rock", "paper"],
    ["paper", "scissors"],
    ["scissors", "rock"]

]
) 
document.querySelectorAll(".player").forEach(button => button.addEventListener("click", playerMoves))
/*
Rock loses to 
Paper
Paper loses to
Scissors
Scissors loses to
Rock
*/

function playerMoves(){
    playerMove = this.id
    console.log("Player Move", playerMove)
    computerMoves()
    checkForWin()
    
}
function computerMoves(){
    switch (Math.floor((Math.random() * 3) + 1)){
        case 1:
            computerMove = "rock";
            break;
        case 2:
            computerMove = "paper";
            break;
        case 3:
            computerMove = "scissors";
            break;
    }
}
function checkForWin(){
    if (playerMove == computerMove){
        document.getElementById("winner").innerHTML = "Its a tie"
    }
    else if (beats.get(playerMove) == computerMove){
        document.getElementById("winner").innerHTML = "You Lose!"
    }
    else{
        document.getElementById("winner").innerHTML = "Its a Win!"
    }
    document.getElementById("player").innerHTML = "You Chose: " + playerMove
    document.getElementById("computer").innerHTML = "Computer Chose: " + computerMove
}
  
console.log("computer move: ", computerMove)

