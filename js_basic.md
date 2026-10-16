# JavaScript Reference Guide

# Introduction to JavaScript

JavaScript is a **high-level programming language** used to create interactive and dynamic web applications. It runs in web browsers and on servers using **Node.js**.

JavaScript is the primary language supported natively by web browsers for frontend development.

## What is JavaScript?

JavaScript is a scripting language used to create dynamic and interactive web applications. It can manipulate HTML and CSS, handle user events, communicate with servers, and update webpage content without reloading. JavaScript follows the **ECMAScript** standard.

## History of JavaScript

- **1995:** Brendan Eich created JavaScript at Netscape.
- Initially named **Mocha**, it was later renamed **LiveScript**.
- **1995:** It was renamed **JavaScript** to leverage Java's popularity, despite having no direct relationship with Java.
- **1996:** JavaScript gained official support in Netscape Navigator 2.0.

# JavaScript Versions

JavaScript was created by **Brendan Eich** in 1995 and became an ECMA standard in 1997, officially named **ECMAScript (ES)**.

Key versions:

- **ES1 (1997):** First edition.
- **ES3 (1999):** Introduced regular expressions and exception handling improvements.
- **ES5 (2009):** Added strict mode and array methods like `map()` and `filter()`.
- **ES6 / ES2015:** Introduced `let`, `const`, arrow functions, classes, promises, and modules.
- **ES2016 onwards:** Annual updates with new language features.

## How to Run JavaScript

JavaScript can be executed in several ways:

- **Browser Console:** Open DevTools and use the Console.
- **HTML:** Add JavaScript using the `<script>` tag.
- **Node.js:** Run JavaScript outside the browser.
- **Online Editors:** Use CodePen or JSFiddle.
- **VS Code:** Write JavaScript files and run them using Node.js or a browser.

# All About Variables

Variables are named containers used to store data in JavaScript. They are declared using **`var`**, **`let`**, or **`const`**, each with different scoping and reassignment rules.

- **`var`** – Function-scoped; can be redeclared and reassigned.
- **`let`** – Block-scoped; can be reassigned but not redeclared in the same scope.
- **`const`** – Block-scoped; cannot be reassigned or redeclared in the same scope.

# Variable Declarations

JavaScript provides three keywords to declare variables: **`var`**, **`let`**, and **`const`**. They differ in **scope, hoisting, and reassignment** behavior.

# `var` Keyword

The `var` keyword declares a **function-scoped or globally-scoped variable** and optionally initializes it with a value.

# `let` Keyword

The `let` keyword declares a **block-scoped variable** that can be reassigned but cannot be redeclared in the same scope. It is commonly used when a variable's value needs to change.

# `const` Keyword

The `const` keyword declares a **block-scoped variable** that cannot be reassigned or redeclared in the same scope. However, if it holds an object or array, its properties or elements can still be modified.

# Hoisting

Hoisting is JavaScript's behavior of processing declarations before code execution.

## 1. `var`

Variables declared with `var` are hoisted and initialized with `undefined`.

```javascript
console.log(a); // undefined
var a = 10;

console.log(a); // 10
```

## 2. `let` and `const`

Variables declared with `let` and `const` are hoisted but cannot be accessed before their declaration due to the **Temporal Dead Zone (TDZ)**.

```javascript
console.log(a); // ReferenceError
let a = 10;
```

```javascript
console.log(b); // ReferenceError
const b = 20;
```

## 3. Function Declarations

Function declarations are fully hoisted, so they can be called before their definition.

```javascript
greet(); // Hello

function greet() {
  console.log("Hello");
}
```

**Key takeaway:** `var` returns `undefined` before initialization, `let` and `const` throw a `ReferenceError`, and function declarations can be called before they appear in the code.

# Variable Scopes

Scope determines where a variable can be accessed in JavaScript. The three main types are **global, function, and block scope**.

# Variable Scopes

Scope determines where a variable can be accessed in JavaScript. The three main types are **Block, Function, and Global Scope**.

## Block Scope

Variables declared with `let` and `const` are accessible only within the block `{}` where they are defined.

```javascript
{
  let a = 10;
  const b = 20;
  console.log(a, b); // 10 20
}

console.log(a); // ReferenceError
console.log(b); // ReferenceError
```

## Function Scope

Variables declared with `var` inside a function are accessible only within that function.

```javascript
function greet() {
  var message = "Hello";
  console.log(message); // Hello
}

greet();
console.log(message); // ReferenceError
```

## Global Scope

Variables declared outside functions are generally accessible throughout their applicable global scope.

```javascript
var name = "Kumar";

function greet() {
  console.log(name); // Kumar
}

greet();
console.log(name); // Kumar
```

**Note:** In browsers, top-level `var` declarations in classic scripts become properties of the `window` object.

```javascript
var age = 25;

console.log(window.age); // 25
```

# Data Types in JavaScript

Data types define the kind of value a variable can hold. JavaScript data types are divided into **Primitive** and **Non-Primitive** types.

## 1. Primitive Data Types

Primitive types represent single values and are immutable.

| Type          | Example                  |
| ------------- | ------------------------ |
| **Number**    | `let age = 25;`          |
| **BigInt**    | `let num = 123n;`        |
| **String**    | `let name = "Kumar";`    |
| **Boolean**   | `let isActive = true;`   |
| **Undefined** | `let value;`             |
| **Null**      | `let data = null;`       |
| **Symbol**    | `let id = Symbol("id");` |

