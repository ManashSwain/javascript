console.log("Welcome to var let and const in javascript!");


//updating and redeclaring of varibles is possible in var /

var a = 4;
a = 8;       // updating the variables
console.log(a);

var b = 9;
var b = 12; //redeclaring of variables 
console.log(b);

//let can be updated but not redeclared 

let c = 34;
c = 89; //updating the variables 
console.log(c);

let d = 78;
// let d = 90; // redeclaring the variables in let which is not possible 
// console.log(d);


// const can neither be updated nor redeclared 

const j = 10;
console.log(j);

const k = 86;
//k = 87; // updating of const which is not possible 
//console.log(k);

const z = 3;
//const z = 8; // redeclaring of const which is not possible
//console.log(z);
