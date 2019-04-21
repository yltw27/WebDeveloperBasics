#jQuery

* jQuery is a DOM manipulation library
* Ref:
    * http://youmightnotneedjquery.com/
    * http://jquery.com/


* Add jQuery
    1. Download jQuery and link to it locally

        <script type="text/javascript" src="lib/jquery-3.4.0.min.js"></script>

    2. Link to a CDN (a hosted copy)
        * Easier but slower
        * Search "jquery CDN" for more sources

        <script type="text/javascript" src="https://code.jquery.com/jquery-3.4.0.js"></script>


* jQuery Selector <- $

        $("selectorGoesHere")
        //jQuery will return all matching elements

        $("img")
        $(".sale")      //class = bonus
        $("#bonus")     //id = bonus
        $("li a")       //to select all a tag in li

        //Select the nth element
        $("li").eq(3)


* Manipulate style through .css()
    * The .css() method is jQuery's interface to styling

        $("h1").css("color", "blue")

        //Or pass in an object with styles
        //Cannot use "-", use camelCase for keys instead
        var styles = {
            backgroundColor: "pink",
            fontWeight: "bold"
        }
        $("h1").css(styles);
        //.css() will apply to all matching elements

        //Select the first matching element
        $("tag:first").css("..", "...") //slower
        //:first-of-type is a css built-in selector
        $("div:first-of-type").css("color", "pink") //faster


* Common methods
    * .text()

        $("li:first-of-type").text()    //get
        $("li:first-of-type").text("Book")  //set

    * .html()

        $("ul").html() //retrieve the inner HTML
        $("ul").html("<li>I hacked you ul</li><li>So goooooooooood</li>")

    * .attr()

        $("input").attr("text")
        $("input").attr("text", "checkbok")
        $("img").attr("src", "images/google_logo.png")

    * .val()

        $("input").val()
        $("select").val("option..")

    * .addClass() and .removeClass() and .toggleClass()

        $("li").removeClass("wrong")
        $("li:first-of-type").add("done")
        $("ul").toggleClass("correct")


* jQuery Events

    * .click()

        $("submit").click(function(){
            console.log("click submit");
        })

        //Wrap "this" to tell the brower it's a jQuery version
        $("button").click(function(){
            console.log("You just clicked "+$(this).text()+" button")
        })

    * .keypress()

        $("input").keypress(function(event){
            if(event.which === 13){
                console.log("Hit ENTER!");
            }
        })

    * .on() (~ addEventListener())

        $("h1").on("click", function(){
            $(this).css("color", "red");
        })
