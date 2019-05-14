// var answer = Math.random(100);
var answer = 27;
var rightAns = false;
var guess;

while(rightAns == false){
    guess = prompt("Enter a number:");
    if(guess == answer){
        rightAns = true;
    }else if(guess < answer){
        alert("The number is too small.");
    }else{
        alert("The number is too big.");
    }
}

alert("You get the right answer (" + answer + ") !");