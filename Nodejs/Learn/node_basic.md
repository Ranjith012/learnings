# What is Node.js?

**Node.js is a JavaScript runtime environment that allows us to execute JavaScript outside the browser.**

- Normally, JavaScript runs inside browsers like Chrome.
- With Node.js, we can run JavaScript on a server and build backend applications.
- Node.js is built on Chrome's **V8 JavaScript engine**.
- It uses a **non-blocking, event-driven architecture**, which helps it handle multiple requests efficiently.

**Example:**

```javascript
console.log("Hello, Node.js!");
```

Run this code using the terminal:

```bash
node app.js
```

**Output:**

```text
Hello, Node.js!
```

### What can we build using Node.js?

- REST APIs
- Backend applications
- Real-time chat applications
- Streaming applications
- Microservices
- Command-line tools

---

## Advantages of Node.js

### 1. Fast Execution

Node.js uses the V8 JavaScript engine to execute JavaScript code efficiently.

### 2. Non-blocking I/O

Node.js can handle I/O operations without blocking the main JavaScript thread while waiting for them to complete.

**Example:**

```javascript
const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) return console.error(err);
  console.log(data);
});

console.log("File reading started");
```

**Output:**

```text
File reading started
// File content appears after the file is read
```

The program can continue executing while Node.js reads the file.

### 3. Handles Multiple Requests

Node.js can handle many concurrent connections efficiently, especially for I/O-heavy applications.

### 4. JavaScript for Frontend and Backend

Developers can use JavaScript for both frontend and backend development.

**Example:**

- Frontend: React.js
- Backend: Node.js with Express.js
- Database: MongoDB

### 5. Large npm Ecosystem

Node.js provides **npm (Node Package Manager)**, which helps developers install and manage reusable packages.

**Example:**

```bash
npm install express
```

### 6. Suitable for Real-Time Applications

Node.js is useful for applications requiring frequent communication, such as chat applications, notifications, and live dashboards.

---

## Disadvantages of Node.js

### 1. Not Ideal for CPU-Intensive Tasks

Node.js executes JavaScript on a main thread by default. Heavy computations can block that thread and delay other requests.

**Examples:**

- Large mathematical calculations
- Video encoding
- Complex image processing

**Solution:** Use worker threads, child processes, or separate services when appropriate.

### 2. Single-Threaded JavaScript Execution

Node.js executes JavaScript callbacks on a single main thread by default.

However, Node.js can use additional threads for certain operations and supports parallel JavaScript execution through worker threads and multiple processes.

### 3. Callback Complexity

Nested callbacks can make code difficult to read and maintain.

**Example:**

```javascript
getUser((user) => {
  getOrders(user.id, (orders) => {
    getPayment(orders, (payment) => {
      console.log(payment);
    });
  });
});
```

**Solution:** Use Promises or `async/await`.

```javascript
async function getData() {
  const user = await getUser();
  const orders = await getOrders(user.id);
  const payment = await getPayment(orders);

  console.log(payment);
}
```

### 4. Requires Careful Error Handling

Asynchronous operations can fail, so developers must handle errors properly using `try...catch`, Promise rejection handling, and other appropriate mechanisms.

### 5. Dependency Management Challenges

Node.js projects often use third-party npm packages. Outdated or vulnerable dependencies can introduce security risks and maintenance issues.

**Solution:** Regularly update dependencies and audit packages for known vulnerabilities.

---

## Node.js Advantages vs Disadvantages

| Advantages                                 | Disadvantages                                        |
| ------------------------------------------ | ---------------------------------------------------- |
| Fast JavaScript execution                  | CPU-intensive tasks can block the main thread        |
| Non-blocking I/O                           | Requires understanding asynchronous programming      |
| Handles concurrent connections efficiently | Poorly written code can affect performance           |
| JavaScript for frontend and backend        | Dependency vulnerabilities can create security risks |
| Large npm ecosystem                        | Package maintenance can be challenging               |
| Good for real-time applications            | Not the best choice for every workload               |

---

## Interview Answer: What is Node.js and Its Advantages and Disadvantages?

**Node.js is an open-source, cross-platform JavaScript runtime environment built on Chrome's V8 engine. It allows developers to execute JavaScript outside the browser and build backend applications. It uses a non-blocking, event-driven architecture to handle concurrent requests efficiently.**

### Advantages

- Fast execution using the V8 engine.
- Non-blocking I/O operations.
- Efficient handling of concurrent connections.
- JavaScript can be used for both frontend and backend.
- Large npm package ecosystem.

### Disadvantages

- Not ideal for CPU-intensive tasks on the main thread.
- Requires knowledge of asynchronous programming.
- Callback-based code can become complex.
- Third-party dependencies can introduce security risks.

**Important Interview Point:** Node.js is particularly suitable for I/O-intensive applications, such as REST APIs, chat applications, and real-time systems.

# Modules — CommonJS vs ES Modules

**Definition:** Modules allow you to organise code into separate files and reuse functions, variables, classes, and objects.

Node.js supports two major module systems:

## A. CommonJS

CommonJS uses `require()` to import modules and `module.exports` or `exports` to export functionality.

### `math.js`

```js
function add(a, b) {
  return a + b;
}

module.exports = add;
```

### `app.js`

```js
const add = require("./math");

console.log(add(10, 20));
```

**Output:**

```text
30
```

## B. ES Modules (ESM)

ES Modules use `import` and `export`.

### `math.js`

```js
export function add(a, b) {
  return a + b;
}
```

### `app.js`

```js
import { add } from "./math.js";

console.log(add(10, 20));
```

**Output:**

```text
30
```

For a straightforward Node.js ESM project, configure `"type": "module"` in `package.json` or use the `.mjs` extension.

## CommonJS vs ES Modules

| Feature         | CommonJS                                 | ES Modules                                              |
| --------------- | ---------------------------------------- | ------------------------------------------------------- |
| Import          | `require()`                              | `import`                                                |
| Export          | `module.exports`                         | `export`                                                |
| Loading model   | Traditionally synchronous module loading | Supports static imports and asynchronous module loading |
| File extensions | Commonly `.js` or `.cjs`                 | Commonly `.js` with `"type": "module"`, or `.mjs`       |
| Example         | `const fs = require("node:fs")`          | `import fs from "node:fs"`                              |

**Interview point:** Do not mix CommonJS and ESM syntax without understanding how Node.js interprets the file. Their interoperability has specific rules.

## CommonJS vs ES Modules

**Definition:** Modules allow you to organise code into separate files and reuse functions, variables, classes, and objects.

Node.js supports two major module systems.

### A. CommonJS

CommonJS uses `require()` to import modules and `module.exports` or `exports` to export functionality.

**math.js**

```
function add(a, b) {
  return a + b;
}

module.exports = add;
```

**app.js**

```
const add = require("./math");

console.log(add(10, 20));
```

Output:

```
30
```

### B. ES Modules (ESM)

ES Modules use `import` and `export`.

**math.js**

```
export function add(a, b) {
  return a + b;
}
```

**app.js**

```
import { add } from "./math.js";

console.log(add(10, 20));
```

Output:

```
30
```

For a straightforward Node.js ESM project, configure `"type": "module"` in `package.json` or use the `.mjs` extension.

### CommonJS vs ES Modules

| Feature         | CommonJS                                 | ES Modules                                              |
| --------------- | ---------------------------------------- | ------------------------------------------------------- |
| Import          | `require()`                              | `import`                                                |
| Export          | `module.exports`                         | `export`                                                |
| Loading model   | Traditionally synchronous module loading | Supports static imports and asynchronous module loading |
| File extensions | Commonly `.js` or `.cjs`                 | Commonly `.js` with `"type": "module"`, or `.mjs`       |
| Example         | `const fs = require("node:fs")`          | `import fs from "node:fs"`                              |

**Interview point:** Do not mix CommonJS and ESM syntax without understanding how Node.js interprets the file. Their interoperability has specific rules.

---

## 4. npm

**Definition:** npm is the package-management ecosystem commonly used with Node.js. It helps developers install, update, and manage project dependencies.

For example, you can install Express.js using npm.

### Common commands

**Check the npm version:**

```
npm -v
```

**Create a project:**

```
npm init -y
```

This creates a basic `package.json` file.

**Install Express.js:**

```
npm install express
```

**Install a development dependency:**

```
npm install --save-dev nodemon
```

**Remove a package:**

```
npm uninstall express
```

**List installed dependencies:**

```
npm list
```

### What happens when you install a package?

For example:

```
npm install express
```

npm typically:

1. Downloads Express.js and its required dependencies.
2. Places installed packages in `node_modules`.
3. Records the dependency in `package.json`.
4. Updates `package-lock.json` to record the resolved dependency tree.

**Interview point:** `package.json` describes project dependencies and configuration, while `package-lock.json` records the resolved dependency versions and tree to support reproducible installations.

---

## 5. package.json

**Definition:** `package.json` is a JSON file that contains project metadata, dependency declarations, scripts, and other configuration.

Example:

```
{
  "name": "my-node-app",
  "version": "1.0.0",
  "description": "My Node.js application",
  "main": "app.js",
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  },
  "dependencies": {
    "express": "^5.0.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.0"
  }
}
```

### Important properties