### Example

```javascript
let age = 25;
let name = "Kumar";
let isActive = true;
let value;
let data = null;
let bigNumber = 12345678901234567890n;
let id = Symbol("id");

console.log(typeof age); // "number"
console.log(typeof name); // "string"
console.log(typeof isActive); // "boolean"
console.log(typeof value); // "undefined"
console.log(typeof data); // "object" (historical quirk)
console.log(typeof bigNumber); // "bigint"
console.log(typeof id); // "symbol"
```

**Note:** `typeof null` returns `"object"` due to a historical JavaScript bug.

## 2. Non-Primitive Data Types

Non-primitive values are objects that can store collections of data or more complex structures. They are mutable, and variables hold references to them.

Common types include:

- **Object** – Stores data as key-value pairs.
- **Array** – Stores an ordered collection of values.
- **Function** – Represents reusable executable code.
- **Date** – Represents dates and times.
- **Map** – Stores key-value pairs with keys of any type.
- **Set** – Stores unique values.

### Object Example

```javascript
const user = {
  name: "Kumar",
  age: 25,
};

console.log(user.name); // Kumar

user.age = 26;
console.log(user.age); // 26
```

### Array Example

```javascript
const numbers = [10, 20, 30];

numbers.push(40);

console.log(numbers); // [10, 20, 30, 40]
```

### Function Example

```javascript
function greet() {
  return "Hello, Kumar!";
}

console.log(greet()); // Hello, Kumar!
console.log(typeof greet); // "function"
```

## 3. Primitive vs Non-Primitive

| Feature    | Primitive               | Non-Primitive                 |
| ---------- | ----------------------- | ----------------------------- |
| Values     | Single value            | Objects or complex structures |
| Mutability | Immutable               | Usually mutable               |
| Assignment | Copies the value        | Copies the object reference   |
| Comparison | Compares values         | Compares object identity      |
| Examples   | String, Number, Boolean | Object, Array, Function       |

### Reference Example

```javascript
// Primitive
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20

// Non-primitive
const user1 = { name: "Kumar" };
const user2 = user1;

user2.name = "Ashok";

console.log(user1.name); // Ashok
console.log(user2.name); // Ashok
```

**Key takeaway:** JavaScript has **7 primitive types**. All other values are objects, including arrays and functions.

# `typeof` Operator

The **`typeof`** operator returns a string indicating the type of a value. It is used to check the data type of a variable or operand.

### Example

```javascript
console.log(typeof 10); // "number"
console.log(typeof "Hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof 10n); // "bigint"
console.log(typeof Symbol("id")); // "symbol"
console.log(typeof {}); // "object"
console.log(typeof []); // "object"
console.log(typeof function () {}); // "function"
console.log(typeof null); // "object"
```

### Important Points

- `typeof` returns a **string** representing the type.
- `typeof` returns `"object"` for arrays and `null`.
- `typeof` returns `"function"` for functions.
- `typeof undeclaredVariable` returns `"undefined"` without throwing an error.
- To check whether a value is an array, use `Array.isArray()`.

### Example: Checking an Array

```javascript
const fruits = ["Apple", "Banana"];

console.log(typeof fruits); // "object"
console.log(Array.isArray(fruits)); // true
```

**Key takeaway:** The `typeof` operator identifies the type of a value, but it has quirks: `typeof null` returns `"object"`, and arrays also return `"object"`. Use `Array.isArray()` to check for arrays.

# Object

A **JavaScript object** is a data structure that stores data in **key-value pairs**. Each key is mapped to a value, and the value can be any JavaScript data type, including strings, numbers, booleans, arrays, functions, or other objects.

For example, a real-world object like a pen has properties such as color, design, and material. Similarly, a JavaScript object can have properties that describe its characteristics.

### Example

```javascript
const pen = {
  color: "blue",
  design: "ballpoint",
  material: "plastic",
  price: 10,
};

console.log(pen.color); // "blue"
console.log(pen.material); // "plastic"
console.log(pen.price); // 10
```

**Key takeaway:** JavaScript objects store related data as **key-value pairs**, where keys represent property names and values represent the data associated with those properties.

# Prototypes

JavaScript is an object-oriented language built around a **prototype-based inheritance model**. In JavaScript, objects can inherit properties and methods from other objects through their prototypes.

A **prototype** is an object from which another object can inherit properties and methods. Prototypes are an important part of JavaScript's object-oriented programming (OOP), as they allow us to reuse code without duplicating properties and methods across multiple objects.

### Example

```javascript
const person = {
  greet() {
    console.log("Hello, welcome!");
  },
};

const user = {
  name: "Kumar",
};

Object.setPrototypeOf(user, person);

console.log(user.name); // Kumar
user.greet(); // Hello, welcome!
```

### Explanation

- `person` is an object that contains the `greet()` method.
- `user` is an object that contains the `name` property.
- `Object.setPrototypeOf(user, person)` sets `person` as the prototype of `user`.
- When `user.greet()` is called, JavaScript looks for the method in `user`. Since it is not found, JavaScript searches its prototype and finds the `greet()` method in `person`.

**Key takeaway:** Prototypes allow JavaScript objects to inherit properties and methods from other objects, enabling code reuse and forming the foundation of prototype-based inheritance.

