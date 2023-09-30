const prompt = require("prompt-sync")({signint:true});

//arrays are the variables which can hold more than one values

let marks=[99,87,90,65]
console.log(marks)

let array1=[80,55,'divya',true,null]   //can also stored values of different datatype
console.log(array1)

//to access elements from an array
console.log(array1[0])
console.log(array1[1])
console.log(array1[2])
console.log(array1[3])
console.log(array1[4])
console.log(array1[5])     //5th index value is not present so it will print undefined

console.log(array1.length) //returns length of an array ie.count

array1[5]=false    //adding new element to an array
console.log(array1)

array1[4]='hello'    //changing elements of an array
console.log(array1)

console.log(typeof(array1))   //arrays are object in javascript 

//arrays are mutable, it can be changed

//example:-
let array2=[1,2,3,4,5]
for(let i=0;i<array2.length;i++){
    console.log(array2[i]) 
}

//array methods :-

//toString():
let num=[1,2,3,4,5]
let b=num.toString(num)
console.log(typeof(b))

//join method:
let c=num.join("_rno ")
console.log(c,typeof(c))

//pop method: 
num.pop()
console.log(num) //removes last element from an array
let n=num.pop()
console.log(num,n)   //displays popped element from an array

//push method:
let m=num.push(10)
console.log(num)    //push inserts new element at the last

//shift method:
let r=num.shift()
console.log(r)   //removes first element from an array and modifies original array
console.log(num)

//unshift method:
let p=num.unshift(20)
console.log(p)
console.log (num)   //inserts new element at the beginning of an array and modifies original array

//delete method:
console.log(num)
delete num[0] //deletes the element but the length reamins same
console.log(num)

//concat method:
let a1=[1,2,3,4,5]
let a2=['one','two','three','four','five']
let a3=[10,11,12,13]
let newArray=a1.concat(a2,a3)   //used to concatenate two or more arrays into one array
console.log(newArray)

//reverse
a1.reverse()
console.log(a1)

//splice and slice

//splice can be used to add new items to an array
let num2=[44,66,7,12,33]
num2.splice(2,3,1,2,3)   //syntax: splice(start_index,noOfElements,element1,element2,....elementn)
console.log(num2)

//slice can be used to slice out a piece from an array and creates a new array(it does not modify original array)
let num3=[1,2,3,4,5,6]
let num4=num3.slice(2)   //starting from index 2,it prints all the values till end
console.log(num4)
let num5=num3.slice(1,4)   //slice out all the elements from index1 to index3 where index3 element will not be included
console.log(num5)