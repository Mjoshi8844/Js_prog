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