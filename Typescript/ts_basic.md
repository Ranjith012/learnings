# TypeScript Complete Guide: Basics, Types, Generics, and OOP

This guide covers TypeScript concepts with **simple explanations, syntax, examples, and important differences**.

# 1. Class

A **class** is a blueprint for creating objects. It defines properties and methods that its objects can use.

## Example

```typescript
class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Hello, ${this.name}`);
  }
}

const user1 = new User("Kamesh", 25);

user1.greet(); // Hello, Kamesh
```

## Key Points

- `class` defines the blueprint.
- `constructor()` initialises the object.
- `this` refers to the current object.
- `new` creates an object from the class.

# 2. Tuples

A **tuple** is an array with a fixed structure in which each position has a specific type.

## Example

```typescript
let user: [string, number, boolean];

user = ["Kamesh", 25, true]; // Valid

// user = [25, "Kamesh", true]; // Error
```

### Explanation

- The first element must be a `string`.
- The second element must be a `number`.
- The third element must be a `boolean`.

## Tuple with Optional Elements

Optional tuple elements allow you to omit specific elements when assigning values.

```typescript
let person: [string, number?];

person = ["Kamesh"]; // Valid
person = ["Kamesh", 25]; // Valid
```

The `?` makes the second element optional.

## Tuple with Rest Elements

Rest elements allow a tuple to contain a variable number of elements of a specified type.

```typescript
let scores: [string, ...number[]];

scores = ["Maths", 90, 85, 95]; // Valid
scores = ["Science", 80, 90]; // Valid
```

### Explanation

- The first element must be a `string`.
- The remaining elements can contain any number of `number` values.
- The rest element uses the `...` syntax.

## Tuple vs Array

| Feature        | Array                                  | Tuple                                                                    |
| -------------- | -------------------------------------- | ------------------------------------------------------------------------ |
| Types          | Usually contains elements of one type  | Can define a specific type for each position                             |
| Length         | Usually dynamic                        | Defines a specific structure, but can support optional and rest elements |
| Element access | Elements generally share the same type | Element types depend on their positions                                  |
| Example        | `number[]`                             | `[string, number]`                                                       |

### Example

```typescript
// Array
let numbers: number[] = [10, 20, 30];

// Tuple
let userDetails: [string, number] = ["Kamesh", 25];
```

**Key takeaway:** Use arrays when storing collections of similar values. Use tuples when each position has a specific meaning and type.

# 3. Optional Properties

An **optional property** is a property that may or may not be provided in an object.

Use `?` to define an optional property in an interface or type.

## Example

```typescript
interface User {
  name: string;
  age?: number;
}

const user1: User = {
  name: "Kamesh",
};

const user2: User = {
  name: "Kamesh",
  age: 25,
};
```

### Explanation

- `name: string` — Required property. Every `User` object must have a name.
- `age?: number` — Optional property. The age can be provided or omitted.
- Both `user1` and `user2` are valid because `age` is optional.

## Accessing Optional Properties

You can access an optional property even when it has not been provided.

```typescript
console.log(user1.age); // undefined
console.log(user2.age); // 25
```

If the property is not provided, its value is `undefined`.

## Checking Optional Properties

**Important:** An optional property may be `undefined`, so check its value before using it in operations that require a number.

```typescript
if (user2.age !== undefined) {
  console.log(user2.age);
}
```

Output:

```text
25
```

## Using Optional Properties in Functions

Optional properties are useful when a function accepts objects with some fields that are not always required.

```typescript
interface Product {
  name: string;
  price: number;
  description?: string;
}

function displayProduct(product: Product): void {
  console.log("Name:", product.name);
  console.log("Price:", product.price);
  console.log(
    "Description:",
    product.description ?? "No description available",
  );
}

displayProduct({
  name: "Laptop",
  price: 50000,
});

displayProduct({
  name: "Mobile",
  price: 20000,
  description: "Android smartphone",
});
```

Output:

```text
Name: Laptop
Price: 50000
Description: No description available

Name: Mobile
Price: 20000
Description: Android smartphone
```

Here, the **nullish coalescing operator (`??`)** provides a default value when `description` is `null` or `undefined`.

## Required vs Optional Properties

| Feature            | Required Property                   | Optional Property         |
| ------------------ | ----------------------------------- | ------------------------- |
| Syntax             | `name: string`                      | `age?: number`            |
| Must be provided?  | Yes                                 | No                        |
| Can be omitted?    | No                                  | Yes                       |
| Value when omitted | Object assignment produces an error | `undefined` when accessed |
| Example            | `name: "Kamesh"`                    | `age: 25` or omitted      |

## Key Takeaways

- Use `?` to make an object property optional.
- Required properties must be provided when creating an object.
- Optional properties can be omitted.
- Accessing an omitted optional property returns `undefined`.
- Use checks or default values before performing operations that require the property's value.

# 4. Type Inference

**Type inference** is a TypeScript feature that automatically determines the type of a variable or expression from its value or context.

You don't always need to specify types manually because TypeScript can infer them automatically.

## Example

```typescript
let name = "Kamesh";
let age = 25;
let isDeveloper = true;
```

### Inferred Types

TypeScript automatically infers the following types:

```typescript
name: string;
age: number;
isDeveloper: boolean;
```

- `name` is inferred as `string`.
- `age` is inferred as `number`.
- `isDeveloper` is inferred as `boolean`.

## Type Inference in Variables

TypeScript infers the type from the initial value and checks subsequent assignments against that type.

```typescript
let age = 25;

age = 30; // Valid

// age = "thirty"; // Error
```

### Explanation

- TypeScript infers `number` from the initial value `25`.
- Assigning another number is valid.
- Assigning a string produces a type error.

## Function Return Type Inference

TypeScript can automatically infer a function's return type from its return statement.

```typescript
function add(a: number, b: number) {
  return a + b;
}

const result = add(10, 20);

console.log(result); // 30
```

### Explanation

- Both parameters have the `number` type.
- The `+` operator adds the two numbers.
- TypeScript infers the return type as `number`.
- The `result` variable is also inferred as `number`.

## Explicit Return Type

You can also specify the return type explicitly.

```typescript
function add(a: number, b: number): number {
  return a + b;
}
```

Here, `: number` explicitly specifies that the function must return a number.

**Both approaches are valid.**

## Type Inference in Arrays

TypeScript can infer the element type of an array from its initial values.

```typescript
let numbers = [10, 20, 30];

numbers.push(40); // Valid

// numbers.push("50"); // Error
```

TypeScript infers the type as `number[]`.

## Type Inference vs Explicit Typing

| Feature     | Type Inference                               | Explicit Typing                           |
| ----------- | -------------------------------------------- | ----------------------------------------- |
| Meaning     | TypeScript determines the type automatically | Developer specifies the type              |
| Syntax      | `let age = 25;`                              | `let age: number = 25;`                   |
| Code length | Less code                                    | More explicit                             |
| Type safety | Provides type checking                       | Provides type checking                    |
| Best use    | When the type is obvious                     | When clarity or a specific type is needed |

## Key Takeaways

- TypeScript automatically infers types from values and context.
- You don't need to annotate every variable.
- Inferred types help prevent invalid assignments.
- Function return types can be inferred automatically.
- Explicit type annotations are useful when you want to clearly define the expected type.

# 5. Function Types

A **function type** describes the types of a function's parameters and return value.

Function types help ensure that functions receive the correct arguments and return the expected values.

## 1. Basic Function Types

```typescript
function greet(name: string): string {
  return `Hello, ${name}`;
}

console.log(greet("Kamesh")); // Hello, Kamesh
```

### Explanation

- `name: string` defines the parameter type.
- `: string` after the parentheses defines the return type.
- The function must return a string.

## 2. Function Types Using a Type Alias

A **type alias** allows you to define a reusable function signature.

```typescript
type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;

const multiply: Operation = (a, b) => a * b;

console.log(add(10, 20)); // 30
console.log(multiply(10, 20)); // 200
```

### Explanation

- `Operation` defines a function type.
- It accepts two `number` parameters.
- It must return a `number`.
- Both `add` and `multiply` must follow the `Operation` type.
- TypeScript automatically infers the parameter types of `a` and `b` from the `Operation` annotation.

## 3. Optional Function Parameters

An **optional parameter** is a parameter that does not need to be provided when calling a function.

Use `?` to make a parameter optional.

```typescript
function greet(name: string, age?: number): void {
  console.log(`Hello, ${name}`);

  if (age !== undefined) {
    console.log(`Age: ${age}`);
  }
}

greet("Kamesh");
greet("Kamesh", 25);
```

### Output

```text
Hello, Kamesh
Hello, Kamesh
Age: 25
```

### Explanation

- `name: string` is a required parameter.
- `age?: number` is an optional parameter.
- `void` indicates that the function does not return a meaningful value.
- If `age` is omitted, its value is `undefined`.
- Optional parameters must come after required parameters in a function's parameter list.

## 4. Function Types Using Arrow Functions

You can also define function types using arrow function syntax.

```typescript
type Calculate = (a: number, b: number) => number;

const subtract: Calculate = (a, b) => {
  return a - b;
};

