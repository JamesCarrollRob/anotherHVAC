// javascript file for main page, index.html

/*console message to test if script is linked properly*/
console.log("test message");


/*Simple animation using jquery using the setInterval method*/
setInterval(function() {
    $("#hiddenMessage").hide(3000).fadeIn().delay(3000).slideUp(2000);
}, 7000);

/* Start of logic for online estimate*/

var x = 5;
var y = 6;

function estimate() {

    var result = x + y;
    return result;
}
estimate()
console.log(estimate);

const advertise = document.getElementById("message")
    // var clickCount = addEventListener("click")
advertise.addEventListener("click", function(event) {
    // alert("Call Us Today!");

    advertise.classList.remove("introDiv");
    advertise.classList.add("introDiv2");
    // if (clickCount > 2) {

    //     advertise.classList.remove("introDiv2");
    //     advertise.classList.add("introDiv");
    // }

});

// Start of code for removal of popup div upon button click
const solicit = document.getElementById("targetDiv");


solicit.addEventListener("click", function(event) {
    solicit.classList.remove("popup");
    solicit.classList.add("show");

});

// Function targets advertisement and makes it dissapear on button click 
$("#popupGone").click(function() {
    $("#targetDiv").hide();
});




// $const buttonClick = document.getElementById("popupGone");
// $const hideDiv = document.getElementsByClassName("popup, show");

// buttonClick.addEventListener("click", function(event) {
//     hideDiv.style.display = "none";

// });