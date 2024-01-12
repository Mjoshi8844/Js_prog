// var fs = require("fs");
// var rs = fs.createReadStream("./demo.html");

// rs.on("open", function () {
//   console.log("The file is open");
// });

// rs.on("data", (chunks) => {
//   console.log("Reading Chunks of Data:\n", chunks.toString());
// });

// rs.on("end", () => {
//   console.log("Reached End of File!");
// });

// rs.on("error", (err) => {
//   console.log("Error Occured: ", err);
// });

// console.log(rs); // this is executing first..

const events = require('events');
const eventEmitter = new events.EventEmitter();

eventEmitter.on('sayHi', (name) => {
    console.log(`Hi ${name}`);
});

eventEmitter.emit('sayHi', 'Maitri');