# Prototypal Inheritance

**Prototypal inheritance** is a feature in JavaScript that allows an object to inherit properties and methods from another object. It helps us reuse existing code without duplicating properties and methods.

We can use `Object.getPrototypeOf()` to get an object's prototype and `Object.setPrototypeOf()` to set an object's prototype.

### Example

```javascript
const person = {
  greet() {
    console.log("Hello!");
  },
};

const employee = {
  name: "Kumar",
  role: "Developer",
};

// Set person as the prototype of employee
Object.setPrototypeOf(employee, person);

console.log(employee.name); // Kumar
console.log(employee.role); // Developer

// Inherited method
employee.greet(); // Hello!

// Get the prototype of employee
console.log(Object.getPrototypeOf(employee) === person); // true
```

### Explanation

- `person` contains the `greet()` method.
- `employee` contains its own properties: `name` and `role`.
- `Object.setPrototypeOf(employee, person)` allows `employee` to inherit from `person`.
- When `employee.greet()` is called, JavaScript searches for the method in `employee`. Since it is not found, JavaScript looks in its prototype and finds `greet()` in `person`.
- `Object.getPrototypeOf(employee)` returns the prototype of `employee`, which is `person`.

**Key takeaway:** Prototypal inheritance allows one object to access the properties and methods of another object through the prototype chain, promoting code reuse in JavaScript.

**Note:** `Object.setPrototypeOf()` is useful for learning and occasional prototype changes, but setting the prototype during object creation is generally preferable for performance.

# Built-in Objects

JavaScript provides a set of **built-in objects** that are available without importing any external libraries. These objects provide standard functionality for common tasks such as mathematical calculations, date manipulation, working with arrays, handling asynchronous operations, and converting data into JSON format.

Some commonly used built-in objects are **`Math`**, **`Date`**, **`JSON`**, **`Array`**, **`RegExp`**, and **`Promise`**.

### Examples

**1. Math Object**

The `Math` object provides methods for performing mathematical operations.

```javascript
console.log(Math.round(4.6)); // 5
console.log(Math.max(10, 20, 30)); // 30
console.log(Math.sqrt(25)); // 5
```

**2. Date Object**

The `Date` object is used to work with dates and times.

```javascript
const today = new Date();

console.log(today); // Current date and time
console.log(today.getFullYear()); // Current year
```

**3. JSON Object**

The `JSON` object is used to convert JavaScript objects into JSON strings and JSON strings back into JavaScript objects.

```javascript
const user = { name: "Kumar", age: 25 };

// Convert object to JSON string
const jsonData = JSON.stringify(user);
console.log(jsonData); // {"name":"Kumar","age":25}

// Convert JSON string to object
const parsedData = JSON.parse(jsonData);
console.log(parsedData.name); // Kumar
```

**4. Array Object**

The `Array` object provides methods for storing and manipulating collections of values.

```javascript
const numbers = [10, 20, 30];

console.log(numbers.length); // 3
console.log(numbers.push(40)); // 4
console.log(numbers.includes(20)); // true

console.log(numbers); // [10, 20, 30, 40]
```

**5. RegExp Object**

The `RegExp` object is used to match patterns in strings, such as checking whether text contains a particular word or format.

```javascript
const pattern = /hello/i;

console.log(pattern.test("Hello World")); // true
console.log(pattern.test("Good Morning")); // false
```

Here, `i` makes the pattern case-insensitive.

**6. Promise Object**

The `Promise` object is used to handle the result of asynchronous operations, such as fetching data from an API.

```javascript
const promise = new Promise((resolve, reject) => {
  resolve("Data fetched successfully");
});

promise.then((result) => {
  console.log(result);
});

// Output: Data fetched successfully
```

### Key takeaway

**Built-in objects** are provided by JavaScript to perform common operations without external libraries. They make it easier to handle calculations, dates, arrays, pattern matching, JSON data, and asynchronous tasks.

# JSON

**JSON (JavaScript Object Notation)** is a standard text-based format used to represent and exchange structured data. It is based on JavaScript object syntax and is commonly used in web applications to transfer data between a server and a client.

For example, when a client requests user details from a server, the server can send the data in JSON format, which the client can use to display information on a web page.

### Example

```javascript
const user = {
  name: "Kumar",
  age: 25,
  role: "Developer",
};

console.log(user.name); // Kumar
console.log(user.age); // 25
```

### Converting JavaScript Objects to JSON

JavaScript provides two important methods to work with JSON:

**1. `JSON.stringify()`**

Converts a JavaScript object into a JSON string.

```javascript
const user = {
  name: "Kumar",
  age: 25,
};

const jsonData = JSON.stringify(user);

console.log(jsonData);
// {"name":"Kumar","age":25}

console.log(typeof jsonData); // string
```

**2. `JSON.parse()`**

Converts a valid JSON string into a JavaScript value, such as an object.

```javascript
const jsonData = '{"name":"Kumar","age":25}';

const user = JSON.parse(jsonData);

console.log(user.name); // Kumar
console.log(user.age); // 25
```

### Important Points

- JSON is a **text-based data format** used for data exchange.
- JSON property names and string values must use **double quotes**.
- JSON supports strings, numbers, booleans, `null`, arrays, and objects.
- JSON does not support functions, `undefined`, or comments.
- `JSON.stringify()` converts JavaScript values into JSON text.
- `JSON.parse()` converts JSON text into JavaScript values.