| Property          | Purpose                                                             |
| ----------------- | ------------------------------------------------------------------- |
| `name`            | Project name                                                        |
| `version`         | Project version                                                     |
| `main`            | Traditional package entry-point field                               |
| `scripts`         | Commands that can be executed using npm                             |
| `dependencies`    | Packages required by the application                                |
| `devDependencies` | Packages primarily used during development                          |
| `type`            | Controls how Node.js interprets `.js` files for CommonJS versus ESM |
| `engines`         | Can specify supported Node.js or npm versions                       |

### How to run scripts

```
npm start
```

Runs:

```
node app.js
```

Similarly:

```
npm run dev
```

Runs:

```
nodemon app.js
```

**Interview point:** `package.json` and `package-lock.json` serve different purposes. One declares dependencies and project configuration; the other records the resolved dependency tree.

---

## 6. process

**Definition:** `process` is a global Node.js object that provides information about the current Node.js process and allows interaction with its execution environment.

You do not need to import it.

### Example

```
console.log("Process ID:", process.pid);

console.log("Node.js Version:", process.version);

console.log("Operating System:", process.platform);

console.log("Current Directory:", process.cwd());
```

Example output on Windows:

```
Process ID: 12345
Node.js Version: v22.x.x
Operating System: win32
Current Directory: C:\Projects\my-app
```

The actual values depend on your machine.

### Common process properties and methods

| Property or method      | Purpose                                  |
| ----------------------- | ---------------------------------------- |
| `process.pid`           | Returns the process ID                   |
| `process.version`       | Returns the Node.js version              |
| `process.platform`      | Identifies the operating system platform |
| `process.cwd()`         | Returns the current working directory    |
| `process.argv`          | Provides command-line arguments          |
| `process.env`           | Provides environment variables           |
| `process.exit()`        | Terminates the process                   |
| `process.memoryUsage()` | Reports memory usage statistics          |

### Example: Command-Line Arguments

Run this command:

```
node app.js Kamesh 25
```

Inside `app.js`:

```
console.log(process.argv);
```

The final two entries of `process.argv` will contain:

```
Kamesh
25
```

The earlier entries typically identify the Node.js executable and script path.

---

## 7. process.env

**Definition:** `process.env` provides access to environment variables available to the Node.js process.

Environment variables are commonly used to configure applications without hardcoding settings in source code.

Examples include:

- Port numbers.
- Database connection strings.
- API keys.
- Application environment settings.

### Example

```
const port = process.env.PORT || 3000;

console.log(`Server running on port ${port}`);
```

If `PORT` is set to `5000`, the application uses port `5000`. Otherwise, it uses `3000`.

### Setting environment variables

**Windows PowerShell:**

```
$env:PORT = "5000"
node app.js
```

**Linux/macOS:**

```
PORT=5000 node app.js
```

### Using a `.env` file

Create a `.env` file:

```
PORT=5000
APP_NAME=MyNodeApp
```

On modern Node.js versions that support the `--env-file` option, you can run:

```
node --env-file=.env app.js
```

Then:

```
console.log(process.env.PORT);
console.log(process.env.APP_NAME);
```

Output:

```
5000
MyNodeApp
```

**Important security points:**

- Do not hardcode passwords or API keys in your source code.
- Never commit sensitive `.env` files to a public repository.
- Environment variables are configuration mechanisms, not encryption. Protect access to the environment in which the application runs.

---

## 8. fs — File System

**Definition:** The `node:fs` module allows Node.js applications to interact with the file system.

You can use it to:

- Read files.
- Write files.
- Create directories.
- Delete files.
- Check file information.

Node.js provides synchronous, callback-based, and Promise-based file-system APIs.

### A. Read a File Asynchronously

Create a file called `data.txt`:

```
Hello Node.js
```

Then:

```
const fs = require("node:fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(data);
});
```

Output:

```
Hello Node.js
```

### B. Write a File

```
const fs = require("node:fs");

fs.writeFile("output.txt", "Welcome to Node.js", (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("File written successfully");
});
```

This creates `output.txt` or replaces its existing contents.

### C. Use the Promise-Based API

```
const fs = require("node:fs/promises");

async function readData() {
  try {
    const data = await fs.readFile("data.txt", "utf8");

    console.log(data);
  } catch (error) {
    console.error("Error reading file:", error);
  }
}

readData();
```

**Interview point:** Prefer asynchronous file operations for many server-side use cases. Synchronous operations block JavaScript execution while the operation runs.

---

## 9. path

**Definition:** The `node:path` module provides utilities for working with file and directory paths.

It helps you handle paths correctly across operating systems.

### Example

```
const path = require("node:path");

const filePath = path.join("users", "kamesh", "data.txt");

console.log(filePath);
```

On Windows, the result typically uses backslashes:

```
users\kamesh\data.txt
```

On Linux or macOS, it typically uses forward slashes:

```
users/kamesh/data.txt
```

### Important path methods

```
const path = require("node:path");

const filePath = "/users/kamesh/documents/data.txt";

console.log(path.basename(filePath));
console.log(path.dirname(filePath));
console.log(path.extname(filePath));
```

Output on a typical POSIX environment:

```
data.txt
/users/kamesh/documents
.txt
```

| Method            | Purpose                                 |
| ----------------- | --------------------------------------- |
| `path.join()`     | Joins path segments                     |
| `path.resolve()`  | Resolves segments into an absolute path |
| `path.basename()` | Returns the final path component        |
| `path.dirname()`  | Returns the directory portion           |
| `path.extname()`  | Returns the file extension              |

### Real-World Example

```
const path = require("node:path");

const filePath = path.join(__dirname, "uploads", "image.png");

console.log(filePath);
```

This builds a path to the `uploads/image.png` file relative to the current module's directory.

**Important:** `__dirname` is available in CommonJS modules. In ES Modules, use an appropriate approach such as `import.meta.url` with `fileURLToPath()` to derive the module's directory.

---

## 10. os — Operating System

**Definition:** The `node:os` module provides information about the operating system and machine running Node.js.

### Example

```
const os = require("node:os");

console.log("Platform:", os.platform());

console.log("Architecture:", os.arch());

console.log("Total Memory:", os.totalmem());

console.log("Free Memory:", os.freemem());

console.log("CPU Information:", os.cpus());
```

### Common methods

| Method          | Purpose                                  |
| --------------- | ---------------------------------------- |
| `os.platform()` | Returns the operating system platform    |
| `os.arch()`     | Returns the CPU architecture             |
| `os.cpus()`     | Returns information about logical CPUs   |
| `os.totalmem()` | Returns total system memory in bytes     |
| `os.freemem()`  | Returns available system memory in bytes |
| `os.hostname()` | Returns the machine's hostname           |
| `os.uptime()`   | Returns system uptime in seconds         |

### Real-World Example

You can use this module to collect system information for monitoring or diagnostic tools.

```
const os = require("node:os");

const totalMemory = os.totalmem();
const freeMemory = os.freemem();

const usedMemory = totalMemory - freeMemory;

console.log("Used memory:", usedMemory);
```

**Important:** `os.freemem()` reports system memory information, not the amount of memory available to your Node.js process specifically.

---

## 11. events — EventEmitter

**Definition:** The `node:events` module provides the `EventEmitter` class, which allows objects to emit named events and invoke registered listeners.

This is useful for event-driven programming.

### Example

```
const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on("greet", (name) => {
  console.log(`Hello, ${name}`);
});

emitter.emit("greet", "Kamesh");
```

Output:

```
Hello, Kamesh
```

### How does it work?

1. `EventEmitter` creates an event-emitting object.
2. `.on()` registers a listener for the `greet` event.
3. `.emit()` emits the event.
4. The registered listener executes with the supplied argument.

### Important methods

| Method                  | Purpose                                       |
| ----------------------- | --------------------------------------------- |
| `.on()`                 | Registers an event listener                   |
| `.once()`               | Registers a listener that runs at most once   |
| `.emit()`               | Emits an event                                |
| `.off()`                | Removes a registered listener                 |
| `.removeListener()`     | Removes a registered listener                 |
| `.removeAllListeners()` | Removes listeners for one event or all events |

### Real-World Example

```
const EventEmitter = require("node:events");

class OrderService extends EventEmitter {
  createOrder(orderId) {
    console.log("Order created");

    this.emit("orderCreated", orderId);
  }
}

const orderService = new OrderService();

orderService.on("orderCreated", (orderId) => {
  console.log(`Send confirmation for order ${orderId}`);
});

orderService.createOrder(101);
```

Output:

```
Order created
Send confirmation for order 101
```

**Important:** EventEmitter listeners normally execute synchronously when an event is emitted. Emitting an event does not automatically make the listener asynchronous.

---

## 12. http — HTTP Server

**Definition:** The `node:http` module allows you to create HTTP servers and handle incoming HTTP requests without using a framework such as Express.js.

### Example: Create a Server

Create `server.js`:

```
const http = require("node:http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain"
  });

  res.end("Hello from Node.js Server");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

Run:

```
node server.js
```

Open your browser and visit:

`http://localhost:3000`

Response:

```
Hello from Node.js Server
```

### How does it work?

1. `http.createServer()` creates an HTTP server.
2. The callback handles incoming requests.
3. `req` contains request information.
4. `res` is used to construct and send the response.
5. `server.listen()` starts listening on the specified port.

