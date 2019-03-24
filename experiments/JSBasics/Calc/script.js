var age = prompt("How old are you!");
var days = age / 4 * (365*4+1);
alert("You know.. " + age + " years are roughly " + days + " days.");
console.log(age + " years ~= " + days + " days.");

if(age < 0){
    console.log("ERROR Please do not enter negative numbers.");
}else if(age == 21){
    console.log("Happy 21st birthday!");
}else if(age % 2 == 1){
    console.log("Your age is odd!");
}else if(age % Math.sqrt(age) == 0){
    console.log("Perfect square!");
}else{
    console.log("You are " + age + " years old.");
}