const eventEmitter = require("node:events");
const crypto = require("node:crypto");
const events = new eventEmitter();

events.on("message", (data) => {
    console.log("Message received: ", data);
});

events.emit("message", "Hello World");

console.log("crypto", crypto.randomUUID());

console.log("hash : ", crypto.createHash("sha256").update("Hello World").digest("hex"));