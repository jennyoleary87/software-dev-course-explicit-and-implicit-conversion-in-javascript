/*
03/06/2025
Values, Data Types, and Operations | Lesson 3
Practice 1: Debugging Type Conversion
explicit-and-implicit-conversion-in-javascript.js
--------------------------------------------------------
Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  ORIGINAL OUTPUT
  |  The result is: 3
  |  This is valid!
  |  Total Age: 255
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.
  -----------------------------------------------------
  --ORIGINAL CODE--
  let result = "5" - 2;
console.log("The result is: " + result);

let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = age + 5;
console.log("Total Age: " + totalAge);
*/

let result = "5" - 2;
console.log("The result is: " + Number(result));

let isValid = "false";
if (isValid) {
  console.log(Boolean("This is valid!")); // Adding "Boolean()" outputs: true
}

let age = Number("25");
let totalAge = age + 5; // now num + num; not string + num
console.log("Total Age: " + Number(totalAge));

/*
Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.
*/

let bool = false;
console.log(bool.toString()); // false
console.log("7" == 7); // true
