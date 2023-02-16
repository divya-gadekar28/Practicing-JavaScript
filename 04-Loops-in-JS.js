//Loops in JavaScript:for, for in, for of, while, do while

const prompt=require("prompt-sync")({signint:true});
//for loop
/* syntax:-
    for(declaration ; condition ; incrememt/decrement){
        //code to be exectuted
    }
*/
//program to print sum of n natural numbers
let sum=0
let n=prompt("enter value of n:")
n=Number.parseInt(n)   //converts string to number data type
for(let i = 0;i < n;i++){
    sum=sum+(i+1);
}
console.log("sum of first " + n + " numbers is " + sum);


//for in loop
/* syntax:-
    for(key in object){
        //code to be executed
    }
*/
//example
let obj = {
    divya:40,
    sam:45,
    nick:56,
    priya:67,
    shriya:78
}
for(let a in obj){
    console.log("marks of " +a+ " are " +obj[a])
}


//for of loop
/* syntax:
    for(variable of iterable){
        //code to be executed
    }
*/
//example
for(let b of "hello"){   //works for an iterable data structures like array,string,etc
    console.log(b)
}

//while loop
/*syntax:
    while(condition){
        //code to be executed
    }
*/
//example
let n1=prompt("enter value of n:")
n1=Number.parseInt(n1)
let a=0
while(a<n1){
    console.log(a)
    a++;
}
//runs till condition becomes false

//do while loop
/*syntax:
    do{
        //code to be exectuted
    }while(condition)
*/
//example
let n2=prompt("enter value of n:")
n2=Number.parseInt(n2)
let b=0
do{
    console.log(b)    //first condition is always executed without checking condition
    b++;
}while(b<n2)



