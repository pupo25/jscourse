// Variables 
// var: old ,  (let , const) new 2015

// var name = 'John Doe'; // var and let ,can reasign values
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

 //Init var initializing var with no value
// var greeting; // value undefined
// console.log(greeting);
// greeting = 'Hello' ;
// console.log(greeting);

//variables names can have ,letters, numbers, _, $
// Can not start with number

// Multi world variables
//Use camelCase first lowercase second Uppercase

// var firstName = 'John'; // Camel case
// var first_name = 'Tom'; // Underscore
// var FirstName = 'sare'; // Pascal case  object oriented classes
// var firstname;//not recomended

// Let // var and let ,can reasign values 
// let name;//undefined false
// let name = 'John Doe'; // 
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// Const Constant can not change values
//const name = 'John';
//console.log(name);
//can not reassign
//name = 'Sara';
// Have to assign value 
//const greetings; // not init 

// const object {}
const person = {  //const person,can not change person
  name:'John',    //can change data
  age: 30
}
person.name = 'Sara';
person.age = 32;

console.log(person);

// const same with arrays []
const numbers = [1,2,3,4,5]; // can  change content ,not name
numbers.push(6);// add end
numbers.unshift(8);// add start
console.log(numbers);