**Key takeaway:** JSON is commonly used to exchange data between clients and servers. Use `JSON.stringify()` to convert JavaScript data into JSON text and `JSON.parse()` to convert JSON text back into JavaScript data.

# Structured Data

**Structured data** refers to data organized in a predefined, predictable format, making it easy to store, read, and process.

In JavaScript, **JSON (JavaScript Object Notation)** is a commonly used format for structured data exchange. It represents data using key-value pairs and arrays and is widely used for API communication, configuration files, and data storage.

### Example

```javascript
const user = {
  name: "Kumar",
  age: 25,
  skills: ["JavaScript", "React", "Node.js"],
  isDeveloper: true,
};

console.log(user.name); // Kumar
console.log(user.skills[0]); // JavaScript
console.log(user.isDeveloper); // true
```

### Example: Structured Data in an API

When a client requests user details from a server, the server can return structured data in JSON format.

```json
{
  "id": 101,
  "name": "Kumar",
  "role": "Developer",
  "skills": ["JavaScript", "React", "Node.js"]
}
```

JavaScript can parse this JSON data and access its properties.

```javascript
const response = '{"id":101,"name":"Kumar","role":"Developer"}';

const user = JSON.parse(response);

console.log(user.name); // Kumar
console.log(user.role); // Developer
```

### Key takeaway

**Structured data** is organized in a defined format that makes it easy to access and process. JSON is one of the most commonly used formats for exchanging structured data between clients and servers.

# Type Casting

**Type casting** (also called type conversion) is the process of converting a value from one data type to another. In JavaScript, type conversion can happen in two ways: **implicit conversion** and **explicit conversion**.

- **Implicit conversion (Type Coercion):** JavaScript automatically converts a value from one data type to another.
- **Explicit conversion (Type Casting):** The developer manually converts a value into another data type using methods such as `Number()`, `String()`, and `Boolean()`.

### 1. Implicit Type Conversion

Implicit type casting (also called implicit type conversion or type coercion) happens when JavaScript automatically converts a value from one data type to another without the developer explicitly converting it.

```javascript
console.log("5" + 2); // "52"
console.log("5" - 2); // 3
console.log(true + 1); // 2
```

**Explanation:**

- `"5" + 2` converts `2` to a string and concatenates the values.
- `"5" - 2` converts `"5"` to a number and performs subtraction.
- `true + 1` converts `true` to `1` and performs addition.

### 2. Explicit Type Conversion

Explicit type casting (also called explicit type conversion) is the process of manually converting a value from one data type to another by using specific JavaScript methods or functions. It is used to make data compatible with other variables or operations.

**Example 1: Convert to Number**

```javascript
const value = "123";

const result = Number(value);

console.log(result); // 123
console.log(typeof result); // "number"
```

**Example 2: Convert to String**

```javascript
const value = 100;

const result = String(value);

console.log(result); // "100"
console.log(typeof result); // "string"
```

**Example 3: Convert to Boolean**

```javascript
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("Hello")); // true
console.log(Boolean("")); // false
```

### Key takeaway

**Type casting** converts values from one data type to another. JavaScript performs **implicit conversion** automatically, while **explicit conversion** is performed manually using functions such as `Number()`, `String()`, and `Boolean()`.

# Type Conversion/Coercion

**Type conversion** is the process of converting a value from one data type to another. In JavaScript, it can happen in two ways: **implicit conversion (type coercion)** and **explicit conversion**.

**Type coercion** refers specifically to the automatic or implicit conversion of a value from one data type to another. For example, JavaScript may convert a string into a number during a mathematical operation.

### 1. Type Coercion (Implicit Conversion)

JavaScript automatically converts values from one data type to another when required by an operation.

```javascript
console.log("5" + 2); // "52"
console.log("5" - 2); // 3
console.log(true + 1); // 2
```

**Explanation:**

- `"5" + 2` converts `2` to a string and concatenates the values.
- `"5" - 2` converts `"5"` to a number and performs subtraction.
- `true + 1` converts `true` to `1` and performs addition.

### 2. Type Conversion (Explicit Conversion)

Explicit conversion happens when the developer manually converts a value from one data type to another using functions such as `Number()`, `String()`, and `Boolean()`.

```javascript
const value = "100";

const numberValue = Number(value);
const stringValue = String(200);
const booleanValue = Boolean(1);

console.log(numberValue); // 100
console.log(stringValue); // "200"
console.log(booleanValue); // true

console.log(typeof numberValue); // "number"
console.log(typeof stringValue); // "string"
console.log(typeof booleanValue); // "boolean"
```

### Key Differences

| Type Coercion                    | Explicit Type Conversion                          |
| -------------------------------- | ------------------------------------------------- |
| Happens automatically.           | Is performed manually by the developer.           |
| Also called implicit conversion. | Uses functions such as `Number()` and `String()`. |
| Example: `"5" - 2` produces `3`. | Example: `Number("5")` produces `5`.              |

**Key takeaway:** Type coercion is always implicit, whereas type conversion can be either implicit or explicit. Both change a value from one data type to another.

# Equality Comparisons

**Equality comparisons** are used in JavaScript to check whether two values are equal or different. They return a Boolean value (`true` or `false`) and are commonly used in conditional statements to make decisions based on the comparison result.

