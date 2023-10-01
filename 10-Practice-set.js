const prompt = require("prompt-sync")({signint:true});

//  Que1 : create an array. take input from user and add it to the array
let arr=[1,2,3,4,6,7,8]
let a1=prompt("enter a number : ")
a1=Number.parseInt(a1)
arr.push(a1)
console.log(arr)

//Que2 : keep adding the number to an array until 0 is added to the array
let arr2=[1,2,3,4,6,7,8]
let a;
do{
    a=prompt("enter a number : ")
    a=Number.parseInt(a)
    arr2.push(a)
    console.log(arr2)
}while(a!=0)

//Que3 : filter numbers divisible by 10 from a given array
let arr3=[1,5,7,8,9,10,15,100,200]
let n=arr3.filter((x)=>{
    return x%10==0
})
console.log(n)

//Que3 : create an array of square of given numbers
let ar=[1,2,3,4,10,12]
let a3=ar.map((x)=>{   //it creates an new array by performing some operations on each array element
    return x*x     
})
console.log(a3)

/* Que4 : Use reduce to calculate factorial of a given number from an array of first n natural number
(n being the number whose factorial needs to be calculated)*/
let ar2=[1,2,3,4]
let a2=ar2.reduce((x1,x2)=>{  
    return x1*x2     
})
console.log(a2)

//que5 : guess the number
let randomNum=Math.floor(Math.random()*10)+1
console.log(randomNum)
let number=parseInt(prompt("guess a number from 1 to 10 : "))
while(randomNum!=number){
    number=parseInt(prompt("guess a number from 1 to 10 : "))
}
if(randomNum=number){
    console.log("hurray !! you guessed the correct number")
}
