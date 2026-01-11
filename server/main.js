//print
console.log("hello world!");
console.error("this is error");
console.info("information");

//variable: it's a memory element
//primitive way
/*
var a = 5;
var b = 6;
var add = a + b;
console.log(add);
var name = "ram";
var isMale = true;
*/
//echma script new way
//let, const

let a = 5;
a = 20;
console.log(a);

//Data Types :
/** number-20, 20.5,
  string- "Ram", 
  boolean - true||false, 
  object-{name:"ram"},
  array-[1,2,3,4,5,6]
  **/
//access object : console.log(profile[address][city])|| console.log(profile[class])
// access object by another way: console.log(profile.address.city) || console.log(profile.class)
const profile = {
  name: "Suraj",
  class: 8,
  designation: "class teacher",
  address: {
    city: "Dharan",
    province: "Koshi",
  },
};
console.log(profile["address"]["province"]);
// access array: console.log(variableName[i], i=0,1,2,3,4,5,6,......,n)
const marks = [20, 30, 40, 50, 60, 70, 80, 90];
console.log(marks[0]);

/* operators
arithmetic operators: +, - , * , / ,  %
relational operators: >,< , >= , <= , == , !=, ===
logical operations: and --> && , or --> ||, not --> !

*/
console.log(5 == 5);
console.log(5 == "5"); // == checks only value
console.log(5 === "5"); // === also checks data type with value
//conditionals statement

const agecondition = 10;
if (agecondition < 18) console.log("Fuck off kid!");
else console.log("welcome guest!");
//if
//if-else ladder
//switch
// --same as c -- 
