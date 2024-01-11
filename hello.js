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

//setTimeout() and clearTimeout()
// let myTimeout;

// function greet(name) {
//     console.log(`Hello ${name}`);
// }

// myTimeout = setTimeout(greet, 3000, 'Maitri Joshi');

// function stopGreet() {
//     clearTimeout(myTimeout);
// }

// const stopTimeout = setTimeout(stopGreet, 3000); //Here, greet is getting executed 1st at end of 3 sec.

//setInterval() and clearInterval()
// function sayHello(name) {
//     console.log(`Hello ${name}`);
// }

// const myInterval = setInterval(sayHello, 1000, 'Maitri Joshi');

// function stopHello() {
//     clearInterval(myInterval);
// }

// setTimeout(stopHello, 5000);
// This syntax will also work
// setInterval(function() {myFunc("param1", "param2")}, 2000);

// function startCount() {
//     let count = 0;

//     const intervalId = setInterval(()=>{
//         count++;
//         console.log(count);
//     }, 1000);

//     return intervalId;
// }

// function stopCount(intervalId) {
//     clearInterval(intervalId);
//     console.log('Count Stopped!');
// }

// const intervalId = startCount();

// setTimeout(stopCount, 6000, intervalId);

// A callback is a function passed as an argument to another function.
// Callback functions are used mostly with asynchronous functions, where 1 fn has to wait for
// completion of other.
// Always reference is passed as callback. not a func call.

// Promises
// var timeoutPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('Hello');
//     }, 2000);
// });

// timeoutPromise.then( val => {
//     console.log(val);
//     console.log(timeoutPromise);
// });

// console.log(timeoutPromise);

// const asyncOperation = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = true;
//     if (success) {
//       resolve("Data Fetched Successfully!");
//     } else {
//       reject("Error Fetching the Data!");
//     }
//   }, 2000);
// });

// asyncOperation
//   .then((result) => {
//     console.log("Success: ", result);
//   })
//   .catch((result) => {
//     console.log("Failure: ", result);
//   });

// Chaining in Promise
// function asynOperation1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = true;
//       if (success) {
//         resolve("Result from AsyncOperation 1!");
//       } else {
//         reject("Error from Async Operation 1!");
//       }
//     }, 1000);
//   });
// }

// function asynOperation2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = true;
//       if (success) {
//         resolve("Result from AsyncOperation 2!");
//       } else {
//         reject("Error from Async Operation 2!");
//       }
//     }, 1000);
//   });
// }

// function asynOperation3() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = true;
//       if (success) {
//         resolve("Result from AsyncOperation 3!");
//       } else {
//         reject("Error from Async Operation 3!");
//       }
//     }, 1000);
//   });
// }

// Chaining the promises
// asynOperation1()
//   .then((result1) => asynOperation2(result1))
//   .then((result2) => asynOperation3(result2))
//   .then((finalResult) => {
//     console.log("Final Result: ", finalResult);
//   })
//   .catch((error) => {
//     console.log("Error: ", error);
//   });

// Promise.all()
// function asynOperation1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = true;
//       if (success) {
//         resolve("Result from AsyncOperation 1!");
//       } else {
//         reject("Error from Async Operation 1!");
//       }
//     }, 1500);
//   });
// }

// function asynOperation2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = true;
//       if (success) {
//         resolve("Result from AsyncOperation 2!");
//       } else {
//         reject("Error from Async Operation 2!");
//       }
//     }, 1000);
//   });
// }

// function handleResults(results) {
//   console.log("All Operations Completed Successfully!");
//   console.log("Results: ", results);
// }

// function handleErrors(error) {
//   console.log("Error: ", error);
// }

// Promise.all([asynOperation1(), asynOperation2()])
//   .then((results) => handleResults(results))
//   .catch((error) => handleErrors(error));

// Promises.race()
// function asynOperation1() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const success = true;
//         if (success) {
//           resolve("Result from AsyncOperation 1!");
//         } else {
//           reject("Error from Async Operation 1!");
//         }
//       }, 1500);
//     });
//   }
  
//   function asynOperation2() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const success = true;
//         if (success) {
//           resolve("Result from AsyncOperation 2!");
//         } else {
//           reject("Error from Async Operation 2!");
//         }
//       }, 1000);
//     });
//   }
  
//   function handleResults(results) {
//     console.log("All Operations Completed Successfully!");
//     console.log("Results: ", results);
//   }
  
//   function handleErrors(error) {
//     console.log("Error: ", error);
//   }
  
//   Promise.race([asynOperation1(), asynOperation2()])
//     .then((results) => handleResults(results))
//     .catch((error) => handleErrors(error));

//Asyn/Await
// async function f() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("done");
//     }, 1000);
//   });

//   let result = await promise;

//   console.log(result);
// }

// f();

// await accept Thenables
// class Thenable {
//   constructor(num) {
//     this.num = num;
//   }
//   then(resolve, reject) {
//     console.log(resolve);
//     // resolve with this.num*2 after 1000ms
//     setTimeout(() => resolve(this.num * 2), 1000); // (*)
//   }
// }

// async function f() {
//   // waits for 1 second, then result becomes 2
//   let result = await new Thenable(1);
//   console.log(result);
// }

// f();

// class Waiter {
//     async wait() {
//       return await Promise.resolve(1);
//     }
//   }

//   new Waiter()
//     .wait()
//     .then(console.log); // 1 (this is the same as (result => console.log(result)))

// Error Handling in async/await
// async function f() {
//   await Promise.reject(new Error("Whoops!"));
// }

// async function f() {
//   throw new Error("Whoops!");
// }

// Event Loop
// console.log('Hii');

// setTimeout(()=>{
//     console.log('There');
// }, 0);

// console.log('Maitri');