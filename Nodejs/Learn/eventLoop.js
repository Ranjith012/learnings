const fs = require("node:fs");
const add = require("./sample.js");
require("dotenv").config();
console.log("Start");

const readableSteam = fs.createReadStream(__filename);
readableSteam.close();
readableSteam.on("close", () => console.log("Stream closed"));

process.nextTick(() => {
    console.log("Next Tick outer");
    process.nextTick(() => console.log("Next Tick inner"))
});

Promise.resolve().then(() => {
    console.log("Promise")
    process.nextTick(() => console.log("Next Tick inside Promise"))
});

setTimeout(() => {
    console.log("Timeout")
    process.nextTick(() => console.log("Next Tick inside Timeout"))
    setTimeout(() => console.log("Timeout inside Timeout"), 0)
}, 0);

fs.readFile("data.txt", "utf8", (err, data) => {
    setTimeout(() => console.log("Timeout inside readFile"), 0);
    setImmediate(() => console.log("Immediate inside readFile"));
    if (err) {
        console.error(err);
        return;
    }

    console.log(data);
});

setImmediate(() => console.log("Immediate"));

console.log("End", add.add());

console.log("Process ++++>")
console.log("Process : ", process.pid)
console.log("Process : ", process.version)
console.log("Process : ", process.platform)
console.log("Process : ", process.cwd())
console.log("Process END ++++>", process.env.TEXT)