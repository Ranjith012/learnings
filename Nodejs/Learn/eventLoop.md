# Node.js Event Loop – Complete Notes

## 1. What Is the Event Loop?

The **Event Loop** is a mechanism in Node.js that coordinates asynchronous operations and executes their callbacks when they are ready.

- JavaScript executes synchronous code one statement at a time using the **Call Stack**.
- Asynchronous operations can progress without making JavaScript wait for them to finish.
- When an operation completes, its callback can be scheduled for execution.

**Examples of asynchronous operations:**

- Reading a file
- Making an API request
- Setting a timer
- Performing database operations

**Simple definition:** The Event Loop helps Node.js handle many operations concurrently without blocking the main JavaScript thread while waiting for I/O.

## 2. Is JavaScript Single-Threaded?

Normal JavaScript execution in Node.js runs on a **single main thread**.

- JavaScript executes one piece of code at a time on that thread.
- The Call Stack tracks the functions currently executing.
- Asynchronous operations can progress while JavaScript continues with other work.

**Important:** Single-threaded does not mean Node.js cannot handle multiple operations concurrently. Node.js uses operating-system facilities, the **libuv thread pool** for selected tasks, and **Worker Threads** for parallel JavaScript execution when needed.

## 3. Node.js Runtime Architecture

### A. V8 Engine

V8 is the JavaScript engine used by Node.js.

Responsibilities:

- Executes JavaScript code.
- Manages JavaScript memory.
- Maintains the Call Stack.
- Uses the Memory Heap to store dynamically allocated data.
- Performs garbage collection.

**Call Stack:** Tracks currently executing functions.  
**Memory Heap:** Stores objects and other dynamically allocated data.

### B. C++ Bindings

Node.js uses C++ bindings to connect JavaScript APIs with native runtime functionality, such as file-system, networking, and operating-system capabilities.

### C. libuv

**libuv** is a cross-platform C library used by Node.js.

Responsibilities:

- Provides the Event Loop.
- Supports asynchronous I/O.
- Provides a thread pool for selected operations.
- Coordinates timers and I/O events.

Examples of operations that may use the thread pool include many file-system operations, some DNS operations, and selected cryptographic operations. Network I/O commonly relies on operating-system facilities instead.

**Remember:**

- **V8** → Executes JavaScript.
- **C++ bindings** → Connect JavaScript APIs to native functionality.
- **libuv** → Provides the Event Loop and asynchronous I/O support.

## 4. Synchronous vs Asynchronous Code

### Synchronous example

```js
console.log("First");
console.log("Second");
console.log("Third");
```

**Output:**

```text
First
Second
Third
```

Each statement runs in order, and the next statement waits for the previous one to finish.

### Asynchronous example

```js
const fs = require("node:fs");

console.log("First");

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("Second");
});

console.log("Third");
```

**Typical output when the file is read successfully:**

```text
First
Third
Second
```

**Explanation:**

1. `First` is printed immediately.
2. `fs.readFile()` starts an asynchronous file-reading operation.
3. JavaScript does not wait for the file read to finish, so `Third` is printed.
4. When the read completes, the callback becomes eligible to run and prints `Second`.

## 5. Event Loop Phases

The Event Loop has several phases. The main phases commonly discussed are:

1. **Timers**
2. **Pending callbacks**
3. **Idle / prepare** (internal libuv phases)
4. **Poll**
5. **Check**
6. **Close callbacks**

### 1. Timers phase

Runs callbacks for timers whose thresholds have been reached.

```js
setTimeout(() => {
  console.log("Timeout");
}, 1000);

setInterval(() => {
  console.log("Interval");
}, 2000);
```

- `setTimeout()` schedules a callback after a minimum delay.
- `setInterval()` schedules a callback repeatedly.
- A timer is not guaranteed to run at the exact delay specified.

### 2. Pending callbacks phase

Executes certain I/O callbacks deferred from previous event-loop operations.

### 3. Idle / prepare phase

Used internally by libuv. Application developers generally do not interact with this phase directly.

### 4. Poll phase

One of the important phases.

Responsibilities:

- Processes many I/O-related callbacks.
- Checks for completed I/O operations.
- Waits for incoming I/O when appropriate.

Example:

```js
const fs = require("node:fs");

fs.readFile("example.txt", () => {
  console.log("File reading completed");
});
```

### 5. Check phase

Executes callbacks registered using `setImmediate()`.

```js
setImmediate(() => {
  console.log("Immediate");
});
```

### 6. Close callbacks phase

Handles certain close-related callbacks, such as a socket's `close` event.

```js
socket.on("close", () => {
  console.log("Connection closed");
});
```

**Note:** The exact event-loop behaviour has some version-dependent details. Node.js 20 and later use updated timer scheduling behaviour through newer libuv versions, so avoid assuming every timer always runs at one fixed point in every loop iteration.

## 6. Microtask Queues

Microtasks run at specific checkpoints before Node.js continues with later event-loop work.

Two important mechanisms are:

- The `process.nextTick()` queue
- The Promise microtask queue

### A. `process.nextTick()`

Schedules a callback to run after the current JavaScript operation completes, before the Event Loop continues to its next phase.

```js
process.nextTick(() => {
  console.log("Next Tick");
});
```

### B. Promise microtasks

Promise handlers such as `.then()`, `.catch()`, and `.finally()` run as microtasks.

```js
Promise.resolve().then(() => {
  console.log("Promise");
});
```

In typical CommonJS execution, callbacks in the `process.nextTick()` queue run before Promise microtasks at the same checkpoint.

**Warning:** Continuously scheduling `process.nextTick()` callbacks can starve I/O and other Event Loop work.

