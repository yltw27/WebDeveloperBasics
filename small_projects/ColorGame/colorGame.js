var numBricks = 6;
var colors = generateRandColors(numBricks);
var bricks = document.querySelectorAll("#brick");
var pickedColor = pickColor();
var rgbSpan = document.querySelector("#rgbcode");
var title = document.querySelector("#title");
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var msg = document.querySelector("#message");

rgbSpan.textContent = pickedColor;

resetBtn.addEventListener("click", function(){
    title.style.backgroundColor = "#4169e1";
    colors = generateRandColors(numBricks);
    pickedColor = pickColor();
    rgbSpan.textContent = pickedColor;
    for(var i=0; i < bricks.length; i++) {
        bricks[i].style.backgroundColor = colors[i];
    }
    msg.textContent = "";
})

easyBtn.addEventListener("click", function(){
    msg.textContent = "";
    title.style.backgroundColor = "#4169e1";
    easyBtn.style.color = "white";
    hardBtn.style.color = "#4169e1";
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numBricks = 3;
    colors = generateRandColors(numBricks);
    pickedColor = pickColor();
    rgbSpan.textContent = pickedColor;
    for(var i=0; i < bricks.length; i++) {
        if(i<numBricks) {
            bricks[i].style.backgroundColor = colors[i];
        }else {
            bricks[i].style.display = "none";
        }
    }
})

hardBtn.addEventListener("click", function(){
    msg.textContent = "";
    title.style.backgroundColor = "#4169e1";
    hardBtn.style.color = "white";
    easyBtn.style.color = "#4169e1";
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numBricks = 6;
    colors = generateRandColors(numBricks);
    pickedColor = pickColor();
    rgbSpan.textContent = pickedColor;
    for(var i=0; i < bricks.length; i++) {
        bricks[i].style.display = "block";
        bricks[i].style.backgroundColor = colors[i];
    }
})

for(var i=0; i < bricks.length; i++) {
    //add initial colors to bricks
    bricks[i].style.backgroundColor = colors[i];

    //add event listeners
    bricks[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor == pickedColor) {
            //set all colors to pickedColor
            changeColors(clickedColor);
            title.style.backgroundColor = clickedColor;
            msg.textContent = "Correct!"
        } else {
            //set the color to black
            this.style.backgroundColor = "black";
            msg.textContent = "Try again."
        }
    })
}


function changeColors(colorString) {
    for(var i=0; i<colors.length; i++){
        bricks[i].style.backgroundColor = colorString;
    }
}


function pickColor() {
    var idx = Math.floor(Math.random()*colors.length);
    return colors[idx];
}


function generateRandColors(num) {
    var arr = [];
    for(var i=0; i<num; i++){
        arr.push(randColor());
    }
    return arr;
}


function randColor() {
    var red = Math.floor(Math.random()*256);
    var green = Math.floor(Math.random()*256);
    var blue = Math.floor(Math.random()*256);
    return "rgb("+red+", "+green+", "+blue+")";
}