//Run this script by node in terminal
function average(arr) {
    var total = 0;
    // for(var i=0; i<arr.length; i++) {
    //     total += arr[i];
    // }     
    arr.forEach(function(score){
        total += score;
    });
    return Math.round(total/arr.length);
}


var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores)); //should return 94

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2)); //should return 68