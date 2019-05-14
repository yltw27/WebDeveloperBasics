
var btn = document.querySelector("button");
var min = 0;
var max = 9;
var idx = Math.floor(Math.random() * (max - min)) + min;
var colors = ["white", "red", "orange", "yellow", "green", "blue", "navy", "purple", "pink", "grey"];

// btn.addEventListener("click", function() {
//     document.body.style.background = colors[idx];
//     document.querySelector("h4").textContent = "idx = " + idx + ", color = " + colors[idx];
// });

btn.addEventListener("click", function() {
    document.body.classList.toggle("purple");
})