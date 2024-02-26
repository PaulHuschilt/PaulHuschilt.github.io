/*
player rolls a number
if that number is 7 or 11 win
if that number is 2,3 or 12 lose
if that none number is none of these it becomes the point

*/
let dice1;
let dice2;
let sum;
let firstRoll;
let point;
function startGame(){
    document.getElementById("dice").addEventListener("click", playerMove)
    document.getElementById("clear").addEventListener("click", restart)
    firstRoll = true
}
startGame()
function rollDice(){
    dice1 = Math.floor((Math.random() * 6) + 1)
    dice2 = Math.floor((Math.random() * 6) + 1)
    sum = dice1 + dice2
}
function displayResults(result){
    document.getElementById("winner").innerHTML = result
    document.getElementById("sum").innerHTML = "You rolled a " + sum
}
function playerMove(){
    
    rollDice()
    
    if (isWinOrLose()){
        displayResults("You Win")
        document.getElementById("dice").removeEventListener("click", playerMove)
    }
    else if (isWinOrLose() == false){
        displayResults("You Lose")
        document.getElementById("dice").removeEventListener("click", playerMove)
    }
    else{
        if (firstRoll){
            point = sum
            document.getElementById("point").innerHTML = "Your point is: " + point
        }
        displayResults("Roll Again")
        firstRoll = false
    }
}
function isWinOrLose(){
    if (firstRoll){
        if (sum == 7 || sum == 11){
            return true
        }
        else if (sum == 2 || sum == 3 || sum == 12){
            return false
        }
    }
    else if (sum == point){
        return true
    }
    else if (sum == 7){
        return false
    }
}
function restart(){
    firstRoll = true
    document.getElementById("winner").innerHTML = ""
    document.getElementById("sum").innerHTML = ""
    document.getElementById("point").innerHTML = ""
    sum = 0
    startGame()
}