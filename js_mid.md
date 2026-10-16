# JavaScript Mid Guide

# Functions

**Functions** are reusable blocks of code that perform a specific task when they are called or invoked. JavaScript supports **normal functions** and **arrow functions**.

### Example

**Normal Function**

```javascript
function add(a, b) {
  return a + b;
}

console.log(add(10, 20)); // Output: 30
```

**Arrow Function**

```javascript
const add = (a, b) => {
  return a + b;
};

console.log(add(10, 20)); // Output: 30
```

**Key takeaway:** Both function types help reuse code. Arrow functions provide a shorter syntax.

---

# Function Parameters

**Function parameters** are variables declared in a function definition that receive values when the function is called. JavaScript supports default parameters and rest parameters.

### Example

**Normal Function**

```javascript
function greet(name) {
  console.log(`Hello, ${name}`);
}

greet("Kamesh"); // Output: Hello, Kamesh
```

**Arrow Function**

```javascript
const greet = (name) => {
  console.log(`Hello, ${name}`);
};

greet("Kamesh"); // Output: Hello, Kamesh
```

**Key takeaway:** Parameters allow functions to accept input values and use them to perform operations.

---

# Default Parameters

**Default parameters** allow function parameters to have default values when no argument or `undefined` is passed.

### Example

**Normal Function**

```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}

greet("Kamesh"); // Output: Hello, Kamesh
greet(); // Output: Hello, Guest
greet(undefined); // Output: Hello, Guest
greet(null); // Output: Hello, null
```

**Arrow Function**

```javascript
const greet = (name = "Guest") => {
  console.log(`Hello, ${name}`);
};

greet("Kamesh"); // Output: Hello, Kamesh
greet(); // Output: Hello, Guest
greet(undefined); // Output: Hello, Guest
greet(null); // Output: Hello, null
```

**Key takeaway:** Default parameters provide fallback values when an argument is missing or `undefined`, but not when `null` is passed.

---

# Rest Parameters

**Rest parameters** allow a function to accept an indefinite number of arguments as an array. They are defined using three dots (`...`) before the parameter name and must be the last parameter.

### Example

**Normal Function**

```javascript
function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

console.log(sum(10, 20)); // Output: 30
console.log(sum(10, 20, 30)); // Output: 60
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
```

**Arrow Function**

```javascript
const sum = (...numbers) => {
  return numbers.reduce((total, number) => total + number, 0);
};

console.log(sum(10, 20)); // Output: 30
console.log(sum(10, 20, 30)); // Output: 60
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
```

**Key takeaway:** Both function types support rest parameters to collect multiple arguments into an array.

---

# Arrow Functions

**Arrow functions** are a concise way to write function expressions introduced in ES6. They use the `=>` syntax instead of the `function` keyword. They do not have their own `this`, `arguments`, or `super` bindings and cannot be used as constructors.

### Example

**Normal Function**

```javascript
function greet() {
  console.log("Hello World");
}

greet(); // Output: Hello World
```

**Arrow Function**

```javascript
const greet = () => {
  console.log("Hello World");
};

greet(); // Output: Hello World
```

**Key takeaway:** Arrow functions provide shorter syntax, especially for callbacks and simple operations.

---

## 1. Basic Function

A basic function executes a block of code when called.

**Normal Function**

```javascript
function greet() {
  console.log("Hello World");
}

greet(); // Output: Hello World
```

**Arrow Function**

```javascript
const greet = () => {
  console.log("Hello World");
};

greet(); // Output: Hello World
```

---

## 2. Function with Parameters

Parameters allow functions to receive values from the caller.

**Normal Function**

```javascript
function add(a, b) {
  return a + b;
}

console.log(add(10, 20)); // Output: 30
```

**Arrow Function**

```javascript
const add = (a, b) => {
  return a + b;
};

console.log(add(10, 20)); // Output: 30
```

**Key takeaway:** Both types accept parameters and return values.

---

## 3. Function with Implicit Return

An arrow function can return an expression automatically when curly braces are omitted. A normal function requires an explicit `return`.

**Normal Function**

```javascript
function multiply(a, b) {
  return a * b;
}

console.log(multiply(5, 4)); // Output: 20
```

**Arrow Function**

```javascript
const multiply = (a, b) => a * b;

console.log(multiply(5, 4)); // Output: 20
```

**Key takeaway:** Arrow functions support implicit returns for single expressions.

---

## 4. Function with a Single Parameter

Arrow functions can omit parentheses when there is exactly one parameter. Normal functions can also use parentheses around a single parameter, which is the standard syntax.

**Normal Function**

```javascript
function square(number) {
  return number * number;
}

console.log(square(5)); // Output: 25
```

**Arrow Function**

```javascript
const square = (number) => number * number;

console.log(square(5)); // Output: 25
```

**Key takeaway:** Arrow functions allow parentheses to be omitted for a single parameter.

---

## 5. Functions with Default Parameters

Default parameters provide fallback values when an argument is missing or `undefined`.

**Normal Function**

```javascript
function greet(name = "Guest") {
  return `Hello, ${name}`;
}

console.log(greet("Kamesh")); // Output: Hello, Kamesh
console.log(greet()); // Output: Hello, Guest
```

**Arrow Function**

```javascript
const greet = (name = "Guest") => `Hello, ${name}`;

console.log(greet("Kamesh")); // Output: Hello, Kamesh
console.log(greet()); // Output: Hello, Guest
```

**Key takeaway:** Both types support default parameters.

---

## 6. Functions with Rest Parameters

Rest parameters collect multiple arguments into an array.

**Normal Function**

```javascript
function display(...args) {
  console.log(args);
}

display(10, 20, 30);

// Output: [10, 20, 30]
```

**Arrow Function**

```javascript
const display = (...args) => {
  console.log(args);
};

display(10, 20, 30);

// Output: [10, 20, 30]
```

**Key takeaway:** Both function types support rest parameters. Arrow functions do not have their own `arguments` object.

---

## 7. Functions as Callbacks

A callback is a function passed to another function as an argument.

**Normal Function**

```javascript
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(function (number) {
  return number * 2;
});

console.log(doubled);

// Output: [2, 4, 6, 8, 10]
```

**Arrow Function**

```javascript
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((number) => number * 2);

console.log(doubled);

// Output: [2, 4, 6, 8, 10]
```

**Key takeaway:** Arrow functions make callback code shorter and easier to read.

---

## 8. Functions and `this`

Normal functions have their own `this` depending on how they are called. Arrow functions inherit `this` from their surrounding lexical scope.

**Normal Function**

```javascript
const user = {
  name: "Kamesh",

  greet() {
    console.log(this.name);
  },
};

user.greet();

// Output: Kamesh
```

**Arrow Function**

```javascript
const user = {
  name: "Kamesh",

  greet() {
    const showName = () => {
      console.log(this.name);
    };

    showName();
  },
};

user.greet();

// Output: Kamesh
```

**Key takeaway:** Use normal methods when you need method-specific `this`. Arrow functions are useful for callbacks that need to inherit the surrounding `this`.

---

## 9. Functions and `arguments`

Normal functions have an `arguments` object containing the arguments passed to them. Arrow functions do not have their own `arguments` object, so rest parameters are preferred.

**Normal Function**

```javascript
function display() {
  console.log(arguments);
}

display(10, 20, 30);

// Output: Arguments(3) [10, 20, 30]
```

**Arrow Function**

```javascript
const display = (...args) => {
  console.log(args);
};

display(10, 20, 30);

// Output: [10, 20, 30]
```

**Key takeaway:** Use `arguments` in regular functions when needed, and use rest parameters (`...args`) in arrow functions.

---

## 10. Functions as Constructors

Normal functions can be used as constructors with the `new` keyword. Arrow functions cannot be used as constructors.

**Normal Function**

```javascript
function Person(name) {
  this.name = name;
}

const person = new Person("Kamesh");

console.log(person.name);

// Output: Kamesh
```

**Arrow Function**

```javascript
const Person = (name) => {
  this.name = name;
};

// const person = new Person("Kamesh");
// TypeError: Person is not a constructor
```

**Key takeaway:** Use regular functions or classes when creating objects with `new`.

---

## 11. Functions as Object Methods

Regular methods can access the object through `this`. Arrow functions do not create their own `this`, so they are generally unsuitable for methods that need to access the object this way.

**Normal Function**

```javascript
const user = {
  name: "Kamesh",

  greet: function () {
    console.log(this.name);
  },
};

user.greet();

// Output: Kamesh
```

**Arrow Function**

```javascript
const user = {
  name: "Kamesh",

  greet: () => {
    console.log(this.name);
  },
};

user.greet();

// Output depends on the surrounding `this`.
// It is not the `user` object.
```

**Key takeaway:** Use regular method syntax when you need `this` to refer to the object.

---

## Summary: Normal Functions vs Arrow Functions

| Feature                | Normal Function                       | Arrow Function                                     |
| ---------------------- | ------------------------------------- | -------------------------------------------------- |
| Syntax                 | Uses `function`                       | Uses `=>`                                          |
| Parameters             | Supported                             | Supported                                          |
| Default parameters     | Supported                             | Supported                                          |
| Rest parameters        | Supported                             | Supported                                          |
| Implicit return        | No                                    | Yes                                                |
| Own `this`             | Yes, based on how it is called        | No; inherits lexical `this`                        |
| Own `arguments`        | Yes, for non-arrow functions          | No                                                 |
| Constructor with `new` | Supported for constructible functions | Not supported                                      |
| Object methods         | Suitable                              | Not suitable when method-specific `this` is needed |
| Callbacks              | Supported                             | Commonly used                                      |

**Key takeaway:** Use **normal functions** when you need a constructor, your own `this`, or the `arguments` object. Use **arrow functions** for concise expressions, callbacks, and cases where inheriting `this` is useful.

# IIFEs

**IIFE (Immediately Invoked Function Expression)** is a function that is defined and executed immediately after it is created. IIFEs are used to create a private scope and prevent variables from polluting the global namespace.

## 1. IIFE Using a Normal Function

### Example

```javascript
(function () {
  const message = "Hello World";
  console.log(message);
})();

// Output: Hello World
```

**Key takeaway:** The function executes immediately without needing to be called separately.

## 2. IIFE Using an Arrow Function

### Example

```javascript
(() => {
  const message = "Hello from Arrow Function";
  console.log(message);
})();

// Output: Hello from Arrow Function
```

**Key takeaway:** Arrow functions can also be used to create IIFEs with concise syntax.

## 3. IIFE with Parameters

An IIFE can accept arguments when it is invoked.

### Example

```javascript
(function (name) {
  console.log(`Hello, ${name}`);
})("Kamesh");

// Output: Hello, Kamesh
```

**Arrow Function Example**

```javascript
((name) => {
  console.log(`Hello, ${name}`);
})("Kamesh");

// Output: Hello, Kamesh
```

