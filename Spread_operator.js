// JavaScript spread operator (...) expands an iterable (like an array) into more elements.
// This allows us to quickly copy all or parts of an existing array into another array:

// const a = [1, 2, 3];
// const b = [4, 5, 6];
// const c = [...a, ...b];

// console.log(a);
// console.log(b);
// console.log(c);

// const numbers = [1, 2, 3, 4, 5, 6];

// const [one, two, ...rest] = numbers;

// console.log(one);
// console.log(two);
// console.log(rest);

const myVehicle = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
};

const updateMyVehicle = {
  type: "car",
  year: 2021,
  color: "yellow",
};

const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };

console.log(myUpdatedVehicle);
