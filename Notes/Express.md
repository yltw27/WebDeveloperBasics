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

* Install Express

```bash
npm install express --save
```

### app.js [link](../Experiments/Express/FirstApp)
* After `npm init` and `npm install express --save`, you need to set routes and listeners in app.js (or index.js).

```
var express = require("express");
var app = express();

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

#### Routes
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