### Handle Different Routes

```
const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, {
      "Content-Type": "text/plain"
    });

    res.end("Home Page");
  } else if (req.url === "/about" && req.method === "GET") {
    res.writeHead(200, {
      "Content-Type": "text/plain"
    });

    res.end("About Page");
  } else {
    res.writeHead(404, {
      "Content-Type": "text/plain"
    });

    res.end("Not Found");
  }
});

server.listen(3000);
```

Now:

- `/` returns `Home Page`.
- `/about` returns `About Page`.
- Other paths return `404 Not Found`.

**Interview point:** Express.js simplifies routing, middleware, and request handling, but it is built on top of Node.js HTTP capabilities.

---

## 13. crypto — Cryptographic Operations

**Definition:** The `node:crypto` module provides cryptographic functionality, including hashing, secure random values, digital signatures, encryption, and decryption.

### A. Hashing

Hashing converts input data into a fixed-length digest.

Example:

```
const crypto = require("node:crypto");

const hash = crypto
  .createHash("sha256")
  .update("Hello Node.js")
  .digest("hex");

console.log(hash);
```

This produces a hexadecimal SHA-256 digest.

**Important:** The same input produces the same SHA-256 digest, and hashing is designed to be one-way. It is not encryption and cannot simply be reversed to recover the original input.

### B. Generate a Secure Random Value

```
const crypto = require("node:crypto");

const token = crypto.randomBytes(16).toString("hex");

console.log(token);
```

This generates 16 random bytes and represents them as a hexadecimal string.

It is useful for generating random tokens or identifiers, provided the application uses them appropriately.

### C. Password Security

For password storage, **do not use plain SHA-256 hashing alone**.

Use a password-hashing algorithm designed for this purpose, such as Argon2id, scrypt, or bcrypt, with appropriate parameters and salts.

### D. Encryption vs Hashing

| Feature       | Hashing                           | Encryption                                                |
| ------------- | --------------------------------- | --------------------------------------------------------- |
| Purpose       | Produce a digest for verification | Protect data so it can be recovered by authorised parties |
| Reversible?   | Designed to be one-way            | Yes, with the correct key and algorithm                   |
| Key required? | Not for ordinary SHA-256 hashing  | Depends on the encryption scheme                          |
| Example       | SHA-256                           | AES-GCM                                                   |

**Interview point:** Hashing and encryption are different concepts. Hashing is used for integrity checks and password verification, while encryption protects confidentiality and supports recovering the original data.

---

# 14. How These Topics Fit Together

Suppose you are building a REST API using Node.js and Express.js.

Here is how the fundamentals work together:

| Topic                | How you use it in a backend project                                            |
| -------------------- | ------------------------------------------------------------------------------ |
| Node.js architecture | Understand how JavaScript runs and interacts with the operating system         |
| Event loop           | Understand asynchronous operations and request handling                        |
| Modules              | Organise controllers, services, and utilities into reusable files              |
| npm                  | Install Express, database drivers, and other packages                          |
| `package.json`       | Manage dependencies and define project scripts                                 |
| `process`            | Access runtime information and command-line arguments                          |
| `process.env`        | Read environment configuration                                                 |
| `fs`                 | Read and write files                                                           |
| `path`               | Construct file paths safely across operating systems                           |
| `os`                 | Access operating-system information                                            |
| `events`             | Implement event-driven functionality                                           |
| `http`               | Create servers and understand HTTP request/response handling                   |
| `crypto`             | Generate secure random values, hash data, and perform cryptographic operations |

# 3. Asynchronous Programming and the Event Loop in Node.js

## Overview

**Asynchronous programming** allows Node.js to start an operation that
may take time (such as reading a file, calling an API, or querying a
database) and continue doing other work while that operation is in
progress.

Node.js uses JavaScript execution, the event loop, the operating system,
and (for some operations) its libuv thread pool to handle asynchronous
work efficiently.

> Important: `async` does not automatically mean "run JavaScript on
> another thread". Most JavaScript callbacks still execute on the main
> JavaScript thread. Asynchronous I/O lets Node.js avoid waiting idly
> for I/O to finish.

---

## 1. Synchronous vs. Asynchronous Execution

### Definition

- **Synchronous:** Statements execute one after another. The current
  operation must finish before the next statement runs.
- **Asynchronous:** An operation is started, and the program can
  continue. Its result is handled later, usually through a callback,
  Promise, or `async/await`.

### Basic example: synchronous execution

```js
console.log("1. Start");

function getData() {
  console.log("2. Getting data...");
  return "Data received";
}

const result = getData();
console.log("3.", result);
console.log("4. End");
```

Output:

```text
1. Start
2. Getting data...
3. Data received
4. End
```

The function completes before the next line executes.

### Basic example: asynchronous execution

```js
console.log("1. Start");

setTimeout(() => {
  console.log("2. Timer completed");
}, 1000);

console.log("3. End");
```

Typical output:

```text
1. Start
3. End
2. Timer completed
```

`setTimeout()` schedules a callback. It does not pause the whole program
for one second.

### Advanced Node.js example: synchronous vs asynchronous file reading

```js
const fs = require("node:fs");

// Synchronous: blocks JavaScript execution until the file is read.
const text = fs.readFileSync("notes.txt", "utf8");
console.log("Sync result:", text);

// Asynchronous: registers a callback and continues.
fs.readFile("notes.txt", "utf8", (error, data) => {
  if (error) {
    console.error("Could not read file:", error.message);
    return;
  }

  console.log("Async result:", data);
});

console.log("This line can run before the async read finishes.");
```

### When to use

- Use synchronous APIs mainly for short startup scripts, command-line
  tasks, or situations where blocking is acceptable.
- Prefer asynchronous APIs in servers so one slow file or network
  operation does not hold up unrelated requests.

---

## 2. Callback Functions

### Definition

A **callback** is a function passed to another function so it can be
called later, often when an operation completes.

### Basic example

```js
function greet(name, callback) {
  console.log(`Hello, ${name}`);
  callback();
}

function showMessage() {
  console.log("Welcome to Node.js!");
}

greet("Kamesh", showMessage);
```

Output:

```text
Hello, Kamesh
Welcome to Node.js!
```

### Asynchronous callback example

```js
const fs = require("node:fs");

fs.readFile("notes.txt", "utf8", (error, data) => {
  if (error) {
    console.error(error);
    return;
  }

  console.log(data);
});

console.log("File reading was started.");
```

The callback runs after the file read completes.

### Advanced example: create a reusable callback-based function

```js
const fs = require("node:fs");

function readTextFile(filePath, callback) {
  fs.readFile(filePath, "utf8", (error, data) => {
    if (error) {
      return callback(error);
    }

    callback(null, data);
  });
}

readTextFile("notes.txt", (error, content) => {
  if (error) {
    console.error("Read failed:", error.message);
    return;
  }

  console.log("File content:", content);
});
```

### Callback nesting (callback hell)

```js
getUser(userId, (error, user) => {
  if (error) return handleError(error);

  getOrders(user.id, (error, orders) => {
    if (error) return handleError(error);

    getPayment(orders[0].id, (error, payment) => {
      if (error) return handleError(error);

      console.log(payment);
    });
  });
});
```

Deep nesting makes code harder to read, test, and maintain. Promises and
`async/await` are common ways to improve this structure.

---

## 3. Callback Error Conventions

### Definition

Node.js commonly uses the **error-first callback convention**. The first
callback argument represents an error; the next argument or arguments
contain successful results.

The usual pattern is:

```js
callback(error, result);
```

- On failure: `callback(error)`.
- On success: `callback(null, result)`.

### Basic example

```js
function divide(a, b, callback) {
  if (b === 0) {
    return callback(new Error("Cannot divide by zero"));
  }

  callback(null, a / b);
}

divide(10, 2, (error, result) => {
  if (error) {
    console.error(error.message);
    return;
  }

  console.log("Result:", result);
});
```

### Advanced example: validate and read a file

```js
const fs = require("node:fs");

function readJsonFile(filePath, callback) {
  fs.readFile(filePath, "utf8", (error, text) => {
    if (error) {
      return callback(error);
    }

    let parsed;

    try {
      parsed = JSON.parse(text);
    } catch (parseError) {
      return callback(parseError);
    }

    callback(null, parsed);
  });
}

readJsonFile("users.json", (error, users) => {
  if (error) {
    console.error("Unable to load users:", error.message);
    return;
  }

  console.log(users);
});
```

### Important rules

1.  Check the error before using the result.
2.  Return after handling an error to avoid continuing accidentally.
3.  Call the callback only once.
4.  Do not throw an error from a later asynchronous callback expecting
    an outer `try/catch` to catch it.
5.  Document the callback's argument order.

---

## 4. Promises and Promise Chaining

### Definition

A **Promise** is an object representing the eventual success or failure
of an asynchronous operation.

A Promise has three states:

- **Pending:** The operation has not completed.
- **Fulfilled:** The operation completed successfully.
- **Rejected:** The operation failed.

A settled Promise (fulfilled or rejected) does not change state again.

### Basic example

```js
const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Operation successful");
  } else {
    reject(new Error("Operation failed"));
  }
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error.message);
  });
```

