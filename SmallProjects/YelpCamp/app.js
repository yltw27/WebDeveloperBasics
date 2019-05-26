const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


var characters = [
    {name: "Harry Potter", image: "https://farm8.staticflickr.com/7221/7305191686_25ca074567.jpg"},
    {name: "Jon Snow", image: "https://farm9.staticflickr.com/8387/8565678298_644a2142b6.jpg"},
    {name: "Rachel Green", image: "https://farm4.staticflickr.com/3675/10737623623_3b51721db6.jpg"},
    {name: "Peter Parker", image: "https://farm2.staticflickr.com/1859/44497125802_06c28bbbda.jpg"},
    {name: "Peter Parker", image: "https://farm2.staticflickr.com/1859/44497125802_06c28bbbda.jpg"},
    {name: "Peter Parker", image: "https://farm2.staticflickr.com/1859/44497125802_06c28bbbda.jpg"},
    {name: "Peter Parker", image: "https://farm2.staticflickr.com/1859/44497125802_06c28bbbda.jpg"}
];

app.get("/", function(req, res){
    res.render("hello");
});

app.get("/characters", function(req, res){
    res.render("characters",{characters: characters});
});

app.post("/characters", function(req, res){
    characters.push({name: req.body.name, image: req.body.image});
    res.redirect("/characters"); //default -> get
});

app.get("/characters/new", function(req, res){
    res.render("new");
});

app.listen(3000, function(){
    console.log("The YelpCamp server has started!");
});