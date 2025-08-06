
/*

* Var
    - Redeclare (Yes)
    - Access Before Declare (undefined)
    - Variable Scope [any "var var-name" is Added To Window object] ()
    - Block or Function Scope

! ES6 ->>

* Let
    - Redeclare (No ->> error)
    - Access Before Declare (error)
    - Variable Scope [not added to Window object: we want that: we don't want to fill Window with not needed vars in it ] ()
    - Block or Function Scope

* Const
    - Redeclare (No ->> error)
    - Access Before Declare (error)
    - Variable Scope [] ()
    - Block or Function Scope

*/

//* redeclare : ! (Not ReAssign) ->> Allowed
/*
var var1 = 1;
var var1 = 2;
console.log(var1);
*/

//* redeclare->> Not Allowed
/*
let var2 = 1;
let var2 = 2;
*/

//* redeclare->> Not Allowed
/*
const var3 = 1;
const var3 = 2;
*/

//* Access Before Declare
/*
console.log(var4); // undefined
var var4 = 1;
console.log(var5); // error
let var5 = 1;
console.log(var6); // error
const var6 = 1;
*/

//* Variable Scope: var is added to Window object but not {let and const}
/*
var var7 = 100;
console.log(var7);
console.log(window.var7);
*/

//-----------------------------------------

/*
* String
    - ""
    - ''
    - String Interpolation ->> ${} ->> "${}" ->> variables inside string
    - "web dev \"bootcamp\"" ->> how to use " inside string
    - 'web dev \'bootcamp\'' ->> how to use ' inside string
    - `<div> </div>` ->> html inside string on multiple lines
    - String Concatenation ->> +
*/

//-----------------------------------------

