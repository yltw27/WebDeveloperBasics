# JavaScript Note - Basics

##### Introduction to JavaScript
Todo

##### 5 primitive types
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

##### Vairables
    //variables are simply containers that store values
    //they follow this pattern:
    var varName = varValue;
    
    //Do use camelCase for naming
    var englishLetter = "a";
    
##### Some useful built-in methods
    //Clear the screen
    clear()
    
    //Pop up window
    alert("message...")
    
    //Print someting to the JavaScript console
    console.log()