const mongoose = require("mongoose");

//connect to the db = use db_name
mongoose.connect("mongodb://localhost:27017/cat_app", {useNewUrlParser: true})

//define the cat object
var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});
var Cat = mongoose.model("Cat", catSchema); // ~ db.collection

// //adding a new cat to the db
// var aCat = new Cat({
//     name: "Mrs. Norris",
//     age: 20,
//     temperament: "Evil"
// });

// aCat.save(function(err, cat) {
//     if(err) {
//         console.log("Something went wrong!");
//     }else {
//         console.log("Saved: "+cat);
//     }
// });

//create = new + save
Cat.create({
    name: "Harry",
    age: 5,
    temperament: "Mild"
}, function(err, cat) {
    if(err) {
        console.log("Something went wrong!");
    }else {
        console.log("Saved: "+cat);
    }
});

//fetch all cats from db
Cat.find({}, function(err, cats) {
    if(err) {
        console.log("Error: "+err);
    }else {
        console.log("Found"+cats);
    }
});