console.log(subtract(20, 10)); // 10
```

Here, `Calculate` defines the expected parameter and return types for the `subtract` function.

## 5. Function Types vs Return Types

| Feature | Function Type                                             | Return Type                              |
| ------- | --------------------------------------------------------- | ---------------------------------------- |
| Meaning | Defines the parameter types and return type of a function | Defines the value a function returns     |
| Example | `(a: number, b: number) => number`                        | `: number`                               |
| Purpose | Describes the complete function signature                 | Specifies the expected return value type |

### Example

```typescript
// Function type
type AddFunction = (a: number, b: number) => number;

// Return type
function add(a: number, b: number): number {
  return a + b;
}
```

## Key Takeaways

- Function types define parameter types and return types.
- Use `: string`, `: number`, or other types to specify a function's return type.
- Use a type alias to create reusable function signatures.
- Use `?` to define optional parameters.
- TypeScript can infer parameter types when a function has an explicit function-type annotation.
- Use `void` when a function does not return a meaningful value.

# 5. Function Types

A **function type** describes the types of a function's parameters and return value.

Function types help ensure that functions receive the correct arguments and return the expected values.

## 1. Basic Function Types

```typescript
function greet(name: string): string {
  return `Hello, ${name}`;
}

console.log(greet("Kamesh")); // Hello, Kamesh
```

### Explanation

- `name: string` defines the parameter type.
- `: string` after the parentheses defines the return type.
- The function must return a string.

## 2. Function Types Using a Type Alias

A **type alias** allows you to define a reusable function signature.

```typescript
type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;

const multiply: Operation = (a, b) => a * b;

console.log(add(10, 20)); // 30
console.log(multiply(10, 20)); // 200
```

### Explanation

- `Operation` defines a function type.
- It accepts two `number` parameters.
- It must return a `number`.
- Both `add` and `multiply` must follow the `Operation` type.
- TypeScript automatically infers the parameter types of `a` and `b` from the `Operation` annotation.

## 3. Optional Function Parameters

An **optional parameter** is a parameter that does not need to be provided when calling a function.

Use `?` to make a parameter optional.

```typescript
function greet(name: string, age?: number): void {
  console.log(`Hello, ${name}`);

  if (age !== undefined) {
    console.log(`Age: ${age}`);
  }
}

greet("Kamesh");
greet("Kamesh", 25);
```

### Output

```text
Hello, Kamesh
Hello, Kamesh
Age: 25
```

### Explanation

- `name: string` is a required parameter.
- `age?: number` is an optional parameter.
- `void` indicates that the function does not return a meaningful value.
- If `age` is omitted, its value is `undefined`.
- Optional parameters must come after required parameters in a function's parameter list.

## 4. Function Types Using Arrow Functions

You can also define function types using arrow function syntax.

```typescript
type Calculate = (a: number, b: number) => number;

const subtract: Calculate = (a, b) => {
  return a - b;
};

console.log(subtract(20, 10)); // 10
```

Here, `Calculate` defines the expected parameter and return types for the `subtract` function.

## 5. Function Types vs Return Types

| Feature | Function Type                                             | Return Type                              |
| ------- | --------------------------------------------------------- | ---------------------------------------- |
| Meaning | Defines the parameter types and return type of a function | Defines the value a function returns     |
| Example | `(a: number, b: number) => number`                        | `: number`                               |
| Purpose | Describes the complete function signature                 | Specifies the expected return value type |

### Example

```typescript
// Function type
type AddFunction = (a: number, b: number) => number;

// Return type
function add(a: number, b: number): number {
  return a + b;
}
```

## Key Takeaways

- Function types define parameter types and return types.
- Use `: string`, `: number`, or other types to specify a function's return type.
- Use a type alias to create reusable function signatures.
- Use `?` to define optional parameters.
- TypeScript can infer parameter types when a function has an explicit function-type annotation.
- Use `void` when a function does not return a meaningful value.

# 6. Dynamic Arrays

A **dynamic array** is an array whose size can grow or shrink when elements are added or removed.

In TypeScript, you can use standard JavaScript array methods while maintaining type safety.

## 1. Basic Example

```typescript
let numbers: number[] = [];

numbers.push(10);
numbers.push(20);
numbers.push(30);

console.log(numbers); // [10, 20, 30]

numbers.pop();

console.log(numbers); // [10, 20]
```

### Explanation

- `number[]` defines an array that can contain numbers.
- `push()` adds an element to the end of the array.
- `pop()` removes the last element from the array.
- The array's length changes dynamically as elements are added or removed.
- TypeScript prevents you from adding values of incompatible types.

For example:

```typescript
let numbers: number[] = [10, 20, 30];

numbers.push(40); // Valid

// numbers.push("50"); // Error: string is not assignable to number
```

## 2. Array of Objects

TypeScript also supports dynamic arrays containing objects with a specific structure.

```typescript
interface User {
  id: number;
  name: string;
}

const users: User[] = [];

users.push({ id: 1, name: "Kamesh" });
users.push({ id: 2, name: "Arun" });

console.log(users);
```

### Output

```text
[
  { id: 1, name: 'Kamesh' },
  { id: 2, name: 'Arun' }
]
```

### Explanation

- The `User` interface defines the structure of each object.
- `User[]` means an array of `User` objects.
- `push()` adds new objects to the array.
- Each object must satisfy the `User` interface.

For example:

```typescript
users.push({ id: 3, name: "Ravi" }); // Valid

// users.push({ id: "4", name: "Priya" }); // Error: id must be a number
```

## 3. Common Array Methods

| Method      | Description                                                   | Example                       |
| ----------- | ------------------------------------------------------------- | ----------------------------- |
| `push()`    | Adds elements to the end                                      | `numbers.push(40)`            |
| `pop()`     | Removes the last element                                      | `numbers.pop()`               |
| `unshift()` | Adds elements to the beginning                                | `numbers.unshift(5)`          |
| `shift()`   | Removes the first element                                     | `numbers.shift()`             |
| `splice()`  | Adds or removes elements at a specified position              | `numbers.splice(1, 1)`        |
| `filter()`  | Creates a new array containing elements that pass a condition | `numbers.filter(n => n > 10)` |

## 4. Dynamic Arrays with Type Inference

You can allow TypeScript to infer the array's element type from its initial values.

```typescript
let scores = [80, 90, 95];

scores.push(100); // Valid

// scores.push("85"); // Error
```

TypeScript infers the type as `number[]`.

You can also explicitly declare the type when creating an empty array:

```typescript
let scores: number[] = [];

scores.push(80);
scores.push(90);
```

**Important:** Explicitly declaring the type of an empty array makes your intention clear.

## 5. Dynamic Arrays vs Tuples

| Feature         | Dynamic Array                               | Tuple                                                  |
| --------------- | ------------------------------------------- | ------------------------------------------------------ |
| Structure       | Stores elements of a specified element type | Defines types for specific positions                   |
| Length          | Can grow or shrink                          | Usually has a defined structure                        |
| Adding elements | Commonly uses `push()`                      | Depends on the tuple's declared structure              |
| Example         | `number[]`                                  | `[string, number]`                                     |
| Use case        | Lists of scores, users, or products         | A pair of coordinates or a fixed set of related values |

## Key Takeaways

- Dynamic arrays can grow or shrink as elements are added or removed.
- TypeScript arrays support standard JavaScript array methods.
- `number[]` represents an array of numbers.
- `User[]` represents an array of objects that follow the `User` interface.
- TypeScript enforces element types during development and compilation.
- The `const` keyword prevents reassignment of an array variable, but it does not prevent modifying the array's contents.

# 7. Union Types

A **Union Type** allows a variable to hold a value of one of several specified types.

Use the `|` operator to define a union type.

### Example

```typescript
let id: string | number;

id = 101; // Valid
id = "USER101"; // Valid

// id = true;   // Error: boolean is not assignable
```

**Explanation:**

- `string | number` means the variable can hold either a string or a number.
- The variable can hold one type of value at a time.
- Assigning a boolean causes a type error.

### Union Types in Functions

Union types can be used as function parameters to accept different types of arguments.

```typescript
function printId(id: string | number): void {
  console.log(id);
}

printId(101); // 101
printId("USER101"); // USER101
```

**Explanation:**

- The `id` parameter accepts either a string or a number.
- `void` indicates that the function does not return a meaningful value.
- Both function calls are valid because they pass supported types.

### Type Narrowing

**Type Narrowing** is the process of reducing a variable's possible types based on conditions or checks.

When working with union types, you may need to check the actual type before performing a type-specific operation.

```typescript
function printId(id: string | number): void {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}

printId("kamesh"); // KAMESH
printId(100); // 100.00
```

**Explanation:**

- `typeof id === "string"` checks whether `id` is a string.
- Inside the `if` block, TypeScript narrows `id` to `string`.
- `toUpperCase()` converts the string to uppercase.
- Inside the `else` block, TypeScript narrows `id` to `number`.
- `toFixed(2)` formats the number with two decimal places.

**Output:**

```text
KAMESH
100.00
```

### Union Types with Arrays

Union types can also be used with arrays. However, the placement of parentheses changes the meaning.

**Example 1: An array containing either numbers or strings**

```typescript
let values: number[] | string[] = [1, 2, 3];