JavaScript provides four main equality comparison operators: **`==`**, **`===`**, **`!=`**, and **`!==`**.

### 1. Loose Equality (`==`)

The `==` operator compares two values for equality and performs type conversion when necessary.

```javascript
console.log(5 == 5); // true
console.log(5 == "5"); // true
console.log(0 == false); // true
```

**Explanation:** JavaScript converts values to compatible types before comparing them when necessary.

### 2. Strict Equality (`===`)

The `===` operator compares both the value and the data type without performing type coercion.

```javascript
console.log(5 === 5); // true
console.log(5 === "5"); // false
console.log(0 === false); // false
```

**Explanation:** The values must have the same type and value to return `true`.

### 3. Loose Inequality (`!=`)

The `!=` operator checks whether two values are not equal. It can perform type conversion before comparing them.

```javascript
console.log(5 != 10); // true
console.log(5 != "5"); // false
console.log(5 != "10"); // true
```

### 4. Strict Inequality (`!==`)

The `!==` operator checks whether two values are different in value or data type, without performing type coercion.

```javascript
console.log(5 !== 10); // true
console.log(5 !== "5"); // true
console.log(5 !== 5); // false
```

### Comparison Table

| Operator | Meaning               | Type coercion       |
| -------- | --------------------- | ------------------- |
| `==`     | Equal to              | Yes, when necessary |
| `===`    | Strictly equal to     | No                  |
| `!=`     | Not equal to          | Yes, when necessary |
| `!==`    | Strictly not equal to | No                  |

### Example: Using Equality in a Conditional Statement

```javascript
const age = 18;

if (age === 18) {
  console.log("You are 18 years old.");
} else {
  console.log("Your age is different.");
}

// Output: You are 18 years old.
```

**Key takeaway:** Use `===` and `!==` by default because they compare values without implicit type conversion, making comparisons more predictable.

# Object.is()

**`Object.is()`** is a JavaScript method used to compare two values and determine whether they are the same. It behaves similarly to the strict equality operator (`===`), but handles two special cases differently: **`NaN`** and **positive and negative zero**.

### Example 1: Comparing Normal Values

```javascript
console.log(Object.is(10, 10)); // true
console.log(Object.is(10, "10")); // false
console.log(Object.is("hello", "hello")); // true
```

**Explanation:**

- Returns `true` when the values are the same.
- Returns `false` when the values have different types or values.

### Example 2: Comparing `NaN`

```javascript
console.log(NaN === NaN); // false
console.log(Object.is(NaN, NaN)); // true
```

**Explanation:**

- Using `===`, `NaN` is not equal to itself.
- Using `Object.is()`, two `NaN` values are considered the same.

### Example 3: Comparing Positive and Negative Zero

```javascript
console.log(+0 === -0); // true
console.log(Object.is(+0, -0)); // false
```

**Explanation:**

- The strict equality operator (`===`) treats positive and negative zero as equal.
- `Object.is()` distinguishes between positive zero (`+0`) and negative zero (`-0`).

### Comparison Table

| Comparison      | `===`   | `Object.is()` |
| --------------- | ------- | ------------- |
| `5` and `5`     | `true`  | `true`        |
| `5` and `"5"`   | `false` | `false`       |
| `NaN` and `NaN` | `false` | `true`        |
| `+0` and `-0`   | `true`  | `false`       |

### Key takeaway

**`Object.is()`** compares two values similarly to `===`, but treats `NaN` as equal to itself and distinguishes between positive and negative zero. Use it when these special cases matter in your comparison logic.

# isLooselyEqual

**`isLooselyEqual`** refers to the abstract equality comparison algorithm used by JavaScript's **`==`** operator. It defines how values of different data types are converted before comparison.

For example, `null == undefined` returns `true`, but `null == 0` returns `false`.

### Example

```javascript
console.log(5 == "5"); // true
console.log(null == undefined); // true
console.log(null == 0); // false
console.log(false == 0); // true
```

**Key takeaway:** Loose equality (`==`) may perform type conversion before comparing values.

---

# isStrictlyEqual

**`isStrictlyEqual`** refers to the strict equality comparison algorithm used by JavaScript's **`===`** operator. It compares values without type coercion. If the types differ, it returns `false`. For numbers, `NaN` is not equal to itself.

### Example

```javascript
console.log(5 === 5); // true
console.log(5 === "5"); // false
console.log(NaN === NaN); // false
console.log(+0 === -0); // true
```

**Key takeaway:** Strict equality (`===`) compares values without converting between types, but treats `+0` and `-0` as equal and `NaN` as unequal to itself.

---

# SameValueZero

**SameValueZero** is an equality algorithm used by JavaScript methods such as **`Array.prototype.includes()`** and for comparing keys in a **`Map`**. It behaves like `===`, except that it considers `NaN` equal to itself. It also treats `+0` and `-0` as equal.

### Example

```javascript
console.log([NaN].includes(NaN)); // true

const numbers = new Map();
numbers.set(NaN, "Found");

console.log(numbers.get(NaN)); // "Found"

console.log(+0 === -0); // true
```

**Key takeaway:** SameValueZero treats `NaN` as equal to itself while considering positive and negative zero equal.

---

# SameValue

**SameValue** is an equality algorithm used by JavaScript's **`Object.is()`** method. It considers `NaN` equal to itself and distinguishes between positive zero (`+0`) and negative zero (`-0`).

