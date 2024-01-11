// var a = 10;
// let b = "hello";
// const c = {
//   name: "Maitri Joshi",
//   age: 21,
// };

// function hw() {
//   var d = "hii"; //not accessible outside func
//   let c = "mj";
//   console.log(c);
//   console.log(d);
// }

// hw();

// console.log(a);
// console.log(c);

// {
//   var e = 340; //accessible outside block
//   const f = "f"; //not accessible outside block
// }
// console.log(e);

// const sym = Symbol("foo");
// console.log(typeof sym); // "symbol"
// console.log(sym);
// const symObj = Object(sym);
// console.log(typeof symObj); // "object"
// console.log(symObj);

// console.log(Symbol.for("foo"));
// console.log(Symbol.keyFor(sym));

// let obj1 = {
//   propfirst: "Name",
// };
// // Output : Name
// console.log(obj1.propfirst);
// let obj2 = Object.create(obj1);

// // Output : Name
// console.log(obj2.propfirst);

// // Output : true.
// console.log(delete obj2.propfirst);

// // Surprisingly Note that this will return true
// // regardless of whether the deletion was successful

// // Output : Name
// console.log(obj2.propfirst);

// let animal = {
//   jumps: null,
// };
// let rabbit = {
//   __proto__: animal,
//   jumps: true,
// };

// console.log(rabbit.jumps); // true (1)

// delete rabbit.jumps;

// console.log(rabbit.jumps); // null (2)

// delete animal.jumps;

// console.log(rabbit.jumps); // undefined (3)

// let head = {
//   glasses: 1,
// };

// let table = {
//   pen: 3,
// };

// table.__proto__ = head;

// let bed = {
//   sheet: 1,
//   pillow: 2,
//   __proto__: table,
// };

// let pockets = {
//   money: 2000,
//   __proto__: bed,
// };

// console.log(pockets.pen);
// console.log(bed.glasses);

// //No difference in search time of pocket.glasses and head.glasses
// /*In modern engines, performance-wise, there’s no difference 
//   whether we take a property from an object or its prototype. 
//   They remember where the property was found and reuse it in the next request.*/

// let hamster = {
//   stomach: [],

//   eat(food) {
//     this.stomach.push(food);
//   },
// };

// let speedy = {
//   __proto__: hamster,
// };

// let lazy = {
//   __proto__: hamster,
// };

// // This one found the food
// speedy.eat("apple");
// alert(speedy.stomach); // apple

// // This one also has it, why? fix please.
// alert(lazy.stomach); // apple

// console.log(null == undefined);
// console.log(null === undefined);
// console.log(NaN == NaN);
// console.log(NaN === NaN);

// const result = "3" + 1; // '3' is coerced into a number to perform subtraction
// console.log(result); // Outputs: 2

// console.log((100 + 23).toString());

// const a = 1n > 2; // false
// const b = 3 > 2n; // true
// console.log(a);
// console.log(b);

// function hii(a=2, b) {
//     return a*b;
// }

// const result = hii(3);
// console.log(result);

// function hii(a=2, b) {
//     return a*b;
// }

// const result = hii(undefined, 3);
// console.log(result);

// function hii(a, b=2) {
//     return a*b;
// }

// const result = hii(3);
// console.log(result);

// function myFun(a, b, ...manyMoreArgs) {
//     console.log("a", a);
//     console.log("b", b);
//     console.log("manyMoreArgs", manyMoreArgs);
//     // console.log(manyMoreArgs);
//   }
  
//   myFun("one", "two", "three", "four", "five", "six");

// console.log("First Git Commit");

// let x = this;
// console.log(x);

// "use strict";
// let x = this;
// console.log(x);

// function myFunction() {
//     return this;
//   }

//   console.log(myFunction());

// "use strict";
// function myFunction() {
//   return this;
// }
// console.log(myFunction()); //undefined

// const person1 = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
  
//   const person2 = {
//     firstName:"John",
//     lastName: "Doe",
//   }
  
//   // Return "John Doe":
//   console.log(person1.fullName.call(person2));

// const person = {
//     firstName:"John",
//     lastName: "Doe",
//     fullName: function () {
//       return this.firstName + " " + this.lastName;
//     }
//   }
  
//   const member = {
//     firstName:"Hege",
//     lastName: "Nilsen",
//   }
  
//   let fullName = person.fullName.bind(member);

//   console.log(fullName());

/*Precedence	Object
1	bind()
2	apply() and call()
3	Object method
4	Global scope*/

//Explicit Binding : call()
//The call() method is a method available on all JavaScript functions. 
//It allows you to invoke a function with a specified this value and arguments provided individually.
// function greet() {
//   console.log(`Hello, ${this.name}!`);
// }

// const person = { name: 'John' };

// greet.call(person); // Explicitly bind 'this' to the 'person' object


//Explicit Binding : apply()
// Similar to call(), the apply() method is used to invoke a function, 
//but it takes an array as the second argument for passing arguments to the function.
// function greet() {
//   console.log(`Hello, ${this.name}!`);
// }

// const person = { name: 'John' };

// greet.apply(person); // Explicitly bind 'this' to the 'person' object


// Explicit Binding: bind()
// The bind() method creates a new function that, when called, has its this keyword set to a specific value, 
// and returns a new function with the bound this value.
// function greetPerson() {
//     console.log(`Hello ${this.name}`);
// }

// const person = {
//     name: 'Maitri Joshi'
// }

// const greet = greetPerson.bind(person); //Creating a new functions with 'this' bind to 'person'

// greet(); //Invoking the new funtion
