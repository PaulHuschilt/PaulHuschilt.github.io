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
    console.log("rollDice called")
    dice1 = Math.floor((Math.random() * 6) + 1)
    dice2 = Math.floor((Math.random() * 6) + 1)
    // dice1 = 11
    // dice2 = 1
    console.log(dice1, dice2)
    sum = dice1 + dice2
    // if (firstRoll == true){
    //     point = dice1 + dice2
    //     firstRoll = false
    //     console.log(point)
    // }
    // else{
    //     sum = dice1 + dice2
    // }
}
function playerMove(){
    console.log("PlayerMove called");
    rollDice()
    
    if (isWinOrLose() == true){
        document.getElementById("point").innerHTML = "Your point is: " + sum
        document.getElementById("sum").innerHTML = "You rolled a " + sum
        document.getElementById("winner").innerHTML = "You Win"
    }
    else if (isWinOrLose() == false){
        document.getElementById("point").innerHTML = "Your point is: " + sum
        document.getElementById("sum").innerHTML = "You rolled a " + sum
        document.getElementById("winner").innerHTML = "You Lose"
    }
    else{
        if (firstRoll == true){
            point = sum
        }
        document.getElementById("point").innerHTML = "Your point is: " + point
        document.getElementById("sum").innerHTML = "You rolled a " + sum
        document.getElementById("winner").innerHTML = "Roll Again"
        console.log(sum)
        firstRoll = false

    }
}
function isWinOrLose(){
    if (firstRoll == true){
        if (firstRoll == true && (sum == 7 || sum == 11)){
            return true
        }
        else if (firstRoll == true && (sum == 2 || sum == 3 || sum == 12)){
            console.log("test")
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

}