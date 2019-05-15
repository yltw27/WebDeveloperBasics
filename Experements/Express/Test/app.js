var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res) {
    var animal = req.params.animal.toLowerCase();
    var noises = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof",
        cat: "Listen foolish people~ I am your queen!",
        fish: "..."
    };
    res.send("The " + animal + " says '" + noises[animal] + "'");
});

app.get("/repeat/:word/:num", function(req, res) {
    var word = req.params.word;
    var num = Number(req.params.num);
    var text = "";
    while(num > 0) {
        text += word + " ";
        num -= 1;
    }
    res.send(text);
});

app.get("*", function(req, res) {
    res.send("Sorry, page not found...");
})

app.listen(3000, function() {
    console.log("Server is started!");
});