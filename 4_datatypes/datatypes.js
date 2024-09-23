//primitive data types in javascript 
// Number 

let mynum = 6;
console.log("The data type is " + typeof mynum);

// String 
let mystr = " hello my name is manash";
console.log("The data type is " + typeof mystr);

//Undefined 
let undef = undefined;
console.log("The data type is " + typeof undef);

//Null 
let ntg = null;
console.log("The data type is " + typeof ntg);

//Boolean 
let bool = true;
console.log("The data type is " + typeof bool);

let boolval = false;
console.log("The data type is " + typeof boolval);

//BigInt 
let bi = BigInt("100");
let bi2 = BigInt("100");
let c = bi + bi2
console.log(c);
console.log("The data type is " + typeof c);

//Non Primitive data types in javascript 

//Arrays 

let myarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("The Data type is " + typeof myarr);

//Function 
function add(a, b) {
  c = a + b;
  return c;
}
d = add(40, 60);
console.log(d);
console.log("The data type is " + typeof add);

// Objects 

let myobj = {
  Name: "Manash",
  Age: 23,
  city: "chennai"
}
console.log(myobj);
console.log("The data type is " + typeof myobj);

//Date Objects 

let mydate = new Date();
console.log(mydate);
console.log("The data type is " + typeof mydate)