values = ["one", "two", "three"]; // Valid

// values = [1, "two", 3];        // Error
```

Here, the variable can hold either an array of numbers or an array of strings.

**Example 2: An array containing both numbers and strings**

```typescript
let values: (number | string)[] = [1, "two", 3];

values.push(4); // Valid
values.push("four"); // Valid

console.log(values); // [1, "two", 3, 4, "four"]
```

Here, each array element can be either a number or a string.

### Key Points to Remember

- **Union Operator (`|`):** Allows a value to have one of several specified types.
- **Type Narrowing:** Identifies a more specific type using conditions or checks.
- **`typeof`:** Checks a value's type at runtime.
- **`number[] | string[]`:** Accepts either a number array or a string array.
- **`(number | string)[]`:** Accepts an array containing numbers and strings.
- **Common use cases:** Function parameters, API responses, identifiers, and application states.

# 8. Type Alias

A **Type Alias** gives a name to an existing type or a type definition. It helps us reuse types throughout an application and makes code easier to read and maintain.

Use the `type` keyword to define a type alias.

### Syntax

```typescript
type TypeName = Type;
```

### Example: Type Alias for Union Types

```typescript
type UserId = string | number;

let id: UserId;

id = 101; // Valid
id = "USER101"; // Valid

// id = true;   // Error
```

**Explanation:**

- `UserId` is a type alias.
- It represents a union of `string` and `number`.
- We can use `UserId` instead of repeatedly writing `string | number`.

### Type Alias for Primitive Types

We can create aliases for primitive types such as `string`, `number`, and `boolean`.

```typescript
type Username = string;
type Age = number;
type IsActive = boolean;

let name: Username = "Kamesh";
let age: Age = 25;
let isActive: IsActive = true;
```

**Note:** A type alias does not create a completely new type. For example, `Username` still represents a string.

### Type Alias for Objects

A type alias can define the structure of an object, including its properties and their types.

```typescript
type User = {
  id: number;
  name: string;
  email: string;
};

const user: User = {
  id: 1,
  name: "Kamesh",
  email: "kamesh@example.com",
};
```

**Explanation:**

- `User` defines the structure of a user object.
- `id` must be a number.
- `name` and `email` must be strings.
- TypeScript reports an error if a required property is missing or has an incompatible type.

### Type Alias for Optional Properties

An optional property does not need to be included in an object.

Use `?` to define an optional property.

```typescript
type User = {
  id: number;
  name: string;
  email?: string;
};

const user: User = {
  id: 1,
  name: "Kamesh",
};
```

Here, `email` is optional, but `id` and `name` are required.

### Type Alias for Arrays

We can use a type alias to define an array type.

```typescript
type Numbers = number[];

const marks: Numbers = [80, 90, 75, 85];

console.log(marks);
```

Here, `Numbers` represents an array of numbers.

We can also define an array of objects.

```typescript
type Product = {
  id: number;
  name: string;
};

type Products = Product[];

const products: Products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Mobile" },
];
```

### Type Alias for Tuples

A **Tuple** is an array with a fixed structure in which each position has a specific type.

```typescript
type UserDetails = [string, number, boolean];

const user: UserDetails = ["Kamesh", 25, true];
```

The tuple contains:

- First position: `string`
- Second position: `number`
- Third position: `boolean`

The order of the types matters.

### Type Alias for Functions

A type alias can define the structure of a function, including its parameters and return type.

```typescript
type Calculator = (a: number, b: number) => number;

const add: Calculator = (a, b) => a + b;

console.log(add(10, 20)); // 30
```

**Explanation:**

- `Calculator` defines a function type.
- It accepts two number parameters.
- It returns a number.
- The `add` function follows this definition.

TypeScript also infers the parameter types of `add` from the `Calculator` type.

### Type Alias for Intersection Types

An **Intersection Type** combines multiple types into one type using the `&` operator.

```typescript
type Person = {
  name: string;
};

type Employee = {
  employeeId: number;
};

type EmployeeDetails = Person & Employee;

const employee: EmployeeDetails = {
  name: "Kamesh",
  employeeId: 101,
};
```

Here, `EmployeeDetails` contains the properties of both `Person` and `Employee`.

### Type Alias with Generics

**Generics** allow us to create reusable type definitions that work with different data types.

```typescript
type ApiResponse<T> = {
  data: T;
  success: boolean;
};

const userResponse: ApiResponse<string> = {
  data: "Kamesh",
  success: true,
};

const countResponse: ApiResponse<number> = {
  data: 100,
  success: true,
};
```

**Explanation:**

- `T` is a generic type parameter.
- `ApiResponse<string>` requires `data` to be a string.
- `ApiResponse<number>` requires `data` to be a number.
- The same type definition can be reused for different data types.

### Type Alias vs Interface

Both `type` and `interface` can define object structures.

```typescript
type User = {
  id: number;
  name: string;
};
```

The equivalent interface is:

```typescript
interface User {
  id: number;
  name: string;
}
```

**Key differences:**

| Feature             | Type Alias    | Interface                      |
| ------------------- | ------------- | ------------------------------ |
| Object structures   | Supported     | Supported                      |
| Primitive aliases   | Supported     | Not supported directly         |
| Union types         | Supported     | Not supported directly         |
| Tuple types         | Supported     | Not supported directly         |
| Combining types     | Uses `&`      | Uses `extends` for inheritance |
| Declaration merging | Not supported | Supported                      |
| Generics            | Supported     | Supported                      |

**When to use `type`:**

- Defining union and intersection types.
- Creating aliases for primitive types.
- Defining tuples and function types.
- Combining different types.

**When to use `interface`:**

- Defining object structures and class contracts.
- Extending other interfaces.
- Supporting declaration merging.

Both are suitable for most object structures. The choice often depends on the use case and project conventions.

### Important Points to Remember

- **Syntax:** Use the `type` keyword to create a type alias.
- **Reusability:** Define a type once and reuse it throughout your application.
- **Type safety:** TypeScript checks values against the defined type.
- **Flexibility:** Type aliases can represent primitives, unions, intersections, tuples, objects, functions, and generic types.
- **No runtime representation:** Type aliases exist only during type checking and are removed when TypeScript is compiled to JavaScript.
- **No declaration merging:** You cannot declare the same type alias twice in the same scope.
- **Type alias vs type assertion:** A type alias defines a reusable type, whereas a type assertion tells TypeScript to treat a value as a specified type.

### Interview Question

**Q: What is a Type Alias in TypeScript?**

**Answer:** A type alias is a way to give a reusable name to a type or type definition using the `type` keyword. It can represent primitive types, object structures, unions, intersections, tuples, function types, and generics.

```typescript
type UserId = string | number;

function getUser(id: UserId): void {
  console.log(id);
}

getUser(101);
getUser("USER101");
```

In this example, `UserId` is a type alias that allows the function to accept either a string or a number.

# 8. Type Alias

A **Type Alias** gives a name to an existing type or a type definition. It helps us reuse types throughout an application and makes code easier to read and maintain.

Use the `type` keyword to define a type alias.

### Syntax

```typescript
type TypeName = Type;
```

### Example: Type Alias for Union Types

```typescript
type UserId = string | number;

let id: UserId;

id = 101; // Valid
id = "USER101"; // Valid

// id = true;   // Error
```

**Explanation:**

- `UserId` is a type alias.
- It represents a union of `string` and `number`.
- We can use `UserId` instead of repeatedly writing `string | number`.

### Type Alias for Primitive Types

We can create aliases for primitive types such as `string`, `number`, and `boolean`.

```typescript
type Username = string;
type Age = number;
type IsActive = boolean;

let name: Username = "Kamesh";
let age: Age = 25;
let isActive: IsActive = true;
```

**Note:** A type alias does not create a completely new type. For example, `Username` still represents a string.

### Type Alias for Objects

A type alias can define the structure of an object, including its properties and their types.

```typescript
type User = {
  id: number;
  name: string;
  email: string;
};

const user: User = {
  id: 1,
  name: "Kamesh",
  email: "kamesh@example.com",
};
```

**Explanation:**

- `User` defines the structure of a user object.
- `id` must be a number.
- `name` and `email` must be strings.
- TypeScript reports an error if a required property is missing or has an incompatible type.

### Type Alias for Optional Properties

An optional property does not need to be included in an object.

Use `?` to define an optional property.

```typescript
type User = {
  id: number;
  name: string;
  email?: string;
};

const user: User = {
  id: 1,
  name: "Kamesh",
};
```

Here, `email` is optional, but `id` and `name` are required.

### Type Alias for Arrays

We can use a type alias to define an array type.

```typescript
type Numbers = number[];

const marks: Numbers = [80, 90, 75, 85];

console.log(marks);
```

Here, `Numbers` represents an array of numbers.

We can also define an array of objects.

```typescript
type Product = {
  id: number;
  name: string;
};

type Products = Product[];

const products: Products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Mobile" },
];
```

### Type Alias for Tuples

A **Tuple** is an array with a fixed structure in which each position has a specific type.

```typescript
type UserDetails = [string, number, boolean];

