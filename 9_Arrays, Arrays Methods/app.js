// Arrays are very important in programming
// Allows us to store multiples values in one variable
// Can be mutaded and inserted , can be used in very complex logaritms.

// Creating Arrays
const numbers = [43,56,33,23,44,36,5];  // normally
const numbers3 = [60,49,43,50,48,45,40];  // normally
const numbers2 = new Array(22,45,33,76,54); // using object constructor   new Array()
const fruit = ['Apple','Banana','Orange','Pear'];
const mixed = ['22',true,undefined,null,{a:1, b:1}, new Date()];

let val;

// Get array length
val = numbers.length;
// Check if array.
val = Array.isArray(numbers); 
// Get a single value.
val = numbers[3]; //index[].
val = numbers[0];// first.
// Insert into array.
numbers[2] = 100;
// Find index of a value.
val = numbers.indexOf(44);
// Mutating Arrays.
// numbers.push(250);       // add to end.
// numbers.unshift(120);     // add to front.
// numbers.pop();             // Take from End.
// numbers.shift();            // Take from fRONT.
// numbers.splice(1,1);          //Take off multiple values (from,to).
// numbers.reverse();             // Reverse Arrays.

// concatenate arrays
val = numbers.concat(numbers2);
// sorting arrays
val = fruit.sort(); // String alfabetical,
val = numbers.sort(); // Sorting by the first number.

//  sorting numbers  with functions
 val = numbers.sort(function(x,y){
  return x-y;  // smallest to biggest
 })
 val = numbers.sort(function(x,y){
   return y-x;  // biggest to smallest  
 })

// find values using functions
let val2;
function under50(num){
  return num < 50 ; // find the first number under  50 = 49
}
function under50(num){
  return num > 50 ; // find first number bigger than  50 = 60
}
val2 = numbers3.find(under50);
console.log(val2);


console.log(val);
console.log(numbers);





