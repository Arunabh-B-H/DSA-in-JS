//Sum of two integers

// // let a = 5;
// // let b = 10;
// // let sum = a + b;
// // console.log(sum);

// Concatenation

// let a = "Hello, ";
// let b = 2;
// console.log(typeof (b + a));

// Here the the sum of a string and number is a string

// let a = 2;
// let b = 3;
// console.log("Sum of a and b" + a + b);
// //Here the operand sum of a and b is in first priority so it takes the string and make the rest of the integers as string
// // Sum of a and b- which is a string +a =  Sum of a and b 2 + 5 = Sum of a and b 23
// //How to fix it?
// console.log("Sum of a and b is " + (a + b));
// //here the inside the bracket it gets the priority
// //if
// console.log(a + b  +  " is sum of a and b");
// //here the 2 + 5 + is sum of a and b

//Type Coercion
// console.log("1" - 1);
//here the js takes and converts the type of "1" to an integer and subtracts with the integer

//same with * /

//Accept and print

// let age = prompt("Enter your age ");

// console.log(age);

// //but here the age is a string
// //if we wanna get the input as number then we can use a Number() function

// age = Number(age);
// console.log(typeof age);
// //now the type of the input is number

// Swapping two variables
// let a = 10;
// let b = 20;

// Swapping with an extra variable

// let c = a; // value of a is stored in c, c =10
// a = b; // value of b is stored in a, a=20
// b = c; // value of c is stored in b, b= 10
// console.log(a, b);

// Swapping without an extra variable

// a = a + b; // a= 30
// b = a - b; // b= 30-20 = 10
// a = a - b; // a= 30-10 = 20
// console.log(a, b);


// Swapping with destructuring assignment

// [a, b] = [b, a];
// console.log(a, b);

// Arithmetic operators

