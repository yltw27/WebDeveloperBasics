/*
    Create an API using express and get data from omdbapi (https://www.omdbapi.com/)
    [apikey=thewdb from Colt Steele]

    http://www.omdbapi.com/?i=tt3896198&apikey=thewdb
    http://www.omdbapi.com/?s=star&apikey=thewdb
*/

const express = require("express");
const app = express();
const request = require("request");
const apikey = "thewdb";
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("search");
});

app.get("/results", function(req, res) {
    var url = "http://www.omdbapi.com/?s=" + req.query.search + "&apikey=" + apikey;
    request(url, function(err, response, body) {
        if(!err && response.statusCode == 200) {
            var data = JSON.parse(body);
            // res.send(data);
            res.render("results", {data: data});     
        }
    });
});

app.listen(3000, function() {
    console.log("MovieApp is started!");
});
