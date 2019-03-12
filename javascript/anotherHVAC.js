// javascript file
/*test message in console to insure js file is linked properly*/
console.log("test message");


/*Simple animation using jquery*/
$("#hiddenMessage").hide(3000).fadeIn().delay(3000).slideUp("2000");

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

const solicit = document.getElementById("targetDiv")


solicit.addEventListener("click", function(event) {
    solicit.classList.remove("popup");
    solicit.classList.add("show");

});