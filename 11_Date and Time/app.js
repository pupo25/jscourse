// Date and Time Are very important in programming

// Date() object 

let val;
// deafault today's date
const today = new Date(); 
// different ways
let birthday = new Date('9-10-1981 11:25:00'); // all the
birthday = new Date('september 10 1981');
birthday = new Date('9/10/1981');

// get Method
val = today.getDate(); // day number
val = today.getDay();// day of the week
val = today.getMonth();// months start with 0 jan to december 11
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();// method is the number of milliseconds since 1 January 1970 00:00:00. You can use this method to help assign a date and time to another Date object.

// set Method manipulate dates there are more
birthday.setDate(17);
birthday.setMonth(0); // months start with 0 jan to december 11
birthday.setFullYear(1992);
birthday.setHours(5);
birthday.setMinutes(5);
birthday.setSeconds(5);

console.log( birthday);

console.log( val);