- `resolve(value)` fulfills the Promise.
- `reject(error)` rejects the Promise.
- `.then()` handles fulfillment (and can also receive a rejection
  handler).
- `.catch()` handles rejection.
- `.finally()` runs after settlement, regardless of success or
  failure.

### Promise chaining

Each `.then()` returns a new Promise. Return a value to pass it to the
next `.then()`, or return another Promise to wait for that operation.

```js
Promise.resolve(5)
  .then((number) => {
    console.log(number); // 5
    return number * 2;
  })
  .then((number) => {
    console.log(number); // 10
    return number + 3;
  })
  .then((result) => {
    console.log(result); // 13
  })
  .catch((error) => {
    console.error(error);
  });
```

### Advanced Node.js example: sequential file operations

```js
const fs = require("node:fs/promises");

fs.readFile("users.json", "utf8")
  .then((text) => JSON.parse(text))
  .then((users) => {
    console.log("User count:", users.length);
    return fs.writeFile("user-count.txt", String(users.length));
  })
  .then(() => {
    console.log("User count saved.");
  })
  .catch((error) => {
    console.error("Processing failed:", error.message);
  })
  .finally(() => {
    console.log("Processing finished.");
  });
```

### Common mistake: forgetting `return`

```js
// Incorrect: the next then does not wait for saveFile().
getData()
  .then((data) => {
    saveFile(data);
  })
  .then(() => {
    console.log("This may run before saveFile finishes.");
  });

// Correct:
getData()
  .then((data) => {
    return saveFile(data);
  })
  .then(() => {
    console.log("Save completed.");
  });
```

---

## 5. async/await

### Definition

`async/await` is syntax built on Promises that makes asynchronous code
look more like sequential code.

- An `async` function always returns a Promise.
- `await` pauses that async function until the awaited Promise
  settles. It does **not** block the Node.js event loop.
- Use `try/catch` to handle rejected Promises.

### Basic example

```js
function getUser() {
  return Promise.resolve({ id: 1, name: "Arun" });
}

async function showUser() {
  const user = await getUser();
  console.log(user);
}

showUser();
```

### Error handling example

```js
async function loadUser() {
  try {
    const user = await getUser();
    console.log(user);
  } catch (error) {
    console.error("Could not load user:", error.message);
  }
}
```

### Advanced Node.js example: read and process JSON

```js
const fs = require("node:fs/promises");

async function loadUsers() {
  try {
    const text = await fs.readFile("users.json", "utf8");
    const users = JSON.parse(text);

    console.log("Users:", users);
    return users;
  } catch (error) {
    console.error("Failed to load users:", error.message);
    throw error; // Re-throw if the caller also needs to know.
  }
}

loadUsers().catch((error) => {
  console.error("Caller handled the failure:", error.message);
});
```

### Sequential vs concurrent `await`

Sequential: the second operation starts only after the first finishes.

```js
const user = await getUser();
const orders = await getOrders(user.id);
```

Concurrent: start both independent operations before waiting for both.

```js
const [users, products] = await Promise.all([getUsers(), getProducts()]);
```

Only run independent operations concurrently. If the second operation
needs the first result, keep them sequential.

---

## 6. The Event Loop and Its Phases

### Definition

The **event loop** is the mechanism Node.js uses to coordinate when
scheduled callbacks can run. JavaScript runs on the main thread, while
Node.js and the operating system manage many I/O operations outside the
JavaScript call stack.

A simplified picture:

```text
JavaScript call stack
        |
        v
Start async operation (file, network, timer)
        |
        v
Node.js / OS / libuv handles waiting
        |
        v
Operation becomes ready
        |
        v
Event loop schedules callback
        |
        v
JavaScript callback runs when the stack is available
```

### Important event loop phases

Node.js event loop phases include:

1.  **Timers:** Runs eligible `setTimeout()` and `setInterval()`
    callbacks.
2.  **Pending callbacks:** Runs certain system-level callbacks deferred
    from a previous loop iteration.
3.  **Idle, prepare:** Internal libuv work.
4.  **Poll:** Retrieves and processes I/O events; may wait for I/O when
    appropriate.
5.  **Check:** Runs `setImmediate()` callbacks.
6.  **Close callbacks:** Runs some close-event callbacks, such as socket
    close handlers.

Node.js also processes microtasks, including Promise reactions and
`queueMicrotask()` callbacks, at defined points between JavaScript
callbacks. `process.nextTick()` uses a separate, higher-priority
next-tick queue.

### Basic example

```js
console.log("Start");

setTimeout(() => {
  console.log("Timer callback");
}, 0);

setImmediate(() => {
  console.log("Immediate callback");
});

console.log("End");
```

Output always starts with:

```text
Start
End
```

The relative order of the timer and immediate in a top-level script can
vary. Do not depend on one fixed order.

### Advanced example: `setImmediate()` inside an I/O callback

```js
const fs = require("node:fs");

fs.readFile(__filename, () => {
  setTimeout(() => console.log("timeout"), 0);
  setImmediate(() => console.log("immediate"));
});
```

In this I/O callback context, `setImmediate()` normally runs before the
zero-delay timer because the event loop proceeds to the check phase
after the poll phase.

### Key point

The event loop does not make CPU-heavy JavaScript automatically
parallel. A long synchronous loop can prevent the event loop from
processing other callbacks.

---

## 7. Timers: setTimeout(), setInterval(), and setImmediate()

### `setTimeout()`

Runs a callback once after at least the requested delay, when the event
loop can run it.

```js
console.log("Before");

setTimeout(() => {
  console.log("Runs after the timer becomes eligible");
}, 1000);

console.log("After");
```

The delay is not an exact execution time. A busy event loop can make the
callback run later.

### `setInterval()`

Schedules a callback repeatedly with the requested interval.

```js
let count = 0;

const intervalId = setInterval(() => {
  count++;
  console.log("Count:", count);

  if (count === 3) {
    clearInterval(intervalId);
  }
}, 1000);
```

### `setImmediate()`

Schedules a callback for the event loop's **check phase**, after the
poll phase.

```js
setImmediate(() => {
  console.log("Immediate callback");
});
```

### Comparison

---

API Behaviour Common use

---

`setTimeout()` Runs once after a Delayed task
minimum delay

`setInterval()` Repeats at an interval Periodic task

`setImmediate()` Runs in the check phase Run after the current
poll phase

---

### Advanced example: avoid overlapping periodic work

If an asynchronous job takes longer than the interval, `setInterval()`
can start another run before the previous one finishes. A recursive
`setTimeout()` schedules the next run only after the current one
completes.

```js
async function runJob() {
  try {
    await performAsyncWork();
    console.log("Job completed");
  } catch (error) {
    console.error("Job failed:", error);
  } finally {
    setTimeout(runJob, 5000);
  }
}

runJob();
```

This example assumes `performAsyncWork()` is defined and returns a
Promise.

---

## 8. Microtasks and Promise Callbacks

### Definition

A **microtask** is a small unit of scheduled work that the JavaScript
runtime processes after the current JavaScript stack finishes, before
moving on to the next event-loop task in the usual case.

Common Node.js queues and APIs:

- Promise `.then()`, `.catch()`, and `.finally()` reactions.
- `queueMicrotask()`.
- `process.nextTick()` uses a separate next-tick queue and is
  generally processed before Promise microtasks in Node.js.

### Basic example

```js
console.log("Start");

setTimeout(() => console.log("Timer"), 0);

Promise.resolve().then(() => console.log("Promise"));

queueMicrotask(() => console.log("queueMicrotask"));

console.log("End");
```

Typical output:

```text
Start
End
Promise
queueMicrotask
Timer
```

Promise reactions and `queueMicrotask()` callbacks are microtasks. They
run after the synchronous stack completes and before the timer callback
in this example.

### Advanced example: `process.nextTick()` and Promise microtasks

```js
console.log("Start");

process.nextTick(() => {
  console.log("nextTick");
});

Promise.resolve().then(() => {
  console.log("Promise");
});

queueMicrotask(() => {
  console.log("queueMicrotask");
});

console.log("End");
```

Typical output in Node.js:

```text
Start
End
nextTick
Promise
queueMicrotask
```

The Promise and `queueMicrotask()` callbacks share the microtask queue
and run in the order they were queued.

### Important warning

Avoid recursively scheduling large numbers of `process.nextTick()` or
microtask callbacks. They can delay I/O and timers by keeping the
runtime busy draining high-priority work.

---

## 9. Blocking vs. Non-blocking I/O

### Definition

- **Blocking I/O:** The JavaScript execution waits until the I/O
  operation completes.
- **Non-blocking I/O:** Node.js starts the operation and continues
  executing other JavaScript while the I/O is in progress. A callback
  or Promise handles the result later.

### Blocking example

```js
const fs = require("node:fs");

console.log("Before read");

const data = fs.readFileSync("large-file.txt", "utf8");

console.log("File read:", data.length);
console.log("After read");
```

The next line cannot execute until the file has been read.

### Non-blocking example

```js
const fs = require("node:fs");

console.log("Before read");

fs.readFile("large-file.txt", "utf8", (error, data) => {
  if (error) {
    console.error(error);
    return;
  }

  console.log("File read:", data.length);
});

console.log("After starting read");
```

The program can print "After starting read" while the file read is still
in progress.

