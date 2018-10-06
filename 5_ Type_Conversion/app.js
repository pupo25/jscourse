// Type conversion Or Parse
// input forms outpus string by default
//First Letter Upper Case

let val;

// Number to String
val = String(555);
val = String(4+4); //second value overwrites the first

//Bool to string
val = String(true);

// Date to string
val = String(new Date());

// Array to String
val = String([1,2,3,4]) //length = 7

// toString() Method
val = (5).toString();
val = (true).toString();

// String to Number
val =Number('5') ;
val = Number('Hello'); // NaN not a number
val = Number([1,2,3,4]); // NaN not a number
val = Number(true); //Boolean To Number true = 1 , false = 0
val = Number(false);
val = Number(null);//Null to Number  null = 0

val = parseInt('100.30');  //parseInt() Integer 100
val = parseFloat('100.31'); // Floating  100.31

// Output
//console.log(val);
//console.log(typeof val);
//console.log(val.length); //length only works on strings
//console.log(val.toFixed(2));  //toFixed() guives decimals , only works on numbers

// Type Coercion
const val1 = String(5) ; //concatenation adding Strings twogethere
const val2 = 6;
const sum = val1 + val2;  //result '56'
const sum = Number(val1 + val2); //Result 56 as a number

console.log(sum);
console.log(typeof sum);