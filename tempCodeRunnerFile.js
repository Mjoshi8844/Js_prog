function asynOperation1() {
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