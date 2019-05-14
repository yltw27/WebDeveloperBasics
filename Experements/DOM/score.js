var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var reset = document.querySelector("#reset");
var p = document.querySelector("p");
var winningScoreDisplay = document.querySelector("p span");
var winningScore = 5;
var numInput = document.querySelector("input");


function resetFunc() {
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
};


numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = numInput.value;
    winningScore = Number(numInput.value);

    //If the winning score is changed, reset scores
    resetFunc();
})


p1Button.addEventListener("click", function(){
    //If gameOver, the rest of this function won't be execute
    if(!gameOver){
        p1Score ++;
        p1Display.textContent = p1Score;
        if(p1Score >= winningScore){
            gameOver = true;
            p1Display.classList.add("winner");
        }
    }
})


p2Button.addEventListener("click", function(){
    if(!gameOver){
        p2Score ++;
        p2Display.textContent = p2Score;
        if(p2Score >= winningScore){
            gameOver = true;
            p2Display.classList.add("winner");
        }
    }
})


reset.addEventListener("click", function(){
    resetFunc();
})