const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


var friends = ["Harry", "Ron", "Thomas", "Jennifer", "Justin", "Rowan"];

app.get("/", function(req, res) {
    res.render("Home");
});

//add friends to the list
app.get("/friends", function(req, res) {
    res.render("friends", {friends: friends});
});

app.post("/addfriends", function(req, res) {
    friends.push(req.body.newfriend);
    res.redirect("/friends");
});

app.listen(3000, function() {
    console.log("Server is started!");
});
