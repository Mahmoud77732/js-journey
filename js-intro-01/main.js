
// document.querySelector("h1").style.color = "red";

/*
* what if u put the script-path in the head section of html file
*   the "h1" will not be found, so we can make it work by adding the script in the end of body section
*   or we can here in JS file tell him to run that line of code when the page is loaded
*/
window.onload = function() {
    document.querySelector("h1").style.color = "blue";
}

// what if u want to display a msg on browser page
window.alert("Hi Mahmoud!!");

//! but in professional work: it is recomended to not use alert() but make a pop-up window

// to write a HTML code in JS
document.write("<h2>Page Title 2</h2>");

// print msg in console
console.log("Hello from JS");
