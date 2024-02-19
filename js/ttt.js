//Variables like gameboard and moves left can be derived from other variables

const winCondition = [
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6]
]
let gameBoard = [
    "","","",
    "","","",
    "","",""
]
let movesLeft = 9
let xMoves = [];
let oMoves = [];
let xTurn = true;
let results = document.getElementById("winner")

//Function iterates through every win condition and compares it to 
//moves made by X and O respectively
//It also checks for a draw if movesleft is = 0
function whoWon(){
        for (let condition of winCondition){
            const char1 = gameBoard[condition[0]];
            const char2 = gameBoard[condition[1]];
            const char3 = gameBoard[condition[2]];
            if (char1 == "" || char2 == "" || char3 == ""){
                continue
            }
            else if (char1 == char2 && char2 == char3){
                console.log("winner")
            }
        }
        if (movesLeft == 0){
            results.innerHTML = "Its a Draw"
        }
}
//function checks who the current player is and if the cell is empty
//Displays the current player to whichever cell was clicked ands the cell index
//to the players list of moves
//after a move is made movesleft decreases by one and checks for win/draw
//Concern: event is depracated 
function playerMove(){
    const cell = event.target.id;
    // const cell = this.
    const cellIndex = parseInt(cell)
    let posistion = document.getElementById(cell)
    if (xTurn && posistion.innerHTML == "") {
        gameBoard[cellIndex] = "x"
        xMoves.push(cellIndex)
        posistion.innerHTML = "X" 
        xTurn = false
        movesLeft -= 1
        }
    else if (posistion.innerHTML == ""){
        gameBoard[cellIndex] = "o"
        oMoves.push(cellIndex)
        posistion.innerHTML = "O"
        xTurn = true
        movesLeft -= 1
    }
        whoWon()
    }
//Function wipes all variables and clears the board and sets it to X's turn
function reset(){
    for (let i of document.querySelectorAll("td")){
    i.innerHTML = ""
    }
    xTurn = true
    gameBoard = [
        "","","",
        "","","",
        "","",""
    ]
    xMoves = []
    oMoves = []
    results.innerHTML = ""
    movesLeft = 9
}
document.getElementById("wipe").addEventListener("click", reset)
// document.querySelectorAll("td").forEach(addEventListener("click", whatIsClicked()))
document.querySelectorAll("td").forEach(cell => cell.addEventListener("click", playerMove));
