// const request = require('request');
// request("http://www.google.com", function(err, response, body) {
//     if(err) {
//         console.log("SOMETHING WENT WRONG...");
//         console.log(err);
//     }else {
//         if(response.statusCode == 200) {
//             console.log(body);
//         }
//     }
// });


// //shorter version: examine err and statusCode at the same time
// const request = require('request');
// request("http://www.google.com", function(err, response, body) {
//     if(!err && response.statusCode == 200) {
//         if(response.statusCode == 200) {
//             console.log(body);
//         }
//     }
// });


//JSON placeholder API example
var request = require("request");
request("https://jsonplaceholder.typicode.com/users/1", function(err, res, body) {
    //eval(require("locus")) //enable console mode after run node first_request.js
    if(!err && res.statusCode == 200) {
        var parseData = JSON.parse(body);
        console.log(parseData["name"]); //2 ways to get data
        console.log(parseData.company.name);
        console.log(`1. ${parseData.name} lives in ${parseData.address.city}\n`);
    }
});


//Example from https://jsonplaceholder.typicode.com/
var fetch = require("node-fetch");
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(json => console.log(json))
    .catch((err) => {
        console.log("Error!", err);
    }
);
