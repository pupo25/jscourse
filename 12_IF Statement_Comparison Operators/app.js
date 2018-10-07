// if(something is true){
//   do something
// }
// else{
//   do something else
// }

// Comparison Operators 
//assigment operator =
 const id = 100; 

 // Equal TO , type does no matter
 if(id == 100){
   console.log('correct') //answer
 } else{
   console.log('incorrect')
 }
 // Not Equal ,type does no matter
 if(id != 100){
   console.log('correct')
 } else{
   console.log('incorrect')//answer
 }
 // Equal TO Value and Type 
 const id2 = '100';

 if(id2 === 100){
   console.log('correct')
 } else{
   console.log('incorrect') //answer
 }

 // Not Equal TO Value and Type 
 if(id2 !== 100){
   console.log('correct')//answer
 } else{
   console.log('incorrect')
 }

// Test if undefined
let id3; 
if(typeof id3 !==undefined){
  console.log(`The ID is ${id3}`) //answer
} else{
  console.log(`No ID`)
}

// Greater and Equal Or Less and Equal   
const id4 = 100;

if(id4 => 100){
  console.log('correct')//answer
} else{
  console.log('incorrect')
}
if(id4 <= 101){
  console.log('correct')//answer
} else{
  console.log('incorrect')
}

//  else If
const color = 'red';

if(color === 'red'){
  console.log('Color is red')
} else if(color === 'blue'){
  console.log('Color is blue')
} else {
  console.log('Color Is Not Red Is Blue')
}

// Logical Operatores  Test More than one thing true or false

// ! NOT


const name = 'Israel';
const age = 28;

// && AND both are true
if(age > 0 && age < 12){
  console.log(`${name} is a child`)
} else if(age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`)
} else{
  console.log(`${name} is an adult`)
} 

// Or || one is true
if(age < 16 || age > 65){
  console.log(`${name} can not run in the race`)
} else {
  console.log(`${name} is registred for the race`)
}

// Ternary Operator Short Version  if
const id5 = 100;
console.log(id5===100? 'correct':'Incorrect');

// if with out  Braces {} not recommended
const id6 = 100
if(id6 === 100)
  console.log('correct');
 else
  console.log('incorrect'); //answer
