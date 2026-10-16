# JavaScript Mid Guide

# Functions

**Functions** are reusable blocks of code that perform a specific task when they are called or invoked. They help reduce code duplication and make programs easier to maintain.

**Key takeaway:** Functions allow you to write code once and reuse it whenever needed by calling the function.

# Function Parameters

**Function parameters** are variables declared in a function definition that receive values when the function is called. JavaScript supports different types of parameters, including **default parameters** and **rest parameters**.

### Example

```javascript
function greet(name) {
  console.log(`Hello, ${name}`);
}

greet("Kamesh"); // Output: Hello, Kamesh
```

**Key takeaway:** Parameters allow functions to accept input values and use them to perform operations.

---

# Default Parameters

**Default parameters** allow function parameters to have default values when no argument or `undefined` is passed.

### Example

```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}

greet("Kamesh"); // Output: Hello, Kamesh
greet(); // Output: Hello, Guest
greet(undefined); // Output: Hello, Guest
greet(null); // Output: Hello, null
```

**Key takeaway:** Default parameters provide fallback values when an argument is missing or `undefined`. They do not apply when `null` is passed.

---

# Rest Parameters

**Rest parameters** allow a function to accept an indefinite number of arguments as an array. They are defined using three dots (`...`) before the parameter name and must be the last parameter in the function definition.

### Example

```javascript
function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

console.log(sum(10, 20)); // Output: 30
console.log(sum(10, 20, 30)); // Output: 60
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
```

**Key takeaway:** Rest parameters collect multiple arguments into a real array, making it easy to process a variable number of inputs.

# Arrow Functions

**Arrow functions** are a concise way to write function expressions introduced in ES6. They use the **`=>`** syntax instead of the `function` keyword. Arrow functions do not have their own `this`, `arguments`, or `super` bindings. They are commonly used for callbacks and short functions but cannot be used as constructors.

## 1. Basic Arrow Function

An arrow function can be written without the `function` keyword.

### Example

```javascript
const greet = () => {
  console.log("Hello World");
};

greet();

// Output: Hello World
```

## 2. Arrow Function with Parameters

Arrow functions can accept parameters just like regular functions.

### Example

```javascript
const add = (a, b) => {
  return a + b;
};

console.log(add(10, 20));

// Output: 30
```

**Key takeaway:** Parameters are passed inside parentheses, and the function logic is written inside curly braces.

## 3. Arrow Function with Implicit Return

When an arrow function contains only a single expression, you can omit the curly braces and `return` keyword.

### Example

```javascript
const multiply = (a, b) => a * b;

console.log(multiply(5, 4));

// Output: 20
```

**Key takeaway:** A single expression is returned automatically without using `return`.

## 4. Arrow Function with a Single Parameter

When an arrow function has only one parameter, parentheses around the parameter are optional.

### Example

```javascript
const square = (number) => number * number;

console.log(square(5));

// Output: 25
```

**Key takeaway:** Parentheses can be omitted when there is exactly one parameter.

## 5. Arrow Function with Default Parameters

Arrow functions support default parameters, which provide fallback values when an argument is missing or `undefined`.

### Example

```javascript
const greet = (name = "Guest") => `Hello, ${name}`;

console.log(greet("Kamesh"));
console.log(greet());

// Output:
// Hello, Kamesh
// Hello, Guest
```

**Key takeaway:** Default parameters work the same way in arrow functions and regular functions.

## 6. Arrow Function with Rest Parameters

Rest parameters allow an arrow function to accept multiple arguments as an array.

### Example

```javascript
const sum = (...numbers) =>
  numbers.reduce((total, number) => total + number, 0);

console.log(sum(10, 20));
console.log(sum(10, 20, 30));

// Output:
// 30
// 60
```

**Key takeaway:** Use `...` to collect multiple arguments into an array.

## 7. Arrow Functions as Callbacks

Arrow functions are commonly used as callbacks in methods such as `map()`, `filter()`, and `forEach()`.

### Example

```javascript
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((number) => number * 2);

console.log(doubled);

// Output: [2, 4, 6, 8, 10]
```

**Key takeaway:** Arrow functions make callback functions shorter and easier to read.

## 8. Arrow Functions and `this`

Arrow functions do not have their own `this`. They inherit `this` from the surrounding lexical scope.

### Example

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

**Key takeaway:** Arrow functions inherit `this` from their surrounding scope, making them useful for callbacks inside methods.

## 9. Arrow Functions and `arguments`

Arrow functions do not have their own `arguments` object. Use rest parameters (`...args`) to access the arguments passed to an arrow function.

### Example

```javascript
const display = (...args) => {
  console.log(args);
};

display(10, 20, 30);

// Output: [10, 20, 30]
```

**Key takeaway:** Use rest parameters instead of `arguments` inside arrow functions.

## 10. Arrow Functions Cannot Be Constructors

Arrow functions cannot be called with the `new` keyword because they do not have the internal constructor capability.

### Example

```javascript
const Person = (name) => {
  this.name = name;
};

// const person = new Person("Kamesh");
// TypeError: Person is not a constructor
```

**Key takeaway:** Use regular functions or classes when you need to create objects using `new`.

## 11. Arrow Functions as Object Methods

Arrow functions should generally not be used as object methods when the method needs to access the object through `this`.

### Example

```javascript
const user = {
  name: "Kamesh",

  greet: () => {
    console.log(this.name);
  },
};

user.greet();

// Output: undefined (in a typical non-module browser script)
```

**Key takeaway:** Use regular method syntax when you need `this` to refer to the object.

---

## Summary

| Feature                | Arrow Function                  |
| ---------------------- | ------------------------------- |
| Syntax                 | Uses `=>`                       |
| `this`                 | Inherits from surrounding scope |
| `arguments`            | Does not have its own           |
| Default parameters     | Supported                       |
| Rest parameters        | Supported                       |
| Implicit return        | Supported                       |
| Callbacks              | Commonly used                   |
| Constructor with `new` | Not supported                   |
| Own `super` binding    | Not supported                   |

**Key takeaway:** Arrow functions provide concise syntax, support implicit returns, and are useful for callbacks. Use regular methods when you need a method-specific `this`, and regular functions or classes when you need constructors.
