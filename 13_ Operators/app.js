//JavaScript Assignment Operators
//Assignment operators assign values to JavaScript variables.

//   Operator	  Example	    Same As
//    =	         x = y	     x = y
//   +=	         x += y	     x = x + y
//   -=	         x -= y	     x = x - y
//   *=	         x *= y	     x = x * y
//   /=	         x /= y      x = x / y
//   %=	         x %= y	     x = x % y
//   <<=	       x <<= y	   x = x << y
//   >>=	       x >>= y	   x = x >> y
//   >>>=	       x >>>= y	   x = x >>> y
//   &=	         x &= y	     x = x & y
//   ^=	         x ^= y	     x = x ^ y
//   |=          x |= y	     x = x | y
//   **=	x       **= y	     x = x ** y

// JavaScript Arithmetic Operators
// Arithmetic operators perform arithmetic on numbers (literals or variables).

//  Operator	Description
//  +	        Addition
//  -	        Subtraction
//  *	        Multiplication
//  /    	    Division
//  %	        Modulus (Remainder)
//  ++	      Increment
//  --	      Decrement


// JavaScript Assignment Operators
// Assignment operators assign values to JavaScript variables.

// Operator	Example	  Same As
// =	      x = y	    x = y
// +=	      x += y	  x = x + y
// -=	      x -= y	  x = x - y
// *=	      x*= y	    x = x * y
// /=	      x/= y	    x = x / y
// %=	      x %= y	  x = x % y

// JavaScript Comparison Operators
//  Operator	Description
//  ==	      equal to
//  ===	      equal value and equal type
//  !=	      not equal
//  !==	      not equal value or not equal type
//  >	        greater than
//  <	        less than
//  >=	      greater than or equal to
//  <=	      less than or equal to
//  ?	        ternary operator

// JavaScript Logical Operators
// Operator	   Description
//  &&	       logical and
//  ||	       logical or
//  !	         logical not

// JavaScript Type Operators
// Operator	      Description
// typeof	        Returns the type of a variable
// instanceof	    Returns true if an object is an instance of an object type

// JavaScript Bitwise Operators
// Bit operators work on 32 bits numbers.

// Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.
// Operator	Description	         Example	   Same as	       Result	  Decimal
// &	      AND	                 5 & 1	     0101 & 0001	    0001	   1
// |	      OR	                 5 | 1	     0101 | 0001	    0101	   5
// ~	      NOT	                 ~ 5	       ~0101	          1010	   10
// ^	      XOR	                 5 ^ 1	     0101 ^ 0001	    0100	   4
// <<	      Zero fill left shift 5 << 1	     0101 << 1	      1010	   10
// >>	      Signed right shift	 5 >> 1	     0101 >> 1	      0010	   2
// >>>	   Zero fill right shift 5 >>> 1	   0101 >>> 1	      0010	   2
// The examples above uses 4 bits unsigned examples. But JavaScript uses 32-bit signed numbers.
// Because of this, in JavaScript, ~ 5 will not return 10. It will return -6.
// ~00000000000000000000000000000101 will return 11111111111111111111111111111010

// JavaScript Operator Precedence Values
// Pale red entries indicates ECMAScript 2015 (ES6) or higher.

// Value	   Operator	   Description	           Example
//  20	     ( )	       Expression grouping	   (3 + 4)
 	 	 	 
//  19	     .	         Member	                 person.name
//  19	     []	         Member	                 person["name"]
//  19	     ()	         Function call	         myFunction()
//  19	     new	       Create	                 new Date()
 	 	 	 
//  17	     ++	         Postfix Increment	     i++
//  17	     --	         Postfix Decrement	     i--
 	 	 	 
//  16	     ++	         Prefix Increment	       ++i
//  16	     --	         Prefix Decrement	       --i
//  16	     !	         Logical not	           !(x==y)
//  16	     typeof	     Type	                   typeof x
 	 	 	 
//  15	     **	         Exponentiation (ES7)	   10 ** 2
 	 	 	 
//  14	     *	         Multiplication	         10 * 5
//  14	     /	         Division	               10 / 5
//  14	     %	         Division Remainder	     10 % 5
 	 	 	 
//  13	     +	         Addition	               10 + 5
//  13	     -	         Subtraction	           10 - 5
 	 	 	 
//  12	    <<	         Shift left	             x << 2
//  12	    >>	         Shift right	           x >> 2
//  12	    >>>	         Shift right (unsigned)	 x >>> 2
 	 	 	 
//  11	    <	           Less than	             x < y 
//  11	    <=	         Less than or equal	     x <= y
//  11	    >	           Greater than	           x > y
//  11	    >=	         Greater than or equal	 x >= y
//  11	    in	         Property in Object	     "PI" in Math
//  11	    instanceof	 Instance of Object	     instanceof Array
 	 	 	 
//  10	    ==	         Equal	                 x == y
//  10	    ===	         Strict equal	           x === y
//  10	    !=	         Unequal	               x != y
//  10	    !==	         Strict unequal	         x !== y

//           JavaScript Bitwise Operators

//  9	       &	         Bitwise AND	           x & y
//  8	       ^	         Bitwise XOR	           x ^ y
//  7	       |	         Bitwise OR	             x | y
//  6	       &&	         Logical AND	           x && y
//  5	       ||	         Logical OR	             x || y
//  4	       ? :	       Condition	             ? "Yes" : "No"
 	 	 	 
//  3	       +=	         Assignment	             x += y
//  3	       +=	         Assignment	             x += y
//  3	       -=	         Assignment	             x -= y
//  3	       *=	         Assignment	             x *= y
//  3	       %=	         Assignment	             x %= y
//  3	       <<=	       Assignment	             x <<= y
//  3	       >>=	       Assignment	             x >>= y
//  3	       >>>=	       Assignment	             x >>>= y
//  3	       &=	         Assignment	             x &= y
//  3	       ^=	         Assignment	             x ^= y
//  3	       |=	         Assignment	             x |= y
 	 	 	 
//  2	       yield	     Pause Function	         yield x
//  1	       ,	         Comma	                 5 , 6
// Expressions in parentheses are fully computed before the value is used in the rest of the expression.