## 4. IIFE for Private Scope

Variables declared inside an IIFE cannot be accessed directly from outside its function scope.

### Example

```javascript
(function () {
  const secret = "Private data";
  console.log(secret);
})();

// Output: Private data

// console.log(secret);
// ReferenceError: secret is not defined
```

**Key takeaway:** IIFEs help create a private scope and avoid unnecessary global variables.

# Arguments Object

The **`arguments`** object is an array-like object available inside regular functions. It contains all the arguments passed to the function, with indexing starting from `0`. Arrow functions do not have their own `arguments` object. In modern JavaScript, **rest parameters (`...args`)** are generally preferred.

## 1. Arguments Object Example

```javascript
function sum() {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments.length);
}

sum(10, 20, 30);

// Output:
// 10
// 20
// 3
```

**Key takeaway:** The `arguments` object provides access to the values passed to a regular function without explicitly defining parameters.

## 2. Arguments Object with Multiple Values

```javascript
function add() {
  let total = 0;

  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  return total;
}

console.log(add(10, 20)); // Output: 30
console.log(add(10, 20, 30)); // Output: 60
```

**Key takeaway:** The `arguments` object can be used to process a variable number of arguments, but it is not a real array.

## 3. Arguments Object vs Rest Parameters

Rest parameters collect arguments into a real array and work with both regular and arrow functions.

### Normal Function

```javascript
function sum(...args) {
  return args.reduce((total, number) => total + number, 0);
}

console.log(sum(10, 20, 30));

// Output: 60
```

### Arrow Function

```javascript
const sum = (...args) => {
  return args.reduce((total, number) => total + number, 0);
};

console.log(sum(10, 20, 30));

// Output: 60
```

**Key takeaway:** Prefer **rest parameters (`...args`)** over the `arguments` object because rest parameters provide a real array with built-in methods such as `reduce()`, `map()`, and `filter()`.

# Scope & Function Stack

The **function stack (call stack)** is a mechanism that tracks the execution of function calls. When a function is called, a new **stack frame** is pushed onto the stack. When the function returns, its frame is popped off the stack.

**Scope** determines where variables can be accessed in the code.

**Closures** allow a function to access variables from its outer scope, even after the outer function has finished executing.

### Example

```javascript
function first() {
  let a = 10;
  second();
}

function second() {
  let b = 20;
  console.log(b);
}

first();

// Output:
// 20
```

### How the Call Stack Works

1. `first()` is called and pushed onto the stack.
2. `second()` is called and pushed on top of `first()`.
3. `second()` executes and prints `20`.
4. `second()` is popped from the stack.
5. `first()` finishes and is popped from the stack.

### Closure Example

```javascript
function outer() {
  let message = "Hello";

  function inner() {
    console.log(message);
  }

  return inner;
}

const greet = outer();
greet();

// Output:
// Hello
```

**Key takeaway:** The **call stack** manages function execution, **scope** controls variable accessibility, and **closures** preserve access to variables from outer scopes.

# Recursion

**Recursion** is a programming technique in which a function calls itself to solve a problem. A recursive function continues calling itself until a terminating condition, called the **base case**, is met.

- **Recursive case:** The part where the function calls itself.
- **Base case:** The condition that stops the recursion and prevents infinite calls.

### Example

```javascript
function factorial(n) {
  if (n === 1) {
    return 1; // Base case
  }

  return n * factorial(n - 1); // Recursive case
}

console.log(factorial(5));

// Output: 120
```

### How It Works

- `factorial(5)` → `5 * factorial(4)`
- `factorial(4)` → `4 * factorial(3)`
- `factorial(3)` → `3 * factorial(2)`
- `factorial(2)` → `2 * factorial(1)`
- `factorial(1)` → `1` (base case)

**Result:** `5 × 4 × 3 × 2 × 1 = 120`

**Key takeaway:** Recursion allows a function to solve a problem by calling itself. Always define a **base case** to stop recursion and avoid a stack overflow.

# Lexical Scoping

**Lexical scoping** means that a function can access variables based on where it is defined in the source code, not where it is called.

A **lexical environment** contains the variables and references available within a scope, along with a reference to its outer environment.

### Example

```javascript
let message = "Hello";

function outer() {
  let name = "JavaScript";

  function inner() {
    console.log(message);
    console.log(name);
  }

  inner();
}

outer();

// Output:
// Hello
// JavaScript
```

### How It Works

- `message` is accessible because it is declared in the global scope.
- `name` is accessible inside `inner()` because `inner()` is defined inside `outer()`.
- JavaScript uses the function's **lexical environment** to find variables in its own scope and outer scopes.

**Key takeaway:** Lexical scoping determines variable accessibility based on **where a function is defined** in the code. It is the foundation of closures in JavaScript.

Closures
Function closures are one of the most powerful, yet most misunderstood, concepts of JavaScript that are actually really simple to understand. A closure refers to a function along with its lexical environment. It is essentially what allows us to return a function A, from another function B, that remembers the local variables defined in B, even after B exits. The idea of closures is employed in nearly every other JavaScript program, hence, it's paramount for a JavaScript developer to know it really well.

# Built-in Functions

**Built-in functions** are predefined functions provided by JavaScript to perform common tasks without writing the logic from scratch. They are available globally or through built-in objects like `Math`, `Array`, `String`, and `Date`.

### Examples

**1. `parseInt()`** – Converts a string into an integer.

```javascript
console.log(parseInt("123.45"));

// Output: 123
```

**2. `setTimeout()`** – Executes a function after a specified delay.

```javascript
setTimeout(() => {
  console.log("Hello JavaScript");
}, 1000);

// Output after 1 second:
// Hello JavaScript
```

**3. `Math.random()`** – Generates a random number between `0` (inclusive) and `1` (exclusive).

```javascript
console.log(Math.random());

// Example output: 0.5678
```

**4. `Array` methods** – Perform operations on arrays.

```javascript
const numbers = [1, 2, 3];

console.log(numbers.map((num) => num * 2));

// Output: [2, 4, 6]
```

**5. `String` methods** – Manipulate strings.

```javascript
console.log("hello".toUpperCase());

// Output: HELLO
```

**6. `Date` methods** – Work with dates and times.

```javascript
const date = new Date();

console.log(date.getFullYear());

// Output: Current year
```

**Key takeaway:** Built-in functions and methods help perform common tasks easily, improve code readability, and reduce the need to write logic from scratch.

# Closures

A **closure** is a function bundled with its lexical environment. It allows a function to access variables from its outer scope, even after the outer function has finished executing.

Closures are commonly used for **data privacy, state management, and function factories** in JavaScript.

### Example

```javascript
function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();

counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3
```

### How It Works

- `outer()` creates the local variable `count`.
- `outer()` returns the `inner()` function.
- Even after `outer()` finishes executing, `inner()` remembers and accesses `count`.
- Each call to `counter()` updates the same `count` variable.

### Common Uses of Closures

- **Data privacy:** Keep variables accessible only through specific functions.
- **State management:** Preserve values between function calls.
- **Function factories:** Create functions with different behaviours based on their initial values.

**Key takeaway:** A **closure** allows a function to remember and access variables from its outer lexical scope, even after the outer function has finished executing.

# Strict Mode

**Strict mode** is an opt-in feature in JavaScript that enforces stricter rules for parsing and error handling. It helps developers identify common mistakes and write safer code.

It can be enabled by adding **`"use strict"`** at the beginning of a JavaScript file or function.

### Example

```javascript
"use strict";

function example() {
  x = 10; // Error: x is not declared
}

example();
```

### Key Rules of Strict Mode

**1. Prevents undeclared variables**

```javascript
"use strict";

x = 10; // ReferenceError
```

**2. Disallows duplicate parameter names**

```javascript
"use strict";

function add(a, a) {
  return a + a;
}

// SyntaxError
```

**3. Makes `this` undefined in regular functions called without a context**

```javascript
"use strict";

function show() {
  console.log(this);
}

show();

// Output: undefined
```

**4. Prevents assigning values to read-only properties**

```javascript
"use strict";

const obj = Object.freeze({ name: "John" });

obj.name = "David"; // TypeError
```

### Key takeaway

**Strict mode** helps catch common coding mistakes by enforcing stricter JavaScript rules. JavaScript modules and class bodies automatically run in strict mode, so adding `"use strict"` is generally unnecessary in modern module-based code.

# Using the `this` Keyword

The **`this`** keyword refers to the context in which a function is executed. Its value depends on **how a function is called**, not where it is defined. Arrow functions are an exception because they inherit `this` from their surrounding scope.

### Examples

**1. `this` inside an object method**

```javascript
const user = {
  name: "Kamesh",
  greet() {
    console.log(this.name);
  },
};

user.greet();

// Output: Kamesh
```

Here, `this` refers to the `user` object.

**2. `this` inside a regular function**

```javascript
"use strict";

function show() {
  console.log(this);
}

show();

// Output: undefined
```

In strict mode, `this` is `undefined` when a regular function is called without a context.

**3. `this` inside an arrow function**

```javascript
const user = {
  name: "Kamesh",
  greet() {
    const show = () => {
      console.log(this.name);
    };

    show();
  },
};

user.greet();

// Output: Kamesh
```

The arrow function inherits `this` from the `greet()` method.

### Key takeaway

The value of **`this`** depends on how a regular function is called. **Arrow functions do not have their own `this`**; they inherit it from the surrounding lexical scope.

# Function Borrowing

**Function borrowing** is a technique in JavaScript that allows one object to use a method defined in another object without copying that method.

It is commonly achieved using **`call()`**, **`apply()`**, and **`bind()`**, which allow us to explicitly set the value of `this` for a regular function.

### Example

```javascript
const user1 = {
  name: "Kamesh",

  greet() {
    console.log(`Hello, ${this.name}`);
  },
};

const user2 = {
  name: "John",
};

user1.greet.call(user2);

// Output:
// Hello, John
```

**How it works:**

- `greet()` is defined inside `user1`.
- `call(user2)` invokes the same method with `this` referring to `user2`.
- We reuse the method without copying it into `user2`.

**Key takeaway:** Function borrowing promotes code reuse by allowing different objects to use the same method with different `this` values.

---

# Explicit Binding

**Explicit binding** means explicitly setting the value of `this` when calling or preparing a function for execution.

JavaScript provides three methods for this purpose:

- **`call()`** – Invokes the function immediately with arguments passed individually.
- **`apply()`** – Invokes the function immediately with arguments passed as an array or array-like object.
- **`bind()`** – Returns a new function with a fixed `this` value that can be called later.

### Example

```javascript
function introduce(city, country) {
  console.log(`${this.name} is from ${city}, ${country}`);
}

const user = {
  name: "Kamesh",
};

introduce.call(user, "Chennai", "India");
introduce.apply(user, ["Chennai", "India"]);

const boundFunction = introduce.bind(user, "Chennai", "India");

boundFunction();

// Output for all three:
// Kamesh is from Chennai, India
```

**Key takeaway:** `call()`, `apply()`, and `bind()` allow you to control the `this` value instead of relying on the default calling context.

---

# 1. `call()`

The **`call()`** method invokes a function immediately with a specified `this` value. Additional arguments are passed **individually**, separated by commas.

### Syntax

```javascript
functionName.call(thisArg, arg1, arg2, ...);
```

- **`thisArg`** – The value to use as `this`.
- **`arg1, arg2, ...`** – Arguments passed individually to the function.

### Example

```javascript
const person = {
  name: "Kamesh",
};

function greet(city, country) {
  console.log(`Hello, I am ${this.name} from ${city}, ${country}`);
}

greet.call(person, "Chennai", "India");

// Output:
// Hello, I am Kamesh from Chennai, India
```

### How It Works

1. `greet()` is defined as a regular function.
2. `call(person, ...)` sets `this` to `person`.
3. `"Chennai"` and `"India"` are passed as separate arguments.
4. The function executes immediately.

**When to use:** Use `call()` when you want to invoke a function immediately and pass arguments individually.

**Key takeaway:** `call()` = **set `this` + pass arguments individually + execute immediately.**

---

# 2. `apply()`

The **`apply()`** method invokes a function immediately with a specified `this` value. Unlike `call()`, it accepts the function's arguments as an **array or array-like object**.

### Syntax

```javascript
functionName.apply(thisArg, [arg1, arg2, ...]);
```

- **`thisArg`** – The value to use as `this`.
- **Arguments array** – Contains the arguments passed to the function.

### Example

```javascript
const person = {
  name: "Kamesh",
};

function greet(city, country) {
  console.log(`Hello, I am ${this.name} from ${city}, ${country}`);
}

greet.apply(person, ["Chennai", "India"]);

// Output:
// Hello, I am Kamesh from Chennai, India
```

### How It Works

1. `apply()` sets `this` to the `person` object.
2. The arguments are provided as an array.
3. The function executes immediately.

### Using `apply()` with Arrays

```javascript
const numbers = [10, 25, 5, 40];

const largest = Math.max.apply(null, numbers);

console.log(largest);

// Output: 40
```

**Explanation:** `apply()` passes the array elements as individual arguments to `Math.max()`.

In modern JavaScript, the spread operator is usually simpler:

```javascript
console.log(Math.max(...numbers));

// Output: 40
```

**Key takeaway:** `apply()` = **set `this` + pass arguments as an array + execute immediately.**

---

# 3. `bind()`

The **`bind()`** method creates and returns a new function with a specified `this` value. It can also preset some arguments.

Unlike `call()` and `apply()`, **`bind()` does not execute the function immediately**.

### Syntax

```javascript
const newFunction = functionName.bind(
  thisArg,
  arg1,
  arg2,
  ...
);
```

- **`thisArg`** – The value to use as `this` when the bound function is called.
- **Preset arguments** – Optional arguments supplied in advance.
- **Returned function** – A new function that can be executed later.

### Example

```javascript
const person = {
  name: "Kamesh",
};

function greet(city, country) {
  console.log(`Hello, I am ${this.name} from ${city}, ${country}`);
}

const boundGreet = greet.bind(person, "Chennai");

boundGreet("India");

// Output:
// Hello, I am Kamesh from Chennai, India
```

### How It Works

1. `bind()` creates a new function called `boundGreet`.
2. The `this` value is set to `person`.
3. `"Chennai"` is preset as the first argument.
4. When `boundGreet("India")` is called, `"India"` becomes the second argument.
5. The function executes with the expected context and arguments.

### Practical Example: Preserving `this`

```javascript
const user = {
  name: "Kamesh",

  greet() {
    console.log(`Hello, ${this.name}`);
  },
};

const greetUser = user.greet.bind(user);

greetUser();

// Output:
// Hello, Kamesh
```

**Explanation:** If you store `user.greet` in a separate variable without binding it, the original `user` context is not automatically preserved. Using `bind(user)` ensures that `this` refers to `user` when the function is called.

**Key takeaway:** `bind()` = **set `this` + optionally preset arguments + return a new function for later execution.**

---

# Difference Between `call()`, `apply()`, and `bind()`

| Feature              | `call()`             | `apply()`                  | `bind()`                    |
| -------------------- | -------------------- | -------------------------- | --------------------------- |
| Purpose              | Invokes a function   | Invokes a function         | Creates a new function      |
| Sets `this`          | Yes                  | Yes                        | Yes                         |
| Argument format      | Individual arguments | Array or array-like object | Individual preset arguments |
| Executes immediately | Yes                  | Yes                        | No                          |
| Returns              | Function's result    | Function's result          | A new function              |

### Quick Comparison Example

```javascript
function add(a, b) {
  return a + b;
}

console.log(add.call(null, 10, 20));
// Output: 30

console.log(add.apply(null, [10, 20]));
// Output: 30

const addBound = add.bind(null, 10);

console.log(addBound(20));
// Output: 30
```

Here, `null` is used because `add()` does not use `this`.

**Important:** For regular functions in non-strict mode, a `null` or `undefined` `thisArg` is replaced with the global object. In strict mode, it remains `null` or `undefined`. Arrow functions ignore the `thisArg` supplied to these methods because they inherit `this` lexically.

---

# Key Takeaway

- **Function borrowing:** Reuse a method from another object.
- **Explicit binding:** Specify the `this` value explicitly.
- **`call()`:** Execute immediately with individual arguments.
- **`apply()`:** Execute immediately with an array of arguments.
- **`bind()`:** Create a new function to execute later with a fixed `this` value.

