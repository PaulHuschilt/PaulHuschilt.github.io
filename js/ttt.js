//Variables like  moves left can be derived from other variables

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
let movesLeft = 9;
let currentPlayer = "X";
let results = document.getElementById("winner")
document.getElementById("wipe").addEventListener("click", reset)

startGame()

function startGame(){
    document.querySelectorAll("td").forEach(cell => cell.addEventListener("click", playerMove));
    results.innerHTML = currentPlayer + "'s Turn"
}
//function updates the current player
function changePlayer(){
    if (currentPlayer == "X"){
        currentPlayer = "O"
    }
    else{
        currentPlayer = "X"
    }
    results.innerHTML = currentPlayer + "'s Turn"
}
function gameOver(){
    document.querySelectorAll("td").forEach(cell => cell.removeEventListener("click", playerMove));
}
//Function iterates through the win conditions and checks gameboard at the corresponding index's
//if all characters are the same it returns a win and checks if its a draw or returns false
function isWin(){
        for (let condition of winCondition){
            const char1 = gameBoard[condition[0]];
            const char2 = gameBoard[condition[1]];
            const char3 = gameBoard[condition[2]];
            if (char1 == "" || char2 == "" || char3 == ""){
                continue
            }
            else if (char1 == char2 && char2 == char3){
                return true
            }            
        }
        if (movesLeft == 0){
            results.innerHTML = "Its a Draw"
        }
        return false
}
//Function gets the element that was clicked, checks if its empty and adds the current players move to the HTML table
// and to the gameboard at the corresponding index and checks for a win/draw
//Concern: event is depracated used this.id instead
function playerMove(){
    const cell = this.id
    const cellIndex = parseInt(cell)
    let posistion = document.getElementById(cell)
    if (posistion.innerHTML == "") {
        gameBoard[cellIndex] = currentPlayer
        posistion.innerHTML = currentPlayer 
        movesLeft -= 1
        changePlayer()
    }

    if (isWin()){
        changePlayer()
        results.innerHTML = currentPlayer + " Has Won!"
        gameOver()
    }
       
    }
//Function wipes all variables and clears the board and sets it to X's turn
function reset(){
    //Could use a arrow function
    for (let i of document.querySelectorAll("td")){
    i.innerHTML = ""
    }
    currentPlayer = "X"
    gameBoard = [
        "","","",
        "","","",
        "","",""
    ]
    startGame()
    movesLeft = 9
}

// document.querySelectorAll("td").forEach(addEventListener("click", whatIsClicked()))

