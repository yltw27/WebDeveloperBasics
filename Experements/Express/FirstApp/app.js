var express = require("express");
var app = express();

//Routes
// "/" -> "Hi there!"
//req: request, res: response (both are objects)
app.get("/", function(req, res){
    res.send("Hi there!");
})

// "/bye" -> "Goodbye!"
app.get("/bye", function(req, res){
    res.send("Goodbye!");
})  

// "/cat" -> "Meow~"
app.get("/cat", function(req, res){
    res.send("Meow~");
    console.log("Someone send GET to /cat");
})

//Tell Express to listen for requests (start server)
// process.env.PORT is undefined?
// app.listen(process.env.PORT, process.env.IP, function(){
//     console.log("Server has started!");
// });

app.listen(3000, function(){
    console.log("Server has started!");
});