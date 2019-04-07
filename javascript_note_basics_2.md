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

* **Scope** is the context that code is executed in
* Higher order function

        function sing() {
            console.log("twinkle twinkle...");
            console.log("how I wonder...");
        }

        setInterval(sing, 1000); //execute it every 1 sec
        clearInterval(2); //stop the loop

        //anonymous function
        setInterval(function(){
            console.log("Anonymous is awesome!");
        }, 2000);
        clearInterval(1);


### Arrays
* Define

        var friends = ["Chandler", "Rachel", "Monica", "Phobee", "Joe", "Ross"];
        friends[5] = "Harry";
        friends[6] = "Ross"; //append one element to the array

        //Initialize
        var friends = [];
        var friends = new Array(); //uncommon

        //Arrays can hold any type of data
        var rand_collection = [1, "Jenny", null, true];

        //2D array
        var friends = [
            ["Harry", "Ron", "Hermione"],
            ["Malfoy", "Crabbe", "Goyle"],
            ["Albus", "James", "Lily"]
        ];

* Manipulate
        
    * push, pop
    
        var colors = ["red", "orange", "yellow"];
        colors.push("green");
        var lastColor = colors.pop();

    * shift, unshift (the opposite of push/pop)
      
        colors.unshift("black"); //add black to the beginning
        colors.shift(); //remove element from the beginning

    * indexOf
    
        colors.indexOf("black"); //return -1 (not found)
        colors.indexOf("yellow");

    * slice
     
        var fruits = ["apple", "banana", "lemon"];
        var subFruits = fruits.slice(1, 3); //"banana", "lemon"
        var sameFruits = fruits.slice(); //copy the entire array

    * splice

        todo.splice(index, number); 
        //number means how many items you want to delete from index

* Array Iteration
    * for

        for(var i = 0; i < todos.length; i++) {
            console.log(todos[i]);
        }

    * **forEach**

        //the most common way
        todos.forEach(function(todo){
            console.log("Inside the Todo list: "+todo);
        })

        //or this way
        function printTodo(todo) {
            console.log("Todo task: "+todo);
        }
        todos.forEach(printTodo);

        //build a forEach
        function myForEach(arr, func) {
            //call the func and apply on every element in the arr
            for(var i = 0; i < arr.length; i++) {
                func(arr[i]);
            }
        };
        //then try
        var colors = ["red", "green", "blue"];
        myForEach(colors, alert);
        //functions won't work without a () behind it


### Objects