### Advanced example: Promise-based non-blocking I/O

```js
const fs = require("node:fs/promises");

async function readFiles() {
  const results = await Promise.all([
    fs.readFile("a.txt", "utf8"),
    fs.readFile("b.txt", "utf8"),
    fs.readFile("c.txt", "utf8"),
  ]);

  console.log(results);
}

readFiles().catch(console.error);
```

The independent file reads are started together. Node.js uses the OS and
libuv mechanisms as appropriate to perform I/O.

### Important distinction

Non-blocking I/O does not mean CPU-heavy JavaScript is non-blocking. For
expensive CPU work, consider worker threads, child processes, or a
separate job-processing service.

---

## 10. Handling Concurrent Requests

### Definition

**Concurrency** means multiple operations can make progress during
overlapping periods. In a Node.js server, the event loop can manage many
requests while their I/O operations are pending.

Concurrency is not the same as parallel execution. CPU work on the main
JavaScript thread is still run one piece at a time unless you use
additional threads or processes.

### Basic example: simple HTTP server

```js
const http = require("node:http");

const server = http.createServer(async (req, res) => {
  if (req.url === "/users" && req.method === "GET") {
    // Simulate an asynchronous operation.
    await new Promise((resolve) => setTimeout(resolve, 1000));

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify([{ id: 1, name: "Arun" }]));
    return;
  }

  res.writeHead(404);
  res.end("Not found");
});

server.listen(3000, () => {
  console.log("Server listening on http://localhost:3000");
});
```

While one request waits for the timer, Node.js can continue handling
other incoming requests.

### Advanced example: run independent request operations concurrently

```js
const http = require("node:http");

async function getUser() {
  return { id: 1, name: "Arun" };
}

async function getProducts() {
  return [{ id: 101, name: "Keyboard" }];
}

const server = http.createServer(async (req, res) => {
  if (req.url !== "/dashboard") {
    res.writeHead(404);
    res.end("Not found");
    return;
  }

  try {
    const [user, products] = await Promise.all([getUser(), getProducts()]);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ user, products }));
  } catch (error) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Unable to load dashboard" }));
  }
});

server.listen(3000);
```

### Production considerations

- Validate input and limit request body sizes.
- Set timeouts for external services.
- Limit concurrency when calling rate-limited APIs or databases.
- Use connection pooling for databases.
- Handle errors and rejected Promises.
- Avoid CPU-heavy work on the event loop.
- Consider graceful shutdown and cancellation for long-running work.

---

## 11. Promise.all() and Promise.allSettled()

### `Promise.all()`

Waits for all supplied Promises to fulfill. It fulfills with results in
the original input order. If any input rejects, the returned Promise
rejects as soon as that rejection is observed.

Use it when **every operation must succeed**.

```js
const userPromise = Promise.resolve({ id: 1 });
const ordersPromise = Promise.resolve(["Order A", "Order B"]);

Promise.all([userPromise, ordersPromise])
  .then(([user, orders]) => {
    console.log(user, orders);
  })
  .catch((error) => {
    console.error("At least one operation failed:", error);
  });
```

### `Promise.allSettled()`

Waits until every supplied Promise has settled, whether fulfilled or
rejected. It returns an array describing each outcome.

Use it when **you need every result, including failures**.

```js
const tasks = [
  Promise.resolve("User loaded"),
  Promise.reject(new Error("Orders API failed")),
  Promise.resolve("Products loaded"),
];

Promise.allSettled(tasks).then((results) => {
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(index, "Success:", result.value);
    } else {
      console.log(index, "Failed:", result.reason.message);
    }
  });
});
```

### Advanced Node.js example: dashboard data

```js
async function loadDashboard() {
  const results = await Promise.allSettled([
    getUser(),
    getOrders(),
    getNotifications(),
  ]);

  const [userResult, ordersResult, notificationsResult] = results;

  return {
    user: userResult.status === "fulfilled" ? userResult.value : null,
    orders: ordersResult.status === "fulfilled" ? ordersResult.value : [],
    notifications:
      notificationsResult.status === "fulfilled"
        ? notificationsResult.value
        : [],
    errors: results
      .filter((result) => result.status === "rejected")
      .map((result) => result.reason.message),
  };
}
```

The functions `getUser()`, `getOrders()`, and `getNotifications()` are
assumed to return Promises.

### Comparison

---

Feature `Promise.all()` `Promise.allSettled()`

---

Waits for every task to No; rejects as soon as Yes
finish? a rejection is observed

Rejects if one task Yes No
rejects?

Gives successful Yes, if all fulfill Yes, per result
values?

Gives failure details? Rejection reason Each rejected result's
`reason`

Best for All tasks are required Partial success is
acceptable

---

**Important:** `Promise.all()` rejecting does not automatically cancel
the other operations. They may continue running.

---

## 12. Race Conditions and Timeouts

### Race condition: definition

A **race condition** happens when the result of a program depends on the
timing or order of operations that may overlap.

For example, two requests update the same account balance. If both read
the old balance before either writes its update, one update can
overwrite the other.

### Basic example: a shared-state race

```js
let balance = 100;

async function addMoney(amount) {
  const currentBalance = balance;

  // Simulate an asynchronous delay between read and write.
  await new Promise((resolve) => setTimeout(resolve, 100));

  balance = currentBalance + amount;
}

async function run() {
  await Promise.all([addMoney(50), addMoney(30)]);

  console.log("Balance:", balance);
}

run();
```

The expected balance is `180`, but this code can print `130` or `150`
because both operations may read `100` before either writes.

### Preventing race conditions

- Use database transactions and atomic update operations.
- Use locks or a queue when shared state must be updated in a
  controlled order.
- Avoid read-modify-write sequences that are not atomic.
- Use optimistic concurrency controls, such as a version field, where
  appropriate.

For example, in a database, prefer an atomic increment operation rather
than reading a value into Node.js, adding to it, and writing it back.

### Timeout: definition

A **timeout** limits how long your application waits for an operation. A
timeout should ideally cancel the underlying operation, not merely stop
waiting for its result.

### Basic example: timeout with `Promise.race()`

```js
function withTimeout(promise, milliseconds) {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Operation timed out"));
    }, milliseconds);
  });

  return Promise.race([promise, timeoutPromise]);
}

withTimeout(
  new Promise((resolve) => setTimeout(() => resolve("Completed"), 500)),
  1000,
)
  .then(console.log)
  .catch((error) => console.error(error.message));
```

**Limitation:** `Promise.race()` does not cancel the losing Promise. The
original operation may continue in the background.

### Advanced example: timeout and cancellation with AbortController

Node.js APIs such as `fetch()` support `AbortSignal`.

```js
async function fetchWithTimeout(url, timeoutMs = 5000) {
  const controller = new AbortController();

  const timeoutId = setTimeout(() => {
    controller.abort();
  }, timeoutMs);

  try {
    const response = await fetch(url, {
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return await response.json();
  } finally {
    clearTimeout(timeoutId);
  }
}

fetchWithTimeout("https://jsonplaceholder.typicode.com/users", 5000)
  .then(console.log)
  .catch((error) => {
    if (error.name === "AbortError") {
      console.error("Request was cancelled because it timed out.");
    } else {
      console.error("Request failed:", error.message);
    }
  });
```

The timeout aborts the fetch request. Always check whether the API you
use supports cancellation through `AbortSignal`.

### `Promise.race()` vs `Promise.any()`

- `Promise.race()` settles with the first input Promise that settles,
  whether fulfilled or rejected.
- `Promise.any()` fulfills with the first fulfilled Promise. It
  rejects with an `AggregateError` only if all inputs reject.

---

## Quick Revision

---

Topic Key point

---

Synchronous Current operation finishes before
the next statement

Asynchronous Start work and handle its result
later

Callback Function passed to another function

Error-first callback `callback(error, result)`

Promise Represents a future success or
failure

Promise chaining Return values or Promises from
`.then()`

`async/await` Readable syntax for working with
Promises

Event loop Coordinates when callbacks can run

`setTimeout()` Schedules a one-time timer callback

`setInterval()` Schedules repeated timer callbacks

`setImmediate()` Schedules work in the check phase

Microtask High-priority scheduled callback,
such as a Promise reaction

Blocking I/O Holds up JavaScript while waiting

Non-blocking I/O Lets JavaScript continue while I/O
is pending

Concurrency Multiple operations make progress
over overlapping periods

`Promise.all()` Requires all tasks to fulfill

`Promise.allSettled()` Collects every task's outcome

Race condition Timing/order affects shared-state
correctness

Timeout Limits waiting time; cancellation
needs explicit support

---

## Interview Questions

1.  What is the difference between synchronous and asynchronous
    execution?
2.  What is a callback function?
3.  What is callback hell, and how can you avoid it?
4.  What is the error-first callback convention?
5.  What are the three states of a Promise?
6.  What does a `.then()` return?
7.  What is the difference between Promise chaining and `async/await`?
8.  Does `await` block the Node.js event loop?
9.  What are the phases of the Node.js event loop?
10. What is the difference between `setTimeout()` and `setImmediate()`?
11. What is the difference between `process.nextTick()` and a Promise
    callback?
12. What is the difference between blocking and non-blocking I/O?
13. How can Node.js handle many requests if JavaScript runs on one main
    thread?
