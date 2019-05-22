# Express - The most popular Node web development framework

* Framework v.s. Library - Inversion control
    * Library - In control (You call a library)
        * A collection of functionality that you can call.
    * Framework - It calls you
        * All the control flow is already in the framework, and there's bunch of predefined white spots that you can fill out with your code.

* Heavy-weigth v.s. Light-weight
    * How much the framework does for you?
        e.g. Express is a light-weight framework. (You need to do more.)
             Rails, on the contrary, is a heavy-weight framework.

* Steps to start the server
    1. Create a directory `mkdir dirname`
    2. `npm init` and change the entry point to app.js
    3. Create app.js (Set routes and listener) and views/ if EJS is needed
    4. Install Node packages by NPM 
        ```
        npm install express --save
        npm install ejs --save
        ```

### app.js [link](../Experiments/Express/FirstApp)
* After `npm init` and `npm install express --save`, you need to set routes and listeners in app.js (or index.js).

    ```
    var express = require("express");
    var app = express();

    app.set("view engine", "ejs");

    // "/" -> "Hi there!"
    //req: request, res: response (both are objects)
    app.get("/", function(req, res){
        res.send("Hi there!");
    })

    // "/bye" -> "Goodbye!"
    app.get("/bye", function(req, res){
        res.send("Goodbye!");
    })  

    //Tell Express to listen for requests (start server)
    app.listen(3000, function(){
        console.log("Server has started!");
    });
    ```

* Start server
`node app.js`
    * Automate Node server restart with Nodemon (Don't use for production)
        ```sudo npm i -g nodemon```

##### Routes
* Order of routes matter!
```
//Put * route to the bottom to avoid overwrite other routes.
//Express will check routes by the order in app.js.

app.get("*", function(req, res){
    res.send("You are a star ;)");
})
```

* Route parameters
    * To avoid WET (Write everything twice)
    * Use **:** to represent any single thing following it
    * Use **req.params** to get parameters
    ```
    app.get("/r/:subRedditName", function(req, res) {
        var subreddit = req.params.subRedditName.toUpperCase();
        res.send("Welcome to the " + subreddit + " subreddit!");
    });
    ```


### EJS, Embedded JavaScript templates
* Use res.render() and EJS to send back html
    * Put EJS files under views/
    * install ejs using npm `npm i ejs --save`
    ```
    app.get("/", function(req, res) {
        res.render("home.ejs");  //Will look for home.ejs under views/
    });
    ```

* Use `<%= %>` in html to produce JS result
    * Things in `<%= %>` means JS code
    ```
    <h1>You fall in love with "<%= thingVar %>"</h1>

    //In app.js, use {} to send variables
    app.get("/fallinlivewith/:thing", function(req, res) {
        var thing = req.params.thing;
        res.render("love.ejs", {thingVar: thing});
    });
    ```

* JS code block
    1. <%= %> Directly add the result to html
    2. <% %> Run the code but don't add it to html


* body-parser
```
//app.js
const bodyParser = require("body-parser");
app.use(bodyParser.urlencode({extended: true}));
```