### Example

```javascript
console.log(Object.is(5, 5)); // true
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(+0, -0)); // false
console.log(Object.is(5, "5")); // false
```

**Key takeaway:** SameValue is the comparison algorithm behind `Object.is()`. It treats `NaN` values as equal but distinguishes between `+0` and `-0`.

---

# Comparison Table

| Comparison             | `==`    | `===`   | SameValueZero | SameValue |
| ---------------------- | ------- | ------- | ------------- | --------- |
| `5` and `"5"`          | `true`  | `false` | `false`       | `false`   |
| `NaN` and `NaN`        | `false` | `false` | `true`        | `true`    |
| `+0` and `-0`          | `true`  | `true`  | `true`        | `false`   |
| `null` and `undefined` | `true`  | `false` | `false`       | `false`   |

**Overall key takeaway:** JavaScript uses different equality algorithms for different purposes. Use `===` for most comparisons, `Object.is()` when the differences involving `NaN` or signed zero matter, and understand SameValueZero when working with `includes()` and `Map` keys.

# Loops and Iterations

**Loops and iterations** allow code to execute repeatedly based on a condition or over a collection of values. JavaScript provides several loop constructs for different use cases, including **`while`**, **`do...while`**, **`for`**, **`for...in`**, and **`for...of`**.

Choosing the right loop depends on the type of data being iterated over and the condition that controls the repetition.

# The `for` Loop

The **`for`** loop is a control-flow statement used to execute a block of code repeatedly. It is commonly used when the number of iterations is known in advance or when iterating through a sequence of values.

### Example

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

**Output:**

```text
1
2
3
4
5
```

**Explanation:**

- **Initialization:** `let i = 1` initializes the counter.
- **Condition:** `i <= 5` determines whether the loop continues.
- **Update:** `i++` increments the counter after each iteration.

**Key takeaway:** Use a `for` loop when you want to repeat code a specific number of times or control iterations using a counter.

---

# The `do...while` Statement

The **`do...while`** statement executes a block of code repeatedly until a specified condition becomes `false`. The condition is checked after the block executes, so the code runs at least once.

### Example

```javascript
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);
```

**Output:**

```text
1
2
3
4
5
```

**Explanation:**

- The code inside `do` executes first.
- The condition `i <= 5` is checked after each iteration.
- The loop stops when the condition becomes `false`.

**Key takeaway:** Use `do...while` when the code must execute at least once, regardless of the condition.

---

# The `while` Loop

The **`while`** loop executes a block of code as long as a specified condition is `true`. The condition is checked before each iteration, so the loop may not execute at all if the condition is initially `false`.

### Example

```javascript
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}
```

**Output:**

```text
1
2
3
4
5
```

**Explanation:**

- The condition `i <= 5` is checked before each iteration.
- If the condition is `true`, the loop body executes.
- `i++` increments the counter to avoid an infinite loop.
- The loop stops when `i` becomes `6`.

**Key takeaway:** Use a `while` loop when the number of iterations is not known in advance and depends on a condition.

---

# `break` and `continue`

**`break`** and **`continue`** are control statements used to change the normal execution of a loop.

- **`break`:** Immediately terminates the loop.
- **`continue`:** Skips the remaining code in the current iteration and proceeds to the next iteration.

### Example 1: `break`

```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }

  console.log(i);
}
```

**Output:**

```text
1
2
```

**Explanation:** When `i` becomes `3`, `break` terminates the loop immediately.

### Example 2: `continue`

```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }

  console.log(i);
}
```

**Output:**

```text
1
2
4
5
```

**Explanation:** When `i` becomes `3`, `continue` skips that iteration and continues with the next value.

**Key takeaway:** Use `break` to stop a loop completely and `continue` to skip a particular iteration.

---

# The `for...of` Statement

The **`for...of`** statement iterates over the values of an iterable object, such as an array, string, `Map`, or `Set`. It is useful when you want to access each value directly without managing an index.

### Example

```javascript
const fruits = ["Apple", "Banana", "Mango"];

for (const fruit of fruits) {
  console.log(fruit);
}
```

**Output:**

```text
Apple
Banana
Mango
```

**Explanation:**

- `for...of` retrieves each value from the array.
- The variable `fruit` holds the current value during each iteration.
- The loop continues until all values have been processed.

**Key takeaway:** Use `for...of` when you want to iterate over the values of an iterable, such as an array or string.

---

# The `for...in` Loop

The **`for...in`** loop iterates over the enumerable property keys of an object, including inherited enumerable properties. It is mainly used to access an object's property names.

### Example

```javascript
const person = {
  name: "Kamesh",
  age: 25,
  role: "Developer",
};

for (const key in person) {
  console.log(key, person[key]);
}
```

**Output:**

```text
name Kamesh
age 25
role Developer
```

**Explanation:**

- `for...in` assigns each enumerable property key to `key`.
- `person[key]` accesses the value associated with that key.
- The loop processes the object's enumerable properties.

**Key takeaway:** Use `for...in` mainly for iterating over object keys. Avoid using it as the default choice for arrays because it can include other enumerable properties and does not guarantee the desired iteration order.

---

# Comparison of JavaScript Loops

