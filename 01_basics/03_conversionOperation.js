let score = "hitesh"

//console.log(typeof score);
//console.log(typeof(score));   // also we can use

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);     // for check type of value
//console.log(valueInNumber);   // for check value


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);    // for check value
// console.log(typeof stringNumber);     // for check type of value


// *********************** Operations ***********************

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2);        // Arithmetic Operations = op = 4
// console.log(2-2);        // Subtraction = op = 0
// console.log(2*2);        //  Multiplication = op = 4
// console.log(2**3);       // Exponentiation(power) = op = 8
// console.log(2/3);        // Division = op = 0.6666666666666666
// console.log(2%3);        // Modulus = op = 2

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
console.log(str3);


//String Concatenation with Numbers :-

// console.log("1" + 2);    //Output: "12"
// console.log(1 + "2");    //Output: "12"
// console.log("1" + 2 + 2);    //Output: "122"
// Explanation: The first operation is "1" + 2, which gives "12". Then, "12" + 2 results in "122".

// console.log(1 + 2 + "2");    //Output: "32"


// Arithmetic Expression with Modulus :-

// console.log( (3 + 4) * 5 % 3);   // Output: 2

// Explanation :-
// First, 3 + 4 is evaluated, resulting in 7.
// Then, 7 * 5 equals 35.
// Finally, 35 % 3 gives the remainder when 35 is divided by 3, which is 2.


// Unary Plus Operator :-

// console.log(+true);  //Output: 1 (1 mean true)
// console.log(+"");    //Output: 0 (1 mean false)

let num1, num2, num3

num1 = num2 = num3 = 2 + 2  // output : 4 (because right to left, num3 value is 4 , num2 depend on num3 so value is 4, same as num1)

let gameCounter = 100
++gameCounter;  // preIncrement operator
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion