// javascript file for main page, index.html

/******console message to test if script is linked properly********/
console.log("test message 1");


/***Simple animation at top of page using jquery and utilizing the setInterval method***/
setInterval(function animate() {
    $("#hiddenMessage").hide(3000).fadeIn().delay(3000).slideUp(2000);
}, 5000);





//***This function uses an event listener to change the class of a div to change the background image
//**** Introdiv2 is hidden until area is clicked.***/
const advertise = document.getElementById("message")

advertise.addEventListener("click", function changeDiv(event) {


    advertise.classList.remove("introDiv");
    advertise.classList.add("introDiv2");


});



// Function targets advertisement and makes it dissapear on button click 
$("#popupGone").click(function remove() {
    $("#targetDiv").hide();
});



///**************JUNK UNUSED FAILED CODE TO COME BACK TO LATER *************////
// $const buttonClick = document.getElementById("popupGone");
// $const hideDiv = document.getElementsByClassName("popup, show");

// buttonClick.addEventListener("click", function(event) {
//     hideDiv.style.display = "none";

// });


// Start of code for removal of popup div upon button click
// const solicit = document.getElementById("targetDiv");


// solicit.addEventListener("click", function(event) {
//     solicit.classList.remove("popup");
//     solicit.classList.add("show");

// });

/* Start of logic for online estimate*/

// var x = 5;
// var y = 6;

// function estimate() {

//     var result = x + y;
//     return result;
// }
// estimate()
// console.log(estimate);