const user: UserDetails = ["Kamesh", 25, true];
```

The tuple contains:

- First position: `string`
- Second position: `number`
- Third position: `boolean`

The order of the types matters.

### Type Alias for Functions

A type alias can define the structure of a function, including its parameters and return type.

```typescript
type Calculator = (a: number, b: number) => number;

const add: Calculator = (a, b) => a + b;

console.log(add(10, 20)); // 30
```

**Explanation:**

- `Calculator` defines a function type.
- It accepts two number parameters.
- It returns a number.
- The `add` function follows this definition.

TypeScript also infers the parameter types of `add` from the `Calculator` type.

### Type Alias for Intersection Types

An **Intersection Type** combines multiple types into one type using the `&` operator.

```typescript
type Person = {
  name: string;
};

type Employee = {
  employeeId: number;
};

type EmployeeDetails = Person & Employee;

const employee: EmployeeDetails = {
  name: "Kamesh",
  employeeId: 101,
};
```

Here, `EmployeeDetails` contains the properties of both `Person` and `Employee`.

### Type Alias with Generics

**Generics** allow us to create reusable type definitions that work with different data types.

```typescript
type ApiResponse<T> = {
  data: T;
  success: boolean;
};

const userResponse: ApiResponse<string> = {
  data: "Kamesh",
  success: true,
};

const countResponse: ApiResponse<number> = {
  data: 100,
  success: true,
};
```

**Explanation:**

- `T` is a generic type parameter.
- `ApiResponse<string>` requires `data` to be a string.
- `ApiResponse<number>` requires `data` to be a number.
- The same type definition can be reused for different data types.

### Type Alias vs Interface

Both `type` and `interface` can define object structures.

```typescript
type User = {
  id: number;
  name: string;
};
```

The equivalent interface is:

```typescript
interface User {
  id: number;
  name: string;
}
```

**Key differences:**

| Feature             | Type Alias    | Interface                      |
| ------------------- | ------------- | ------------------------------ |
| Object structures   | Supported     | Supported                      |
| Primitive aliases   | Supported     | Not supported directly         |
| Union types         | Supported     | Not supported directly         |
| Tuple types         | Supported     | Not supported directly         |
| Combining types     | Uses `&`      | Uses `extends` for inheritance |
| Declaration merging | Not supported | Supported                      |
| Generics            | Supported     | Supported                      |

**When to use `type`:**

- Defining union and intersection types.
- Creating aliases for primitive types.
- Defining tuples and function types.
- Combining different types.

**When to use `interface`:**

- Defining object structures and class contracts.
- Extending other interfaces.
- Supporting declaration merging.

Both are suitable for most object structures. The choice often depends on the use case and project conventions.

### Important Points to Remember

- **Syntax:** Use the `type` keyword to create a type alias.
- **Reusability:** Define a type once and reuse it throughout your application.
- **Type safety:** TypeScript checks values against the defined type.
- **Flexibility:** Type aliases can represent primitives, unions, intersections, tuples, objects, functions, and generic types.
- **No runtime representation:** Type aliases exist only during type checking and are removed when TypeScript is compiled to JavaScript.
- **No declaration merging:** You cannot declare the same type alias twice in the same scope.
- **Type alias vs type assertion:** A type alias defines a reusable type, whereas a type assertion tells TypeScript to treat a value as a specified type.

### Interview Question

**Q: What is a Type Alias in TypeScript?**

**Answer:** A type alias is a way to give a reusable name to a type or type definition using the `type` keyword. It can represent primitive types, object structures, unions, intersections, tuples, function types, and generics.

```typescript
type UserId = string | number;

function getUser(id: UserId): void {
  console.log(id);
}

getUser(101);
getUser("USER101");
```

In this example, `UserId` is a type alias that allows the function to accept either a string or a number.

# 9. Type Assertion

A **Type Assertion** tells TypeScript to treat a value as a specific type. It helps the developer provide information about a value's type when TypeScript cannot determine it precisely.

Type assertions are performed only during type checking. **They do not convert or validate the value at runtime.**

### Syntax

```typescript
value as Type;
```

TypeScript also supports angle-bracket syntax (`<Type>value`), but it cannot be used in `.tsx` files because it conflicts with JSX syntax.

### Example 1: Basic Type Assertion

```typescript
let value: unknown = "Hello TypeScript";

let length = (value as string).length;

console.log(length); // 16
```

**Explanation:**

- `unknown` means the value can contain any type, but it cannot be used as a specific type without narrowing or assertion.
- `value as string` tells TypeScript to treat `value` as a string for this expression.
- `.length` accesses the string's length.

**Important:** The assertion does not check whether `value` is actually a string. If the value is a number, accessing `.length` may return `undefined` instead of producing a TypeScript error.

### Example 2: Type Assertion with DOM Elements

Type assertions are commonly used when working with HTML elements in JavaScript and TypeScript.

```typescript
const input = document.getElementById("username") as HTMLInputElement;

console.log(input.value);
```

**Explanation:**

- `document.getElementById()` returns an `HTMLElement` or `null`.
- `as HTMLInputElement` tells TypeScript to treat the result as an HTML input element.
- `.value` accesses the input's current value.

**Important:** This assertion does not verify that the element exists or that it is actually an input element.

If the element does not exist, accessing `input.value` will cause a runtime error.

### Example 3: Safer DOM Handling

Use a runtime check when you need to verify the element's actual type.

```typescript
const element = document.getElementById("username");

if (element instanceof HTMLInputElement) {
  console.log(element.value);
}
```

**Explanation:**

- `instanceof` checks the element's actual runtime type.
- The condition verifies that the element is an `HTMLInputElement`.
- TypeScript narrows `element` to `HTMLInputElement` inside the `if` block.
- If the element is missing or is a different kind of element, the code inside the block does not execute.

This approach provides runtime checking instead of relying only on an assertion.

### Example 4: Type Assertion with Objects

```typescript
type User = {
  name: string;
  age: number;
};

const value: unknown = {
  name: "Kamesh",
  age: 25,
};

const user = value as User;

console.log(user.name); // Kamesh
console.log(user.age); // 25
```

Here, `value as User` tells TypeScript to treat the value as a `User`.

However, TypeScript does not verify that the object contains all the required properties.

For example:

```typescript
const value: unknown = {
  name: "Kamesh",
};

const user = value as User;

console.log(user.age); // undefined at runtime
```

This code compiles, but `age` is `undefined` because the property is missing.

**Best practice:** Validate external data, such as API responses or user input, before treating it as a trusted type.

### Example 5: Type Assertion vs Type Conversion

Type assertion and type conversion serve different purposes.

#### Type Assertion

```typescript
const value: unknown = "123";

const result = value as string;

console.log(result); // "123"
console.log(typeof result); // "string"
```

The assertion does not change the value. It only affects how TypeScript treats it during type checking.

#### Type Conversion

```typescript
const value: unknown = 123;

const result = String(value);

console.log(result); // "123"
console.log(typeof result); // "string"
```

`String(value)` actually converts the number `123` into the string `"123"` at runtime.

### Type Assertion vs Type Conversion

| Feature                    | Type Assertion                        | Type Conversion                                     |
| -------------------------- | ------------------------------------- | --------------------------------------------------- |
| Purpose                    | Tells TypeScript how to treat a value | Changes a value into another representation or type |
| Runtime operation          | No conversion occurs                  | Conversion occurs                                   |
| TypeScript syntax          | `value as string`                     | `String(value)`                                     |
| Validates the actual value | No                                    | Performs the requested conversion                   |
| Example                    | `value as string`                     | `String(123)` produces `"123"`                      |

### Example 6: Double Type Assertion

Sometimes, TypeScript does not allow a direct assertion because the types do not sufficiently overlap.

In such cases, a double assertion can bypass the compiler's compatibility check.

```typescript
const value = "Hello" as unknown as number;
```

This compiles, but the runtime value remains the string `"Hello"`.

**Avoid this approach unless you have a specific, justified reason.** It bypasses useful type safety and can cause runtime errors.

### Important Points to Remember

- **Type assertion:** Tells TypeScript to treat a value as a specified type.
- **No runtime conversion:** Assertions do not change the actual value.
- **No runtime validation:** Assertions do not confirm that the value matches the asserted type.
- **Syntax:** Use `value as Type`.
- **DOM operations:** Assertions can describe expected element types, but runtime checks are safer when an element might be missing or have a different type.
- **External data:** Validate API responses and other untrusted values before relying on their structure.
- **Type narrowing:** Prefer checks such as `typeof` and `instanceof` when you need to verify a value's actual type.

### Interview Question

**Q: What is the difference between type assertion and type casting?**

**Answer:** In TypeScript, type assertion tells the compiler to treat a value as a specified type without changing the runtime value. Type conversion actually changes a value's representation or type at runtime. TypeScript assertions are not runtime validation and should only be used when the developer has sufficient knowledge about the value.

# 10. Type Inference vs Type Assertion

**Type Inference** and **Type Assertion** are two different concepts in TypeScript.

- **Type Inference:** TypeScript automatically determines a value's type based on its value or context.
- **Type Assertion:** The developer explicitly tells TypeScript to treat a value as a particular type.

## 1. Type Inference

Type inference allows TypeScript to determine a variable's type automatically without requiring an explicit type annotation.

### Example

```typescript
let name = "Kamesh";
let age = 25;
let isDeveloper = true;
```

**Explanation:**

- TypeScript infers `name` as `string`.
- TypeScript infers `age` as `number`.
- TypeScript infers `isDeveloper` as `boolean`.

You do not need to specify these types manually.

```typescript
let age = 25;

