//<li>Print all numbers between -10 and 19</li>
for(var i=-10; i<=19; i++){
    console.log(i);
}
console.log("====================");

//<li>Print all even numbers between 10 and 40</li>
for(var i=10; i<=40; i++){
    if(i%2==0){
        console.log(i);
    }
}
console.log("====================");

//<li>Print all odd numbers between 300 and 333</li>
for(var i=301; i<=333; i+=2){
    if(i%2==1){
        console.log(i);
    }
}
console.log("====================");

//<li>Print all numbers divisible by 5 AND 3 between 5 and 50</li>
for(var i=5; i<=50; i++){
    if(i%15==0){
        console.log(i);
    }
}
console.log("====================");