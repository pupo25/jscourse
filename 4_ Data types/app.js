// JS Dynamically Typed Language
// Types are assosiated with values not variables
// The same variable can hold multiple types
//We do not need to specify types
//Most other languages are statically typed (Java,C#,C++)
//There are supersets of JS and addons to allow static typing(TypeScript,Flow)


//  Primitive Data types

// String
const name = 'Jonh Doe';  // quotes string
// Number
const age = 45;    //quotes '45' is a string
// Boolean
const hasKids = true;    //booleans don't use quotes
// Null 
const car = null; 
// Undefined
let test; //empty variable
// Symbol
const sym = Symbol(); // new ES6 JS


// Reference Types - Objects
//Array
const hobbies = ['movies','music'];
// Object Literal
const address = {
  city:'Boston',
  state:'MA'
}
// Date
const today = new Date();
console.log(today);


console.log(typeof today);  //typeof operator returns type of data
