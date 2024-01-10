"use strict"

let a = 10;
let b = "mj";
let c = true, d = null;

console.table([a, b, c, d]);

const m = "mj";

let arr1 = [1, 2, "3", null, undefined];

console.log(arr1);
console.log(typeof arr1[1]);

arr1.push(5);  //add on end
console.log(arr1);
arr1.pop();  //remove from end
console.log(arr1);
arr1.unshift("m"); // add on front
console.log(arr1);
arr1.shift(); //remove from front
console.log(arr1);

console.log(1=="1");
console.log(1==="1");

let x = "33m";
let y = Number(x);
console.log(y);
console.log(typeof y);

let k = Symbol("mj");
console.log(k=="mj");
console.log(typeof k);
console.log(k);

let arr2 = arr1.join(" ");
console.log(arr2);

arr2 = [1, 2, 3, 4, 5];
console.log(arr2.slice(0, 3));
console.log(arr2);
console.log(arr2.splice(0, 3));
console.log(arr2);

let arr3 = new Array(...arr1, ...arr2);
console.log(arr3);

let arr4 = [1, 2, 3, [4, 6, 7]];
console.log(arr4);
arr4.flat();
console.log(arr4);

(function myfunc(a, b){
    console.log(a+b);
})(1, 2);

((name) => {
    console.log(`Hello ${name}`);
})("Maitri");

let obj = {
    name: "Mj",
    age: 20,
    mail: "maitrijoshi047@gmail.com",
    mj: Symbol("MJ"),
}

console.log(obj);
console.log(typeof obj.mj);
console.log(obj["mj"]);
console.log(obj["name"]);
console.log(obj.age);
console.log(obj.mj);

console.log(this);

//Nullish Coalescing Opreator(??) null undefined
let n1;
// n1 = 5 ?? 10; // assigns first value
// n1 = null ?? 15; // assigns 15 if the value is null
n1 = undefined ?? 15; // assigns 15 if the value is undefined
console.log(n1);