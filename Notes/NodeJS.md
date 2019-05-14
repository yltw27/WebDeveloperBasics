# Node.js
- Run JavaScript for front and back end

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
    https://www.npmjs.com

* Initialize
        
        //Install packages
        $ npm install cat-me

        //import a package from node_modules dir
        require("cat-me");
        var sth = require("cat-me");
        sth.funtion();