14. What is the difference between concurrency and parallelism?
15. What is the difference between `Promise.all()` and
    `Promise.allSettled()`?
16. Does `Promise.all()` cancel the remaining operations after one
    rejects?
17. What is a race condition? How can a database transaction help?
18. What is the difference between `Promise.race()` and `Promise.any()`?
19. Why should a timeout ideally cancel the underlying request?
20. When would you use worker threads in Node.js?

## Practice Exercises

1.  Create a function that reads a text file using both callback-based
    and Promise-based APIs.
2.  Convert a nested callback example into Promise chaining.
3.  Rewrite a Promise chain using `async/await`.
4.  Print the execution order of synchronous code, `process.nextTick()`,
    Promise callbacks, `setTimeout()`, and `setImmediate()`.
5.  Create an HTTP endpoint that calls two independent asynchronous
    functions using `Promise.all()`.
6.  Change the endpoint to use `Promise.allSettled()` and return partial
    results.
7.  Simulate two concurrent balance updates and explain the race
    condition.
8.  Add a timeout to a `fetch()` call using `AbortController`.
9.  Create a periodic job that never overlaps with its previous run.
10. Identify and fix a CPU-heavy operation that blocks the event loop.

## Recommended Node.js Documentation

- [Node.js: The Event Loop, Timers, and
  `process.nextTick()`](https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick)
- [Node.js Timers API](https://nodejs.org/api/timers.html)
- [Node.js File System API](https://nodejs.org/api/fs.html)
- [Node.js HTTP API](https://nodejs.org/api/http.html)
- [Node.js
  `AbortController`](https://nodejs.org/api/globals.html#class-abortcontroller)
- [MDN: Using
  Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

---

**Study tip:** First understand the basic examples, then run the
advanced examples in separate `.js` files. Predict the output before
executing each event-loop example.

# HTTP Request and Response Lifecycle in Node.js

## Definition

The HTTP request and response lifecycle is the complete process that
happens when a client (browser, frontend application, or Postman) sends
an HTTP request to a Node.js server and receives a response.

In simple terms:

1.  Client sends a request.
2.  Node.js receives the request.
3.  Server processes the request.
4.  Server sends a response.
5.  Client receives the response.

## 1. HTTP Request and Response Flow

The typical flow in an Express.js application is:

```text
Client (Browser / React / Postman)
              |
              | HTTP Request
              | GET /api/users
              v
       Node.js HTTP Server
              |
              v
          Middleware
              |
              v
           Router
              |
              v
          Controller
              |
              v
           Service
              |
              v
           Database
              |
              | Data returned
              v
           Service
              |
              v
          Controller
              |
              v
        HTTP Response
              |
              v
       Client receives data
```

## 2. Step-by-Step Lifecycle

### Step 1: Client sends an HTTP request

The client sends an HTTP request to the Node.js server.

Example:

```http
GET /api/users HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Authorization: Bearer token
```

A request contains:

- **HTTP Method:** GET, POST, PUT, PATCH, DELETE.
- **URL:** API endpoint.
- **Headers:** Additional information such as content type and
  authorization.
- **Body:** Data sent by the client (mainly POST, PUT, PATCH).

### Step 2: Node.js receives the request

Node.js uses its HTTP module to create an HTTP server.

Example:

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);

  res.end("Hello from Node.js");
});

server.listen(3000);
```

**Important objects:**

- `req` -- `IncomingMessage` object. Contains request information.
- `res` -- `ServerResponse` object. Used to send a response.

### Step 3: Middleware execution

Middleware functions execute before the request reaches the route
handler.

Common middleware responsibilities:

- Logging requests.
- Authentication and authorization.
- Parsing JSON request bodies.
- Validating request data.
- Handling errors.

Example:

```javascript
const express = require("express");
const app = express();

// Middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);

  next();
});
```

**What is `next()`?**

- `next()` passes control to the next middleware or route handler.
- Without calling `next()` or sending a response, the request may
  remain pending.

### Step 4: Routing

The router checks the HTTP method and URL to identify the correct route
handler.

Example:

```javascript
app.get("/api/users", (req, res) => {
  res.send("Users API");
});
```

If the client sends `GET /api/users`, this route gets executed.

### Step 5: Controller execution

The controller handles the incoming request and coordinates the
application logic.

```javascript
const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();

    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
```

### Step 6: Service and database execution

The service contains business logic and communicates with the database.

```javascript
const getUsers = async () => {
  return await User.find();
};
```

Here:

- Controller calls the service.
- Service queries MongoDB.
- MongoDB returns the user records.
- Service returns the records to the controller.

### Step 7: Server sends the HTTP response

After processing the request, the server sends a response to the client.

Example:

```javascript
res.status(200).json({
  success: true,
  message: "Users fetched successfully",
  data: users,
});
```

A response contains:

- **Status Code:** 200, 201, 400, 401, 404, 500.
- **Headers:** Content-Type, Cache-Control, etc.
- **Body:** Actual response data.

### Step 8: Client receives the response

The frontend receives the response and handles it.

Example using React / JavaScript:

```javascript
const response = await fetch("http://localhost:3000/api/users");

const data = await response.json();

console.log(data);
```

The frontend can now display the received users.

## 3. Complete HTTP Lifecycle Example (Express.js)

Here is a simple example combining middleware, routing, controller,
service, and response.

**server.js**

```javascript
const express = require("express");

const app = express();

// 1. Parse JSON request body
app.use(express.json());

// 2. Middleware
app.use((req, res, next) => {
  console.log("Request received:", req.method, req.url);
  next();
});

// 3. Service
const userService = {
  getUsers: async () => {
    return [
      { id: 1, name: "Kamesh" },
      { id: 2, name: "Arun" },
    ];
  },
};

