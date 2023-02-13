//Conditional statements in JavaScript

//if statement
const prompt=require("prompt-sync")({signint:true});
let age=prompt("whats your age?");
age=Number.parseInt(age);   //converts string to a number
if(age<0){
    alert("not valid age");
}

//if..else statement
let age1=prompt("whats your age?");
if(age1<0){
    alert("not valid age");
}
else{
    alert("valid age");
}

//if...elseif...else statement
let age2=prompt("whats your age?");
if(age2<0){
    alert("please enter valid age");
}
else if(age2<10){
    alert("not at all eligible to drive !!")
}
else if(age2>10 && age2<18){
    alert("wait till your age turns above 18");
}
else{
    alert("you are eligible to drive");
}

//switch case statements

let n = prompt("whats your name?");
switch(n){
    case 'divya':console.log("you're principal")
    break
    case 'priya':console.log("you're department head")
    break
    case 'sam':console.log("you're vise principal")
    break
    case 'om':console.log("you're professor")
    break
    default:console.log("please enter valid name")
    break
}