| Loop         | Main purpose                                            | Condition checked     |
| ------------ | ------------------------------------------------------- | --------------------- |
| `for`        | Repeat code using initialization, condition, and update | Before each iteration |
| `while`      | Repeat while a condition is true                        | Before each iteration |
| `do...while` | Execute at least once, then repeat while true           | After each iteration  |
| `for...of`   | Iterate over iterable values                            | Automatically         |
| `for...in`   | Iterate over enumerable object keys                     | Automatically         |
| `break`      | Exit a loop immediately                                 | Not applicable        |
| `continue`   | Skip the current iteration                              | Not applicable        |

**Overall key takeaway:** Choose the loop based on your requirement: `for` for counter-based iteration, `while` for condition-based repetition, `do...while` for at-least-once execution, `for...of` for iterable values, and `for...in` for object property keys.

# Control Flow

**Control flow** refers to the order in which statements are executed in a program. JavaScript provides conditional statements (`if...else`, `switch`) to control decision-making and exception handling (`try...catch...finally`, `throw`) to manage errors. It also supports loops (`for`, `while`, `do...while`) to execute code repeatedly.

**Key takeaway:** Control flow determines how a program makes decisions, repeats tasks, and handles errors.

# Conditional Statements

**Conditional statements** are used to execute different blocks of code based on whether a condition is `true` or `false`. JavaScript provides three main conditional statements: **`if`**, **`if...else`**, and **`switch`**.

**Key takeaway:** Conditional statements help a program make decisions based on specific conditions.

# if...else

The **`if...else`** statement executes a block of code if a condition is `true`, and the `else` block if it is `false`. Additional conditions can be checked using **`else if`**.

### Example

```javascript
const mark = 75;

if (mark >= 90) {
  console.log("Grade A");
} else if (mark >= 60) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}

// Output: Grade B
```

**Key takeaway:** Use `if...else` to execute different blocks of code based on conditions.

---

# Switch

The **`switch`** statement evaluates an expression and executes the matching `case` block. It is an alternative to multiple `if...else if` statements when comparing one value against several options. Use **`break`** to prevent fall-through to the next case.

### Example

```javascript
const day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}

// Output: Tuesday
```

**Key takeaway:** Use `switch` when comparing one value against multiple possible options. The `default` block executes when no case matches.

# Exception Handling

**Exception handling** is a mechanism used to handle runtime errors in JavaScript without abruptly stopping the program. JavaScript exceptions are values that can be thrown, usually using an `Error` object, but any JavaScript value or object can also be thrown.

**Key takeaway:** Exception handling helps identify, catch, and manage errors using `try...catch...finally` and `throw`.

# Throw Statement

The **`throw`** statement is used to throw a user-defined exception. When `throw` executes, the remaining statements in the current block are skipped, and control passes to the nearest matching `catch` block.

### Example

```javascript
function checkAge(age) {
  if (age < 18) {
    throw new Error("You must be 18 or older");
  }

  console.log("Access granted");
}

try {
  checkAge(16);
} catch (error) {
  console.log(error.message);
}

// Output: You must be 18 or older
```

**Key takeaway:** Use `throw` to generate an error when a specific condition is not satisfied.

---

# try/catch/finally

The **`try`** block contains code that might throw an error. If an error occurs, the **`catch`** block handles it. The **`finally`** block executes whether an error occurs or not, making it useful for cleanup operations.

### Example

```javascript
try {
  let result = 10 / 0;

  if (!Number.isFinite(result)) {
    throw new Error("Invalid calculation");
  }

  console.log(result);
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("Execution completed");
}

// Output:
// Error: Invalid calculation
// Execution completed
```

**Key takeaway:**

- **`try`** – Contains code that may cause an error.
- **`catch`** – Handles the error.
- **`finally`** – Executes whether an error occurs or not.

---

# Error Objects

JavaScript provides built-in error types that extend the **`Error`** class. Common types include `TypeError`, `RangeError`, `SyntaxError`, and `ReferenceError`. Error objects contain properties such as **`message`** and **`stack`**.

### Example

```javascript
try {
  null.toString();
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

// Output:
// TypeError
// Cannot read properties of null (reading 'toString')
```

### Common Error Types

- **`TypeError`** – Occurs when a value is used in an invalid way.
- **`ReferenceError`** – Occurs when accessing an undeclared variable.
- **`SyntaxError`** – Occurs when code contains invalid syntax.
- **`RangeError`** – Occurs when a value is outside the allowed range.
- **`Error`** – A general error object used to create custom errors.

**Key takeaway:** Use specific error types to identify and handle different kinds of errors effectively.

# Expressions & Operators

**Expressions** are combinations of values, variables, and operators that evaluate to a value. **Operators** perform operations on values, such as arithmetic, comparison, logical, and assignment operations.

### Example

```javascript
const a = 10;
const b = 5;

const result = a + b;

console.log(result); // Output: 15
```

**Key takeaway:** Expressions produce values, and operators perform operations on those values.

---

# Conditional Operators

The **conditional (ternary) operator** is the only JavaScript operator that takes three operands. It checks a condition and returns one of two values based on whether the condition is `true` or `false`.

**Syntax:** `condition ? valueIfTrue : valueIfFalse`

### Example

```javascript
const age = 20;

const result = age >= 18 ? "Adult" : "Minor";

console.log(result); // Output: Adult
```

**Key takeaway:** Use the ternary operator as a short alternative to `if...else` for simple conditions.

---

# Comma Operators

