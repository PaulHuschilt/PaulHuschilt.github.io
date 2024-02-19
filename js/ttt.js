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
let currentPlayer = "X";
let results = document.getElementById("winner")

startGame()

function startGame(){
    document.getElementById("wipe").addEventListener("click", reset)
    document.querySelectorAll("td").forEach(cell => cell.addEventListener("click", playerMove));
    results.innerHTML = currentPlayer + "'s Turn"
}
function changePlayer(){
    if (currentPlayer == "X"){
        currentPlayer = "O"
    }
    else{
        currentPlayer = "X"
    }
    results.innerHTML = currentPlayer + "'s Turn"
}

function whoWon(){
        for (let condition of winCondition){
            const char1 = gameBoard[condition[0]];
            const char2 = gameBoard[condition[1]];
            const char3 = gameBoard[condition[2]];
            if (char1 == "" || char2 == "" || char3 == ""){
                continue
            }
            else if (char1 == char2 && char2 == char3){
                changePlayer()
                results.innerHTML = currentPlayer + " Has Won!"
                return true
            }            
        }
        if (movesLeft == 0){
            results.innerHTML = "Its a Draw"
        }
        return false
}

//Concern: event is depracated 
function playerMove(){
    const cell = event.target.id;
    const cellIndex = parseInt(cell)
    let posistion = document.getElementById(cell)
    if (currentPlayer == "X" && posistion.innerHTML == "") {
        gameBoard[cellIndex] = "x"
        posistion.innerHTML = "X" 
        movesLeft -= 1
        changePlayer()
        }
    else if (currentPlayer == "O" && posistion.innerHTML == ""){
        gameBoard[cellIndex] = "o"
        posistion.innerHTML = "O"
        movesLeft -= 1
        changePlayer()
    }
    whoWon()
       
    }
//Function wipes all variables and clears the board and sets it to X's turn
function reset(){
    for (let i of document.querySelectorAll("td")){
    i.innerHTML = ""
    }
    currentPlayer = "X"
    gameBoard = [
        "","","",
        "","","",
        "","",""
    ]
    results.innerHTML = currentPlayer + "'s Turn"
    movesLeft = 9
}

// document.querySelectorAll("td").forEach(addEventListener("click", whatIsClicked()))

