// Works because of hoisting. js take all declarations of var at top
// x = 5;
// var x;
// console.log(x);

// Hoisting doesn't apply to const and let
// a = 2;
// let a;
// const a;
// console.log(a);

// Undefined because the y is declared 1st at top but doesn't initialized
// console.log(y);
// var y = 7;

// Same as this
// var y;
// console.log(y);
// y = 7;

// Hoisting works for functions as well
hii('Maitri');
function hii(name) {
    console.log(`Hello ${name}`);
}