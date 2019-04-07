var todos = [];

var cmd = prompt("What would you like to do?");

// //wait 0.5 sec for HTML to load, then run JS
// window.setTimeout(function(){
//     while(cmd != "quit") { 
//         if(cmd == "new") {
//             addTodos();
//         }else if(cmd == "list") {
//             listTodos();
//         }else if(cmd == "delete") {
//             deleteTodos();
//         }
//         cmd = prompt("What would you like to do?");
//     }
// }, 500);
// console.log("OK, YOU QUIT THE APP");

while(cmd != "quit") { 
    if(cmd == "new") {
        addTodos();
    }else if(cmd == "list") {
        listTodos();
    }else if(cmd == "delete") {
        deleteTodos();
    }
    cmd = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP");

function addTodos() {
    todos.push(prompt("New todo:"));
}

function listTodos() {
    todos.forEach(function(todo, idx){
        console.log(idx + ": " + todo);
    });
    console.log("**********");
}

function deleteTodos() {
    var idx = prompt("Enter the index of todo to delete");
    todos.splice(idx,1);
}