age = 30; // Valid
// age = "30";  // Error
```

TypeScript infers `age` as `number` and checks subsequent assignments against that type.

## 2. Type Assertion

Type assertion tells TypeScript to treat a value as a specified type.

It is useful when you know more about a value than TypeScript can determine from its current type.

### Example

```typescript
const value: unknown = "Kamesh";

const name = value as string;

console.log(name.toUpperCase()); // KAMESH
```

**Explanation:**

- `value` has the declared type `unknown`.
- `value as string` tells TypeScript to treat the value as a string.
- `toUpperCase()` can then be called without a TypeScript error.

**Important:** Type assertion does not convert or validate the value at runtime. You must ensure that the value really is a string.

## 3. Type Inference vs Type Assertion

| Feature           | Type Inference                                | Type Assertion                                                |
| ----------------- | --------------------------------------------- | ------------------------------------------------------------- |
| Meaning           | TypeScript determines the type automatically. | Developer explicitly specifies how a value should be treated. |
| Syntax            | No special keyword required.                  | Uses `as` or angle-bracket syntax.                            |
| Purpose           | Automatically determines types.               | Provides additional type information to the compiler.         |
| Runtime behaviour | Does not perform runtime type conversion.     | Does not perform runtime type conversion.                     |
| Type safety       | TypeScript checks against the inferred type.  | The assertion itself does not validate the actual value.      |
| Example           | `let age = 25;`                               | `value as string`                                             |

## 4. Using Both Concepts Together

Type inference and type assertion can work together.

```typescript
const value: unknown = "Hello TypeScript";

const message = value as string;

console.log(message.toUpperCase()); // HELLO TYPESCRIPT
```

Here:

1. `value` is explicitly declared as `unknown`.
2. `value as string` is a type assertion.
3. TypeScript infers the type of `message` as `string` from the asserted expression.

Therefore, the same example demonstrates both concepts.

## 5. Important Interview Question

**Q: What is the main difference between Type Inference and Type Assertion?**

**Answer:** Type inference allows TypeScript to determine a value's type automatically based on its value or context. Type assertion allows the developer to explicitly tell TypeScript to treat a value as a particular type without changing or validating the value at runtime.

### Key Takeaway

- **Type Inference:** TypeScript determines the type automatically.
- **Type Assertion:** The developer specifies the type to use for type checking.
- **Type Annotation:** The developer explicitly declares a variable's type, such as `let age: number = 25;`.

These are three related but different TypeScript concepts.

# 11. Enum in TypeScript

An **enum (Enumeration)** defines a set of named constants. Enums help represent a fixed group of related values, such as user roles, payment statuses, and directions.

## 1. Numeric Enum

A numeric enum assigns numeric values to its members. By default, values start at `0` and increment by `1`.

```typescript
enum Status {
  Pending,
  Approved,
  Rejected,
}

console.log(Status.Pending); // 0
console.log(Status.Approved); // 1
console.log(Status.Rejected); // 2
```

### Assigning Custom Values

You can assign values manually.

```typescript
enum Status {
  Pending = 1,
  Approved = 2,
  Rejected = 3,
}

console.log(Status.Pending); // 1
console.log(Status.Approved); // 2
console.log(Status.Rejected); // 3
```

You can also specify the starting value and let TypeScript increment subsequent values.

```typescript
enum Status {
  Pending = 10,
  Approved,
  Rejected,
}

console.log(Status.Pending); // 10
console.log(Status.Approved); // 11
console.log(Status.Rejected); // 12
```

## 2. String Enum

A string enum assigns string values to its members. Each member must have an explicit string value.

```typescript
enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}

const role: Role = Role.Admin;

console.log(role); // ADMIN
```

### Real-Time Example

```typescript
enum PaymentStatus {
  Pending = "PENDING",
  Completed = "COMPLETED",
  Failed = "FAILED",
}

function processPayment(status: PaymentStatus): void {
  if (status === PaymentStatus.Completed) {
    console.log("Payment successful");
  } else if (status === PaymentStatus.Pending) {
    console.log("Payment is processing");
  } else {
    console.log("Payment failed");
  }
}

processPayment(PaymentStatus.Completed);
// Payment successful
```

**Use case:** Enums are useful when a variable should represent one of a fixed set of predefined options.

## 3. Heterogeneous Enum

A **heterogeneous enum** contains both numeric and string members.

```typescript
enum Data {
  Id = 1,
  Name = "Kamesh",
  Active = 2,
}

console.log(Data.Id); // 1
console.log(Data.Name); // Kamesh
console.log(Data.Active); // 2
```

**Note:** Heterogeneous enums are supported, but they are generally discouraged because mixing strings and numbers can make the code harder to understand.

## 4. Reverse Mapping in Numeric Enums

Numeric enums support reverse mapping. You can retrieve the member name using its numeric value.

```typescript
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

console.log(Direction.Up); // 0
console.log(Direction[0]); // Up
```

**Important:** Reverse mapping is available for numeric enums, but not for string enums.

## 5. `const enum`

A `const enum` is a TypeScript feature designed to reduce the generated JavaScript code by inlining enum values during compilation.

```typescript
const enum Direction {
  Up,
  Down,
  Left,
  Right,
}

const direction = Direction.Up;

console.log(direction); // 0
```

When compiled with the usual TypeScript settings, the enum value is inlined instead of generating a runtime enum object.

**Note:** The exact behaviour depends on TypeScript compiler settings and the build tool. `const enum` also has restrictions, especially when working across packages or with isolated module compilation.

## 6. Difference Between `enum` and `const`

| Feature      | `enum`                                            | `const`                                        |
| ------------ | ------------------------------------------------- | ---------------------------------------------- |
| Purpose      | Defines a group of named members                  | Declares a variable that cannot be reassigned  |
| Values       | Contains multiple related members                 | Stores one value, object, array, or other data |
| Example      | `enum Color { Red, Blue }`                        | `const color = "Red"`                          |
| Reassignment | Enum members cannot be reassigned                 | The declared variable cannot be reassigned     |
| JavaScript   | Regular enums generally generate a runtime object | `const` remains a JavaScript declaration       |
| Language     | TypeScript feature                                | JavaScript feature                             |

### Example

```typescript
enum Color {
  Red = "RED",
  Blue = "BLUE",
}

const selectedColor = Color.Red;

console.log(selectedColor); // RED
```

Here, `Color` defines a group of related values, while `selectedColor` stores one of those values.

### Alternative: `const` Object with `as const`

You can also use a constant object instead of an enum.

```typescript
const Role = {
  Admin: "ADMIN",
  User: "USER",
  Guest: "GUEST",
} as const;

type Role = (typeof Role)[keyof typeof Role];

const currentRole: Role = "ADMIN";

console.log(currentRole); // ADMIN
```

The `as const` assertion preserves the exact string literal types and makes the object's properties readonly at the type level.

## 7. Important Points

- **Numeric enums** use numbers and start at `0` by default.
- **String enums** use explicit string values.
- **Heterogeneous enums** combine string and numeric members.
- **Numeric enums** support reverse mapping.
- **String enums** do not support reverse mapping.
- **`const enum`** can reduce generated code by inlining values.
- **`enum` and `const` are different:** one defines named members, while the other declares a variable.

## 8. Interview Questions

**Q1. What is an enum in TypeScript?**

An enum defines a group of named constants representing related values.

**Q2. What is the default starting value of a numeric enum?**

It starts at `0` unless a different value is specified.

**Q3. What is the difference between numeric and string enums?**

Numeric enums use numeric values and support reverse mapping. String enums use explicit string values and do not support reverse mapping.

**Q4. What is a heterogeneous enum?**

An enum containing both string and numeric members.

**Q5. What is the difference between `enum` and `const enum`?**

A regular enum generally generates a runtime object. A `const enum` is generally inlined during compilation, subject to compiler settings.

**Q6. Can we use `const` instead of an enum?**

Yes. A `const` object with `as const` can provide a similar alternative, particularly when you want string literal types without a TypeScript enum.

# 13. Generics

**Generics** allow you to write reusable code that works with different types while maintaining type safety.

Instead of creating separate functions for strings, numbers, and other types, you can create a generic function that works with multiple types.

## Without Generics

Without generics, you may need separate functions for different data types.

```typescript
function getNumber(value: number): number {
  return value;
}

function getString(value: string): string {
  return value;
}

console.log(getNumber(100)); // 100
console.log(getString("Kamesh")); // Kamesh
```

Here, we need separate functions to handle different types.

## With Generics

Generics allow a single function to work with different types.

```typescript
function identity<T>(value: T): T {
  return value;
}

