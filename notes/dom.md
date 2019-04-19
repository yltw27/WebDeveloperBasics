# The DOM : Document Object Model

* Define
    * The DOM is the interface between JS and HTML+CSS
    * The browser turns every HTML tags into a javascript object that we can manipulate.
    * Everything is stored inside of the **document** object

* Process
    * Select and manipulate

        var h1 = document.querySelector("h1");
        //returns an object representing <h1>

        var changeBackgoundColor = function() {
            setInterval(function(){
                if(isBlue) {
                    body.style.background = "white";
                } else {
                    body.style.background = "blue";
                }
                isBlue = !isBlue;
            }, 1000)
        };

    * Methods for selecting objects
        * document.getElementById()

        var tag = document.getElementById("hightlight");

        * document.getElementsByClassName()

        var elems = document.getElementsByClassName("bolded");
        //returns an object (HTMLCollection) not array

        * document.getElementsByTagName()
        
        var tags = document.getElementsByTagName("li");

        * document.querySeletctor() (Returns the first elem that matches a given CSS-style selector)
        * document.querySelectorAll()
        
        var h1 = document.querySelector("h1");
        var li = document.querySelector("#highlight");  //# for id
        var li = document.querySelector(".bolded");  // for class
        var div0 = document.querySelector("div#custom-bg");  //get a div with id custom-bg
        var div0 = document.querySelector("h1 + p");  //get the first p inside h1

    * Manipulation
        * Style

        tag.style.color = "blue";
        tag.style.border = "10px solid red";
        tag.style.fontSize = "70px";
        tag.style.background = "yellow";
        tag.style.marginTop = "200px";

        * It's recommended for styles to be defined in seperate files for different classes.

        //define a class in css
        .some-class {
            color:blue;
            border: 10 px solid red;
        }

        tag.classList; //get the class list
        tag.classList.add("some-class");
        tag.classList.remove("some-class");
        tag.classList.toggle("some-class");  // add/remove the class

        * textContent: returns a string of all the text contained in a given element

        tag.textContent;
        tag.textContent = "override the content";

        * innerHTML
        tag.innerHTML;
