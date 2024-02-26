/*
Sources Used: 
https://www.w3schools.com/js/default.asp
https://developer.mozilla.org/en-US/
https://stackoverflow.com/questions/17665489/using-this-inside-an-event-handler
Variables like  moves left can be derived from other variables
*/
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
let winningResult;

function startGame(){
    document.querySelectorAll("td").forEach(cell => cell.addEventListener("click", playerMove));
    results.innerHTML = currentPlayer + "'s Turn"
}
startGame()
//function updates the current player
function changePlayer(){
    //Could use the ternary operator
    if (currentPlayer == "X"){
        currentPlayer = "O"
    }
    else{
        currentPlayer = "X"
    }
    results.innerHTML = currentPlayer + "'s Turn"
}
function highlight(color, weight){
    for (let cell of winningResult){
        index = cell.toString();
        document.getElementById(index).style.color = color
        document.getElementById(index).style.fontWeight = weight
    }
}
function gameOver(){
    document.querySelectorAll("td").forEach(cell => cell.removeEventListener("click", playerMove));
    document.getElementById("winner").style.fontSize = "x-large"
    document.getElementById("winner").style.fontWeight = 700
    highlight("red", 700)
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
                winningResult = condition;
                return true
            }            
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
    // Checks if the cell is empty
    if (posistion.innerHTML == "") {
        gameBoard[cellIndex] = currentPlayer
        posistion.innerHTML = currentPlayer 
        movesLeft -= 1
        // Ends the game is theres a win otherwise change the player
        if (isWin()){
            results.innerHTML = currentPlayer + " Has Won!"
            console.log(winningResult)
            gameOver()
        }
        //If all moves have been made with no win display Draw
        else if (movesLeft == 0){
        results.innerHTML = "Its a Draw"
        }
        else{
            changePlayer()
        }
    } 
    }
//Function wipes all variables and clears the board and sets it to X's turn
function reset(){
    movesLeft = 9
    currentPlayer = "X"
    gameBoard = [
        "","","",
        "","","",
        "","",""
    ]
    //Could use a arrow function
    for (let i of document.querySelectorAll("td")){
    i.innerHTML = ""
    }
    startGame()
    highlight("black", 400)
}