console.log(identity<number>(100)); // 100
console.log(identity<string>("Kamesh")); // Kamesh
console.log(identity<boolean>(true)); // true
```

### How It Works

- **`T`** is a type parameter that represents the type passed to the function.
- **`value: T`** means the parameter has the same type as `T`.
- **`: T`** means the function returns the same type.
- **`<number>`, `<string>`, and `<boolean>`** explicitly specify the generic type.

TypeScript can also automatically infer the type from the argument.

```typescript
identity(100);
identity("Kamesh");
identity(true);
```

This is called **Generic Type Inference**.

## Generic Arrays

Generics can be used with arrays to preserve the type of their elements.

```typescript
function getFirst<T>(items: T[]): T | undefined {
  return items[0];
}

console.log(getFirst<number>([10, 20, 30])); // 10
console.log(getFirst<string>(["A", "B", "C"])); // A
```

### How It Works

- **`T[]`** represents an array of type `T`.
- **`items[0]`** returns the first element.
- **`T | undefined`** means the function returns a value of type `T` or `undefined` if the array is empty.

Example:

```typescript
console.log(getFirst([10, 20, 30])); // 10
console.log(getFirst([])); // undefined
```

## Generic Interfaces

Generics allow interfaces to work with different data types.

```typescript
interface ApiResponse<T> {
  data: T;
  success: boolean;
}

const response: ApiResponse<string> = {
  data: "User created successfully",
  success: true,
};

const userResponse: ApiResponse<{ id: number; name: string }> = {
  data: {
    id: 1,
    name: "Kamesh",
  },
  success: true,
};
```

### How It Works

- **`ApiResponse<T>`** is a generic interface.
- **`data: T`** allows the `data` property to hold different types.
- **`success: boolean`** indicates whether the operation was successful.
- **`ApiResponse<string>`** means the `data` property must be a string.
- **`ApiResponse<{ id: number; name: string }>`** means the `data` property must be an object with `id` and `name` properties of the specified types.

The same interface can represent different API response structures without duplicating the interface definition.

## Generic Constraints

**Generic constraints** restrict the types that can be used with a generic type parameter.

The `extends` keyword is used to define a constraint.

```typescript
function getLength<T extends { length: number }>(value: T): number {
  return value.length;
}

console.log(getLength("Kamesh")); // 6
console.log(getLength([10, 20, 30])); // 3
```

### How It Works

- **`T`** represents a generic type.
- **`extends { length: number }`** requires the type to have a `length` property whose value is a number.
- **`value: T`** represents the function parameter.
- **`: number`** specifies the function's return type.

Strings and arrays satisfy this constraint because both have a numeric `length` property.

Example:

```typescript
getLength("Hello"); // 5
getLength([10, 20, 30]); // 3

getLength(100); // Error: number has no length property
```

**Important:** In this example, `extends` defines a generic constraint, not class inheritance.

## Generic Constraints Using `keyof`

The `keyof` operator extracts the property names of a type and creates a union of those keys.

```typescript
type User = {
  name: string;
  age: number;
};

type UserKeys = keyof User;

// Equivalent to:
type UserKeys = "name" | "age";
```

We can use `keyof` with generics to restrict a parameter to valid object keys.

```typescript
const User = {
  name: "Ranjith",
  age: 25,
};

const getUserInfo = <T, U extends keyof T>(obj: T, key: U) => {
  return obj[key];
};

console.log(getUserInfo(User, "name")); // Ranjith
console.log(getUserInfo(User, "age")); // 25

getUserInfo(User, "email"); // Error: email is not a valid key
```

### How It Works

- **`T`** represents the object type.
- **`U extends keyof T`** restricts `U` to the keys of `T`.
- **`obj: T`** represents the object passed to the function.
- **`key: U`** represents a valid property name.
- **`obj[key]`** returns the value associated with the specified key.

TypeScript can infer the generic types automatically, so explicitly passing them is usually unnecessary.

## Advantages of Generics

- **Code Reusability:** Use one function or interface with different types.
- **Type Safety:** Detect type errors during development.
- **Type Preservation:** Maintain the relationship between input and output types.
- **Less Duplication:** Avoid writing separate implementations for each data type.
- **Flexibility:** Use generics with functions, arrays, interfaces, classes, and type aliases.

## Key Points

- Generics use type parameters such as `<T>` to support different data types.
- Generic types can be specified explicitly or inferred automatically.
- `T[]` represents an array containing elements of type `T`.
- Generic interfaces can represent different data structures.
- **`extends`** defines constraints on generic types.
- **`keyof`** extracts property names from a type.
- **`U extends keyof T`** ensures that a key belongs to the specified object type.

**Remember:** Generics improve code reusability while maintaining type safety.

# 14. Object-Oriented Programming (OOP)

**Object-Oriented Programming (OOP)** is a programming approach that organises code around objects containing data and behaviour.

The four main OOP principles are:

1. **Encapsulation**
2. **Inheritance**
3. **Polymorphism**
4. **Abstraction**

## 14.1 Class and Object

A **class** is a blueprint for creating objects, whereas an **object** is an instance of a class.

### Example

```typescript
class Car {
  brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }

  drive(): void {
    console.log(`${this.brand} is moving`);
  }
}

const car1 = new Car("BMW");
const car2 = new Car("Audi");

