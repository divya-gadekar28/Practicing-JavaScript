const prompt = require("prompt-sync")({signint:true});

//basic for loop in arrays
let num=[1,2,3,4,5]
for(let i=0;i<num.length;i++){
    console.log(num[i])
}

//using forEach loop
num.forEach((element)=>{   //calls a operation once for each array element
    console.log(element*element)
})    //output: 1 4 9 16 25

//Array.from loop
let name="divya"
let arr=Array.from(name)  //implies that convert the string 'name' into an array
console.log(arr)   //output: [ 'd', 'i', 'v', 'y', 'a' ]

//for...of loop
for(let i of num){
    console.log(i)
}   //output: 1 2 3 4 5

//for...in loop
for(let i in num){
    console.log(i)    //returns key(index) of an array rather than its value
}    //output: 0 1 2 3 4

//map() method
let ar=[1,2,3,4]
let a=ar.map((value,index,array)=>{   //it creates an new array by performing some operations on each array element
    console.log(value,index,array)    
    return value+index      
})
console.log(a)
/*output: 1 0 [ 1, 2, 3, 4 ]
2 1 [ 1, 2, 3, 4 ]
3 2 [ 1, 2, 3, 4 ]
4 3 [ 1, 2, 3, 4 ]
[ 1, 3, 5, 7 ] */

//filter() method
let arr2=[45,23,55,66,0,3,5]
let a2=arr2.filter((value)=>{
    return value<10    //creates new array of all the elements which returns true for an function
})
console.log(a2)   //output: [0,3,5]

//this functions do not modify our original array

//reduce() method
let arr3=[1,2,3,4,5,2,1]
let newArr3=arr3.reduce((h1,h2)=>{
    return h1+h2    //takes consecutive two values add them and return it and so on till the end of array
})
console.log(newArr3)  //output: 18