The **comma operator (`,`)** evaluates multiple expressions from left to right and returns the value of the last expression.

### Example

```javascript
const result = (10, 20, 30);

console.log(result); // Output: 30
```

**Key takeaway:** The comma operator evaluates all expressions but returns only the last value.

---

# Unary Operators

**Unary operators** perform operations on a single operand. They include unary plus (`+`), unary minus (`-`), increment (`++`), decrement (`--`), and logical NOT (`!`).

### Example

```javascript
let a = 5;

console.log(-a); // Output: -5
console.log(+a); // Output: 5
console.log(++a); // Output: 6
console.log(a--); // Output: 6
console.log(a); // Output: 5
```

**Key takeaway:** Unary operators work with one operand. Prefix operators update the value before returning it, while postfix operators return the original value before updating it.

---

# Assignment Operators

**Assignment operators** assign values to variables. The simple assignment operator (`=`) assigns a value, while compound assignment operators combine an operation with assignment.

### Example

```javascript
let a = 10;

a += 5;
console.log(a); // Output: 15

a -= 3;
console.log(a); // Output: 12

a *= 2;
console.log(a); // Output: 24

a /= 4;
console.log(a); // Output: 6
```

**Key takeaway:** Assignment operators update a variable's value using operators such as `=`, `+=`, `-=`, `*=`, and `/=`.

---

# Comparison Operators

**Comparison operators** compare two values and return a boolean value (`true` or `false`). Common operators include `>`, `<`, `>=`, `<=`, `==`, `===`, `!=`, and `!==`.

### Example

```javascript
const a = 10;
const b = "10";

console.log(a > 5); // Output: true
console.log(a == b); // Output: true
console.log(a === b); // Output: false
console.log(a != b); // Output: false
console.log(a !== b); // Output: true
```

**Key takeaway:** Use `===` and `!==` for strict comparison because they compare values without performing type conversion.

---

# Arithmetic Operators

**Arithmetic operators** perform mathematical operations on numbers. They include addition (`+`), subtraction (`-`), multiplication (`*`), division (`/`), remainder (`%`), and exponentiation (`**`).

### Example

```javascript
const a = 10;
const b = 3;

console.log(a + b); // Output: 13
console.log(a - b); // Output: 7
console.log(a * b); // Output: 30
console.log(a / b); // Output: 3.333...
console.log(a % b); // Output: 1
console.log(a ** b); // Output: 1000

console.log("Hello " + "World"); // Output: Hello World
```

**Key takeaway:** Arithmetic operators perform calculations. The `+` operator also concatenates strings.

---

# Bitwise Operators

**Bitwise operators** perform operations on the binary representations of numbers. JavaScript's standard bitwise operators generally convert `Number` operands to 32-bit integers.

### Example

```javascript
const a = 5; // Binary: 0101
const b = 3; // Binary: 0011

console.log(a & b); // Output: 1
console.log(a | b); // Output: 7
console.log(a ^ b); // Output: 6
console.log(~a); // Output: -6
console.log(a << 1); // Output: 10
console.log(a >> 1); // Output: 2
console.log(a >>> 1); // Output: 2
```

**Key takeaway:** Bitwise operators manipulate individual bits and are useful for bit flags and low-level operations.

---

# Logical Operators

**Logical operators** combine conditions or invert their results. The main operators are AND (`&&`), OR (`||`), and NOT (`!`). The `&&` and `||` operators can return operand values instead of only booleans.

### Example

```javascript
const age = 25;
const hasID = true;

console.log(age >= 18 && hasID); // Output: true
console.log(age < 18 || hasID); // Output: true
console.log(!hasID); // Output: false

console.log("Hello" || "Default"); // Output: Hello
console.log(null || "Default"); // Output: Default
console.log(null && "Hello"); // Output: null
```

**Key takeaway:**

- **`&&`** – Returns the first falsy operand or the last operand if all are truthy.
- **`||`** – Returns the first truthy operand or the last operand if all are falsy.
- **`!`** – Converts a value to a boolean and reverses its truthiness.

---

# BigInt Operators

**BigInt** is a JavaScript data type used to represent integers larger than the safe integer limit of the `Number` type. Most arithmetic and comparison operators work with BigInt values, but you cannot mix `BigInt` and `Number` directly in arithmetic operations.

### Example

```javascript
const a = 10000000000000000n;
const b = 2n;

console.log(a + b); // Output: 10000000000000002n
console.log(a * b); // Output: 20000000000000000n
console.log(a > b); // Output: true

console.log(5n / 2n); // Output: 2n

// console.log(5n + 2); // TypeError
// console.log(5n >>> 1n); // TypeError
```

**Key takeaway:** BigInt supports large integer calculations. Use `n` at the end of an integer literal, and remember that BigInt division truncates the fractional part toward zero.

---

# String Operators

**String operators** are used to combine or compare strings. The `+` operator concatenates strings, and the `+=` operator appends a string to an existing string variable.

### Example

```javascript
let firstName = "JavaScript";
let lastName = " Developer";

console.log(firstName + lastName);
// Output: JavaScript Developer

firstName += " Programming";

console.log(firstName);
// Output: JavaScript Programming

console.log("apple" === "apple");
// Output: true

console.log("apple" < "banana");
// Output: true
```

**Key takeaway:** Use `+` and `+=` to combine strings. String comparison operators compare strings lexicographically based on their character values.
