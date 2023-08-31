const max = 5;
let player1 =1+ Math.floor(Math.random()*(max));
let player2 =1+ Math.floor(Math.random()*(max));
const player1_dice = document.getElementById("img1")
const player2_dice = document.getElementById("img2")
function p1(){
    player1_dice.setAttribute("src",`images/dice${player1}.png`);
    player2_dice.setAttribute("src",`images/dice${player2}.png`);
}
 
p1();
function WhoWin(){
    if(player1>player2){
        document.querySelector("h1").innerHTML="🎉 player 1 win"
    }
    else if(player1<player2){
        document.querySelector("h1").innerHTML="🎉 player 2 win"
    }
    else{
        document.querySelector("h1").innerHTML="match draw"
    }
}
WhoWin();