var numbers = [12, 27, 11, 25, 10, 99];
// var numbers = [1,1,1,1,1];

window.setTimeout(function(){
    console.log("start");
}, 500);

var cmd = prompt("Enter the index of action to do");

while(cmd != "q") {
    console.log(numbers);
    if(cmd == 1) {
        printReverse();
    }else if(cmd == 2) {
        isUniform();
    }else if(cmd == 3) {
        sumArray();
    }else if(cmd == 4) {
        max();
    }
    console.log("*********");
    cmd = prompt("Enter the index of action to do");
}
console.log("OK, YOU QUIT THE APP");

//1. printReverse()
function printReverse() {
    for(var i = numbers.length-1; i >= 0 ; i--) {
        console.log(numbers[i]);
    }
}

//2. isUniform()
function isUniform() {
    var ans = true;
    var idx = 1;
    while(idx < numbers.length) {
        if(numbers[idx] != numbers[0]){
            ans = false;
            break;
        }
        idx++;
    }
    console.log(ans);
}

//3. sumArray()
function sumArray() {
    var ans = 0;
    numbers.forEach(function(num){
        ans += num;
    });
    console.log(ans);
}

//4. max()
function max() {
    var max = numbers[0];
    for (var i = 1; i < numbers.length; i++) {
        if(numbers[i] > max){
            max = numbers[i];
        }
    }
    console.log(max);
}