// 4. Controller
const getUsers = async (req, res, next) => {
  try {
    const users = await userService.getUsers();

    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

// 5. Router
app.get("/api/users", getUsers);

// 6. Error-handling middleware
app.use((err, req, res, next) => {
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

// 7. Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

**Test:**

```http
GET http://localhost:3000/api/users
```

**Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Kamesh"
    },
    {
      "id": 2,
      "name": "Arun"
    }
  ]
}
```

## 4. What Happens Internally in Node.js?

This is an important interview topic.

When a request reaches a Node.js application:

1.  The operating system receives the network data.
2.  Node.js handles the incoming connection through its HTTP server
    implementation.
3.  The HTTP parser parses the incoming request.
4.  Node.js creates request and response objects.
5.  The JavaScript request handler executes.
6.  If asynchronous operations are required, Node.js can delegate I/O
    operations to the OS or libuv.
7.  Once the asynchronous operation completes, its callback or Promise
    continuation executes through the event loop.
8.  Node.js writes the response to the socket.
9.  The client receives the response.

**Important:** Node.js does not create a new JavaScript thread for every
incoming HTTP request. JavaScript callbacks normally execute on the
event-loop thread, while I/O operations can be handled asynchronously.

## 5. Important HTTP Lifecycle Concepts

Concept Purpose

---

`req` Contains incoming request information
`res` Sends response to the client
Middleware Processes requests before route handlers
Router Matches HTTP method and URL
Controller Handles request and response logic
Service Contains business logic
Database Stores and retrieves data
`next()` Passes control to the next middleware
`res.send()` Sends a response
`res.json()` Sends a JSON response
`res.end()` Ends the response

## 6. Common Interview Questions

### 1. What happens when a client sends a request to a Node.js server?

Node.js receives the request, parses it, executes the registered request
handler, performs required operations, and sends an HTTP response.

### 2. What is the difference between `req` and `res`?

- `req` represents the incoming request.
- `res` represents the outgoing response.

### 3. What happens if we don't send a response?

The client may keep waiting because the HTTP response has not been
completed. Eventually, a timeout may occur.

### 4. Can Node.js handle multiple HTTP requests simultaneously?

Yes. Node.js handles multiple connections using its asynchronous,
event-driven architecture. It does not need a separate JavaScript thread
for each request.

### 5. What is the difference between middleware and a controller?

- Middleware performs common operations such as authentication,
  logging, and validation.
- Controller handles the specific API request and prepares the
  response.

### 6. What is the role of the Event Loop in HTTP request processing?

The event loop coordinates the execution of JavaScript callbacks and
asynchronous operations, allowing Node.js to handle many concurrent
connections efficiently.

## 7. Quick Revision

### HTTP Request → Response Lifecycle

1.  **Client sends request** --- Browser / React / Postman.
2.  **Node.js receives request** --- HTTP server parses request.
3.  **Middleware executes** --- Authentication, logging, validation.
4.  **Router matches endpoint** --- Method and URL.
5.  **Controller executes** --- Handles request.
6.  **Service and database execute** --- Business logic and data
    retrieval.
7.  **Response is sent** --- Status code, headers and body.
8.  **Client receives response** --- Frontend displays the data.

# HTTP Methods in Node.js: GET, POST, PUT, PATCH, and DELETE

## Definition

HTTP methods define what action a client wants to perform on a resource
available on the server.

For example, imagine you are developing a User Management API. You need
different operations to create, retrieve, update, and delete users.

HTTP provides different methods for these operations.

HTTP Method Purpose CRUD Operation

---

GET Retrieve data Read
POST Create new data Create
PUT Replace existing data Update
PATCH Partially update existing data Update
DELETE Delete existing data Delete

## 1. GET Method

**Definition:** GET is used to retrieve or fetch data from the server.

- It is mainly used to read data.
- It does not normally modify server data.
- Parameters can be passed through URL query parameters.
- GET requests should be safe and idempotent.

### Example

```http
GET /api/users
```

This requests all users from the server.

**Node.js (Express.js):**

```javascript
app.get("/api/users", (req, res) => {
  const users = [
    { id: 1, name: "Kamesh" },
    { id: 2, name: "Arun" },
  ];

  res.status(200).json({
    success: true,
    data: users,
  });
});
```

**Response:**

```json
{
  "success": true,
  "data": [
    { "id": 1, "name": "Kamesh" },
    { "id": 2, "name": "Arun" }
  ]
}
```

### GET with URL Parameters

```http
GET /api/users/1
```

```javascript
app.get("/api/users/:id", (req, res) => {
  const userId = req.params.id;

  res.json({
    message: "User fetched successfully",
    userId,
  });
});
```

**Important:**

- `req.params` → Access URL parameters.
- `req.query` → Access query string parameters.
- `req.body` → GET requests generally do not use a request body.

### Example query parameters

```http
GET /api/users?page=1&limit=10
```

```javascript
app.get("/api/users", (req, res) => {
  const { page, limit } = req.query;

  res.json({ page, limit });
});
```

## 2. POST Method

**Definition:** POST is used to submit data to the server, commonly to
create a new resource.

- Data is generally sent through the request body.
- Commonly used for user registration, login, creating products, etc.
- Repeating the same POST request may create multiple resources.

### Example

```http
POST /api/users
```

**Request Body:**

```json
{
  "name": "Kamesh",
  "email": "kamesh@gmail.com"
}
```

**Node.js (Express.js):**

```javascript
app.use(express.json());

app.post("/api/users", (req, res) => {
  const { name, email } = req.body;

  const newUser = {
    id: 1,
    name,
    email,
  };

  res.status(201).json({
    message: "User created successfully",
    data: newUser,
  });
});
```

**Response:**

```json
{
  "message": "User created successfully",
  "data": {
    "id": 1,
    "name": "Kamesh",
    "email": "kamesh@gmail.com"
  }
}
```

**Important:**

- `req.body` contains the submitted data.
- `201 Created` is commonly used when a new resource is successfully
  created.

## 3. PUT Method

**Definition:** PUT is used to completely replace an existing resource
with the new data provided by the client.

Suppose the existing user is:

```json
{
  "id": 1,
  "name": "Kamesh",
  "email": "old@gmail.com",
  "age": 25
}
```

Now the client sends:

```http
PUT /api/users/1
```

**Request Body:**

```json
{
  "name": "Kamesh Kumar",
  "email": "new@gmail.com"
}
```

After a complete replacement, the resource could become:

```json
{
  "id": 1,
  "name": "Kamesh Kumar",
  "email": "new@gmail.com"
}
```

Notice that the previous `age` field is no longer present.

### Node.js (Express.js)

```javascript
app.put("/api/users/:id", (req, res) => {
  const userId = req.params.id;

  const updatedUser = {
    id: userId,
    name: req.body.name,
    email: req.body.email,
  };

  res.status(200).json({
    message: "User replaced successfully",
    data: updatedUser,
  });
});
```

**Important:**

- PUT generally replaces the complete resource representation.
- PUT is idempotent.
- If a field is missing from the replacement representation, it may be
  removed from the resource.

## 4. PATCH Method

**Definition:** PATCH is used to partially update an existing resource.

Unlike PUT, PATCH updates only the fields provided by the client.

Suppose the existing user is:

```json
{
  "id": 1,
  "name": "Kamesh",
  "email": "old@gmail.com",
  "age": 25
}
```

The client wants to update only the email.

**Request:**

```http
PATCH /api/users/1
```

**Request Body:**

```json
{
  "email": "new@gmail.com"
}
```

**Updated Resource:**

```json
{
  "id": 1,
  "name": "Kamesh",
  "email": "new@gmail.com",
  "age": 25
}
```

Only the email has changed. Other fields remain unchanged.

### Node.js (Express.js)

```javascript
app.patch("/api/users/:id", (req, res) => {
  const userId = req.params.id;
  const updatedFields = req.body;

  res.status(200).json({
    message: "User partially updated",
    userId,
    updatedFields,
  });
});
```

**Important:**

- PATCH updates selected fields.
- It does not require sending the entire resource.
- PATCH is not necessarily idempotent; it depends on how the patch
  operation is designed.

## 5. DELETE Method

**Definition:** DELETE is used to remove an existing resource from the
server.

### Example

```http
DELETE /api/users/1
```

This requests the deletion of the user whose ID is 1.

### Node.js (Express.js)

```javascript
app.delete("/api/users/:id", (req, res) => {
  const userId = req.params.id;

  res.status(200).json({
    message: "User deleted successfully",
    userId,
  });
});
```

**Response:**

```json
{
  "message": "User deleted successfully",
  "userId": "1"
}
```

**Important:**

- `req.params.id` identifies the resource to delete.
- `204 No Content` can also be returned when deletion succeeds and no
  response body is needed.
- DELETE is idempotent in HTTP semantics.

## 6. PUT vs PATCH -- Important Interview Question

Both PUT and PATCH are used to update resources, but their behaviour is
different.

Consider this existing user:

```json
{
  "id": 1,
  "name": "Kamesh",
  "email": "kamesh@gmail.com",
  "age": 25
}
```

### PUT Request

```json
{
  "name": "Kamesh Kumar",
  "email": "new@gmail.com"
}
```

**Result:**

```json
{
  "id": 1,
  "name": "Kamesh Kumar",
  "email": "new@gmail.com"
}
```

The resource is replaced, so the old `age` field is removed.

### PATCH Request

```json
{
  "email": "new@gmail.com"
}
```

**Result:**

```json
{
  "id": 1,
  "name": "Kamesh",
  "email": "new@gmail.com",
  "age": 25
}
```

Only the email is updated.

PUT PATCH

---

Replaces the resource Partially updates the resource
Usually sends complete data Sends only changed fields
Missing fields may be removed Unchanged fields are preserved
Idempotent Not necessarily idempotent

## 7. What Is Idempotency in HTTP?

**Definition:** An HTTP method is idempotent if making the same request
multiple times produces the same intended server state as making it
once.

### Example

Imagine you send this request three times:

```http
PUT /api/users/1
```

With the same request body:

```json
{
  "name": "Kamesh"
}
```

The resource will have the same final state after each request.

### HTTP Method Idempotency

---

HTTP Method Idempotent? Explanation

---

GET Yes Repeated requests
retrieve data without
changing state

POST No, generally Repeated requests may
create multiple
resources

PUT Yes Replaces the resource
with the same
representation

PATCH Not necessarily Depends on the patch
operation

DELETE Yes Repeated deletion
leaves the resource
deleted

---

**Interview point:** Idempotency does not mean that every repeated
request returns the same response. It means the intended server state
remains the same.

## 8. Important HTTP Status Codes

Status Code Meaning Common Usage

---

200 OK Successful GET, PUT, PATCH, DELETE
201 Created Successful POST
204 No Content Successful DELETE without response body
400 Bad Request Invalid request data
401 Unauthorized Authentication required or failed
403 Forbidden Insufficient permission
404 Not Found Resource does not exist
409 Conflict Resource state conflict
500 Internal Server Error Server-side error

# HTTP Status Codes

## 1. What Are HTTP Status Codes?

**HTTP status codes** are three-digit numbers returned by a server in an
HTTP response. They tell the client whether a request succeeded, needs
further action, or failed.

Example:

```http
HTTP/1.1 200 OK
Content-Type: application/json
```

Here, `200` is the status code and `OK` is its reason phrase.

## 2. HTTP Status Code Categories

Category Range Meaning

---

1xx 100--199 Informational
2xx 200--299 Success
3xx 300--399 Redirection
4xx 400--499 Client error
5xx 500--599 Server error

- **1xx -- Informational:** The request has been received and
  processing is continuing.
- **2xx -- Success:** The request was successfully received and
  processed.
- **3xx -- Redirection:** The client needs to take additional action,
  usually follow a redirect.
- **4xx -- Client Error:** The request is invalid or the client is not
  allowed to access the resource.
- **5xx -- Server Error:** The server failed to fulfil an apparently
  valid request.

## 3. Common 2xx Success Status Codes

### 200 OK

**Meaning:** The request was successful.

Common use cases: - Fetching user details. - Successfully updating a
resource. - Returning data from an API.

```javascript
app.get("/api/users", (req, res) => {
  res.status(200).json({
    message: "Users fetched successfully",
    data: [],
  });
});
```

### 201 Created

**Meaning:** The request succeeded and created a new resource.

Common use cases: creating a user, product, or order.

```javascript
app.post("/api/users", (req, res) => {
  res.status(201).json({
    message: "User created successfully",
  });
});
```

### 202 Accepted

**Meaning:** The request has been accepted for processing, but
processing has not yet completed.

Common use cases: - Starting a background job. - Scheduling a report. -
Queuing an email.

```javascript
res.status(202).json({
  message: "Your report has been queued for processing",
});
```

### 204 No Content

**Meaning:** The request succeeded, but there is no response body to
send.

Common use cases: - Successfully deleting a resource. - Successfully
updating a resource when no response body is needed.

```javascript
app.delete("/api/users/:id", async (req, res) => {
  // Delete the user from the database.
  res.status(204).end();
});
```

**Important:** A `204` response must not contain a response body.

## 4. Common 3xx Redirection Status Codes

### 301 Moved Permanently

**Meaning:** The requested resource has permanently moved to a new URL.

Use cases: - Moving a website to a new domain. - Permanently changing a
page URL.

### 302 Found

**Meaning:** The resource is temporarily available at another URL.

Use cases: - Temporary website redirects. - Redirecting users during a
temporary change.

### 304 Not Modified

**Meaning:** The client's cached copy of the resource is still valid, so
the server does not need to send it again.

Use cases: - Browser caching. - Conditional GET requests using
`If-None-Match` or `If-Modified-Since`.

**Important:** `304` is not a normal redirect to another URL. It tells
the client it can reuse its cached response.

## 5. Common 4xx Client Error Status Codes

### 400 Bad Request

**Meaning:** The server cannot process the request because it is invalid
or malformed.

Use cases: - Invalid JSON. - Missing required fields. - Invalid input
format.

```javascript
res.status(400).json({
  message: "Invalid request data",
});
```

### 401 Unauthorized

**Meaning:** The request lacks valid authentication credentials.

Use cases: - Missing access token. - Invalid or expired token. - Invalid
login credentials.

```javascript
res.status(401).json({
  message: "Authentication required",
});
```

**Remember:** `401` is about authentication --- verifying who the user
is.

### 403 Forbidden

**Meaning:** The server understood the request but refuses to authorise
it.

Use cases: - An authenticated user tries to access an admin-only API. -
A user does not have the required role or permission.

```javascript
res.status(403).json({
  message: "You do not have permission to access this resource",
});
```

**Remember:** `403` is about authorisation --- checking what the user is
allowed to do.

### 404 Not Found

**Meaning:** The requested resource or endpoint could not be found.

Use cases: - User ID does not exist. - API endpoint does not exist. -
Requested product does not exist.

```javascript
res.status(404).json({
  message: "User not found",
});
```

### 405 Method Not Allowed

**Meaning:** The HTTP method is not supported for the requested
resource.

Example: an endpoint supports `GET`, but the client sends `DELETE`.

The server should include an `Allow` header indicating supported methods
when applicable.

### 409 Conflict

**Meaning:** The request conflicts with the current state of the
resource.

Use cases: - Registering an email address that already exists. -
Updating data in a way that conflicts with the current resource state.

```javascript
res.status(409).json({
  message: "Email already exists",
});
```

### 422 Unprocessable Content

**Meaning:** The request syntax and content type are understood, but the
server cannot process the instructions or data.

Use cases: - A field fails business validation. - An email field
contains an invalid value. - A password does not satisfy application
rules.

```javascript
res.status(422).json({
  message: "Password must contain at least 8 characters",
});
```

**Difference between 400 and 422:** - `400` is commonly used when the
request is malformed or invalid. - `422` is commonly used when the
request is syntactically valid but fails validation or cannot be
processed.

### 429 Too Many Requests

**Meaning:** The client has sent too many requests within a given
period.

Use cases: - API rate limiting. - Too many login attempts. - Excessive
requests from one client.

```javascript
res.status(429).json({
  message: "Too many requests. Please try again later.",
});
```

A server may include a `Retry-After` header to indicate when the client
can retry.

## 6. Common 5xx Server Error Status Codes

### 500 Internal Server Error

**Meaning:** The server encountered an unexpected condition and could
not complete the request.

Use cases: - Unhandled application errors. - Unexpected exceptions. -
Uncaught database or application failures.

```javascript
res.status(500).json({
  message: "Internal Server Error",
});
```

### 501 Not Implemented

**Meaning:** The server does not support the functionality required to
fulfil the request.

Example: the server does not implement a particular HTTP method or
feature.

### 502 Bad Gateway

**Meaning:** A server acting as a gateway or proxy received an invalid
response from an upstream server.

Use cases: - A reverse proxy receives an invalid response from a Node.js
service. - An API gateway cannot get a valid response from a downstream
service.

### 503 Service Unavailable

**Meaning:** The server is temporarily unable to handle the request.

Use cases: - Server maintenance. - Temporary overload. - A service is
temporarily unavailable.

A `Retry-After` header may tell the client when to try again.

### 504 Gateway Timeout

**Meaning:** A server acting as a gateway or proxy did not receive a
timely response from an upstream server.

Use cases: - An API gateway waits too long for a backend service. - A
reverse proxy times out while waiting for a Node.js API.

## 7. 401 vs 403 -- Important Interview Question

---

401 Unauthorized 403 Forbidden

---

Authentication is missing or The server refuses access
invalid

Identifies an authentication Identifies an authorisation problem
problem

Example: Invalid or missing token Example: Valid token, but user
lacks admin permission

---

**Easy way to remember:** - `401` → Who are you? Please authenticate. -
`403` → I know who you are, but you cannot access this resource.

## 8. 400 vs 401 vs 403 vs 404

Status Code Meaning Example

---

400 Bad Request Invalid request body
401 Unauthorized Missing or invalid token
403 Forbidden Insufficient permissions
404 Not Found User ID does not exist

## 9. Complete Express.js Example

This example demonstrates common status codes in a simple user API.

```javascript
const express = require("express");

const app = express();

app.use(express.json());

const users = [{ id: 1, name: "Kamesh", email: "kamesh@gmail.com" }];

// GET: Fetch all users
app.get("/api/users", (req, res) => {
  res.status(200).json({
    message: "Users fetched successfully",
    data: users,
  });
});

// GET: Fetch one user
app.get("/api/users/:id", (req, res) => {
  const user = users.find((item) => item.id === Number(req.params.id));

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  res.status(200).json({ data: user });
});

// POST: Create a user
app.post("/api/users", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      message: "Name and email are required",
    });
  }

  const existingUser = users.find((user) => user.email === email);

  if (existingUser) {
    return res.status(409).json({
      message: "Email already exists",
    });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
  };

  users.push(newUser);

  res.status(201).json({
    message: "User created successfully",
    data: newUser,
  });
});

