# Node.js

* A server-side platform built on Google Chrome's JavaScript Engine (V8 Engine)
* Runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)


### Run node

        //Install from terminal
        $ brew install node

        //Install by package (Install Node.js and npm)
        // https://www.npmjs.com/get-npm

        $ node -v
        $ node <filename>


### Intro to NPM (Node Package Manager)
* Node.js' package ecosystem
* Install NPM

        $ npm -v

* Find packages
    [https://www.npmjs.com](https://www.npmjs.com)

* Initialize
    * Use "--save" flag to install packages

        //Install packages
        $ npm install cat-me --save

        //import a package from node_modules dir
        require("cat-me");
        var sth = require("cat-me");
        sth.funtion();

    * Use `npm init` to create a new package.json

        npm init
        npm install express --save //Autimatically update dependencies of package.json