**Interview tip:** Remember **call = comma-separated, apply = array, bind = later**.

# Asynchronous JavaScript

**Asynchronous JavaScript** allows code to start long-running operations, such as network requests and timers, while continuing to execute other code without waiting for those operations to finish.

JavaScript is **single-threaded**, meaning it executes JavaScript code on one main thread at a time. Asynchronous programming helps prevent the main thread from being blocked while waiting for operations to complete.

### Main Mechanisms

- **Callbacks:** Functions passed to other functions to be executed when an operation completes.
- **Promises:** Objects that represent the eventual success or failure of an asynchronous operation.
- **Async/Await:** Syntax that makes Promise-based asynchronous code easier to read and write.

**Key takeaway:** Asynchronous JavaScript allows applications to remain responsive while waiting for operations to complete. The main mechanisms are **callbacks, Promises, and async/await**.

# Event Loop

The **Event Loop** is a mechanism in JavaScript that allows asynchronous operations to be handled without blocking the main thread. It explains how JavaScript and Node.js can execute other code while waiting for operations such as file reading, timers, and network requests to complete.

In Node.js, the event loop works with the **call stack, callback queues, Promises, and the underlying runtime APIs** to manage asynchronous execution.

### How the Event Loop Works

1. **Call Stack:** Executes synchronous JavaScript code.
2. **Runtime APIs:** Handle or coordinate asynchronous operations, such as timers and I/O.
3. **Queues:** Hold callbacks until they can execute.
4. **Event Loop:** Coordinates when queued callbacks can run after the call stack is available.

### Example

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timer callback");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise callback");
});

console.log("End");

// Output:
// Start
// End
// Promise callback
// Timer callback
```

### How It Works

- `console.log("Start")` executes immediately.
- `setTimeout()` schedules a timer callback.
- `Promise.resolve().then()` schedules a Promise reaction (microtask).
- `console.log("End")` executes before the asynchronous callbacks.
- The Promise callback runs before the timer callback in this example.

### Why Is the Event Loop Important in Node.js?

- **Non-blocking I/O:** Node.js can handle other work while waiting for I/O operations.
- **Better scalability:** It can manage many concurrent connections without creating a separate JavaScript thread for every request.
- **Responsive applications:** Slow I/O operations do not have to stop all other JavaScript execution.
- **Efficient resource usage:** Node.js can use its runtime and operating system facilities to manage asynchronous work.

**Key takeaway:** The **Event Loop** coordinates asynchronous execution in JavaScript. It helps Node.js handle many concurrent I/O operations efficiently, provided that long-running synchronous code does not block the event loop.

# `setTimeout()`

**`setTimeout()`** is a JavaScript function that schedules a callback function to execute after a specified delay in milliseconds. It is asynchronous, so the remaining code continues executing while the timer is waiting.

It returns a **timer ID**, which can be used with `clearTimeout()` to cancel the scheduled execution.

### Example

```javascript
const timerId = setTimeout(() => {
  console.log("Hello JavaScript");
}, 2000);

console.log("Timer started");

// Output:
// Timer started
// Hello JavaScript (after approximately 2 seconds)
```

### Cancelling a Timer

```javascript
const timerId = setTimeout(() => {
  console.log("This will not execute");
}, 2000);

clearTimeout(timerId);
```

**Key takeaway:** `setTimeout()` executes a callback once after a specified delay, while `clearTimeout()` cancels the scheduled callback if it has not already executed.

---

# `setInterval()`

**`setInterval()`** is a JavaScript function that repeatedly executes a callback function at a specified interval in milliseconds. It continues scheduling executions until `clearInterval()` is called with the returned timer ID.

It is commonly used for **polling and periodic tasks**. For visual updates and animations, `requestAnimationFrame()` is generally preferred.

### Example

```javascript
let count = 0;

const intervalId = setInterval(() => {
  count++;
  console.log(count);

  if (count === 3) {
    clearInterval(intervalId);
  }
}, 1000);

// Output:
// 1
// 2
// 3
```

### Cancelling an Interval

```javascript
const intervalId = setInterval(() => {
  console.log("Executing repeatedly");
}, 1000);

clearInterval(intervalId);
```

**Key takeaway:** `setInterval()` repeatedly schedules a callback at a specified interval, while `clearInterval()` stops further scheduled executions.

---

# Difference Between `setTimeout()` and `setInterval()`

| Feature      | `setTimeout()`          | `setInterval()`         |
| ------------ | ----------------------- | ----------------------- |
| Execution    | Runs once               | Repeats                 |
| Timing       | After a specified delay | At a specified interval |
| Cancellation | `clearTimeout()`        | `clearInterval()`       |
| Common use   | Delayed actions         | Repeated tasks          |

**Important:** Timer delays are not guaranteed exact execution times. The callback runs when the delay has elapsed and JavaScript can execute it.

**Overall key takeaway:** Use **`setTimeout()`** for one-time delayed execution and **`setInterval()`** for repeated execution.

# Callbacks

A **callback function** is a function passed as an argument to another function and executed inside that function to complete a task or perform an action.

Callbacks can be **synchronous or asynchronous**, depending on when they are executed.

### Example

```javascript
function greet(name, callback) {
  console.log(`Hello, ${name}`);
  callback();
}

function sayWelcome() {
  console.log("Welcome!");
}

greet("Kamesh", sayWelcome);

// Output:
// Hello, Kamesh
// Welcome!
```

### How It Works

- `sayWelcome` is passed as an argument to `greet()`.
- `greet()` executes its main task.
- The callback function is invoked to perform the next action.

**Key takeaway:** Callbacks allow one function to execute another function when needed. They are commonly used for event handling and asynchronous operations.

---

# Callback Hell

**Callback Hell** occurs when multiple asynchronous operations depend on one another and callbacks are nested deeply inside each other. This creates a pyramid-shaped code structure that is difficult to read, debug, and maintain.

### Example

```javascript
getUser(function (user) {
  getOrders(user.id, function (orders) {
    getPayment(orders[0].id, function (payment) {
      sendReceipt(payment, function (result) {
        console.log("Receipt sent");
      });
    });
  });
});
```

### Problems with Callback Hell

- **Poor readability:** Deep nesting makes the code difficult to understand.
- **Difficult debugging:** Tracking errors across multiple callbacks becomes harder.
- **Hard to maintain:** Adding or modifying operations can increase nesting.
- **Error handling complexity:** Each asynchronous operation may need separate error handling.

### How to Avoid Callback Hell

- **Promises:** Chain asynchronous operations using `.then()` and handle errors using `.catch()`.
- **Async/Await:** Write Promise-based asynchronous code in a clearer, sequential style.
- **Small functions:** Separate operations into reusable functions to reduce nesting.

**Key takeaway:** Callback Hell results from deeply nested callbacks. **Promises and async/await** help make asynchronous code easier to read, maintain, and debug.

# Promises

A **Promise** is a JavaScript object that represents the eventual success or failure of an asynchronous operation. Promises were introduced in **ECMAScript 2015 (ES6)** to make asynchronous code easier to manage and help avoid callback hell.

A Promise has three states:

- **Pending:** The operation has not completed yet.
- **Fulfilled:** The operation completed successfully.
- **Rejected:** The operation failed.

### Basic Example

```javascript
const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Operation successful");
  } else {
    reject("Operation failed");
  }
});

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => console.log("Operation completed"));

// Output:
// Operation successful
// Operation completed
```

- `resolve()` fulfills the Promise.
- `reject()` rejects the Promise.
- `.then()` handles successful fulfillment.
- `.catch()` handles rejection.
- `.finally()` executes after settlement, regardless of the outcome.

---

# Promise Methods

JavaScript provides instance methods and static methods for working with Promises.

## 1. `.then()`

The **`.then()`** method registers a callback to execute when a Promise is fulfilled. It can also accept a second callback to handle rejection.

### Example

```javascript
const promise = Promise.resolve("Data received");

promise.then((result) => {
  console.log(result);
});

// Output:
// Data received
```

**Using both success and failure callbacks:**

```javascript
const promise = new Promise((resolve, reject) => {
  reject("Something went wrong");
});

promise.then(
  (result) => console.log(result),
  (error) => console.log(error),
);

// Output:
// Something went wrong
```

**Key point:** `.then()` handles fulfillment and optionally rejection. It returns a new Promise, allowing chaining.

---

## 2. `.catch()`

The **`.catch()`** method handles a rejected Promise or an error thrown by an earlier `.then()` callback.

### Example

```javascript
Promise.reject("Network error").catch((error) => {
  console.log(error);
});

// Output:
// Network error
```

**Handling errors in a chain:**

```javascript
Promise.resolve()
  .then(() => {
    throw new Error("Something failed");
  })
  .catch((error) => {
    console.log(error.message);
  });

// Output:
// Something failed
```

**Key point:** `.catch()` provides a central way to handle errors in a Promise chain.

---

## 3. `.finally()`

The **`.finally()`** method executes a callback after a Promise settles, whether it is fulfilled or rejected. It does not receive the fulfillment value or rejection reason as arguments.

### Example

```javascript
Promise.resolve("Success")
  .then((result) => console.log(result))
  .finally(() => console.log("Cleanup completed"));

// Output:
// Success
// Cleanup completed
```

**With rejection:**

```javascript
Promise.reject("Failed")
  .catch((error) => console.log(error))
  .finally(() => console.log("Cleanup completed"));

// Output:
// Failed
// Cleanup completed
```

**Key point:** `.finally()` is useful for cleanup tasks, such as hiding a loading indicator or releasing resources.

---

# Static Promise Methods

Static methods are called directly on the **`Promise`** constructor, such as `Promise.all()`.

## 4. `Promise.resolve()`

**`Promise.resolve()`** returns a Promise fulfilled with the given value. If the value is already a Promise or another thenable, its eventual state is adopted.

### Example

```javascript
Promise.resolve("Hello JavaScript").then((result) => console.log(result));

// Output:
// Hello JavaScript
```

**Key point:** Use `Promise.resolve()` to create a fulfilled Promise from a value or to adopt an existing Promise's state.

---

## 5. `Promise.reject()`

**`Promise.reject()`** returns a Promise that is immediately rejected with the specified reason.

### Example

```javascript
Promise.reject(new Error("Something went wrong")).catch((error) =>
  console.log(error.message),
);

// Output:
// Something went wrong
```

**Key point:** Use `Promise.reject()` when you need to create a rejected Promise.

---

## 6. `Promise.all()`

**`Promise.all()`** takes an iterable of Promises and fulfills when all of them fulfill. It rejects as soon as one of them rejects.

The results are returned in the **same order as the input Promises**, not the order in which they finish.

### Example

```javascript
const promise1 = Promise.resolve("User");
const promise2 = Promise.resolve("Orders");
const promise3 = Promise.resolve("Payments");

