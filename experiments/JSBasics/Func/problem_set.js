//1. isEven()
// function isEven(num) {
//     if(num % 2 == 0){
//         return true;
//     }else{
//         return false;
//     }
// }
function isEven(num) {
    return num % 2 == 0
}


//2. factorial()
function factorial(num) {
    if(num == 0){
        return 1;
    }
    var res = num;
    for(var i = num-1; i > 1; i--) {
        res *= i;
    }
    return res;
}


//3. kebabToSnake()
// function kebabToSnake(str) {
//     var res = "";
//     for(var i = 0; i < str.length; i++){
//         if(str[i] == "-"){
//             res += "_";
//         }else{
//             res += str[i];
//         }
//     }
//     return res;
// }
function kebabToSnake(str) {
    return str.replace(/-/g, "_");
}
