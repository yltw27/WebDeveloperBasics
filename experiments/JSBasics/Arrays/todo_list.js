var todos = [];

var cmd = prompt("What would you like to do?");

//wait 0.5 sec for HTML to load, then run JS
window.setTimeout(function(){
    while(cmd != "quit") { 
        if(cmd == "new") {
            todos.push(prompt("New todo:"));
        }else if(cmd == "list") {
            console.log(todos);
        }
        cmd = prompt("What would you like to do?");
    }
}, 500);