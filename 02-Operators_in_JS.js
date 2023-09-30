//Operators in JavaScript

//Arithmetic operators
let a=5
let b=3
console.log("a + b = ",a+b)  //addition
console.log("a - b = ",a-b)  //subtraction
console.log("a * b = ",a*b)  //multiplication
console.log("a / b = ",a/b)   //division
console.log("a % b = ",a%b)   //modules
console.log("a ** b = ",a**b)   //exponential
console.log("a++ = ",a++)  //here it will first print the value and then increment
console.log("a-- = ",a--)   //here it will first print the value and then decrement
console.log("++a = ",++a)   //first increment and then print
console.log("--a = ",--a)   //first decrement and then print

//comparison operators
let a1=2
let a2=5
//returns true and false values
console.log("a1 == a2",a1==a2)
console.log("a1 > a2",a1>a2)
console.log("a1 < a2",a1<a2)
console.log("a1 >= a2",a1>=a2)
console.log("a1 <= a2",a1<=a2)
console.log("a1 != a2",a1!=a2)
console.log("a1 === a2",a1===a2)
console.log("a1 !== a2",a1!==a2)

//logical operators
console.log( a1>a2 && a1!=a2)  //returns true if both true else returns false
console.log( a1>a2 || a1!=a2)  //returns true if any one is true else returns false
console.log(!true)
console.log(!false)

//ternery operators
let age=prompt("enter your age:");
age=Number.parseInt(age);   //converts string to the number type
console.log("you are",((age>18)? "eligible to drive" : "not eligible to drive")); 




