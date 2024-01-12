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