// DELETE: Delete a user
app.delete("/api/users/:id", (req, res) => {
  const index = users.findIndex((user) => user.id === Number(req.params.id));

  if (index === -1) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  users.splice(index, 1);

  res.status(204).end();
});

// Handle unknown routes
app.use((req, res) => {
  res.status(404).json({
    message: "API endpoint not found",
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

**Note:** This is a learning example using an in-memory array. Data
resets when the server restarts. A real application should use a
database and proper validation, authentication, and error handling.

## 10. Quick Revision Table

Status Code Short Meaning Category

---

200 OK Success
201 Created Success
202 Accepted Success
204 No Content Success
301 Moved Permanently Redirection
302 Found Redirection
304 Not Modified Redirection
400 Bad Request Client Error
401 Unauthorized Client Error
403 Forbidden Client Error
404 Not Found Client Error
405 Method Not Allowed Client Error
409 Conflict Client Error
422 Unprocessable Content Client Error
429 Too Many Requests Client Error
500 Internal Server Error Server Error
501 Not Implemented Server Error
502 Bad Gateway Server Error
503 Service Unavailable Server Error
504 Gateway Timeout Server Error

## 11. Common Interview Questions

### 1. What are HTTP status codes?

HTTP status codes are three-digit numbers returned by a server to
indicate the result of an HTTP request.

### 2. What is the difference between 200 and 201?

- `200 OK` indicates that the request was successful.
- `201 Created` indicates that the request successfully created a
  resource.

### 3. What is the difference between 401 and 403?

- `401` means valid authentication credentials are missing or invalid.
- `403` means the server refuses access, commonly because the
  authenticated user lacks permission.

### 4. When do we use 404?

When the requested resource or endpoint cannot be found.

### 5. What is the difference between 400 and 422?

- `400` commonly indicates a malformed or invalid request.
- `422` indicates that the request is understood but its content
  cannot be processed.

### 6. When do we use 500?

When an unexpected server-side error prevents the request from being
completed.

### 7. What is the difference between 502, 503, and 504?

- `502` --- A gateway receives an invalid response from an upstream
  server.
- `503` --- The service is temporarily unavailable.
- `504` --- A gateway does not receive an upstream response in time.

### 8. What is the difference between 204 and 200?

- `200` indicates success and may include a response body.
- `204` indicates success with no response body.

## 12. Important Points to Remember

- **2xx** means the request was successful.
- **3xx** means redirection or cache-related handling is required.
- **4xx** means there is a client-side request or access problem.
- **5xx** means the server failed to fulfil the request.
- `401` is related to authentication.
- `403` is related to access being forbidden.
- `404` means the requested resource was not found.
- `409` means the request conflicts with the current resource state.
- `429` means the client has exceeded a rate limit.
- `500` means an unexpected server error occurred.
- `502`, `503`, and `504` are especially useful to understand when
  working with API gateways and microservices.

These status codes help frontend applications, backend services, API
clients, and monitoring tools understand what happened during an HTTP
request.