## 7. `setTimeout()` vs `setImmediate()`

### `setTimeout()`

Schedules a callback after a specified minimum delay.

```js
setTimeout(() => {
  console.log("Timeout");
}, 0);
```

### `setImmediate()`

Schedules a callback to run in the Check phase.

```js
setImmediate(() => {
  console.log("Immediate");
});
```

| `setTimeout()`                                                             | `setImmediate()`                                          |
| -------------------------------------------------------------------------- | --------------------------------------------------------- |
| Runs through the Timers phase.                                             | Runs in the Check phase.                                  |
| Uses a minimum delay (a delay of `0` is treated as a small minimum delay). | Runs after the Poll phase in the relevant loop iteration. |
| Exact timing is not guaranteed.                                            | Exact timing is not guaranteed.                           |

**Important:**

- At the top level, the order between `setTimeout(fn, 0)` and `setImmediate(fn)` is not guaranteed.
- When both are scheduled inside an I/O callback, `setImmediate()` normally runs first.

## 8. Understanding Event Loop Execution

```js
console.log("Start");

setTimeout(() => {
  console.log("Timer");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

process.nextTick(() => {
  console.log("NextTick");
});

console.log("End");
```

**Typical output in a CommonJS file:**

```text
Start
End
NextTick
Promise
Timer
```

**Explanation:**

1. `Start` prints during synchronous execution.
2. The timer callback is scheduled.
3. The Promise callback is added to the Promise microtask queue.
4. The `process.nextTick()` callback is scheduled.
5. `End` prints during synchronous execution.
6. Node.js processes the `process.nextTick()` callback before the Promise callback in this CommonJS example.
7. The Promise callback runs.
8. The timer callback runs when its timer becomes eligible.

## 9. How the Event Loop Works

A simplified view:

```text
JavaScript code
      |
      v
   Call Stack
      |
      v
Synchronous execution
      |
      v
Asynchronous operation starts
      |
      v
Node.js APIs / OS / libuv
      |
      v
Operation completes
      |
      v
Callback becomes ready
      |
      v
Event Loop processes callback
      |
      v
JavaScript callback executes
```

The Event Loop coordinates ready callbacks while the Node.js application has work to perform. The exact mechanism used to complete an operation depends on the operation type.

## 10. Important Queues and Phases

| Queue / phase              | Responsibility / examples                             |
| -------------------------- | ----------------------------------------------------- |
| `process.nextTick()` queue | Callbacks scheduled with `process.nextTick()`         |
| Promise microtask queue    | `.then()`, `.catch()`, `.finally()` handlers          |
| Timers                     | Eligible `setTimeout()` and `setInterval()` callbacks |
| Poll                       | Many I/O-related callbacks and I/O event handling     |
| Check                      | `setImmediate()` callbacks                            |
| Close callbacks            | Certain close events                                  |

**Remember:** `process.nextTick()` and Promise microtasks are not ordinary Event Loop phases.

## 11. Common Interview Questions

### Q1. What is the Event Loop?

The Event Loop coordinates asynchronous operations and callbacks in Node.js, allowing the main JavaScript thread to do other work while waiting for I/O.

### Q2. Why is Node.js called single-threaded?

Normal JavaScript execution runs on one main thread. Node.js can still handle concurrent I/O using operating-system facilities and libuv, and it can run JavaScript in parallel using Worker Threads.

### Q3. What is V8?

V8 is the JavaScript engine that executes JavaScript and manages JavaScript memory.

### Q4. What is libuv?

libuv is a cross-platform C library that provides the Event Loop, asynchronous I/O support, and a worker pool for selected operations.

### Q5. What is the difference between the Call Stack and Memory Heap?

- **Call Stack:** Tracks functions currently executing.
- **Memory Heap:** Stores dynamically allocated objects and other data.

### Q6. What is the Poll phase?

The Poll phase handles many I/O-related callbacks and may wait for incoming I/O events when appropriate.

### Q7. What is the Check phase?

The Check phase executes callbacks scheduled with `setImmediate()`.

### Q8. What is the difference between `process.nextTick()` and a Promise callback?

Both are processed at microtask checkpoints, but in typical CommonJS execution, `process.nextTick()` callbacks run before Promise callbacks.

### Q9. Does every asynchronous operation use the thread pool?

No. Different operations use different mechanisms. Network I/O commonly uses operating-system facilities, while many file-system operations use libuv's worker pool.

### Q10. Can Node.js execute JavaScript in parallel?

Yes. Worker Threads can execute JavaScript in parallel. Normal JavaScript execution on the main thread processes one task at a time.

## 12. Quick Revision

- **V8** → Executes JavaScript.
- **C++ bindings** → Connect JavaScript APIs to native functionality.
- **libuv** → Event Loop, asynchronous I/O support, and worker pool.
- **Call Stack** → Tracks currently executing functions.
- **Memory Heap** → Stores dynamically allocated data.
- **Event Loop** → Coordinates callbacks.
- **Poll** → Handles many I/O-related callbacks.
- **Check** → Runs `setImmediate()` callbacks.
- **Timers** → Handles eligible `setTimeout()` and `setInterval()` callbacks.
- **`process.nextTick()`** → Runs at a checkpoint before the Event Loop continues.
- **Promise microtasks** → Handles Promise reactions.
- **Worker pool** → Handles selected background operations.

**Most important concept:** JavaScript runs synchronous code on the main Call Stack. Node.js uses asynchronous mechanisms so the main thread does not have to wait for slow I/O operations. When an operation completes, its callback can run when Node.js processes it.
