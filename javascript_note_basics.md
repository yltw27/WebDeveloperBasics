# JavaScript Note - Basics


### Introduction to JavaScript
Todo


### 5 primitive types
1. Numbers
 
        //取商數 (ans=9)
        99 % 10

2. Strings
 
        //Concatenation
        "Harry" + "Potter" -> "HarryPotter" 

        //Escape characters start with "\"
        "This is a backslash: \\" -> "This is a backslash: \"
        
        //Strings have a length property
        "hello world".length -> 11
        
        //Access individual character by index
        "hello"[2] -> "l"
  
3. Booleans
4. null
        
        //null is explicitly nothing
        var player = null;

5. undefined
    
        //Variables are declared but not initialized are undefined
        var age;

### Vairables
    //variables are simply containers that store values
    //they follow this pattern:
    var varName = varValue;
    
    //Do use camelCase for naming
    var englishLetter = "a";
    
### Some useful built-in methods
    //Clear the screen
    clear()
    
    //Pop up window
    alert("message...")
    
    //Print someting to the JavaScript console
    console.log()
    
 
### Control Flows
 
##### Boolean Logic
* Comparison operators
    * === means "equal value and type"
    * !== means "not equal value or type"
     
            // == v.s. ===
            // == performs type coercion while === doesn't
            var x = 99;
            x == "99"  //true
            x === "99"  //false

            var y = null;
            y == undefined  //true
            y === undefined  //false
           
            true == "1"  //true
            0 == false  //true
            NaN == NaN  //false!  // Not a Number
           
* Logical operators
    * && (and), || (or), ! (not)

* Truthy and falsy values

        //Falsy values (Everything else is truthy)
        false
        0
        ""
        null
        undefined
        Nan

##### Conditionals
* if, else if, else

        if(age < 18){
            console.log("Sorry! You cannot get in.")
        }else if(age >= 18 && age < 21){
            console.log("You can enter, but cannot drink.")
        }else{
            console.log("Welcome!")
        }

* while loops
      
        var count = 0;
        while(count < 10){
            console.log("count is: " + count);
            count++;
        }

* For loops

        for(init; condition; step){
            //run some code
        }

Please remember to use **i+=n** for step
  
      for(var i=0; i<10; i+=2){
          console.log(i);
      }
