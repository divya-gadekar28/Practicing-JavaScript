const prompt = require("prompt-sync")({signint:true});
//program to find area of triangle when base and height is given
let base=prompt("enter value for base : ");
base=Number.parseInt(base);
let height=prompt("enter value for height : ");
height=Number.parseInt(height);
let area=(base * height)/2;
area=Number.parseInt(area);
console.log("Area of triangle is : ",area);


//program to find area of triangle when all 3 sides are given
let side1=prompt("enter value of side1 :");
side1=Number.parseInt(side1);
let side2=prompt("enter value of side2 :");
side2=Number.parseInt(side2);
let side3=prompt("enter value of side3 :");
side3=Number.parseInt(side3);
/*herron's formula :-
s = (a+b+c)/2
area = √(s((s-a)*(s-b)*(s-c))) */
let s = (side1+side2+side3)/2;   //calculating semi-perimeter
s=Number.parseInt(s);
let area1=(s*((s-side1)*(s-side2)*(s-side3)));
area1=Math.sqrt(area1);
console.log("Area of triangle is :",area1);


//program to swap 2 variables
let num1=prompt("enter number1 : ");
let num2=prompt("enter number2 : ");
let temp;
console.log("before swapping :-")
console.log("number1 =",num1);
console.log("number2 =",num2);
temp=num1;
num1=num2;
num2=temp;
console.log("after swapping :-")
console.log("number1 =",num1);
console.log("number2 =",num2);


//program to display whether the alphabet is vowel or consonent
let ch=prompt("enter an alphabet : ");
if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u')
    console.log(ch,"is a vowel");
else if(ch=='A'||ch=='E'||ch=='I'||ch=='O'||ch=='U')
    console.log(ch,"is a vowel");
else
    console.log(ch,"is a consonent");


//program to display table of number
let n=prompt("enter the number : ")
n=Number.parseInt(n);
console.log("*** table of ",n,"***");
let result;
for(let i=1;i<=10;i++){
    result=n*i;
    console.log(n,"*",i,"=",result);
}


// program to find the factors of an integer
let num = prompt("Enter a positive number: ");
console.log("The factors of",num,"is:");
for(let i = 1; i <= num; i++) {
    if(num % i == 0) {
    console.log(i);
    }
}

//program to find max of 3 numbers
let n1=100;
let n2=5;
let n3=54;
if(n1>n2 && n1>n3){
    console.log(n1," is maximum");
}
else if(n2>n3 && n2>n1){
    console.log(n2," is maximum");
}
else{
    console.log(n3,"is maximum");
}










