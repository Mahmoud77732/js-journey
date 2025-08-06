
/*
* Console Methods
    - log
    - error
    - table

* Web API: Console-Obj i related to "Web API"

* Styling Console
    - Directive %c
*/

/*
console.log("log");
console.error("error");
console.table(["Ali", "Omar", "Eslam"]);

// put "%c" before string to apply style on it
console.log("Web %cDevelopment", "color: red; font-size: 35px");

// what if you want to make more than 1 style in the logging
console.log("%cWeb %cDevelopment", "color: red; font-size: 35px", "color: teal; font-size: 35px");
*/

//---------------------------------------------


/*
? ECMA Script

* What is ECMA Script?
    = It is a language that is used to write scripts in web pages
* ECMA Script vs JS
    = JS is a subset of ECMA Script
    = ECMA Script is a superset of JS
*/

/*
var myName = "name1";
console.log("Hello " + myName);
console.log(`Hello ${myName}`); // Template Literal
*/

//---------------------------------------------

/*
? Data Types

? typeof

*/

/*
console.log(5);
console.log("Hello");
console.log(typeof 5); // number
console.log(typeof "Hello"); // string
console.log(typeof [1, 2, 3]); // array ->> object
console.log(typeof {name: "Ali", age: 20}); // object
console.log(typeof true); // boolean
console.log(typeof null); // object
console.log(typeof undefined); // undefined
*/

//---------------------------------------------

/*
* Variables Intro
    - what is variable?
    - why we use variables?
    - declare a variable and use it
    - Syntax ( keyword | var-name | = | var-value )
    - variable without var
    - multiple variables in the same line
    - Id , Global Variable
    - Loosely Typed vs Strongly Typed
*/

var userName = "Ahmed";
console.log(userName);

// if you definde html-el that has ID then you can access it here
pVarId.innerHTML = "Hello from JS"; // html-element's ID
console.log(pVarId);

//---------------------------------------------


