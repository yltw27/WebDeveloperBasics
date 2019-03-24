//<li>Print all numbers between -10 and 19</li>
var start = -10 + 1;
while(start < 19){
    console.log(start);
    start++;
}
console.log("====================");

//<li>Print all even numbers between 10 and 40</li>
start = 12;
while(start < 40){
    // if(start % 2 == 0){
    //     console.log(start);
    // }
    // start++;
    console.log(start);
    start+=2;
}
console.log("====================");

//<li>Print all odd numbers between 300 and 333</li>
start = 301;
while(start < 333){
    // if(start % 2 == 1){
    //     console.log(start);
    // }
    // start++;
    console.log(start);
    start+=2;
}
console.log("====================");

//<li>Print all numbers divisible by 5 AND 3 between 5 and 50</li>
start = 5;
while(start < 50){
    if(start % 15 == 0){
        console.log(start);
    }
    start++;
}
console.log("====================");