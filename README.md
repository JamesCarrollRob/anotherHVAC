# anotherHVAC

Description: 
This is a website for a fictional heating and air conditioning company called Another Heating and Cooling. Some pages for the site are still under construction but the front and contact pages are complete. The main page is index.html. I utilized some bootstrap features for the navbar, contact form, and cards. However, they were slightly customized in the css file to fit the needs of the site. The site is responsive to different screens and browsers, there are several breakpoints. The main one is at 768 pixels, which switches some displays to columns from rows and changes the color of a section. Two other breakpoints are specifically for some images in the .image-wrapper class. I kept the site simple for now so as to not get in over my abilities for the course. Eventually there will be an online estimate section where a user can enter certain parameters and receive a cost estimate. The page should be able to run simply by downloading the zip file from github. Enjoy!

Custom CSS Classes:
There are about seventeen custom css classes for the site, along with css which targets specific id's, tags and tags within classes. I particularly like the .title-banner class. I designed a nice looking radial gradient using reds and blues to represent "heating and cooling". I used the same gradient for the background of several other sections of the site.

    1. .titleBanner { background: radial-gradient(#3f5efb, #880909, #fc466b); text-align: center; text-shadow: rgb(122, 218, 13) 1px 0 10px; color: rgb(198, 230, 17); font-size: 40px; border-bottom: solid black; padding: 2em; padding-bottom: 1em; width: 100% }
    2. .popup { border: solid black; background-color: #0ea80b; text-align: center; position: -webkit-sticky; position: sticky; top: 10px; z-index: 2; }
    3. .estimate { background-image: url("../images/under-construction.jpg"); background-size: contain; padding: 10em; color: aliceblue; }
    
Custom JavaScript Functions:
The JavaScript for the site is pretty simple. I utilized jquery for some functions. Both files print a "test" message to the console log to insure the page is linked properly. The main JavaScript function is a neat animation targeting an element using jquery and the setInterval method:
1. setInterval(function animate() { $("#hiddenMessage").hide(3000).fadeIn().delay(3000).slideUp(2000); }, 5000);

Another function on the main page uses a click event to change the backgound color of a div by removing and adding a class:

2. const advertise = document.getElementById("message")
advertise.addEventListener("click", function changeDiv(event) {
advertise.classList.remove("introDiv");
advertise.classList.add("introDiv2");
});

A third function on the main page uses jquery and targets a button click event and simply removes a popup:

3. $("#popupGone").click(function remove() { $("#targetDiv").hide(); });

A fourth function is linked to the contact page and simply opens an alert window when the submit button is clicked:
$("#formSubmit").click(function() {

    alert("thanks for submiting!");
    // $("#serviceForm").hide();

});