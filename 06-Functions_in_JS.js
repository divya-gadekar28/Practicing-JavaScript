const prompt = require("prompt-sync")({signint:true});
/*syntax:-
function function-name(parameter1 , parameter2){
    //code to be executed
} */


//program to print average of 2 numbers using function
function avg(a,b){
    return ((a+b)/2);
}
let p=prompt("enter number1: ")
p=Number.parseInt(p);
let q=prompt("enter number2: ")
q=Number.parseInt(q);
console.log("average =",avg(p,q));


//program to find mean of 4 numbers
function mean(a, b, c, d){
    return ((a+b+c+d)/4);
}
let x=prompt("enter number1: ")
x=Number.parseInt(x);
let y=prompt("enter number2: ")
y=Number.parseInt(y);
let z=prompt("enter number3: ")
z=Number.parseInt(z);
let r=prompt("enter number4: ")
r=Number.parseInt(r);
console.log("mean = ",mean(x,y,z,r));

//program to convert farenhiet to celsius
function toCelsius(f){
    return (5/9) * (f-32);
}
let f=prompt("enter temperature in farenhiet : ")
console.log("celsius equivalent :",toCelsius(f));

//program to check if the number is even or odd
function evenOrOdd(n){
    if(n%2==0){
        console.log(n,"is even");
    }
    else{
        console.log(n,"is odd");
    }
}
let n1=prompt("enter any number : ");
n1=Number.parseInt(n1);
evenOrOdd(n1);

//program to find factorial of a given number
function factorial(num){
    if(num<0){
        console.log("error !! factorial of negative number does not exist");
    }
    else if(num==0){
        console.log("factorial of",num,"is 1");
    }
    else{
        let fact=1;
        for(let i=1;i<=num;i++){
            fact=fact*i;
        }
        console.log("factorial of",num,"is",fact);
    }
}
let num=prompt("enter any number : ");
num=Number.parseInt(num);
factorial(num);

//arrow functions
/*syntax :-
let function_name = (arg1, arg2,....n) =>{
    //code to be executed
} 
*/

//basic example
fun1 = (a, b) =>{
    console.log("multiplication is",a*b);
}
fun1(10,43);

//example1
fun2 = (val) => {
    console.log("Hello",val);
}
fun2("Universe !!");
