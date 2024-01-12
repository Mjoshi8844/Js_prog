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
