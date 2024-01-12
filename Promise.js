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