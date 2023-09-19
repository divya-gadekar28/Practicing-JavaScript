//STRINGS is a group of characters used to store and manipulate text
//example :-
let word = "hello world";   //strings can also be written under single quotes
console.log(word);
console.log(word.length);   //prints length of a string
//to access the characters in a string
console.log(word[0]);   //prints first character
console.log(word[1]);   //prints second character

//TEMPLATE LITERALS :- uses backticks to define a string where we can use both single and double quotes inside a string
//example :-
let friend = `divya`;
console.log(friend);
let sentence = `We're all here to learn javascript`;  
console.log(sentence);
let a = `hello ${friend},how are you?`   //accessing the values from pre-declared variable
console.log(a);

//ESCAPE SEQUENCE CHARACTERS
// 1) \' = allows you to use single quote inside a single quotes 
let word1 = 'you\'re welcome'
console.log(word1);
// 2) \" = allows you to use double quote inside a double quotes 
let word2 ="we're all \"good friends";
console.log(word2);
// 3) \n = takes you to the new line (line break)
let word3 = 'hello world.\nwelcome to metaverse';
console.log(word3);
// 4) \t = gives tab space
let word4 = '\tjavascript is so easy to learn';
console.log(word4);
// 5) \r = carriage return character; it tells your terminal emulator to move the cursor at the start of the line.
let word5 = '\rhello world,this is so beautiful. I love it';
console.log(word5);

//some imp string functions
//1)toUpperCase()
let msg="hello world";
console.log(msg.toUpperCase());   //converts string to upper case

//2)toLowerCse()
let msg1="Welcome to my Universe";
console.log(msg1.toLowerCase());   //converts string to lower case

//3)slice()
console.log(msg.slice(2,5));   //prints char from 2nd index to 5th index where 5th & 2nd index character is not included
console.log(msg1.slice(4));    //prints char from 4th index till the end of string

//4)replace()
console.log(msg.replace("hello","my"));  //replaces "hello" word with new word "my"

//5)concat()
console.log(msg.concat(", we're learning javascript ")); //concatenates new string written to the msg variable
let str="good morning";
console.log(msg1.concat(str));   //concatenates new string created with the earlier
console.log(msg.concat(str,"to you"));   
//we can also concatenate with + operator
let friend2="divya"+"sam"+"john";
console.log(friend2);

//6)trim()
let string="       welcome to my channel      ";
console.log(string);
console.log(string.trim());    //removes whitespaces from the string