car1.drive();
car2.drive();
```

### Output

```text
BMW is moving
Audi is moving
```

### Explanation

- **Class:** `Car` is the blueprint for creating car objects.
- **Object:** `car1` and `car2` are instances of the `Car` class.
- **Property:** `brand` stores the car's brand.
- **Constructor:** `constructor()` initialises an object when it is created.
- **Method:** `drive()` defines the behaviour of the car.
- **`this`:** Refers to the current object instance.

## 14.2 Encapsulation

**Encapsulation** means keeping data and the methods that operate on it together while controlling access to internal data.

TypeScript provides access modifiers such as `public`, `private`, and `protected`.

### Example

```typescript
class BankAccount {
  private balance: number = 0;

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount();

account.deposit(1000);

console.log(account.getBalance()); // 1000

// account.balance = 5000; // Error
```

### Output

```text
1000
```

### Explanation

- **`private`:** Restricts direct access to `balance` from outside the class through normal TypeScript type checking.
- **`deposit()`:** Allows the balance to be increased through a controlled method.
- **`getBalance()`:** Provides access to the current balance.
- The `deposit()` method only accepts positive amounts.

### Access Modifiers

| Modifier    | Description                                                                                       |
| ----------- | ------------------------------------------------------------------------------------------------- |
| `public`    | Accessible from outside and inside the class.                                                     |
| `private`   | Accessible only within the declaring class through normal TypeScript type checking.               |
| `protected` | Accessible within the declaring class and its subclasses through normal TypeScript type checking. |

**Note:** TypeScript's `private` and `protected` modifiers are primarily enforced during type checking. JavaScript's `#property` syntax provides runtime-enforced private fields.

### Benefits of Encapsulation

- Protects internal data from unintended access.
- Allows controlled modification of data.
- Improves code maintainability.
- Makes it easier to enforce validation rules.

## 14.3 Inheritance

**Inheritance** allows one class to acquire properties and methods from another class.

The `extends` keyword is used to implement inheritance.

### Example

```typescript
class Animal {
  eat(): void {
    console.log("Animal is eating");
  }
}

class Dog extends Animal {
  bark(): void {
    console.log("Dog is barking");
  }
}

const dog = new Dog();

dog.eat();
dog.bark();
```

### Output

```text
Animal is eating
Dog is barking
```

### Explanation

- **Parent class:** `Animal` contains the `eat()` method.
- **Child class:** `Dog` inherits from `Animal`.
- **`extends`:** Establishes the inheritance relationship.
- **Code reuse:** The `Dog` class can use `eat()` without defining it again.

### Benefits of Inheritance

- Reuses existing code.
- Reduces code duplication.
- Supports hierarchical relationships between classes.
- Allows subclasses to extend or customise inherited behaviour.

## 14.4 Polymorphism

**Polymorphism** means that the same method or interface can have different behaviours depending on the object.

One common way to implement polymorphism in TypeScript is through **method overriding**.

### Example: Method Overriding

```typescript
class Animal {
  sound(): void {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  override sound(): void {
    console.log("Dog barks");
  }
}

class Cat extends Animal {
  override sound(): void {
    console.log("Cat meows");
  }
}

const animals: Animal[] = [new Dog(), new Cat()];

animals.forEach((animal) => animal.sound());
```

### Output

```text
Dog barks
Cat meows
```

### Explanation

- **`Animal`:** Defines the original `sound()` method.
- **`Dog`:** Overrides `sound()` with its own implementation.
- **`Cat`:** Overrides `sound()` with a different implementation.
- **`override`:** Explicitly indicates that a method is intended to override an inherited method.
- **`Animal[]`:** Allows an array to contain instances of `Animal` and its subclasses.

When `animal.sound()` is called, the implementation belonging to the actual object is executed.

### Benefits of Polymorphism

- Allows different objects to share a common interface.
- Makes code more flexible and reusable.
- Reduces the need for repeated conditional checks.
- Makes it easier to introduce new implementations.

## 14.5 Abstraction

**Abstraction** means exposing essential functionality while hiding implementation details.

In TypeScript, abstract classes can define methods that subclasses must implement.

### Example

```typescript
abstract class Payment {
  abstract pay(amount: number): void;

  receipt(): void {
    console.log("Payment completed");
  }
}

class UpiPayment extends Payment {
  override pay(amount: number): void {
    console.log(`Paid ₹${amount} using UPI`);
  }
}

const payment = new UpiPayment();

payment.pay(500);
payment.receipt();
```

### Output

```text
Paid ₹500 using UPI
Payment completed
```

### Explanation

- **`abstract class Payment`:** Defines a base class that cannot be instantiated directly.
- **`abstract pay()`:** Declares a method that a concrete subclass must implement.
- **`receipt()`:** Provides a method with an implementation that subclasses can inherit.
- **`UpiPayment`:** Implements the required `pay()` method.
- **`override`:** Indicates that `UpiPayment` is implementing an inherited method.

You cannot directly create an instance of an abstract class.

```typescript
// Error: Cannot create an instance of an abstract class.
const payment = new Payment();
```

### Benefits of Abstraction

- Hides unnecessary implementation details.
- Defines a common structure for related classes.
- Enforces the implementation of required methods.
- Improves code organisation and maintainability.

## 14.6 OOP Principles Summary

| Principle     | Meaning                                                          | TypeScript Feature              |
| ------------- | ---------------------------------------------------------------- | ------------------------------- |
| Encapsulation | Controls access to internal data.                                | `private`, `protected`, methods |
| Inheritance   | Reuses behaviour from another class.                             | `extends`                       |
| Polymorphism  | Allows different implementations of the same method.             | Method overriding               |
| Abstraction   | Exposes essential behaviour while hiding implementation details. | `abstract` classes and methods  |

## 14.7 Key Points

- A **class** is a blueprint, and an **object** is an instance of a class.
- A **constructor** initialises an object when it is created.
- **Encapsulation** controls access to internal data.
- **Inheritance** allows a class to reuse properties and methods from another class.
- **Polymorphism** allows the same method to behave differently for different objects.
- **Abstraction** exposes essential functionality while hiding implementation details.
- The `extends` keyword supports class inheritance.
- The `override` keyword identifies methods intended to override inherited methods.
- Abstract classes cannot be instantiated directly.

**Remember:** OOP helps organise code into reusable, maintainable structures by combining data and behaviour into objects.

# 15. Intersection Types

An **intersection type** combines multiple types into one type that must satisfy all the combined types.

In TypeScript, the **`&` operator** is used to create intersection types.

## Example

```typescript
type Person = {
  name: string;
};

type Employee = {
  employeeId: number;
};

type EmployeeDetails = Person & Employee;

const employee: EmployeeDetails = {
  name: "Kamesh",
  employeeId: 101,
};

console.log(employee);
```

### Output

```text
{
  name: "Kamesh",
  employeeId: 101
}
```

### Explanation

- **`Person`** defines a `name` property of type `string`.
- **`Employee`** defines an `employeeId` property of type `number`.
- **`Person & Employee`** combines both types.
- **`EmployeeDetails`** requires both `name` and `employeeId` properties.
- The `employee` object must satisfy both types.

## Intersection Types with Multiple Types

You can combine more than two types using the `&` operator.

```typescript
type Person = {
  name: string;
};

type Employee = {
  employeeId: number;
};

type Admin = {
  privileges: string[];
};

type AdminUser = Person & Employee & Admin;

const adminUser: AdminUser = {
  name: "Kamesh",
  employeeId: 101,
  privileges: ["create-server", "delete-server"],
};

console.log(adminUser);
```

### Output

```text
{
  name: "Kamesh",
  employeeId: 101,
  privileges: ["create-server", "delete-server"]
}
```

Here, `AdminUser` must satisfy all three types: `Person`, `Employee`, and `Admin`.

## Intersection Types with Interfaces

You can also combine interfaces using the `&` operator.

```typescript
interface Person {
  name: string;
}

interface Employee {
  employeeId: number;
}

type EmployeeDetails = Person & Employee;

const employee: EmployeeDetails = {
  name: "Kamesh",
  employeeId: 101,
};
```

**Note:** The `&` operator creates an intersection type. The `extends` keyword can also combine interface requirements when defining a new interface.

```typescript
interface EmployeeDetails extends Person, Employee {}
```

Both approaches require the resulting object to satisfy the properties of both interfaces.

## Union vs Intersection Types

| Union Type (`\|`)                                            | Intersection Type (`&`)                              |
| ------------------------------------------------------------ | ---------------------------------------------------- |
| Allows a value that satisfies at least one alternative type. | Requires a value that satisfies all combined types.  |
| Uses the `\|` operator.                                      | Uses the `&` operator.                               |
| Example: `string \| number`                                  | Example: `Person & Employee`                         |
| Useful when a value can have different possible types.       | Useful when combining multiple sets of requirements. |

### Union Type Example

```typescript
let value: string | number;

value = "Hello"; // Valid
value = 100; // Valid
```

The value can be either a string or a number.

### Intersection Type Example

```typescript
type Person = {
  name: string;
};

type Employee = {
  employeeId: number;
};

type EmployeeDetails = Person & Employee;

const employee: EmployeeDetails = {
  name: "Kamesh",
  employeeId: 101,
};
```

The object must contain both `name` and `employeeId` with the correct types.

## Key Points

- **Intersection types** combine multiple types into one.
- The **`&` operator** is used to create intersection types.
- The resulting type must satisfy all combined type requirements.
- You can combine type aliases and interfaces using intersection types.
- Use **union types (`|`)** when a value can satisfy alternative types.
- Use **intersection types (`&`)** when a value must satisfy multiple type requirements.

**Remember:** Union means _one of the alternatives_, while intersection means _all combined requirements_.

# 16. Literal Types

A **literal type** restricts a variable or parameter to specific values instead of allowing every value of a general type.

For example, a `string` type accepts any string, but a literal type can allow only `"left"`, `"right"`, `"up"`, or `"down"`.

## Example

```typescript
let direction: "left" | "right" | "up" | "down";

direction = "left"; // Valid
direction = "up"; // Valid

// direction = "forward"; // Error
```

### Explanation

- **`"left" | "right" | "up" | "down"`** defines the permitted string values.
- The variable `direction` can contain only one of these four values.
- Assigning `"forward"` causes a TypeScript error because it is not an allowed value.

## Literal Types in Functions

Literal types can restrict the values accepted by function parameters.

```typescript
type Status = "success" | "error" | "loading";

function showStatus(status: Status): void {
  console.log(status);
}

showStatus("success"); // Valid
showStatus("loading"); // Valid

// showStatus("pending"); // Error
```

### Explanation

- **`Status`** is a type alias containing three permitted string values.
- **`status: Status`** means the function accepts only those values.
- Passing `"pending"` causes a TypeScript error because it is not included in the `Status` type.

## Practical Example: User Roles

Literal types are useful for restricting user roles to predefined values.

```typescript
type UserRole = "admin" | "user" | "guest";

function getUserRole(role: UserRole): void {
  console.log(`User role: ${role}`);
}

getUserRole("admin"); // User role: admin
getUserRole("user"); // User role: user

// getUserRole("manager"); // Error
```

Here, only `"admin"`, `"user"`, and `"guest"` are valid roles.

## Literal Types with Numbers

Literal types can also restrict values to specific numbers.

```typescript
let quantity: 1 | 2 | 3;

quantity = 1; // Valid
quantity = 3; // Valid

// quantity = 5; // Error
```

Here, `quantity` can contain only `1`, `2`, or `3`.

## Use Cases of Literal Types

Literal types are useful for:

- **API status values:** `"success"`, `"error"`, `"loading"`.
- **Button variants:** `"primary"`, `"secondary"`, `"danger"`.
- **User roles:** `"admin"`, `"user"`, `"guest"`.
- **Application states:** `"active"`, `"inactive"`, `"pending"`.
- **Directions:** `"left"`, `"right"`, `"up"`, `"down"`.
- **Numeric options:** Restricting a value to specific numbers.

## Key Points

- Literal types restrict values to specific permitted options.
- The **union operator (`|`)** can combine multiple literal values.
- Literal types work with strings, numbers, booleans, and other literal values.
- They help catch invalid values during TypeScript type checking.
- They are useful for making function parameters and variables more precise.

**Remember:** A general type such as `string` accepts any string, whereas a literal type accepts only the specified values.

# 18. Conditional Types

A **conditional type** selects a type based on a condition. It works like a ternary operator (`? :`), but it evaluates types instead of runtime values.

## Syntax

```ts
Condition ? TypeIfTrue : TypeIfFalse;
```

## Example

```ts
type CheckType<T> = T extends string ? "Text" : "Other";

type A = CheckType<string>; // "Text"
type B = CheckType<number>; // "Other"
```

### Explanation

- If `T` extends `string`, the result is `"Text"`.
- Otherwise, the result is `"Other"`.
- `T` is a generic type parameter.
- `extends` checks whether `T` is assignable to `string`.
- `?` specifies the type returned when the condition is true.
- `:` specifies the type returned when the condition is false.

## Practical Example

Conditional types can be used to define different API response structures based on the input type.

```ts
type ApiResult<T> = T extends string ? { message: T } : { data: T };

type MessageResult = ApiResult<string>;
// { message: string }

type UserResult = ApiResult<number>;
// { data: number }
```

### Explanation

**1. When the input type is `string`:**

```ts
type MessageResult = ApiResult<string>;
// { message: string }
```

The condition is true, so the result contains a `message` property.

**2. When the input type is `number`:**

```ts
type UserResult = ApiResult<number>;
// { data: number }
```

The condition is false, so the result contains a `data` property.

## Key Points

- Conditional types use the `extends`, `?`, and `:` operators.
- They select a type based on a type condition.
- They work with generic types.
- They help create reusable and type-safe code.
- Conditional types are evaluated at compile time, not runtime.

**Conditional types are useful for building reusable, type-safe libraries and handling different data structures.**

# 19. TypeScript Utility Types — Very Important

**Utility types** are built-in TypeScript types that transform existing types into new types.

They reduce the need to manually create similar interfaces and type aliases.

Consider this base type:

```ts
interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
}
```

We will use it for the following examples.

---

## 19.1 `Partial<T>`

**Definition:** Makes all properties of a type optional.

### Example

```ts
type UpdateUser = Partial<User>;
```

Equivalent to:

```ts
type UpdateUser = {
  id?: number;
  name?: string;
  email?: string;
  age?: number;
};
```

### Usage

```ts
const update: UpdateUser = {
  name: "Kamesh",
};
```

**Use case:** Updating only selected fields of a user.

```ts
function updateUser(id: number, data: Partial<User>): void {
  console.log(id, data);
}

updateUser(1, { name: "Arun" });
```

---

## 19.2 `Required<T>`

**Definition:** Makes all properties required, including properties that were originally optional.

```ts
type RequiredUser = Required<User>;
```

The resulting type requires `age` as well.

```ts
const user: RequiredUser = {
  id: 1,
  name: "Kamesh",
  email: "kamesh@example.com",
  age: 25,
};
```

Without `age`, this object would cause a type error.

**Use case:** Ensuring an object has every property defined in its type.

---

## 19.3 `Readonly<T>`

**Definition:** Makes all properties readonly, preventing reassignment through that type.

```ts
type ReadonlyUser = Readonly<User>;

const user: ReadonlyUser = {
  id: 1,
  name: "Kamesh",
  email: "kamesh@example.com",
  age: 25,
};

// user.name = "Arun"; // Error
```

**Use case:** Preventing accidental property changes.

**Important:** `Readonly<T>` is a compile-time restriction. It does not automatically freeze the object at runtime.

---

## 19.4 `Pick<T, K>`

**Definition:** Selects specific properties from an existing type.

### Syntax

```ts
Pick<Type, Keys>;
```

### Example

```ts
type UserProfile = Pick<User, "name" | "email">;
```

Result:

```ts
type UserProfile = {
  name: string;
  email: string;
};
```

### Usage

```ts
const profile: UserProfile = {
  name: "Kamesh",
  email: "kamesh@example.com",
};
```

**Use case:** Creating a smaller type for a profile card or API response.

---

## 19.5 `Omit<T, K>`

**Definition:** Creates a type by excluding specific properties.

### Example

```ts
type PublicUser = Omit<User, "email">;
```

Result:

```ts
type PublicUser = {
  id: number;
  name: string;
  age?: number;
};
```

The `email` property is excluded.

**Use case:** Removing sensitive or unnecessary fields from a type.

**Note:** `Omit` changes the TypeScript type; it does not remove properties from an actual JavaScript object.

---

## 19.6 `Record<K, T>`

**Definition:** Creates an object type whose keys are `K` and whose values are `T`.

### Example

```ts
type Role = "admin" | "user" | "guest";

type RolePermissions = Record<Role, string[]>;

const permissions: RolePermissions = {
  admin: ["create", "read", "update", "delete"],
  user: ["read", "update"],
  guest: ["read"],
};
```

Every role must be present, and each role must have an array of strings.

### Another example

```ts
type UserScores = Record<string, number>;

const scores: UserScores = {
  Kamesh: 90,
  Arun: 85,
  Ravi: 95,
};
```

**Use case:** Creating dictionaries, configuration objects, permission maps, and lookup tables.

---

## 19.7 `Exclude<T, U>`

**Definition:** Removes from `T` every union member that is assignable to `U`.

### Example

```ts
type Status = "success" | "error" | "loading";

type FinalStatus = Exclude<Status, "loading">;
```

Result:

```ts
type FinalStatus = "success" | "error";
```

### Another example

```ts
type Values = string | number | boolean;

type NonBoolean = Exclude<Values, boolean>;
// string | number
```

**Use case:** Removing unwanted types from a union.

---

## 19.8 `Extract<T, U>`

**Definition:** Keeps from `T` only the union members that are assignable to `U`.

### Example

```ts
type Status = "success" | "error" | "loading";

type ActiveStatus = Extract<Status, "success" | "loading">;
```

Result:

```ts
type ActiveStatus = "success" | "loading";
```

### Another example

```ts
type Values = string | number | boolean;

type TextOnly = Extract<Values, string>;
// string
```

### Exclude vs Extract

| `Exclude<T, U>`                                | `Extract<T, U>`                                |
| ---------------------------------------------- | ---------------------------------------------- |
| Removes matching union members                 | Keeps matching union members                   |
| `Exclude<string \| number, string>` → `number` | `Extract<string \| number, string>` → `string` |

---

## 19.9 `NonNullable<T>`

**Definition:** Removes `null` and `undefined` from a type.

### Example

```ts
type Value = string | number | null | undefined;

type SafeValue = NonNullable<Value>;
```

Result:

```ts
type SafeValue = string | number;
```

### Another example

```ts
type UserName = string | null | undefined;

type ValidUserName = NonNullable<UserName>;
// string
```

**Use case:** Defining types for values that must not be null or undefined.

**Important:** `NonNullable<T>` does not check a runtime value or remove `null` from an actual variable. You must validate the value at runtime when necessary.

---

## 19.10 `ReturnType<T>`

**Definition:** Extracts the return type of a function.

### Example

```ts
function getUser() {
  return {
    id: 1,
    name: "Kamesh",
  };
}

type UserResponse = ReturnType<typeof getUser>;
```

The resulting type is:

```ts
type UserResponse = {
  id: number;
  name: string;
};
```

You can reuse it:

```ts
const user: UserResponse = {
  id: 2,
  name: "Arun",
};
```

### ReturnType with an async function

```ts
async function fetchUser() {
  return {
    id: 1,
    name: "Kamesh",
  };
}

type FetchUserResult = ReturnType<typeof fetchUser>;
```

Here, `FetchUserResult` is a `Promise` containing the returned object type.

To extract the object type itself:

```ts
type UserData = Awaited<ReturnType<typeof fetchUser>>;
```

**Use case:** Reusing function return types without defining them separately.

---

## 19.11 Quick Revision Table

| Utility Type     | Purpose                                                    | Example                               |
| ---------------- | ---------------------------------------------------------- | ------------------------------------- |
| `Partial<T>`     | Makes all properties optional                              | `Partial<User>`                       |
| `Required<T>`    | Makes all properties required                              | `Required<User>`                      |
| `Readonly<T>`    | Makes all properties readonly                              | `Readonly<User>`                      |
| `Pick<T, K>`     | Selects specific properties                                | `Pick<User, "name" \| "email">`       |
| `Omit<T, K>`     | Excludes specific properties                               | `Omit<User, "email">`                 |
| `Record<K, T>`   | Creates an object type with specified keys and value types | `Record<Role, string[]>`              |
| `Exclude<T, U>`  | Removes matching union members                             | `Exclude<Status, "loading">`          |
| `Extract<T, U>`  | Keeps matching union members                               | `Extract<Status, "success">`          |
| `NonNullable<T>` | Removes `null` and `undefined`                             | `NonNullable<Value>`                  |
| `ReturnType<T>`  | Extracts a function's return type                          | `ReturnType<typeof getUser>`          |
| `Awaited<T>`     | Recursively unwraps promise-like types                     | `Awaited<Promise<string>>` → `string` |

---

## 19.12 Important Interview Points

- **Utility types transform existing types** instead of requiring you to define everything manually.
- `Partial<T>` and `Required<T>` change whether properties are optional.
- `Readonly<T>` prevents property reassignment through the resulting type.
- `Pick<T, K>` selects properties, whereas `Omit<T, K>` excludes properties.
- `Record<K, T>` creates an object type using specified keys and a common value type.
- `Exclude<T, U>` removes matching union members, whereas `Extract<T, U>` keeps them.
- `NonNullable<T>` removes `null` and `undefined` from a type.
- `ReturnType<T>` extracts a function's return type.
- `Awaited<T>` extracts the resolved type of a promise-like type.

**Remember:** These utility types operate at the TypeScript type level. They do not automatically modify objects or perform runtime validation.
