# JavaScript Note - Basics 2 (Functions, Arrays and Objects)


### Functions
* Functions let us wrap bits of code up into reusable packages. 
* They are one of the building blocks of JS.

        function sayHello() {
            console.log("Hello!");
        }

        function multiple(num1, num2) {
            console.log(num1 * num2);
        }

* The return keyword

        function kebabToSnake(str) {
            return str.replace(/-/g, "_");
        }

        //function declaration
        function cap(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }

        //function expression
        var cap2 = function(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }