console.log("Understanding var, let & const variables");
//never use var as it may cause random bug

//let variable:-
let a = "divya"   //created string variable
console.log(a)  //to print value of a
console.log(typeof (a)) //to know the data type of a
a = 10   //updated value of 10
console.log(a)    //here it prints latest updated value of a

//const variable:
const b = 3.14
console.log(b)
//b=12 //here we cannot update or re-decalred the value for constant variable
b * 30  //here we cannot add any value to const variable
console.log(b)

console.log("Understanding Primitive data types")
//trick: NN SS BB U
let c = null;  //null
let d = 12;    //number
let e = "hello";   //string
let f = Symbol("this is symbol");   //symbol
let g = true;    //boolean
let h = BigInt(5467);   //big Int 
let i = undefined;   //undefined
console.log(c, d, e, f, g, h, i)
console.log(typeof (g)) //gives type of particular data type

console.log("Understanding Objects In Js")
//created user-defined data type named 'item' which has multiple different data types grouped together
const item = {
  "a": "apple",
  "b": 12,
  "c": null,
  "d": BigInt(54632),
}
console.log(item["b"])  //display the value for b from 'item' variable




