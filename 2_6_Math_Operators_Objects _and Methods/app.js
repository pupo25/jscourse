const num1 = 100;
const num2 = 50;
let val;

// Simple Math operators with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2; // % modulus reminder

// Math Objects
val = Math.PI;      // Pi. This is the ratio of the circumference of a circle to its diameter.3.14 

val = Math.E;           // The mathematical constant e. This is Euler's number, the base of natural logarithms.e= 2.71

val = Math.round(2.8);  // .round redondear al mas cercano 2.8 = 3 .

val = Math.ceil(2.4);   // ceil redondear al mayor 2.4 = 3 Returns the smallest integer greater than or equal to its numeric argument.

val = Math.floor(2.8)   // redonderar al menor floor 2.8 = 2 Returns the greatest integer less than or equal to its numeric argument.

val = Math.sqrt(4);     // raiz cuadrada 4 = 2 Returns the square root of a number.

val = Math.abs(-3);  //numero absoluto de -3 es 3 
val = Math.pow(8,2); //  potencia 8 a la 2 = 64

val = Math.min(5,33,4,3,-1,55,66,100); //El menor de la lista -1

val = Math.max(5,33,4,3,-1,55,66,100); //El Mayor de la lista 100

val = Math.random(); // numero aleatorio entre 0 y 1. decimales

val = Math.random() * 20; // numero aleatorio entre 0 y 20. hasta el 19,
val = Math.random() * 20 + 1; // 19 + 1 = 20 

val =Math.floor( Math.random() * 20 + 1); // redondear al menor un numero aleatorio desde 0 a 20

console.log(val); 