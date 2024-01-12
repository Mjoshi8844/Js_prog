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