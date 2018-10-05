const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Israel';
const tags = 'web design,web development, programming';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName; // space added

// Append add to a variable
val = 'Israel ';
val += 'Ibaceta';

val ='Hello, My name is ' + firstName + ' and I am ' + age; //concatenation

// Escaping backslash \' \n
val = 'Thats\'s awesome , I can\'t wait';

// Length proprety counts the number of characters in a string
val = firstName.length;

// concat method() same as concatenation
val = firstName.concat(' ', lastName);

// Chanage Case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// String Read only arrays
val = firstName[0]; //index [position] of a value

// find the index of character     'William'
val = firstName.indexOf('l');    // ['l'] = 2  first l Returns the position of the first occurrence of a substring.
val = firstName.lastIndexOf('l'); // ['l] = 3  last l Returns the last occurrence of a substring in the string.

// charAt() Returns the character at the specified index
val = firstName.charAt(2);

// Get last character on a String
val = firstName.charAt(firstName.length - 1);


// substring()    from positio 0 to 4
val = firstName.substring(0,4); // result 'will'

// slice()  pull things out arrays, or strings
val = firstName.slice(0,4); // same as substring can use negative to start from back
val = firstName.slice(-3); // William = iam

// split() usefull can split a string into an array based on a separator
val = str.split(' ');// separator space, ["Hello", "there", "my", "name", "is", "Israel"]
 //                                         index     0       1       2     3       4      5

val = tags.split(',') // separator coma,  ["web design", "web development", " programming"]

// replace()
val = str.replace('Israel','Michael'); // replace Israel With Michael

// includes()  Returns true or false if a value is inside of a string
val = str.includes('pupo'); 

console.log(val);


