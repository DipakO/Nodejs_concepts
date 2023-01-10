const os = require("os");
const fs = require("fs");
const path = require("path");

console.log(os.platform());
// console.log(os.hostname());
// console.log(os.homedir());
// console.log(os.tmpdir());

// console.log(fs.Dir);
// console.log(fs.writeFileSync("data.txt", "Hello this is aauto crested file"));
// console.log(fs.readFileSync("data.txt").toString());
// console.log(fs.appendFileSync("data.txt", "And aslo read"));

// console.log(
//   fs.writeFile("data.txt", "Hello this is", () => {
//     console.log("file creted Succesufully");
//   })
// );

// console.log(
// fs.readFile("data.txt", "utf-8", (err, data) => {
//   console.log(data);
// });
// );

// console.log(
//   fs.appendFile("data.txt", "And aslo this is Write the data", () => {
//     console.log("data added succesfully");
//   })
// );

// console.log(path.dirname("data.txt"));
// console.log(path.extname("Server.js"));

const App = require("./Add");
App(10, 30);