Promise.all([promise1, promise2, promise3])
  .then((results) => console.log(results))
  .catch((error) => console.log(error));

// Output:
// ["User", "Orders", "Payments"]
```

**Example with rejection:**

```javascript
Promise.all([
  Promise.resolve("Success"),
  Promise.reject("Request failed"),
  Promise.resolve("Completed"),
])
  .then((results) => console.log(results))
  .catch((error) => console.log(error));

// Output:
// Request failed
```

**Key point:** Use `Promise.all()` when every operation must succeed. A rejection does not automatically cancel the other operations.

---

## 7. `Promise.allSettled()`

**`Promise.allSettled()`** waits for every Promise to settle, whether fulfilled or rejected. It returns an array containing each Promise's status and result or rejection reason.

### Example

```javascript
const promise1 = Promise.resolve("Success");
const promise2 = Promise.reject("Failed");

Promise.allSettled([promise1, promise2]).then((results) =>
  console.log(results),
);

// Output:
// [
//   { status: "fulfilled", value: "Success" },
//   { status: "rejected", reason: "Failed" }
// ]
```

**Key point:** Use `Promise.allSettled()` when you need the outcome of every operation, even if some fail.

---

## 8. `Promise.race()`

**`Promise.race()`** settles with the outcome of the first input Promise that settles, whether it fulfills or rejects.

### Example

```javascript
const promise1 = new Promise((resolve) => {
  setTimeout(() => resolve("First"), 1000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => resolve("Second"), 500);
});

Promise.race([promise1, promise2]).then((result) => console.log(result));

// Output:
// Second
```

**Key point:** Use `Promise.race()` when the first completed outcome determines the result. It does not cancel the other operations.

---

## 9. `Promise.any()`

**`Promise.any()`** fulfills with the first successfully fulfilled Promise. It ignores rejections unless every input Promise rejects, in which case it rejects with an `AggregateError`.

### Example

```javascript
const promise1 = Promise.reject("Failed");
const promise2 = Promise.resolve("Success");
const promise3 = Promise.resolve("Completed");

Promise.any([promise1, promise2, promise3])
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// Output:
// Success
```

**When all Promises reject:**

```javascript
Promise.any([Promise.reject("Error 1"), Promise.reject("Error 2")]).catch(
  (error) => {
    console.log(error instanceof AggregateError);
  },
);

// Output:
// true
```

**Key point:** Use `Promise.any()` when you need the first successful result from multiple operations.

---

## 10. `Promise.withResolvers()`

**`Promise.withResolvers()`** returns an object containing a Promise and its associated `resolve` and `reject` functions. It is useful when you need to settle a Promise from outside its executor.

### Example

```javascript
const { promise, resolve, reject } = Promise.withResolvers();

resolve("Operation successful");

promise.then((result) => console.log(result));

// Output:
// Operation successful
```

**Key point:** `Promise.withResolvers()` is available in modern JavaScript environments and is useful when the resolve or reject functions need to be accessed separately.

---

# Comparison of Promise Methods

| Method                    | Purpose                                                   |
| ------------------------- | --------------------------------------------------------- |
| `.then()`                 | Handles fulfillment and optionally rejection              |
| `.catch()`                | Handles rejection and errors                              |
| `.finally()`              | Runs after settlement                                     |
| `Promise.resolve()`       | Creates or adopts a fulfilled Promise                     |
| `Promise.reject()`        | Creates a rejected Promise                                |
| `Promise.all()`           | Fulfills when all fulfill; rejects on the first rejection |
| `Promise.allSettled()`    | Waits for every Promise to settle                         |
| `Promise.race()`          | Returns the outcome of the first settled Promise          |
| `Promise.any()`           | Returns the first fulfilled result                        |
| `Promise.withResolvers()` | Returns a Promise with external resolve/reject functions  |

# Key Takeaway

- **`.then()`, `.catch()`, and `.finally()`** are Promise instance methods.
- **`Promise.all()`, `Promise.allSettled()`, `Promise.race()`, and `Promise.any()`** coordinate multiple Promises.
- **`Promise.resolve()` and `Promise.reject()`** create Promises with a specified outcome.
- Promises help write asynchronous code that is easier to maintain and handle errors in.
- **`async/await`** provides a cleaner syntax for working with Promises.

# Async/Await

**`async/await`** is JavaScript syntax that makes working with Promises easier and more readable. It allows asynchronous code to look similar to synchronous code.

- **`async`** – Declares an asynchronous function that always returns a Promise.
- **`await`** – Pauses the execution of the surrounding async function until a Promise settles. If fulfilled, it evaluates to the fulfillment value; if rejected, it throws the rejection reason.

### Example

```javascript
async function getData() {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received");
    }, 1000);
  });

  const result = await promise;
  console.log(result);
}

getData();

// Output after approximately 1 second:
// Data received
```

### Error Handling with `try...catch`

Use `try...catch` to handle errors when an awaited Promise is rejected.

```javascript
async function getData() {
  try {
    const result = await Promise.reject("Request failed");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

getData();

// Output:
// Request failed
```

### Key Points

- **`async` functions always return a Promise.**
- **`await` works inside async functions** and can also be used at the top level of JavaScript modules.
- `await` pauses only the surrounding async function, not the entire JavaScript thread.
- **`try...catch`** helps handle errors from rejected Promises.

**Key takeaway:** `async/await` makes asynchronous JavaScript easier to read and maintain while using Promises behind the scenes.
