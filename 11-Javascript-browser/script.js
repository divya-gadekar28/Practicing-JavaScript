//console objects :-
console.log("hello world")    //displays text message
console.log(console);   //shows all the console functions
console.error("opps..this is an error")   //shows as error message in red color
console.assert(5>53)    //when assertion is failed(returns false value) then error will be displayed
//console.clear()   //clears the console

obj={a:1,b:2,c:3}
console.table(obj)   //display in the form of table for large objects or arrays
console.warn("ohhh...this is a warning")   //shows as warning in yellow color
console.info("this is an important inforamtion")   //same as console.log but is shown in info tab

for(let i=0;i<5;i++){
    console.log(i)
}
console.time("forLoop")
console.timeEnd("forLoop")   //returns how much time is required for forLoop 


alert("hello world welcome to my web page")   //shows alert message once page is relaoded
let a=Number.parseInt(prompt("enter anything: "))
let write=confirm("do you want to write it on to the page")
if(write){
    document.write(a)
}
else{
    document.write("please allow me to write")
}