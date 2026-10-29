# CLI Tools

CLI tools are **command-line programs** that help developers set up, run, and manage a React project without doing everything manually.

They handle tasks such as:

- **Project Setup:** Create a new React project with the required folder structure and configuration.
- **Development Server:** Start a local server to run and test the application.
- **Bundling:** Bundle JavaScript, CSS, and other assets for production.
- **Build and Optimization:** Optimize application files for better performance.

**Why use CLI tools?**

Most modern React setups use CLI tools because they **save development time, simplify configuration, and reduce manual errors**.

**Examples:**

- **Vite:** A fast tool for creating and running React applications.
- **Create React App (CRA):** An older React project setup tool that is now deprecated for new projects.
- **Next.js CLI:** A command-line tool for creating and managing Next.js applications.

# Vite

**Vite** is a modern frontend build tool that provides a fast development server and an optimized production build.

## Key Features

- **Fast Development Server:** Starts the development server quickly.
- **Hot Module Replacement (HMR):** Updates changes in the browser without requiring a full page reload in most cases.
- **Native ES Modules:** Uses native ES modules during development to avoid bundling the entire application upfront.
- **Production Build:** Bundles and optimizes application files for production.
- **React Project Setup:** Helps create and configure new React applications easily.

## Why Use Vite?

Vite improves development speed, reduces startup time, and simplifies the build process compared to many traditional build tools.

## Example: Create a React Application

```bash
npm create vite@latest my-react-app -- --template react
```

Navigate to the project directory:

```bash
cd my-react-app
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

**Note:** Vite uses a development server for local testing and creates an optimized production build using `npm run build`.

# React

## What is React?

**React** is an open-source JavaScript library used to build user interfaces (UI), especially for web applications. It was developed by Facebook (now Meta).

React allows developers to build interactive UIs using reusable components.

**Example:**

```jsx
function App() {
  return <h1>Hello, React!</h1>;
}

export default App;
```

# Features of React

## 1. Component-Based Architecture

- React divides the UI into small, reusable components.
- Example: Navbar, Sidebar, Header, and Footer.

## 2. JSX

- JSX allows us to write HTML-like syntax inside JavaScript.
- It makes UI code easier to understand.

```jsx
const element = <h1>Hello World</h1>;
```

## 3. Virtual DOM

- React uses a virtual representation of the DOM to identify UI changes.
- It updates the necessary parts of the actual DOM instead of rebuilding the entire UI unnecessarily.

## 4. One-Way Data Binding

- Data generally flows from parent components to child components through props.
- It makes data flow easier to understand and debug.

## 5. Declarative UI

- We describe how the UI should look based on the current state.
- React updates the UI when the state changes.

## 6. Hooks

- Hooks allow function components to use state and other React features.
- Examples: `useState`, `useEffect`, and `useContext`.

## 7. Reusability

- Components can be reused across different pages and applications.
- It reduces code duplication.

## 8. Large Ecosystem

- React has many libraries and tools for routing, state management, testing, and development.
- Examples: React Router, Redux Toolkit, and Vite.

# Why Do We Use React?

- **Reusable Components:** Reduce code duplication and development time.
- **Efficient UI Updates:** Update the UI when data changes.
- **Easy Maintenance:** Split complex applications into smaller components.
- **Interactive Applications:** Build dynamic interfaces such as dashboards, shopping carts, and social media feeds.
- **Strong Community:** Get support, documentation, and third-party libraries.
- **Flexible:** Integrate React into existing projects or use it to build complete frontend applications.

**Example:** In an e-commerce application, React can update the cart count immediately when a user adds a product without reloading the entire page.

# Disadvantages of React

## 1. Learning Curve

- JSX, props, state, hooks, and component lifecycle concepts take time to learn.

## 2. Additional Libraries

- React mainly focuses on the UI.
- Routing and advanced state management may require additional libraries.

## 3. Frequent Ecosystem Changes

- Libraries and recommended development practices can change over time.
- Developers need to keep their knowledge updated.

## 4. SEO Considerations

- Client-side rendered React applications may require additional configuration for search engine optimization.
- Server-side rendering (SSR) or static site generation (SSG) can help.

## 5. Too Many Choices

- Several libraries are available for routing, forms, and state management.
- Choosing the right tools can be confusing for beginners.

## 6. Performance Issues if Poorly Optimized

- Unnecessary re-renders and large bundles can affect performance.
- Proper component design, code splitting, and profiling help solve these issues.

# React vs Traditional JavaScript

| Feature          | React                            | Traditional JavaScript                   |
| ---------------- | -------------------------------- | ---------------------------------------- |
| UI Development   | Component-based                  | Often manually managed                   |
| DOM Updates      | React manages UI updates         | Developers often update the DOM manually |
| Reusability      | High through components          | Depends on implementation                |
| Learning         | Requires learning React concepts | Requires JavaScript knowledge            |
| Additional Tools | Often uses supporting libraries  | Depends on project requirements          |

# Conclusion

**React is a good choice for building interactive, reusable, and maintainable user interfaces.** It simplifies UI development, but developers must learn its concepts and choose suitable supporting tools.

**Interview Tip:** React is a JavaScript library, not a complete frontend framework. It primarily handles the UI layer.

# Components

**Components** are the building blocks of a React application. Each component is usually a JavaScript function that returns UI using JSX. Components can be reused across different parts of an application.

## Benefits of Components

- **Reusability:** Use the same component in multiple places.
- **Readability:** Break complex UI into smaller, manageable parts.
- **Maintainability:** Update a component without changing the entire application.
- **Testability:** Test individual components independently.

## Example

```jsx
function Welcome() {
  return <h1>Welcome to React!</h1>;
}

export default Welcome;
```

**Usage:**

```jsx
function App() {
  return (
    <div>
      <Welcome />
      <Welcome />
    </div>
  );
}

export default App;
```

**Output:** The message "Welcome to React!" appears twice.

**Key Point:** React components can be created using JavaScript functions or classes, but **function components are the preferred approach in modern React development**.

# Functional Components

**Functional components** are JavaScript functions that return JSX to describe the UI in a React application.

They can receive data through **props** and manage state using **React Hooks**.

## Example

```jsx
function Welcome() {
  return <h1>Welcome to React!</h1>;
}

export default Welcome;
```

## Functional Component with Props

```jsx
function Welcome({ name }) {
  return <h1>Welcome, {name}!</h1>;
}

// Usage
<Welcome name="Kamesh" />;
```

## Functional Component with State

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

**Key Points:**

- Functional components are reusable JavaScript functions.
- They receive data through props.
- They use hooks such as `useState` and `useEffect`.
- They are the preferred approach in modern React development.

---

# Class Components

**Class components** are JavaScript classes that extend `React.Component` and implement a `render()` method to return JSX.

They can receive props and manage state using `this.state` and `this.setState()`.

## Example

```jsx
import React from "react";

class Welcome extends React.Component {
  render() {
    return <h1>Welcome to React!</h1>;
  }
}

export default Welcome;
```

## Class Component with Props

```jsx
import React from "react";

class Welcome extends React.Component {
  render() {
    return <h1>Welcome, {this.props.name}!</h1>;
  }
}

// Usage
<Welcome name="Kamesh" />;
```

## Class Component with State

```jsx
import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
```

**Key Points:**

- Class components extend `React.Component`.
- They use a `render()` method to return JSX.
- They access props using `this.props`.
- They manage state using `this.state` and `this.setState()`.
- They can use lifecycle methods such as `componentDidMount()` and `componentWillUnmount()`.

---

# Functional Components vs Class Components

| Feature            | Functional Components                | Class Components                          |
| ------------------ | ------------------------------------ | ----------------------------------------- |
| Definition         | JavaScript function                  | JavaScript class                          |
| JSX rendering      | Returns JSX directly                 | Uses the `render()` method                |
| Props              | Accessed through function parameters | Accessed using `this.props`               |
| State              | Managed using hooks                  | Managed using `this.state`                |
| State updates      | State setter, e.g. `setCount()`      | `this.setState()`                         |
| Lifecycle handling | Hooks such as `useEffect()`          | Lifecycle methods                         |
| `this` keyword     | Not required for component logic     | Commonly used                             |
| Modern React       | Recommended approach                 | Supported, mainly seen in older codebases |

---

# JSX

**JSX (JavaScript XML)** is a syntax extension for JavaScript that allows us to write HTML-like code inside JavaScript files.

React uses JSX to describe the UI. Build tools such as Vite transform JSX into JavaScript that React can process.

## Example

```jsx
function App() {
  const name = "Kamesh";

  return <h1>Hello, {name}!</h1>;
}
```

**Key Points:**

- JSX makes UI code easier to read.
- JavaScript expressions can be written inside `{}`.
- JSX must return a single parent element or a Fragment.
- Use `className` instead of `class` for CSS classes.

---

# Props vs State

**Props** and **state** are used to manage information that affects a component's UI.

- **Props:** Data passed from a parent component to a child component.
- **State:** Data managed by a component that can change over time.

## Example

```jsx
import { useState } from "react";

function Counter({ title }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{title}</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

## Differences

| Props                                       | State                                   |
| ------------------------------------------- | --------------------------------------- |
| Passed from a parent component              | Managed by the component                |
| Read-only for the receiving component       | Updated using a state setter            |
| Used to pass data between components        | Used to manage changing data            |
| Changes when the parent provides new values | Changes when the state setter is called |

**Key Point:** Never modify props or state directly.

---

# Conditional Rendering

**Conditional rendering** means displaying different UI elements based on a condition.

## 1. Using If Statement

```jsx
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome Back!</h1>;
  }

  return <h1>Please Login</h1>;
}
```

## 2. Using Ternary Operator

```jsx
function Greeting({ isLoggedIn }) {
  return (
    <div>{isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Login</h1>}</div>
  );
}
```

## 3. Using Logical AND (&&)

```jsx
function Notification({ hasMessage }) {
  return <div>{hasMessage && <p>You have a new message!</p>}</div>;
}
```

**Key Points:**

- Use `if` for complex conditions.
- Use the ternary operator for two possible outcomes.
- Use `&&` to render content when a condition is true.

---

# Composition vs Inheritance

**Composition** means building complex components by combining smaller components. **Inheritance** means creating a class that inherits properties and methods from another class.

React generally encourages **composition over inheritance** for UI reuse.

## 1. Composition Example

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}

function App() {
  return (
    <Card>
      <h2>Welcome</h2>
      <p>This content is inside the card.</p>
    </Card>
  );
}
```

## 2. Inheritance Example

```jsx
class BaseComponent extends React.Component {
  showMessage() {
    return "Hello from the base class";
  }
}

class MyComponent extends BaseComponent {
  render() {
    return <h1>{this.showMessage()}</h1>;
  }
}
```

**Key Points:**

- **Composition:** Reuses UI by combining components and passing children or props.
- **Inheritance:** Reuses class functionality through `extends`.
- React recommends composition for most component reuse scenarios.

---

# Conclusion

- **Functional components** are simpler and use hooks for state and lifecycle-related behaviour.
- **Class components** use `this.state`, `this.setState()`, and lifecycle methods.
- Both types support props and can render JSX.
- **For new React applications, functional components are generally preferred.**

# Rendering

**Rendering** is the process in which React calls a component to determine what UI should be displayed on the screen.

React renders a component when it is first displayed and may render it again when its state, props, or other relevant inputs change.

## Example

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}

export default Counter;
```

**Key Points:**

- Rendering determines what the UI should look like.
- State updates can trigger a re-render.
- A parent component re-rendering can also cause its children to render again.
- React commits necessary DOM changes when the rendered output differs.

---

# Component Life Cycle

**The component lifecycle** describes the stages a component goes through, from being added to the UI to updating and eventually being removed.

## 1. Mounting

- The component is created and added to the DOM.
- Example: Displaying a user profile for the first time.

## 2. Updating

- The component renders again when relevant props, state, or context change.
- Example: Updating a counter when a button is clicked.

## 3. Unmounting

- The component is removed from the DOM.
- Example: Closing a modal or navigating away from a page.

## Lifecycle in Class Components

| Method                   | Purpose                                   |
| ------------------------ | ----------------------------------------- |
| `constructor()`          | Initializes state and instance properties |
| `render()`               | Returns the UI                            |
| `componentDidMount()`    | Runs after mounting                       |
| `componentDidUpdate()`   | Runs after an update                      |
| `componentWillUnmount()` | Performs cleanup before removal           |

## Lifecycle in Functional Components

Functional components use hooks such as `useEffect()` to manage side effects.

```jsx
import { useEffect } from "react";

function UserProfile() {
  useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Cleanup executed");
    };
  }, []);

  return <h1>User Profile</h1>;
}
```

**Key Point:** `useEffect()` handles side effects and cleanup. It is not an exact one-to-one replacement for every class lifecycle method.

---

# Lists and Keys

**Lists** allow React to display multiple elements from an array. **Keys** help React identify items between renders.

## Example

```jsx
function Users() {
  const users = [
    { id: 1, name: "Kamesh" },
    { id: 2, name: "Arun" },
    { id: 3, name: "Ravi" },
  ];

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default Users;
```

**Key Points:**

- Use `map()` to render a list of elements.
- Each sibling element in a list should have a unique, stable key.
- Database IDs are usually good keys.
- Avoid array indexes as keys when items can be reordered, inserted, or deleted.
- Keys help React match items correctly; they do not automatically prevent re-renders.

---

# Render Props

**Render props** is a pattern in which a component receives a function as a prop and calls it to determine what UI to render.

It allows components to share behaviour while keeping the UI flexible.

## Example

```jsx
function MouseTracker({ render }) {
  const position = { x: 100, y: 200 };

  return render(position);
}

function App() {
  return (
    <MouseTracker
      render={({ x, y }) => (
        <p>
          Mouse position: {x}, {y}
        </p>
      )}
    />
  );
}

export default App;
```

**Key Points:**

- A function is passed as a prop.
- The component calls the function to render UI.
- It separates reusable behaviour from presentation.
- Hooks have replaced many common render prop use cases, but the pattern is still useful in some libraries.

---

# Refs

**Refs** provide a way to access DOM elements or store mutable values without triggering a re-render.

React provides the `useRef()` hook for functional components and `createRef()` for class components.

## Example: Accessing a DOM Element

```jsx
import { useRef } from "react";

function InputFocus() {
  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default InputFocus;
```

**Key Points:**

- `useRef()` stores a value between renders.
- `ref.current` provides access to the stored value or DOM element.
- Updating `ref.current` does not trigger a re-render.
- Common uses include focusing inputs, managing timers, and interacting with DOM elements.
- Do not use refs as a replacement for state when a value must update the UI.

---

# Events

**Events** allow React components to respond to user actions such as clicks, typing, and form submissions.

React event handlers are attached through JSX props such as `onClick` and `onChange`.

## Example: Click Event

```jsx
function Button() {
  function handleClick() {
    alert("Button clicked!");
  }

  return <button onClick={handleClick}>Click Me</button>;
}

export default Button;
```

## Example: Input Event

```jsx
import { useState } from "react";

function NameInput() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter your name"
      />

      <p>Hello, {name}</p>
    </div>
  );
}
```

**Key Points:**

- Use camelCase event names, such as `onClick`.
- Pass a function as the event handler.
- The event handler receives an event object when needed.
- Use `event.preventDefault()` to prevent a browser's default action when appropriate.

---

# Higher-Order Components (HOC)

A **Higher-Order Component (HOC)** is a function that takes a component and returns a new component with additional behaviour.

HOCs are commonly used to share logic, such as authentication checks, permissions, or data handling.

## Example

```jsx
function withMessage(WrappedComponent) {
  return function EnhancedComponent(props) {
    return (
      <div>
        <p>Welcome to the application!</p>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

function UserProfile({ name }) {
  return <h2>User: {name}</h2>;
}

const EnhancedProfile = withMessage(UserProfile);

function App() {
  return <EnhancedProfile name="Kamesh" />;
}

export default App;
```

**Key Points:**

- A HOC accepts a component and returns another component.
- It can add reusable behaviour or pass additional props.
- It should generally not modify the original component.
- Hooks are often simpler for sharing stateful logic in modern React, but HOCs remain useful in existing codebases and libraries.

---

# Summary

| Concept                 | Purpose                                        |
| ----------------------- | ---------------------------------------------- |
| Rendering               | Determines the UI to display                   |
| Component Lifecycle     | Describes mounting, updating, and unmounting   |
| Lists and Keys          | Renders collections and identifies list items  |
| Render Props            | Shares behaviour through a function prop       |
| Refs                    | Accesses DOM elements or stores mutable values |
| Events                  | Handles user interactions                      |
| Higher-Order Components | Reuses behaviour by wrapping components        |

**Interview Tip:** Understand how state updates trigger rendering, why stable keys are important, when to use refs instead of state, and how hooks simplify reusable logic.

# Hooks

**Hooks** are special React functions that allow functional components to use features such as state, side effects, context, and references.

Hooks were introduced in React 16.8. They allow developers to manage component logic without using class components.

## Key Points

- Hook names start with `use`, such as `useState` and `useEffect`.
- Hooks can be used in function components and custom hooks.
- Hooks must be called at the top level, not inside loops, conditions, or nested functions.
- Hooks must be called in the same order on every render.
- Hooks cannot be called inside class components.

## Example

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}

export default Counter;
```

---

# useState Hook

**`useState`** is a React Hook that allows a functional component to store and update state.

It returns an array containing the current state value and a function to update it.

## Syntax

```jsx
const [state, setState] = useState(initialValue);
```

- `state`: The current state value.
- `setState`: Function used to update the state.
- `initialValue`: The initial state value.

## Example

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Increment</button>

      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;
```

## Key Points

- Used to manage component state.
- Updating state triggers a re-render when the new value differs from the current value.
- Never modify objects or arrays in state directly.
- Use the setter function to update state.

**Use Cases:** Counters, forms, toggles, dropdowns, and modal visibility.

---

# useEffect Hook

**`useEffect`** is a React Hook used to synchronize a component with external systems, such as APIs, timers, subscriptions, and browser event listeners.

## Syntax

```jsx
useEffect(() => {
  // Side effect

  return () => {
    // Cleanup
  };
}, [dependencies]);
```

## Example: Fetching Data

```jsx
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );

      const data = await response.json();
      setUsers(data);
    }

    fetchUsers();
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default Users;
```

## Dependency Types

### 1. No Dependency Array

```jsx
useEffect(() => {
  console.log("After every commit");
});
```

Runs after every commit when the component renders.

### 2. Empty Dependency Array

```jsx
useEffect(() => {
  console.log("Effect setup");
}, []);
```

Runs after the initial commit, with an additional setup and cleanup cycle possible in development Strict Mode.

### 3. With Dependencies

```jsx
useEffect(() => {
  console.log("Count changed:", count);
}, [count]);
```

Runs after the initial commit and again when `count` changes.

## Cleanup Example

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Timer running");
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);
```

**Key Points**

- Use effects for synchronizing with external systems.
- Use cleanup to remove timers and subscriptions.
- Do not use effects unnecessarily for values that can be calculated during rendering.
- Effects run after a commit, not during rendering.

---

# useCallback Hook

**`useCallback`** is a React Hook that caches a function definition between renders until its dependencies change.

It is useful when passing callbacks to memoized child components or when a function is used as a dependency of another hook.

## Syntax

```jsx
const cachedFunction = useCallback(() => {
  // Function logic
}, [dependencies]);
```

## Example

```jsx
import { memo, useCallback, useState } from "react";

const Child = memo(function Child({ onClick }) {
  console.log("Child rendered");

  return <button onClick={onClick}>Click Child</button>;
});

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Child button clicked");
  }, []);

  return (
    <div>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>Increment</button>

      <Child onClick={handleClick} />
    </div>
  );
}

export default Parent;
```

## Key Points

- Caches a function definition between renders.
- Dependencies determine when React returns a new function.
- Can help avoid unnecessary renders when used with `React.memo`.
- Does not automatically prevent a component from re-rendering.
- Avoid using it everywhere; use it when there is a clear benefit.

---

# useRef Hook

**`useRef`** is a React Hook that stores a mutable value between renders without triggering a re-render when the value changes.

It is commonly used to access DOM elements.

## Syntax

```jsx
const ref = useRef(initialValue);
```

## Example: Focus an Input

```jsx
import { useRef } from "react";

function InputFocus() {
  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} placeholder="Enter your name" />

      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default InputFocus;
```

## Example: Store a Mutable Value

```jsx
import { useRef } from "react";

function Counter() {
  const countRef = useRef(0);

  function handleClick() {
    countRef.current += 1;
    console.log(countRef.current);
  }

  return <button onClick={handleClick}>Update Ref</button>;
}
```

## Key Points

- `ref.current` stores the current value.
- Updating `ref.current` does not trigger a re-render.
- Useful for DOM access, timer IDs, and mutable values.
- Use state instead when a value must be displayed and updated in the UI.

---

# useReducer Hook

**`useReducer`** is a React Hook used to manage state through a reducer function and dispatched actions.

It is useful when state logic involves multiple actions or related state changes.

## Syntax

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

- `state`: Current state.
- `dispatch`: Sends an action to the reducer.
- `reducer`: Function that calculates the next state.
- `initialState`: Initial state value.

## Example

```jsx
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    case "reset":
      return { count: 0 };

    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
  });

  return (
    <div>
      <h2>Count: {state.count}</h2>

      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>

      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>

      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default Counter;
```

## Key Points

- State updates are handled by a reducer function.
- Actions describe what should happen.
- `dispatch()` sends actions to the reducer.
- Reducers should be pure functions.
- Useful for complex state logic and related state transitions.

**useState vs useReducer**

- `useState`: Suitable for simple state management.
- `useReducer`: Suitable for complex state transitions involving multiple actions.

---

# useMemo Hook

**`useMemo`** is a React Hook that caches the result of a calculation between renders until its dependencies change.

It can improve performance when a calculation is expensive.

## Syntax

```jsx
const cachedValue = useMemo(() => {
  return calculateValue();
}, [dependencies]);
```

## Example

```jsx
import { useMemo, useState } from "react";

function ProductList({ products }) {
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    console.log("Filtering products");

    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [products, search]);

  return (
    <div>
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search products"
      />

      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
```

## Key Points

- Caches a calculated value between renders.
- Recalculates when dependencies change.
- Useful for expensive calculations.
- Does not prevent the component itself from rendering.
- Avoid unnecessary memoization for simple calculations.

**useMemo vs useCallback**

- `useMemo`: Caches a calculated value.
- `useCallback`: Caches a function definition.

---

# useContext Hook

**`useContext`** is a React Hook that allows components to read values from React Context without passing props through every intermediate component.

It is useful for sharing data such as themes, language settings, or authenticated user information.

## Example

```jsx
import { createContext, useContext } from "react";

const ThemeContext = createContext("light");

function Child() {
  const theme = useContext(ThemeContext);

  return <h2>Current theme: {theme}</h2>;
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Child />
    </ThemeContext.Provider>
  );
}

export default App;
```

## Key Points

- `createContext()` creates a context.
- A provider supplies a value to its descendants.
- `useContext()` reads the nearest matching provider's value.
- Components that use the context can re-render when its value changes.
- Context helps avoid prop drilling.

**Use Cases:** Themes, authentication information, locale settings, and shared application preferences.

---

# Writing Custom Hooks

A **custom hook** is a JavaScript function whose name starts with `use` and which can call other hooks.

Custom hooks allow developers to reuse stateful logic across multiple components.

## Example: Custom Counter Hook

```jsx
import { useState } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  function increment() {
    setCount((previousCount) => previousCount + 1);
  }

  function decrement() {
    setCount((previousCount) => previousCount - 1);
  }

  function reset() {
    setCount(initialValue);
  }

  return { count, increment, decrement, reset };
}

function Counter() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
```

## Key Points

- Custom hooks help reuse logic across components.
- Their names should start with `use`.
- They can use built-in hooks and other custom hooks.
- Each component calling a custom hook gets its own hook state unless state is deliberately shared through another mechanism.
- Custom hooks share logic, not automatically the same state.

---

# Hooks Best Practices

## 1. Follow the Rules of Hooks

Call hooks only at the top level of function components or custom hooks.

**Correct:**

```jsx
function App() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

**Incorrect:**

```jsx
if (condition) {
  const [count, setCount] = useState(0);
}
```

## 2. Use Meaningful Names

Choose clear names for state variables and custom hooks.

```jsx
const [isLoggedIn, setIsLoggedIn] = useState(false);
```

## 3. Specify Effect Dependencies Correctly

Include all reactive values used by an effect in its dependency array.

```jsx
useEffect(() => {
  console.log("User ID:", userId);
}, [userId]);
```

## 4. Clean Up Effects

Clear timers and remove subscriptions when the effect is cleaned up.

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running");
  }, 1000);

  return () => clearInterval(timer);
}, []);
```

## 5. Avoid Unnecessary State

Do not store values that can be calculated from existing props or state unless there is a specific reason.

```jsx
const total = price * quantity;
```

## 6. Avoid Unnecessary Memoization

Use `useMemo` and `useCallback` when they provide a meaningful performance benefit, rather than using them everywhere.

## 7. Use Functional State Updates When Needed

When the next state depends on the previous state, use a functional update.

```jsx
setCount((previousCount) => previousCount + 1);
```

## 8. Keep Hooks at the Top Level

Do not call hooks inside loops, conditions, event handlers, or nested functions.

## 9. Keep Reducers Pure

A reducer should calculate the next state without modifying the existing state or performing side effects.

## 10. Use the React Hooks Linter

Use `eslint-plugin-react-hooks` to detect violations of the Rules of Hooks and many dependency-related mistakes.

---

# Summary of React Hooks

| Hook          | Purpose                                   |
| ------------- | ----------------------------------------- |
| `useState`    | Manages component state                   |
| `useEffect`   | Synchronizes with external systems        |
| `useCallback` | Caches a function definition              |
| `useRef`      | Stores a mutable value or DOM reference   |
| `useReducer`  | Manages state using a reducer and actions |
| `useMemo`     | Caches a calculated value                 |
| `useContext`  | Reads values from React Context           |
| Custom Hooks  | Reuse stateful logic across components    |

**Interview Tip:** Understand the difference between `useState` and `useReducer`, `useMemo` and `useCallback`, and `useRef` and state. Also, be ready to explain effect dependencies and cleanup.

# React Component Lifecycle

The **component lifecycle** describes the different phases a React component goes through from its creation to its removal from the UI.

React component lifecycle has three main phases:

1. **Mounting:** The component is created and added to the DOM.
2. **Updating:** The component re-renders when its props or state change.
3. **Unmounting:** The component is removed from the DOM.

---

# 1. Class Component Lifecycle

Class components use **lifecycle methods** to execute code at specific stages of a component's lifecycle.

## Mounting Phase

The mounting phase occurs when a component is created and added to the DOM.

### 1. constructor()

- Initializes the component's state and binds methods when needed.
- Called before the component is mounted.

```jsx
constructor(props) {
  super(props);

  this.state = {
    count: 0,
  };
}
```

### 2. static getDerivedStateFromProps()

- Updates state based on changes in props when required.
- Called during mounting and updating.
- Rarely needed in normal applications.

```jsx
static getDerivedStateFromProps(props, state) {
  return null;
}
```

### 3. render()

- Returns the JSX that describes the UI.
- Required in class components.

```jsx
render() {
  return <h1>Hello React</h1>;
}
```

### 4. componentDidMount()

- Called after the component is added to the DOM.
- Commonly used for API calls, subscriptions, and timers.

```jsx
componentDidMount() {
  console.log("Component mounted");
}
```

**Mounting order:**

`constructor()` → `getDerivedStateFromProps()` → `render()` → `componentDidMount()`

---

## Updating Phase

The updating phase occurs when a component receives new props or its state changes.

### 1. static getDerivedStateFromProps()

- Runs during updates as well as mounting.
- Allows state to be derived from props in specific cases.

### 2. shouldComponentUpdate()

- Determines whether React should continue rendering the component.
- Can help avoid unnecessary renders.
- Returns `true` by default.

```jsx
shouldComponentUpdate(nextProps, nextState) {
  return nextState.count !== this.state.count;
}
```

### 3. render()

- Returns the updated UI based on the current props and state.

```jsx
render() {
  return <h1>Count: {this.state.count}</h1>;
}
```

### 4. getSnapshotBeforeUpdate()

- Runs immediately before React updates the DOM.
- Can capture information such as the current scroll position.
- Its return value is passed to `componentDidUpdate()`.

```jsx
getSnapshotBeforeUpdate(prevProps, prevState) {
  return null;
}
```

### 5. componentDidUpdate()

- Called after the component updates in the DOM.
- Commonly used to respond to prop or state changes.
- Use conditions to avoid triggering an infinite update loop.

```jsx
componentDidUpdate(prevProps, prevState) {
  if (prevState.count !== this.state.count) {
    console.log("Count updated");
  }
}
```

**Updating order:**

`getDerivedStateFromProps()` → `shouldComponentUpdate()` → `render()` → `getSnapshotBeforeUpdate()` → `componentDidUpdate()`

Note: `shouldComponentUpdate()` returning `false` skips the remaining render and commit steps for that update. `getSnapshotBeforeUpdate()` and `componentDidUpdate()` are not called for that skipped update.

---

## Unmounting Phase

The unmounting phase occurs when a component is removed from the DOM.

### componentWillUnmount()

- Called immediately before the component is removed.
- Used to clean up timers, subscriptions, and event listeners.

```jsx
componentWillUnmount() {
  console.log("Component unmounted");
}
```

**Unmounting method:**

`componentWillUnmount()`

---

# 2. Functional Component Lifecycle

Functional components do not have class lifecycle methods. They use **React Hooks**, especially `useEffect()`, to manage side effects and cleanup.

## Mounting Phase

Use `useEffect()` with an empty dependency array to run an effect after the initial commit.

```jsx
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  return <h1>Hello React</h1>;
}
```

**Purpose:**

- Fetch data when appropriate.
- Set up subscriptions or timers.
- Perform other side effects.

## Updating Phase

Use `useEffect()` with dependencies to run an effect after a commit when the specified dependencies change.

```jsx
import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count updated:", count);
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

**Purpose:**

- Respond to changes in state or props.
- Synchronize with external systems.
- Run an effect again when its dependencies change.

## Unmounting Phase

Return a cleanup function from `useEffect()` to clean up resources when the component is removed.

```jsx
import { useEffect } from "react";

function Timer() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Timer running");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Timer cleaned up");
    };
  }, []);

  return <h1>Timer Component</h1>;
}
```

**Purpose:**

- Clear timers.
- Remove event listeners.
- Unsubscribe from subscriptions.
- Cancel or ignore outdated asynchronous work when necessary.

---

# 3. Class vs Functional Component Lifecycle

| Lifecycle Phase  | Class Component                 | Functional Component                       |
| ---------------- | ------------------------------- | ------------------------------------------ |
| Mounting         | `componentDidMount()`           | `useEffect()` with `[]`                    |
| Updating         | `componentDidUpdate()`          | `useEffect()` with dependencies            |
| Unmounting       | `componentWillUnmount()`        | Cleanup function returned by `useEffect()` |
| Render           | `render()`                      | Function body returns JSX                  |
| State management | `this.state`, `this.setState()` | `useState()`                               |
| Side effects     | Lifecycle methods               | `useEffect()`                              |

**Important:** These are conceptual equivalents, not exact one-to-one replacements. `useEffect()` runs after a commit and may run again when dependencies change. In development, React Strict Mode may run an extra setup and cleanup cycle to help detect bugs.

---

# 4. Complete Class Component Example

```jsx
import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("Mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("Updated:", this.state.count);
    }
  }

  componentWillUnmount() {
    console.log("Unmounted");
  }

  render() {
    return (
      <button onClick={() => this.setState({ count: this.state.count + 1 })}>
        Count: {this.state.count}
      </button>
    );
  }
}

export default Counter;
```

# 5. Complete Functional Component Example

```jsx
import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Mounted");

    return () => {
      console.log("Unmounted or effect cleanup");
    };
  }, []);

  useEffect(() => {
    console.log("Count updated:", count);
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}

export default Counter;
```

# Interview Summary

- **Mounting:** Component is added to the DOM.
- **Updating:** Component re-renders because props or state change.
- **Unmounting:** Component is removed from the DOM.
- **Class components:** Use lifecycle methods such as `componentDidMount()`, `componentDidUpdate()`, and `componentWillUnmount()`.
- **Functional components:** Use hooks such as `useEffect()` and its cleanup function.
- **Modern React:** Functional components and hooks are generally preferred for new development.

# Routing

**Routing** is the process of navigating between different pages or views in an application based on the URL.

React does not include a built-in routing library. Libraries such as React Router help manage navigation in React applications without reloading the entire page.

## Why Do We Need Routing?

- **Navigation:** Move between pages such as Home, About, and Contact.
- **Single-Page Application (SPA):** Navigate without full-page reloads.
- **URL Management:** Display different components based on the URL.
- **Dynamic Routes:** Display data based on URL parameters.
- **Nested Routes:** Create layouts with child routes.
- **Protected Routes:** Restrict access to pages based on authentication or permissions.

---

# React Router

**React Router** is a routing library that connects URLs to React components and provides navigation features for React applications.

## Installation

```bash
npm install react-router
```

For a typical browser-based React application, you can use the APIs from `react-router` and its browser entry point, `react-router`.

## Basic Example

```jsx
import { BrowserRouter, Routes, Route, Link } from "react-router";

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

**Note:** In existing React Router `v6` projects, imports commonly come from `react-router-dom`. Follow the import conventions for your installed version.

---

# Types of Routers in React

The main router types commonly discussed in React Router are:

1. **BrowserRouter**
2. **HashRouter**
3. **MemoryRouter**
4. **HistoryRouter**
5. **StaticRouter**

## 1. BrowserRouter

**BrowserRouter** uses the browser's History API to manage navigation and displays clean URLs without a hash.

### Example

```jsx
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
```

**URL examples:**

- `https://example.com/`
- `https://example.com/about`

**Key Points:**

- Uses the browser History API.
- Provides clean URLs.
- The server must be configured to serve the SPA entry point for direct navigation to application routes.

**Use Cases:** Standard websites, dashboards, and business applications.

---

## 2. HashRouter

**HashRouter** stores the current route in the URL hash (`#`). The part after `#` is handled by the client-side router.

### Example

```jsx
import { HashRouter, Routes, Route } from "react-router";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
    </HashRouter>
  );
}
```

**URL examples:**

- `https://example.com/#/`
- `https://example.com/#/about`

**Key Points:**

- Uses the URL hash for client-side navigation.
- Routes do not require the server to handle the path after the hash.
- URLs contain `#`, which some applications prefer to avoid.

**Use Cases:** Static hosting, applications where server rewrite configuration is unavailable, and certain documentation sites.

---

## 3. MemoryRouter

**MemoryRouter** stores navigation history in memory instead of using the browser URL.

### Example

```jsx
import { MemoryRouter, Routes, Route, Link } from "react-router";

function App() {
  return (
    <MemoryRouter initialEntries={["/"]}>
      <nav>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
    </MemoryRouter>
  );
}
```

**Key Points:**

- Does not change the browser's URL.
- Keeps navigation history in memory.
- Supports initial entries and an initial index.
- Useful when navigation should be isolated from the browser address bar.

**Use Cases:** Unit tests, embedded navigation flows, and environments without a normal browser URL.

---

## 4. HistoryRouter

**HistoryRouter** uses a custom history object to manage navigation.

In React Router v6, the API is commonly named **`unstable_HistoryRouter`**. It is an advanced option and is not recommended for most applications.

### Example

```jsx
import {
  Routes,
  Route,
  Link,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  return (
    <HistoryRouter history={history}>
      <nav>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
    </HistoryRouter>
  );
}
```

**Note:** This example requires the `history` package, and the exact API and import path depend on the React Router version. Check the documentation for your installed version.

**Key Points:**

- Uses a custom history instance.
- Allows external code to interact with the history object.
- Can introduce duplicate versions of the history library if configured incorrectly.

**Use Cases:** Special integrations that require a shared custom history object.

---

## 5. StaticRouter

**StaticRouter** is designed for server-side rendering (SSR) and other environments where navigation should not modify browser history.

It is commonly available from the `react-router` server entry point or framework-specific APIs, depending on the installed version.

### Example

```jsx
import { StaticRouter, Routes, Route } from "react-router";

function App() {
  return (
    <StaticRouter location="/about">
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
    </StaticRouter>
  );
}
```

**Key Points:**

- Uses a specified location instead of interactive browser history.
- Does not provide normal client-side browser navigation.
- Useful for server rendering or generating output for a known URL.

**Use Cases:** Server-rendered React pages and static rendering scenarios.

---

# Router Types Comparison

| Router          | URL Changes                | Main Purpose                   |
| --------------- | -------------------------- | ------------------------------ |
| `BrowserRouter` | Yes, normal path           | Standard web applications      |
| `HashRouter`    | Yes, hash portion          | Hosting without path rewrites  |
| `MemoryRouter`  | No                         | Tests and in-memory navigation |
| `HistoryRouter` | Depends on history object  | Custom history integrations    |
| `StaticRouter`  | No interactive URL updates | Server-side rendering          |

---

# Important React Router Components

## 1. BrowserRouter

Provides browser-based routing.

```jsx
<BrowserRouter>{/* Routes and navigation */}</BrowserRouter>
```

## 2. Routes

Contains the route definitions and selects the best matching route.

```jsx
<Routes>
  <Route path="/" element={<Home />} />
</Routes>
```

## 3. Route

Maps a URL pattern to a component.

```jsx
<Route path="/about" element={<About />} />
```

## 4. Link

Navigates between routes without a full-page reload.

```jsx
<Link to="/about">About</Link>
```

## 5. NavLink

Works like `Link` but also provides information about whether the link is active.

```jsx
<NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
  About
</NavLink>
```

## 6. Navigate

Redirects to another route when rendered.

```jsx
<Navigate to="/login" replace />
```

## 7. Outlet

Renders the matching child route inside a parent layout.

```jsx
function DashboardLayout() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
}
```

---

# Important React Router Hooks

## 1. useNavigate()

Programmatically navigates to another route.

```jsx
const navigate = useNavigate();

navigate("/dashboard");
```

To go back:

```jsx
navigate(-1);
```

## 2. useParams()

Reads dynamic URL parameters.

```jsx
// Route
<Route path="/users/:id" element={<User />} />;

// Component
const { id } = useParams();
```

For `/users/10`, `id` is `"10"`.

## 3. useLocation()

Returns information about the current location.

```jsx
const location = useLocation();

console.log(location.pathname);
```

For `/about?tab=team`, the pathname is `/about`.

## 4. useSearchParams()

Reads and updates query-string parameters.

```jsx
const [searchParams, setSearchParams] = useSearchParams();

const page = searchParams.get("page");

setSearchParams({ page: "2" });
```

For `/products?page=2`, the value of `page` is `"2"`.

## 5. useMatch()

Checks whether the current location matches a specified route pattern.

```jsx
const match = useMatch("/users/:id");

console.log(match);
```

## 6. useNavigationType()

Returns how the current location was reached, such as through a push, replace, or browser pop action.

```jsx
const navigationType = useNavigationType();

console.log(navigationType);
```

**Note:** Some hooks and features depend on the router mode and React Router version.

---

# Important Navigation Methods

| Method or API                          | Purpose                               |
| -------------------------------------- | ------------------------------------- |
| `navigate("/path")`                    | Navigate to a route                   |
| `navigate(-1)`                         | Go back one history entry             |
| `navigate(1)`                          | Go forward one history entry          |
| `navigate("/path", { replace: true })` | Replace the current history entry     |
| `useParams()`                          | Read route parameters                 |
| `useLocation()`                        | Read current location details         |
| `useSearchParams()`                    | Read or update query parameters       |
| `Link`                                 | Navigate using a link                 |
| `NavLink`                              | Navigate with active-link information |
| `Navigate`                             | Redirect by rendering a component     |
| `Outlet`                               | Render matching nested routes         |

---

# Example: Dynamic Routing

```jsx
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/users/101">View User 101</Link>
    </div>
  );
}

function User() {
  const { id } = useParams();

  return <h1>User ID: {id}</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

**When the user opens `/users/101`, the page displays `User ID: 101`.**

---

# Best Practices

- Use `BrowserRouter` for most standard browser applications.
- Use `Link` or `NavLink` for normal navigation instead of regular anchor tags when staying inside the SPA.
- Use `useNavigate()` for navigation triggered by an action or event.
- Use `useParams()` for dynamic route parameters.
- Use nested routes and `Outlet` to share layouts.
- Configure server-side fallback handling when deploying a `BrowserRouter` application.
- Follow the documentation for the exact React Router version installed in your project.

# Interview Summary

**React Router** enables client-side navigation in React applications.

- `BrowserRouter`: Normal browser URLs.
- `HashRouter`: URLs containing `#`.
- `MemoryRouter`: Navigation history stored in memory.
- `HistoryRouter`: Custom history integration.
- `StaticRouter`: Static or server-side routing.
- `useNavigate()`: Programmatic navigation.
- `useParams()`: Reads route parameters.
- `useLocation()`: Reads current location information.
- `useSearchParams()`: Manages query parameters.

# TanStack Router

**TanStack Router** is a routing library for React applications built with **type safety** in mind. It generates types based on route definitions, helping developers catch routing errors during development.

It supports features such as nested routes, route-based data loading, and search parameter validation. It belongs to the TanStack family of tools, which also includes TanStack Query.

## Key Features

- **Type-safe routing:** Provides type checking for route paths, parameters, and navigation.
- **Nested routes:** Allows you to create parent and child routes.
- **Data loading:** Fetches data before rendering a route using loaders.
- **Search parameter validation:** Validates URL query parameters and provides type-safe access to them.
- **File-based routing:** Supports defining routes through a file structure.
- **Built-in search state management:** Helps manage URL search parameters in a type-safe way.

## Example

```tsx
import {
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";

const rootRoute = createRootRoute();

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

function Home() {
  return <h1>Welcome to TanStack Router!</h1>;
}

const routeTree = rootRoute.addChildren([homeRoute]);

const router = createRouter({ routeTree });

function App() {
  return <RouterProvider router={router} />;
}

export default App;
```

## Use Cases

- Building large React applications with type-safe navigation.
- Creating nested layouts and routes.
- Fetching data before displaying a page.
- Validating search parameters in URLs.
- Managing complex routing requirements in TypeScript projects.

## Advantages

- Reduces routing errors through type safety.
- Improves developer experience with TypeScript.
- Provides powerful route and search parameter management.
- Supports structured data loading and nested layouts.

## TanStack Router vs React Router

| Feature                     | TanStack Router                | React Router                                               |
| --------------------------- | ------------------------------ | ---------------------------------------------------------- |
| Type safety                 | Strong, built-in type safety   | Available, with varying levels depending on APIs and setup |
| Nested routes               | Supported                      | Supported                                                  |
| Data loading                | Route loaders                  | Loaders in Data and Framework modes                        |
| Search parameter validation | Built-in support               | Usually requires additional validation logic               |
| File-based routing          | Supported                      | Available in Framework mode                                |
| Best suited for             | Type-safe, data-driven routing | General-purpose React routing                              |

## Summary

TanStack Router is a powerful choice for React applications that need **type-safe navigation, nested routes, data loading, and validated search parameters**. It is especially useful in TypeScript-based applications where reliable routing and developer productivity are important.

# Styling in React

Styling in React is the process of controlling the appearance and layout of React components using CSS and related styling tools.

There are several ways to style React applications, including **Vanilla CSS, CSS Modules, CSS-in-JS, Panda CSS, and Tailwind CSS**. Each approach has different benefits depending on the application's size, performance requirements, and development workflow.

## 1. Vanilla CSS

**Vanilla CSS** means writing standard CSS in separate `.css` files and importing them into React components.

### Example

`App.css`

```css
.container {
  padding: 20px;
  background-color: lightblue;
}

.title {
  color: darkblue;
  text-align: center;
}
```

`App.jsx`

```jsx
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1 className="title">Hello React</h1>
    </div>
  );
}

export default App;
```

### Advantages

- Simple and easy to learn.
- No additional styling library is required.
- Supports all standard CSS features.
- Suitable for small and large applications.

### Disadvantages

- Class names can conflict across components.
- Large projects may require conventions to organise styles.
- Dynamic styling may require conditional classes or CSS variables.

## 2. CSS Modules

**CSS Modules** allow you to write regular CSS while automatically scoping class names to the module that imports them. This helps prevent class name collisions between components.

### Example

`Button.module.css`

```css
.button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
}
```

`Button.jsx`

```jsx
import styles from "./Button.module.css";

function Button() {
  return <button className={styles.button}>Click Me</button>;
}

export default Button;
```

### How it works

- The CSS file is imported as a JavaScript object.
- `styles.button` refers to the locally scoped class.
- The build tool generates a unique class name, reducing the chance of collisions.

### Advantages

- Prevents most accidental class name conflicts.
- Uses standard CSS syntax.
- Keeps styles organised by component.
- Works well with existing React projects.

### Disadvantages

- Requires importing and managing separate CSS files.
- Complex dynamic styles may need conditional class names or CSS variables.
- Shared design systems need additional organisation.

## 3. CSS-in-JS

**CSS-in-JS** is an approach where styles are written using JavaScript or TypeScript, often alongside React components.

Different CSS-in-JS libraries use different approaches. Some generate styles at runtime, while others generate CSS at build time.

### Example using styled-components

Install the package:

```bash
npm install styled-components
```

`Button.jsx`

```jsx
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #2563eb;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #1d4ed8;
  }
`;

function Button() {
  return <StyledButton>Click Me</StyledButton>;
}

export default Button;
```

### Advantages

- Styles can be colocated with components.
- Supports dynamic styling based on props.
- Makes reusable styled components convenient.
- Some libraries support theming and design tokens.

### Disadvantages

- Some implementations add runtime styling overhead.
- Additional dependencies and concepts are introduced.
- Server-side rendering and build configuration may require extra setup, depending on the library.

## 4. Panda CSS

**Panda CSS** is a styling tool that generates static CSS at build time. It provides a type-safe styling API and design-token support without requiring runtime style generation for its standard styling approach.

### Installation

For a Vite-based React project, follow the current Panda CSS installation guide for the recommended setup:

```bash
npm install -D @pandacss/dev
npx panda init --postcss
```

The generated configuration and build setup may vary depending on your project.

### Example

```jsx
import { css } from "../styled-system/css";

function Card() {
  return (
    <div
      className={css({
        padding: "4",
        backgroundColor: "blue.500",
        color: "white",
        borderRadius: "lg",
      })}
    >
      Panda CSS Card
    </div>
  );
}

export default Card;
```

The `styled-system` import is generated by Panda CSS during setup.

### Advantages

- Generates static CSS at build time.
- Avoids the standard runtime styling cost associated with runtime CSS-in-JS approaches.
- Provides type-safe styling APIs.
- Supports design tokens, variants, and reusable patterns.

### Disadvantages

- Requires configuration and a build-time generation workflow.
- Developers need to learn its styling API.
- Dynamic values must follow Panda's supported patterns to be extracted correctly.

### Best use cases

- TypeScript-heavy React applications.
- Projects that need reusable design tokens and component variants.
- Applications where build-time CSS generation is preferred.

## 5. Tailwind CSS

**Tailwind CSS** is a utility-first CSS framework. It provides small, single-purpose utility classes that can be combined directly in JSX to style elements.

Instead of creating a separate class for every component, you combine utilities such as `flex`, `p-4`, and `text-center`.

### Example

```jsx
function Card() {
  return (
    <div className="rounded-lg bg-blue-500 p-6 text-white shadow-md">
      <h2 className="text-xl font-bold">Welcome</h2>
      <p className="mt-2">This card is styled using Tailwind CSS.</p>
    </div>
  );
}

export default Card;
```

### Advantages

- Speeds up UI development.
- Provides consistent spacing, colours, and typography through design tokens.
- Reduces the need for custom CSS in many components.
- Supports responsive design and state variants.

### Disadvantages

- JSX can become verbose when many utilities are used.
- Developers need to learn the utility class system.
- Repeated utility combinations may need reusable components or abstractions.
- Dynamic class construction needs care so build tools can detect the classes.

### Responsive design example

```jsx
function ResponsiveCard() {
  return <div className="p-4 md:p-8 lg:p-12">Responsive padding</div>;
}
```

Here, the padding changes at Tailwind's configured `md` and `lg` breakpoints.

## 6. Comparison of Styling Approaches

| Feature              | Vanilla CSS                       | CSS Modules                       | CSS-in-JS                     | Panda CSS                            | Tailwind CSS                |
| -------------------- | --------------------------------- | --------------------------------- | ----------------------------- | ------------------------------------ | --------------------------- |
| Styling method       | Separate CSS files                | Scoped CSS files                  | JavaScript or TypeScript APIs | Type-safe styling API                | Utility classes             |
| Class scoping        | Global by default                 | Local by default                  | Depends on library            | Generated CSS patterns               | Utility classes             |
| Runtime styling cost | None from styling approach itself | None from styling approach itself | Depends on library            | No standard runtime style generation | None from utility classes   |
| Type safety          | Limited                           | Limited                           | Depends on library            | Strong TypeScript support            | Mostly class-name based     |
| Dynamic styling      | CSS variables and classes         | CSS variables and classes         | Often convenient with props   | Supported patterns and tokens        | Conditional utility classes |
| Learning curve       | Low                               | Low                               | Medium                        | Medium                               | Low to medium               |
| Best suited for      | General-purpose styling           | Component-scoped styles           | Component-driven styling      | Token-driven design systems          | Rapid UI development        |

## 7. How to Choose the Right Styling Approach

- **Vanilla CSS:** Choose it when you want standard CSS with minimal setup.
- **CSS Modules:** Choose it when you want regular CSS with component-level scoping.
- **CSS-in-JS:** Choose it when you prefer colocated styles and dynamic styling through component props.
- **Panda CSS:** Choose it when you want a type-safe, token-based styling system that generates CSS at build time.
- **Tailwind CSS:** Choose it when you want to build interfaces quickly using utility classes.

## 8. Best Practices

- Use consistent naming and organisation for styles.
- Prefer reusable components for repeated UI patterns.
- Keep accessibility in mind, including focus indicators and colour contrast.
- Use design tokens for consistent colours, spacing, and typography.
- Avoid unnecessary global styles that affect unrelated components.
- Choose one primary styling approach for a project unless there is a clear reason to combine approaches.

## Summary

React supports several styling approaches, and no single option is best for every application. Vanilla CSS and CSS Modules are good choices for standard CSS workflows, CSS-in-JS offers component-oriented styling, Panda CSS provides type-safe build-time CSS generation, and Tailwind CSS enables rapid styling through utility classes.

Choose the approach that best fits your team's workflow, project requirements, performance goals, and maintainability needs.

# React Component Libraries

React component libraries are collections of reusable UI components that
help developers build interfaces faster. Instead of creating every
button, dialog, menu, input, or table from scratch, developers can use
existing components and customise them to fit the application.

Component libraries differ in their design philosophy, accessibility
features, styling approach, customisation options, and available
components.

## Benefits of Component Libraries

- **Faster development:** Reuse ready-made components instead of
  building every UI element from scratch.
- **Consistency:** Maintain a common design across the application.
- **Accessibility:** Many libraries provide keyboard support, semantic
  markup, and accessible interaction patterns.
- **Maintainability:** Reusable components can reduce duplicated UI
  code.
- **Customisation:** Themes, variants, props, and styling APIs help
  adapt components to project requirements.

## 1. Material UI (MUI)

**Material UI (MUI)** is a React component library based on Google's
Material Design principles. It offers components such as buttons, form
controls, dialogs, navigation elements, tables, and data-display
components.

MUI provides theming support so teams can customise colours, typography,
spacing, and component appearance.

### Installation

```bash
npm install @mui/material @emotion/react @emotion/styled
```

For icons, install the optional icon package:

```bash
npm install @mui/icons-material
```

### Example

```jsx
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function App() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained">Save</Button>
      <Button variant="outlined">Cancel</Button>
      <Button variant="text">Learn More</Button>
    </Stack>
  );
}
```

### Theming example

```jsx
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1565c0",
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained">Submit</Button>
    </ThemeProvider>
  );
}
```

### Advantages

- Large collection of ready-to-use components.
- Built-in theming and customisation.
- Mature ecosystem and documentation.
- Useful components for dashboards, forms, navigation, and data-heavy
  interfaces.

### Disadvantages

- The default Material Design appearance may not fit every brand.
- Advanced customisation can require learning MUI's styling and theme
  APIs.
- The package and component APIs add concepts and dependencies to a
  project.

### Best use cases

- Admin dashboards and internal tools.
- Enterprise applications.
- Applications that need a broad set of standard components.
- Teams that want a consistent design system with established
  conventions.

---

## 2. Chakra UI

**Chakra UI** is a React component library focused on accessible
components and a developer-friendly styling system. It provides
component props for layout, spacing, colour, and responsive styling,
along with theming and customisation capabilities.

Chakra UI's APIs differ between major versions. Check the documentation
for your installed version before copying setup or component examples.

### Installation

Follow the current Chakra UI installation guide for your React setup.
Installation requirements and provider configuration vary by major
version.

### Example: Style props

In versions that support the familiar style-prop API, a component can be
styled directly through props:

```jsx
import { Box, Button, Heading } from "@chakra-ui/react";

export default function App() {
  return (
    <Box p="6" borderWidth="1px" borderRadius="lg">
      <Heading size="md" mb="4">
        Welcome
      </Heading>

      <Button colorScheme="blue">Get Started</Button>
    </Box>
  );
}
```

Check your installed Chakra UI version for the correct component imports
and prop names.

### Advantages

- Developer-friendly styling through component props.
- Accessibility is a key design focus.
- Supports responsive styling and theme customisation.
- Useful for building interfaces without writing a separate CSS rule
  for every element.

### Disadvantages

- Requires learning its component and styling APIs.
- Styling conventions and setup can differ across major versions.
- Projects with highly customised design systems may need additional
  configuration.

### Best use cases

- Applications that need fast UI development.
- Products with responsive layouts and reusable design tokens.
- Teams that prefer styling components through props rather than
  utility classes or separate CSS files.

---

## 3. shadcn/ui

**shadcn/ui** is a collection of reusable, accessible UI components that
developers add directly to their codebase using its CLI. Unlike a
conventional component package that hides most implementation details
behind an installed dependency, shadcn/ui gives the project the
component source code so developers can customise and maintain it
themselves.

It commonly works with Tailwind CSS and accessible primitives such as
those provided by Radix UI, depending on the component and
configuration.

### Installation and setup

Use the current shadcn/ui documentation to initialise it for your
framework and project. For a compatible project, the CLI can add
individual components:

```bash
npx shadcn@latest init
npx shadcn@latest add button
```

The exact setup can vary by framework and project configuration.

### Example

After adding the button component, use it from the generated project
path. A common setup looks like this:

```jsx
import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <div className="flex gap-3">
      <Button>Save</Button>
      <Button variant="outline">Cancel</Button>
    </div>
  );
}
```

The import alias and available variants depend on the project's
configuration and generated component code.

### Advantages

- Component source code lives in your project and can be edited
  directly.
- Flexible visual customisation.
- Works well with Tailwind CSS and modern React application setups.
- Offers accessible building blocks for common interface patterns.
- Gives developers direct control over component implementation.

### Disadvantages

- Your team owns updates and maintenance of copied component code.
- Components may need to be updated manually when upstream
  improvements are released.
- Requires familiarity with Tailwind CSS and the project's component
  conventions.
- It is not a traditional drop-in package containing every component
  in a single runtime dependency.

### Best use cases

- Applications that need a distinctive, customised design.
- SaaS products and modern dashboards.
- Teams that want direct control over component source code.
- Projects already using Tailwind CSS.

---

## 4. Comparison

---

Feature Material UI (MUI) Chakra UI shadcn/ui

---

Main approach Installed Component source
component library component library added to your
and styling project
system

Default design Material Design Chakra's own Customisable;
design system commonly
Tailwind-based

Styling Theme and styling Style props and Usually Tailwind
APIs theme APIs, CSS and editable
depending on component code
version

Customisation Theme and Theme and Edit component
component component props source directly
overrides

Accessibility Built-in support Accessibility is Accessible
varies by a core focus primitives and
component patterns,
depending on
component

Maintenance Upgrade the Upgrade the Team maintains
package package the added source
code

Good fit Enterprise tools Fast, accessible Highly customised
and dashboards UI development modern interfaces

---

## 5. How to Choose

- **Choose MUI** when you need a mature component library with a broad
  collection of ready-made components and a consistent Material Design
  foundation.
- **Choose Chakra UI** when you prefer a component-based styling API
  with responsive props and theme customisation.
- **Choose shadcn/ui** when you want direct control over component
  code and a custom design system, especially with Tailwind CSS.

There is no universal winner. The best option depends on the design,
customisation needs, team experience, accessibility requirements, and
long-term maintenance plan.

## Summary

React component libraries provide reusable building blocks that speed up
UI development. **MUI** offers a mature, broad component ecosystem;
**Chakra UI** focuses on accessible components and a convenient styling
system; and **shadcn/ui** provides editable component source code for
greater control over the final design.

# Headless Component Libraries

Headless component libraries provide the behaviour and accessibility
foundations of UI components without forcing a particular visual design.
They can handle open and closed states, keyboard navigation, focus
management, and interaction patterns, while developers apply their own
CSS or design system.

For example, a headless dropdown can manage opening, closing, keyboard
interactions, and accessible attributes. You decide whether it looks
like a simple menu, a branded popover, or part of a larger design
system.

## Key Features

- **Unstyled by default:** You control colours, spacing, borders,
  typography, and layout.
- **Behaviour included:** Components manage interaction logic such as
  opening, closing, and selection.
- **Accessibility support:** Libraries often provide keyboard
  interaction, focus handling, and ARIA attributes.
- **Design flexibility:** Components can match an existing brand or
  custom design system.
- **Reusable behaviour:** Teams can use consistent interaction
  patterns across the application.

## Advantages

- Complete control over the visual design.
- Easier integration with custom CSS, CSS Modules, Tailwind CSS, or
  other styling approaches.
- Helps avoid overriding a library's built-in visual styles.
- Can provide accessible interaction behaviour without implementing
  everything from scratch.

## Disadvantages

- Developers must create and maintain the visual styling.
- Some components require more setup than fully styled component
  libraries.
- Accessibility still needs testing; using a headless library does not
  guarantee that the complete application is accessible.
- Teams must understand the library's APIs and component composition
  patterns.

## Common Use Cases

- Custom design systems.
- SaaS applications with a unique brand identity.
- Applications that need accessible menus, dialogs, tabs, popovers, or
  select controls.
- Projects using Tailwind CSS or CSS Modules where built-in component
  styling is not wanted.

---

## Base UI

**Base UI** is a library of unstyled, accessible React components. It
provides the functional foundation for complex interface elements,
including menus, dialogs, popovers, tabs, and other interactive
controls, while leaving the visual design to the developer.

It focuses on component behaviour, state management, and accessibility
patterns rather than imposing a specific visual appearance.

### How Base UI works

1.  Choose a component, such as a dialog or menu.
2.  Use its documented React components and APIs.
3.  Let Base UI handle supported interaction behaviour and accessibility
    details.
4.  Apply your own CSS or styling system to create the required
    appearance.

### Example: Dialog

The following illustrates the general composition pattern. Check the
documentation for your installed Base UI version for the exact component
names and API.

```jsx
import { Dialog } from "@base-ui/react/dialog";

export default function ExampleDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="dialog-trigger">Open dialog</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Backdrop className="dialog-backdrop" />

        <Dialog.Popup className="dialog-popup">
          <Dialog.Title>Confirm action</Dialog.Title>
          <Dialog.Description>
            Are you sure you want to continue?
          </Dialog.Description>

          <Dialog.Close className="dialog-close">Close</Dialog.Close>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
```

Example CSS:

```css
.dialog-trigger {
  padding: 0.6rem 1rem;
  border: 0;
  border-radius: 0.4rem;
  background: #2563eb;
  color: white;
  cursor: pointer;
}

.dialog-backdrop {
  position: fixed;
  inset: 0;
  background: rgb(0 0 0 / 45%);
}

.dialog-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: min(90vw, 28rem);
  padding: 1.5rem;
  border-radius: 0.75rem;
  background: white;
  color: #111827;
  box-shadow: 0 10px 30px rgb(0 0 0 / 20%);
}

.dialog-close {
  margin-top: 1rem;
  padding: 0.5rem 0.8rem;
}
```

This example shows how behaviour and styling are separated. Verify
component APIs against the current Base UI documentation when setting up
a project.

### Advantages of Base UI

- Provides unstyled components that can fit custom design systems.
- Helps with accessible behaviour for complex controls.
- Gives developers control over styling and layout.
- Avoids requiring a predefined visual theme.

### Disadvantages of Base UI

- Developers need to create the visual design.
- Component composition and APIs require learning.
- Teams remain responsible for testing the final UI, including
  keyboard use, focus visibility, contrast, and responsive behaviour.

### Best Use Cases

- Applications that need a unique visual identity.
- Teams building a shared design system.
- React projects that need accessible interactions but want to control
  all styling.
- Projects combining headless components with Tailwind CSS, CSS
  Modules, or custom CSS.

---

## Headless Libraries vs Styled Component Libraries

---

Feature Headless libraries Styled component
libraries

---

Built-in visual styling Usually none or minimal Usually provided

Behaviour and Provided by the library Provided by the library
interaction

Design flexibility Very high Depends on theme and
override APIs

Setup effort More styling work Often quicker to start

Best suited for Custom design systems Fast development with
an established visual
system

Examples Base UI and other Material UI and many
headless libraries themed UI libraries

---

## Summary

Headless component libraries separate component behaviour from visual
design. **Base UI** provides unstyled React components that help
developers build accessible interactive controls while keeping full
control over the appearance.

Choose a headless library when design flexibility is important and your
team is prepared to maintain the styling. Choose a styled component
library when ready-made visuals and faster initial setup are more
important.

# API Calls in React

## 1. What is an API?

An **API (Application Programming Interface)** is a way for two software applications to communicate and exchange data or functionality.

For example, a React application can call a backend API to fetch users, display products, or create and update records.

```text
React application → API request → Backend/server → Database
React application ← API response ← Backend/server ← Database
```

React usually communicates with the backend API rather than connecting directly to the database.

## 2. REST API and GraphQL

Two common approaches for designing APIs are:

- **REST API:** Uses resource-based URLs and HTTP methods.
- **GraphQL API:** Lets the client request the specific fields it needs through a query.

Both can be used from React.

---

# 3. REST API

A **REST API** represents data as resources and commonly uses HTTP methods to work with them.

| Method   | Purpose                   | Example               |
| -------- | ------------------------- | --------------------- |
| `GET`    | Read data                 | Get all users         |
| `POST`   | Create data               | Add a user            |
| `PUT`    | Replace a resource        | Replace user details  |
| `PATCH`  | Update part of a resource | Update a user's email |
| `DELETE` | Delete data               | Delete a user         |

Example endpoints:

```text
GET    https://api.example.com/users
GET    https://api.example.com/users/1
POST   https://api.example.com/users
PATCH  https://api.example.com/users/1
DELETE https://api.example.com/users/1
```

These are illustrative URLs; use the endpoints provided by your backend.

## 3.1 Fetch data from a REST API in React

This example uses the browser's built-in `fetch()` API and the JSONPlaceholder testing service.

```jsx
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Users</h2>
      {users.map((user) => (
        <p key={user.id}>
          {user.name} - {user.email}
        </p>
      ))}
    </div>
  );
}

export default Users;
```

### How it works

1. `useState()` stores the users, loading state, and error message.
2. `useEffect()` runs the request when the component mounts.
3. `fetch()` sends a `GET` request.
4. `response.json()` parses the JSON response.
5. `setUsers()` updates state, causing React to re-render.
6. The UI displays loading, error, or user information.

> `fetch()` does not automatically throw an error for HTTP responses such as `404` or `500`. Check `response.ok`.

## 3.2 Send data using a REST API

Example: create a user with a `POST` request.

```jsx
async function createUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Kamesh",
        email: "kamesh@example.com",
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to create user");
    }

    const newUser = await response.json();
    console.log("Created user:", newUser);
  } catch (error) {
    console.error(error.message);
  }
}
```

JSONPlaceholder simulates write requests; it does not permanently store a real user.

---

# 4. GraphQL API

**GraphQL** is a query language for APIs and a runtime for fulfilling those queries. A GraphQL server commonly exposes one endpoint where the client sends a query describing the fields it needs.

## 4.1 Example GraphQL query

```graphql
query {
  users {
    id
    name
    email
  }
}
```

This asks the server for each user's `id`, `name`, and `email`.

A possible response:

```json
{
  "data": {
    "users": [
      {
        "id": "1",
        "name": "Alex",
        "email": "alex@example.com"
      }
    ]
  }
}
```

The actual fields and response depend on the backend's GraphQL schema.

## 4.2 Call a GraphQL API from React using fetch

Assume your backend exposes a GraphQL endpoint at `https://api.example.com/graphql`.

```jsx
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      const query = `
        query {
          users {
            id
            name
            email
          }
        }
      `;

      try {
        const response = await fetch("https://api.example.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query }),
        });

        if (!response.ok) {
          throw new Error("Network request failed");
        }

        const result = await response.json();

        if (result.errors?.length) {
          throw new Error(result.errors[0].message);
        }

        setUsers(result.data.users);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Users</h2>
      {users.map((user) => (
        <p key={user.id}>
          {user.name} - {user.email}
        </p>
      ))}
    </div>
  );
}

export default Users;
```

### How it works

1. Define the fields in a GraphQL query.
2. Send the query to the GraphQL endpoint, commonly using `POST`.
3. Read the JSON response.
4. Handle HTTP/network errors and GraphQL `errors`.
5. Store the returned data in React state and render it.

The endpoint and `users` field are examples; they must match your backend schema.

## 4.3 GraphQL mutation

A **mutation** is used to create, update, or delete data in GraphQL.

```graphql
mutation {
  createUser(name: "Kamesh", email: "kamesh@example.com") {
    id
    name
    email
  }
}
```

The mutation name, arguments, and return fields must exist in the backend schema.

---

# 5. REST API vs GraphQL

| Feature        | REST                                           | GraphQL                                                                                  |
| -------------- | ---------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Request style  | Multiple resource URLs                         | Commonly one GraphQL endpoint                                                            |
| Data selection | Defined by each endpoint                       | Client selects fields in the query                                                       |
| HTTP methods   | Uses `GET`, `POST`, `PATCH`, `DELETE`, etc.    | Queries and mutations are commonly sent using `POST`; `GET` may be supported for queries |
| Response shape | Defined by the endpoint                        | Usually follows the requested selection set                                              |
| Over-fetching  | Can happen if an endpoint returns extra fields | Can be reduced by requesting only needed fields                                          |
| Related data   | May require multiple requests                  | Can often be requested in one query                                                      |
| Caching        | HTTP caching is widely supported               | Often needs GraphQL-aware caching or client configuration                                |
| Complexity     | Often simpler for resource-based APIs          | Requires schema and query design                                                         |

GraphQL does not automatically make every API faster. Performance depends on server implementation, query complexity, and caching.

---

# 6. Which should you use in React?

Use **REST** when:

- Your backend already provides REST endpoints.
- Your operations map clearly to resources such as users, products, and orders.
- You want familiar request patterns and HTTP caching.

Use **GraphQL** when:

- Different screens need different combinations of fields.
- You need to retrieve related data flexibly.
- Your backend supports a well-designed GraphQL schema.

React can work with either approach. The choice depends mainly on your backend and data requirements.

---

# 7. Interview questions

### What is an API call in React?

An API call is a request from a React application to a server to read or modify data. The response can be stored in state and displayed in the UI.

### What is the difference between REST and GraphQL?

REST commonly uses multiple resource-based endpoints, while GraphQL lets the client specify the fields it wants through a query.

### What is `fetch()`?

`fetch()` is a browser API used to make HTTP requests. It returns a Promise that resolves to a `Response` object.

### Why use `useEffect()` for an API call?

For a simple client-side component, `useEffect()` can run a request after the component mounts. Larger applications may use data-fetching libraries or framework features for caching, retries, and loading states.

### What is a GraphQL mutation?

A mutation is an operation used to change server-side data, such as creating, updating, or deleting a record.

### What is over-fetching?

Over-fetching means receiving more data than the UI needs. GraphQL can reduce this by allowing the client to request specific fields.

---

## Summary

- **API:** Enables applications to communicate.
- **REST:** Uses resource-based endpoints and HTTP methods.
- **GraphQL:** Lets clients request specific fields using queries and change data using mutations.
- **React:** Can call either API using `fetch()`, Axios, or a suitable client library.

# Testing in React

## 1. What is software testing?

**Software testing** checks whether an application works as expected and meets its requirements. It helps find bugs, prevent regressions, and build confidence when changing code. Tests can also run automatically in a continuous integration (CI) pipeline.

## 2. Common testing types

| Type                     | What it checks                  | Example                                 |
| ------------------------ | ------------------------------- | --------------------------------------- |
| Unit testing             | A small function or unit        | Check a price calculation               |
| Component testing        | A UI component                  | Check that a button responds to a click |
| Integration testing      | Multiple parts working together | Test a form with validation             |
| End-to-end (E2E) testing | A complete user journey         | Sign in and open the dashboard          |

**Playwright** is commonly used for end-to-end testing. **React Testing Library (RTL)** is commonly used for testing React components.

---

# 3. Playwright

**Playwright** is an end-to-end testing tool maintained by Microsoft. It automates browsers and supports Chromium, Firefox, and WebKit.

### Key features

- **Cross-browser testing:** Run tests in different browser engines.
- **Automatic waiting:** Waits for elements and actions to become ready.
- **Parallel execution:** Run tests in parallel when configured.
- **Debugging:** Capture traces and screenshots to investigate failures.

## 3.1 Install Playwright

```bash
npm init playwright@latest........
```

Follow the prompts to configure the project.

Run tests:

```bash
npx playwright test
```

Open the interactive runner:

```bash
npx playwright test --ui
```

## 3.2 Example Playwright test

Assume your app has a login page with accessible labels for Email and Password and a Sign in button. A successful login displays a Dashboard heading.

```javascript
import { test, expect } from "@playwright/test";

test("user can sign in", async ({ page }) => {
  await page.goto("http://localhost:3000/login");

  await page.getByLabel("Email").fill("user@example.com");
  await page.getByLabel("Password").fill("test-password");

  await page.getByRole("button", { name: "Sign in" }).click();

  await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
});
```

Adjust the URL and selectors to match your application. Use test accounts, not real user credentials.

### How it works

1. `test()` defines a test case.
2. `page.goto()` opens the page.
3. `getByLabel()` locates form fields by accessible labels.
4. `fill()` enters text.
5. `getByRole()` locates the button by role and name.
6. `click()` activates the button.
7. `toBeVisible()` checks that the dashboard heading appears.

Playwright locators and assertions automatically wait for relevant conditions within their timeout limits.

### When to use Playwright

- Test login and logout flows.
- Verify form submission.
- Test navigation between pages.
- Check that creating or editing records works.
- Verify behaviour across browser engines.

---

# 4. React Testing Library

**React Testing Library (RTL)** helps test React components in a way that resembles how users interact with the application. It encourages tests based on visible UI and accessible interactions rather than internal implementation details.

RTL is commonly used with **Vitest** or **Jest**, plus `@testing-library/jest-dom` for DOM assertions.

## 4.1 Install packages

For a React project using Vitest:

```bash
npm install -D vitest jsdom \
  @testing-library/react \
  @testing-library/user-event \
  @testing-library/jest-dom
```

Configure Vitest to use the `jsdom` environment and load `@testing-library/jest-dom/vitest` in a test setup file. Exact configuration depends on your build tool.

## 4.2 Example React component

Create `Counter.jsx`:

```jsx
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </section>
  );
}
```

## 4.3 Test the component

Create `Counter.test.jsx`:

```jsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";
import Counter from "./Counter";

test("increases the count when clicked", async () => {
  const user = userEvent.setup();

  render(<Counter />);

  expect(screen.getByText("Count: 0")).toBeInTheDocument();

  await user.click(screen.getByRole("button", { name: "Increase" }));

  expect(screen.getByText("Count: 1")).toBeInTheDocument();
});
```

This assumes Vitest uses `jsdom` and `@testing-library/jest-dom/vitest` is loaded in the test setup.

### How it works

1. `render()` renders the component in the test environment.
2. `getByText()` finds visible text.
3. `getByRole()` finds the button by its accessible role and name.
4. `userEvent.setup()` prepares user interactions.
5. `user.click()` simulates a click.
6. The assertion checks that the displayed count changes from `0` to `1`.

## 4.4 Useful RTL queries

| Query              | Purpose                                     | Example                                                       |
| ------------------ | ------------------------------------------- | ------------------------------------------------------------- |
| `getByRole()`      | Find by accessible role and name            | `getByRole("button", { name: "Save" })`                       |
| `getByLabelText()` | Find a form control by label                | `getByLabelText("Email")`                                     |
| `getByText()`      | Find by visible text                        | `getByText("Welcome")`                                        |
| `findByRole()`     | Find an element that appears asynchronously | `await screen.findByRole("alert")`                            |
| `queryByText()`    | Check for an element that may be absent     | `expect(screen.queryByText("Error")).not.toBeInTheDocument()` |

Prefer accessible queries such as roles and labels because they reflect how users and assistive technologies identify elements.

### When to use React Testing Library

- Test visible component content.
- Test buttons and forms.
- Verify validation messages.
- Check loading, success, and error states.
- Verify UI updates after user actions.

---

# 5. Playwright vs React Testing Library

| Feature               | Playwright                          | React Testing Library                      |
| --------------------- | ----------------------------------- | ------------------------------------------ |
| Main purpose          | End-to-end browser testing          | React component testing                    |
| Environment           | Real browser engines                | Usually a simulated DOM                    |
| Typical scope         | Complete application flows          | Components or integrated UI sections       |
| Cross-browser testing | Chromium, Firefox, WebKit           | Not its main purpose                       |
| Typical speed         | Often slower for full browser flows | Usually faster for focused component tests |
| Best for              | Checking the whole app journey      | Checking component behaviour and UI states |

They are **complementary**, not competing tools. A project can use RTL for component tests and Playwright for critical end-to-end journeys.

## 6. Example testing strategy

For a login feature:

1. **React Testing Library:** Test required-field validation and error messages.
2. **Playwright:** Open the app in a browser, sign in with a test account, and confirm the dashboard loads.
3. **CI pipeline:** Run tests automatically when code is pushed or a pull request is opened.

Choose tests based on the risk and behaviour you need to protect.

---

# 7. Interview questions

### What is software testing?

Testing checks whether software behaves as expected and helps detect defects before they affect users.

### What is end-to-end testing?

It checks a complete user flow through an application, often in a real browser.

### What is Playwright?

A browser automation and end-to-end testing tool supporting Chromium, Firefox, and WebKit.

### What is React Testing Library?

A library for testing React components through their rendered output and user-visible behaviour.

### What is the difference between Playwright and RTL?

Playwright tests complete application flows in browsers. RTL focuses on component behaviour in a test DOM environment.

### Why prefer `getByRole()`?

It finds elements by accessible role and name, encouraging tests that reflect how users and assistive technologies interact with the UI.

### What is regression testing?

It checks that existing features still work after code changes.

### What is CI?

Continuous integration automatically runs checks, such as tests and linting, when developers push code or open pull requests.

---

## Summary

- **Testing** helps find defects and prevent regressions.
- **Playwright** is useful for end-to-end browser testing.
- **React Testing Library** is useful for testing React components through user-visible behaviour.
- Using both helps test components individually and verify important journeys through the complete application.

# Forms

Forms in React need extra handling compared to plain HTML because input values are often connected to component state to keep the UI in sync with user input.

Forms are used to collect information from users, such as names, email addresses, passwords, and other details. React provides ways to manage input values, validate user input, handle form submissions, and display error messages.

Form libraries simplify these tasks by reducing the amount of code required to manage form state and validation.

## Key Concepts

- **Form State:** Stores the current values of form inputs.
- **Controlled Components:** Input values are managed by React state.
- **Uncontrolled Components:** Input values are managed by the DOM and can be accessed using refs.
- **Form Validation:** Checks whether the entered data meets specific requirements.
- **Form Submission:** Handles the data submitted by the user.
- **Error Handling:** Displays error messages when the input data is invalid.

## Simple Example

```jsx
import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({
      email,
      password,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>

        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="password">Password:</label>

        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </div>

      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
```

### How It Works

1. `useState()` stores the email and password values.
2. `value` connects each input to React state.
3. `onChange` updates the state whenever the user types.
4. `onSubmit` calls the `handleSubmit` function when the form is submitted.
5. `event.preventDefault()` prevents the browser from reloading the page during submission.
6. `console.log()` displays the submitted values in the browser console.
7. The `required` attribute prevents the form from being submitted with empty fields.

**Limitation:** As the number of input fields increases, managing state and validation manually can become difficult. Form libraries help simplify this process.

---

# React Hook Form

**React Hook Form** is a library for managing form state and validation in React with minimal re-renders.

It uses uncontrolled inputs by default, registering fields through refs instead of requiring React state updates for every keystroke. This can improve performance, especially when working with large forms.

It also supports validation libraries such as **Zod** and **Yup**.

## Key Features

- Manages form values and submission.
- Supports built-in validation rules.
- Minimises unnecessary re-renders.
- Provides useful methods such as `register()`, `handleSubmit()`, and `reset()`.
- Supports integration with validation libraries.
- Reduces the amount of boilerplate code.

## Installation

Install React Hook Form using npm:

```bash
npm install react-hook-form
```

## Example: Registration Form

```jsx
import { useForm } from "react-hook-form";

function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name:</label>

        <input
          id="name"
          {...register("name", {
            required: "Name is required",
          })}
        />

        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email">Email:</label>

        <input
          id="email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address",
            },
          })}
        />

        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="password">Password:</label>

        <input
          id="password"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must contain at least 6 characters",
            },
          })}
        />

        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
```

## Explanation

### 1. `useForm()`

```jsx
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();
```

The `useForm()` hook provides methods and state for managing the form.

- **`register()`** connects input fields to React Hook Form.
- **`handleSubmit()`** validates the form and calls the submission function when the form is valid.
- **`errors`** contains validation errors for the fields.

### 2. `register()`

```jsx
<input
  {...register("name", {
    required: "Name is required",
  })}
/>
```

The `register()` method connects the input field to React Hook Form.

Here, `name` identifies the field, and `required` defines a validation rule.

If the user submits the form without entering a name, the validation error appears.

### 3. `handleSubmit()`

```jsx
const onSubmit = (data) => {
  console.log(data);
};
```

```jsx
<form onSubmit={handleSubmit(onSubmit)}>
```

`handleSubmit()` handles form submission. It validates the registered fields before calling `onSubmit` with the form data.

If validation fails, the submission callback is not called.

### 4. `formState.errors`

```jsx
{
  errors.name && <p>{errors.name.message}</p>;
}
```

The `errors` object stores validation errors.

If the name field is empty, the message `Name is required` is displayed.

### 5. Validation Rules

```jsx
register("password", {
  required: "Password is required",
  minLength: {
    value: 6,
    message: "Password must contain at least 6 characters",
  },
});
```

This validates the password and displays an error if it is empty or shorter than six characters.

## When to Use React Hook Form

- When building forms with multiple input fields.
- When you need efficient form handling.
- When you need built-in validation support.
- When you want to reduce unnecessary re-renders.
- When integrating with validation libraries such as Zod or Yup.

---

# Formik

**Formik** is a library for managing forms in React. It provides tools for handling form values, validation, submission, and error messages through a consistent API.

Formik commonly uses controlled inputs, meaning React state tracks the form values as the user types.

It simplifies form management by providing methods and components instead of requiring you to write all the form logic manually.

## Key Features

- Manages form values and errors.
- Handles form submission.
- Supports synchronous and asynchronous validation.
- Supports schema-based validation using libraries such as Yup.
- Provides helpers for tracking whether fields have been touched.
- Reduces repetitive form-handling code.

## Installation

Install Formik using npm:

```bash
npm install formik
```

For schema-based validation using Yup:

```bash
npm install yup
```

## Example: Registration Form

```jsx
import { useFormik } from "formik";
import * as Yup from "yup";

function RegistrationForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),

      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),

      password: Yup.string()
        .min(6, "Password must contain at least 6 characters")
        .required("Password is required"),
    }),

    onSubmit: (values) => {
      console.log("Form Data:", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>

        <input
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        {formik.touched.name && formik.errors.name && (
          <p>{formik.errors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="email">Email:</label>

        <input
          id="email"
          name="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        {formik.touched.email && formik.errors.email && (
          <p>{formik.errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="password">Password:</label>

        <input
          id="password"
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        {formik.touched.password && formik.errors.password && (
          <p>{formik.errors.password}</p>
        )}
      </div>

      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
```

## Explanation

### 1. `useFormik()`

```jsx
const formik = useFormik({
  initialValues: {
    name: "",
    email: "",
    password: "",
  },
  onSubmit: (values) => {
    console.log(values);
  },
});
```

The `useFormik()` hook creates a form controller that manages form values, validation, and submission.

### 2. `initialValues`

```jsx
initialValues: {
  name: "",
  email: "",
  password: "",
}
```

`initialValues` defines the initial values of the form fields.

In this example, all fields start with empty strings.

### 3. `formik.handleChange`

```jsx
onChange={formik.handleChange}
```

This updates the corresponding form value whenever the user types.

Formik identifies the field using its `name` attribute.

### 4. `formik.handleBlur`

```jsx
onBlur={formik.handleBlur}
```

This tracks when a user leaves an input field.

Formik uses this information to update the `touched` state, which helps determine when to display validation errors.

### 5. `validationSchema`

```jsx
validationSchema: Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});
```

The validation schema defines rules for form fields.

Here, the email must be valid and cannot be empty.

### 6. `formik.errors` and `formik.touched`

```jsx
{
  formik.touched.email && formik.errors.email && <p>{formik.errors.email}</p>;
}
```

- **`formik.errors`** contains validation error messages.
- **`formik.touched`** tracks whether the user has interacted with a field and left it.

Using both helps avoid displaying errors before the user interacts with the field.

### 7. `formik.handleSubmit`

```jsx
<form onSubmit={formik.handleSubmit}>
```

Formik handles form submission, runs the configured validation, and calls `onSubmit` with the form values when validation succeeds.

## When to Use Formik

- When you need a structured approach to form management.
- When working with controlled inputs.
- When you need field-level or schema-based validation.
- When maintaining an existing project that already uses Formik.
- When you prefer Formik's form state and helper APIs.

---

# Formisch

**Formisch** is a form library designed to simplify form state management, validation, and submission while keeping the amount of boilerplate code low.

It provides tools for working with form values, tracking validation errors, and handling form interactions.

Formisch uses a schema-oriented approach to form validation and supports integrations with compatible validation tools. Its API differs from React Hook Form and Formik, so its hooks and components should be used according to the version of Formisch installed.

## Key Features

- Helps manage form values and validation.
- Supports displaying validation errors.
- Provides tools for handling form submission.
- Helps simplify form state management.
- Can be used to build reusable form logic.

## Installation

Check the installation instructions for the specific Formisch package and version you plan to use before adding it to your project.

## Example: Basic Form Structure

The following example illustrates the general structure of a form. It uses React state to demonstrate form input handling; it is **not a Formisch-specific implementation**.

```jsx
import { useState } from "react";

function RegistrationForm() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim()) {
      setError("Name is required");
      return;
    }

    setError("");
    console.log("Submitted name:", name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>

      <input
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      {error && <p>{error}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}

export default RegistrationForm;
```

## Explanation

1. `useState()` stores the input value and error message.
2. `onChange` updates the name whenever the user types.
3. `handleSubmit()` checks whether the name is empty.
4. `setError()` updates the error message.
5. If the name is valid, the form data is logged.

**Important:** This example demonstrates ordinary React form handling, not Formisch's actual API. Refer to the installed version's documentation for a correct Formisch-specific example.

## When to Consider Formisch

- When exploring alternative form-management libraries.
- When you want a lightweight approach to form state and validation.
- When its API and validation approach fit your application's requirements.

---

# React Hook Form vs Formik vs Formisch

| Feature                | React Hook Form                             | Formik                                                   | Formisch                                                 |
| ---------------------- | ------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| Main purpose           | Form state and validation                   | Form state and validation                                | Form state and validation                                |
| Input handling         | Uncontrolled by default                     | Commonly controlled                                      | Depends on its API and integration                       |
| Performance            | Designed to minimise unnecessary re-renders | Controlled state updates can cause additional re-renders | Depends on implementation                                |
| Validation             | Built-in rules and schema integrations      | Built-in validation support and schema integrations      | Depends on the installed version and integrations        |
| React state management | Abstracted through form methods             | Managed through Formik state                             | Depends on its API                                       |
| Best suited for        | Forms where efficient updates are important | Structured form management and existing Formik projects  | Projects where its API and features fit the requirements |

## Final Summary

- **React Forms:** The basic approach to collecting and validating user input.
- **React Hook Form:** A popular choice when you want efficient form handling with minimal re-renders.
- **Formik:** A structured form-management library with controlled inputs and a consistent API.
- **Formisch:** An alternative form library whose exact APIs and features should be checked against its installed version.

**Recommendation:** For a new React application, consider React Hook Form when you need efficient form handling and validation. Formik is also a reasonable choice, particularly for existing projects that already use it.

# Controlled Components vs Uncontrolled Components

In React, **controlled components** and **uncontrolled components** are two ways to manage form input values.

The main difference is how the input values are managed and accessed.

- **Controlled Components:** React state manages the input values.
- **Uncontrolled Components:** The DOM manages the input values, and React can access them using refs.

---

# 1. Controlled Components

A **controlled component** is a form element whose value is controlled by React state.

Whenever the user types something into the input field, an event handler updates the state. React then uses the updated state to display the current value.

### Example

```jsx
import { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name:", name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>

      <input id="name" type="text" value={name} onChange={handleChange} />

      <p>Entered Name: {name}</p>

      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledForm;
```

### How It Works

1. **`useState("")`** creates a state variable named `name` with an initial empty string.
2. **`value={name}`** makes the input value depend on React state.
3. **`onChange={handleChange}`** calls the event handler whenever the user types.
4. **`event.target.value`** retrieves the current input value.
5. **`setName()`** updates the React state.
6. React re-renders the component with the updated value.
7. **`handleSubmit()`** accesses the latest name from the state when the form is submitted.

### Example Flow

Suppose the user types `Kamesh`.

```text
User types "K"
      ↓
onChange event fires
      ↓
setName("K")
      ↓
React updates the state
      ↓
Input displays "K"
      ↓
The process repeats for each character
```

### Advantages

- Easy to validate input while the user types.
- Easy to show conditional messages based on input values.
- Easy to enable or disable buttons based on form values.
- Form values are directly available in React state.
- Useful when multiple UI elements depend on the same input.

### Disadvantages

- Requires additional state and event-handling code.
- State updates can cause re-renders while typing.
- Managing many fields manually can make the component complex.

### When to Use Controlled Components

Use controlled components when:

- You need real-time form validation.
- You want to display input values elsewhere in the UI.
- You need to enable or disable buttons based on user input.
- You want to control the input value programmatically.

---

# 2. Uncontrolled Components

An **uncontrolled component** is a form element whose current value is managed by the DOM rather than React state.

React does not need to update state on every keystroke. Instead, you can use a **ref** to access the input element and retrieve its current value when required.

### Example

```jsx
import { useRef } from "react";

function UncontrolledForm() {
  const nameRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Name:", nameRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>

      <input id="name" type="text" ref={nameRef} defaultValue="" />

      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;
```

### How It Works

1. **`useRef(null)`** creates a ref to hold a reference to the input element.
2. **`ref={nameRef}`** connects the ref to the input element.
3. **`defaultValue=""`** sets the initial input value.
4. The user types directly into the input, and the DOM maintains its current value.
5. When the form is submitted, **`nameRef.current.value`** retrieves the current input value.
6. React state is not required to store the input value.

### Example Flow

Suppose the user types `Kamesh`.

```text
User types "Kamesh"
        ↓
DOM updates the input value
        ↓
React state is not updated for each keystroke
        ↓
User clicks Submit
        ↓
nameRef.current.value retrieves "Kamesh"
```

### Advantages

- Requires less state-management code for simple forms.
- Does not need React state updates for every keystroke.
- Useful when you only need input values during form submission.
- Can simplify forms with a small number of fields.

### Disadvantages

- Real-time validation requires additional logic.
- Input values are not directly available through React state.
- Displaying live updates elsewhere in the component requires additional handling.
- Managing complex form behaviour can become difficult without a suitable form library.

### When to Use Uncontrolled Components

Use uncontrolled components when:

- You only need input values when submitting a form.
- You are building a simple form.
- You need to integrate with DOM-based libraries.
- You want to access an input directly using a ref.

---

# 3. Key Differences

| Feature                 | Controlled Components                      | Uncontrolled Components                                |
| ----------------------- | ------------------------------------------ | ------------------------------------------------------ |
| Value management        | React state                                | DOM                                                    |
| Accessing values        | State variables                            | Refs or DOM form APIs                                  |
| Updating values         | State updates through event handlers       | DOM updates input values                               |
| Main prop               | `value`                                    | `defaultValue`                                         |
| Input handling          | Usually uses `onChange`                    | Does not require `onChange` for basic value collection |
| Real-time validation    | Easy to implement                          | Requires additional handling                           |
| Re-renders while typing | State updates generally trigger re-renders | Typing alone does not trigger a React re-render        |
| Code complexity         | Can require more state-management code     | Often simpler for basic forms                          |
| Best suited for         | Dynamic forms and real-time validation     | Simple forms and direct DOM access                     |

**Important:** Both approaches can use `onSubmit` to handle form submission. The difference is how the input values are managed before submission.

---

# 4. Practical Example: Resetting Input Values

### Controlled Component

You can reset a controlled input by updating its state.

```jsx
import { useState } from "react";

function ControlledReset() {
  const [name, setName] = useState("");

  const handleReset = () => {
    setName("");
  };

  return (
    <div>
      <input value={name} onChange={(event) => setName(event.target.value)} />

      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default ControlledReset;
```

**Explanation:** Calling `setName("")` updates the state, so the input becomes empty.

### Uncontrolled Component

You can reset an uncontrolled input using a ref.

```jsx
import { useRef } from "react";

function UncontrolledReset() {
  const nameRef = useRef(null);

  const handleReset = () => {
    nameRef.current.value = "";
  };

  return (
    <div>
      <input ref={nameRef} defaultValue="" />

      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default UncontrolledReset;
```

**Explanation:** The ref provides access to the input element, allowing you to clear its value directly.

---

# 5. Which Approach Should You Choose?

Choose **controlled components** when you need more control over the input values.

For example:

- Live search.
- Real-time validation.
- Dynamic forms.
- Forms where one input affects another.

Choose **uncontrolled components** when you only need to collect input values without tracking every change in React state.

For example:

- Simple contact forms.
- Basic forms that collect values during submission.
- Forms that interact with DOM-based libraries.

## Interview Tip

**Question: What is the main difference between controlled and uncontrolled components in React?**

**Answer:** Controlled components store their input values in React state and update them through event handlers. Uncontrolled components allow the DOM to manage input values, which can be accessed using refs when needed.

# SSR Frameworks

**SSR (Server-Side Rendering)** is a technique in which HTML is generated on the server and sent to the browser. The browser can display the generated HTML before the client-side JavaScript finishes loading.

A framework built on top of React adds extra structure and features, such as routing, server-side rendering, data loading, and file-based page organization, that React itself does not provide.

Choosing a framework can save development time by providing built-in features and a consistent project structure.

## Key Features of SSR Frameworks

- **Server-Side Rendering (SSR):** Generates HTML on the server for a request.
- **Static Site Generation (SSG):** Generates HTML pages at build time.
- **Routing:** Maps URLs to pages or components.
- **Data Fetching:** Provides mechanisms to load data for pages.
- **SEO Support:** Can make page content available in the initial HTML, helping search engines discover content.
- **Performance Optimisation:** Provides features such as code splitting, caching, and optimised assets.

## Popular React Frameworks

- **React Router:** Supports client-side routing and also provides framework features for building full-stack web applications.
- **Next.js:** Provides routing, rendering strategies, data fetching, and other production-ready features.

---

# React Router

**React Router** is a routing library for React that also offers a framework mode for building complete web applications.

In its library mode, it helps developers navigate between pages without reloading the entire browser page. In framework mode, it adds features such as file-based routing, data loading, actions, server rendering, and route-level code splitting.

## Key Features

- **Client-Side Routing:** Navigates between pages without a full browser reload.
- **Nested Routes:** Allows child routes to render inside parent layouts.
- **Data Loading:** Loads route data before rendering the relevant UI.
- **Actions:** Handles operations such as form submissions and data mutations.
- **Server Rendering:** Supports server-side rendering in framework mode.
- **Route-Based Organisation:** Organises application pages and layouts around routes.

## Example: Basic Routing

Install React Router:

```bash
npm install react-router
```

Create an application with two routes:

```jsx
import { BrowserRouter, Routes, Route, Link } from "react-router";

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### Explanation

1. **`BrowserRouter`** enables browser-based routing.
2. **`Routes`** groups the route definitions.
3. **`Route`** maps a URL path to a React component.
4. **`Link`** navigates between routes without a full page reload.
5. When the user visits `/about`, the `About` component is displayed.

**Note:** This example demonstrates React Router's library mode, not its full framework mode.

## When to Use React Router

- When adding routing to an existing React application.
- When building single-page applications.
- When you need nested layouts and route-based data loading.
- When you want to use React Router's framework features for a more structured application.

---

# Next.js

**Next.js** is a React framework that provides routing, rendering strategies, data fetching, and optimisation features for building web applications.

It supports server-side rendering, static generation, and client-side interactivity. It also provides file-based routing, so developers can create routes by organising files and folders.

Next.js is widely used for production applications that need good performance, search engine visibility, and a structured development environment.

## Key Features

- **File-Based Routing:** Creates routes based on the project's file and folder structure.
- **Server-Side Rendering (SSR):** Generates HTML on the server for a request when using the appropriate rendering approach.
- **Static Site Generation (SSG):** Generates pages at build time.
- **React Server Components:** Allows components to render on the server by default in the App Router.
- **Client Components:** Supports interactive features such as event handlers and browser APIs.
- **Data Fetching:** Provides ways to retrieve data in Server Components and other supported contexts.
- **Image Optimisation:** Provides the `next/image` component for optimised image delivery.
- **SEO Support:** Supports metadata configuration for search engines and social sharing.

## Example: File-Based Routing

In Next.js, you can create pages by adding files to the `app` directory.

### Project Structure

```text
my-app/
├── app/
│   ├── layout.jsx
│   ├── page.jsx
│   └── about/
│       └── page.jsx
├── package.json
└── next.config.js
```

### 1. Home Page

**File:** `app/page.jsx`

```jsx
export default function HomePage() {
  return <h1>Welcome to the Home Page</h1>;
}
```

This file creates the `/` route.

### 2. About Page

**File:** `app/about/page.jsx`

```jsx
export default function AboutPage() {
  return <h1>Welcome to the About Page</h1>;
}
```

This file creates the `/about` route.

### 3. Root Layout

**File:** `app/layout.jsx`

```jsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

The root layout provides the common HTML structure for the application's pages.

### How It Works

1. Next.js identifies route files inside the `app` directory.
2. `app/page.jsx` represents the home page.
3. `app/about/page.jsx` represents the About page.
4. The root layout wraps the page content.
5. Next.js renders the page using the configured rendering strategy.

**Important:** Creating a page in Next.js does not automatically mean it uses traditional request-time SSR. Depending on the page and configuration, Next.js can use static rendering, dynamic server rendering, or client-side updates.

## Example: Server-Side Data Fetching

In the Next.js App Router, an asynchronous Server Component can fetch data on the server.

```jsx
export default async function UsersPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const users = await response.json();

  return (
    <div>
      <h1>Users</h1>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

### Explanation

1. The asynchronous Server Component requests user data.
2. `await response.json()` converts the response into JavaScript data.
3. The component renders a list of users.
4. The server can render the resulting HTML before sending it to the browser.

This example uses the App Router's Server Component model. Actual caching and rendering behaviour depends on the Next.js version and configuration.

## When to Use Next.js

- When building SEO-friendly websites.
- When developing e-commerce applications.
- When building blogs, content websites, and marketing pages.
- When you need server-side data fetching.
- When you want routing and rendering features integrated into one framework.
- When building full-stack applications with React and server-side functionality.

---

# React Router vs Next.js

| Feature                | React Router                                                | Next.js                                                                |
| ---------------------- | ----------------------------------------------------------- | ---------------------------------------------------------------------- |
| Main purpose           | Routing library with an optional framework mode             | Full React framework                                                   |
| Routing                | Route configuration or framework conventions                | File-based routing                                                     |
| Client-side navigation | Supported                                                   | Supported                                                              |
| Server-side rendering  | Supported in framework mode                                 | Supported                                                              |
| Static generation      | Depends on the framework setup                              | Supported                                                              |
| Data loading           | Route loaders and framework data APIs                       | Server Components and other data-fetching approaches                   |
| Form actions           | Supported through route actions and framework features      | Supported through mechanisms such as Server Actions and Route Handlers |
| Project structure      | Flexible in library mode; more structured in framework mode | Provides an established framework structure                            |
| Best suited for        | Adding routing or using React Router's framework mode       | Building applications with integrated routing and rendering features   |

## Final Summary

- **SSR Frameworks:** Provide rendering, routing, and other features that help build production-ready React applications.
- **React Router:** Best known for routing, with additional data and rendering capabilities in framework mode.
- **Next.js:** A full React framework with file-based routing, server rendering, static generation, and other built-in features.

**Interview Tip:** React is a UI library, while Next.js is a full framework built on React. React Router is primarily a routing library, but its framework mode extends beyond client-side navigation to support more complete application development.

# Types & Validation

Types and validation in a React application help catch mistakes early and ensure that data matches the expected structure.

Data can come from different sources, such as user input, API responses, component props, and configuration files. Type checking and validation help ensure that this data is used correctly.

**Static type checking** checks types during development and compilation, while **runtime validation** checks actual data when the application runs. Both approaches can be used together to improve application reliability.

## Key Concepts

- **Static Typing:** Checks whether values are used according to their declared types.
- **Runtime Validation:** Checks whether actual data satisfies specific rules while the application runs.
- **Type Safety:** Helps prevent operations involving incompatible data types.
- **Schema Validation:** Defines the expected structure and rules for data.
- **Type Inference:** Automatically determines a value's type based on its value or definition.

## Why Do We Need Types and Validation?

- To catch programming mistakes early.
- To ensure API responses match the expected structure.
- To validate user input before processing it.
- To improve code readability and maintainability.
- To reduce errors when passing data between components.
- To make large React applications easier to manage.

---

# TypeScript

**TypeScript** is a superset of JavaScript that adds static typing and other development features. TypeScript helps developers identify type-related errors before running their applications.

In React, TypeScript is commonly used to define the types of component props, state variables, event handlers, and function parameters.

TypeScript code is generally transformed into JavaScript before execution.

## Key Features

- **Static Type Checking:** Detects many type-related mistakes during development.
- **Type Inference:** Automatically determines types when possible.
- **Interfaces and Types:** Define the expected structure of objects.
- **Generics:** Create reusable functions and components that work with different types.
- **React Integration:** Supports typing props, state, events, and hooks.
- **Editor Support:** Provides better autocomplete and error detection in supported editors.

## Installation

To create a new React project using TypeScript with Vite:

```bash
npm create vite@latest my-app -- --template react-ts
```

Navigate to the project and install dependencies:

```bash
cd my-app
npm install
npm run dev
```

## Example 1: Basic TypeScript

```typescript
let username: string = "Kamesh";
let age: number = 25;
let isDeveloper: boolean = true;

console.log(username);
console.log(age);
console.log(isDeveloper);
```

### Explanation

- `string` allows string values.
- `number` allows numeric values.
- `boolean` allows `true` or `false`.

If you try to assign a value of the wrong type, TypeScript reports a type error.

```typescript
let age: number = 25;

// TypeScript error
age = "Twenty-five";
```

**Note:** TypeScript catches this error during type checking. Type annotations are generally removed from the generated JavaScript, so they do not validate data at runtime.

## Example 2: TypeScript in React Props

Props allow a parent component to pass data to a child component.

TypeScript can define which props a component expects and what types those props should have.

```tsx
type UserProps = {
  name: string;
  age: number;
};

function User({ name, age }: UserProps) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}

export default function App() {
  return <User name="Kamesh" age={25} />;
}
```

### Explanation

**1. Define the props type**

```tsx
type UserProps = {
  name: string;
  age: number;
};
```

This defines an object with two required properties:

- `name` must be a string.
- `age` must be a number.

**2. Apply the type to the component**

```tsx
function User({ name, age }: UserProps);
```

This tells TypeScript that the component expects props matching `UserProps`.

**3. Pass the props**

```tsx
<User name="Kamesh" age={25} />
```

TypeScript checks whether the supplied props match the declared types.

For example, passing `age="25"` produces a type error because the value is a string rather than a number.

## Example 3: TypeScript with React State

The `useState` hook can work with TypeScript to maintain a specific state type.

```tsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```

### Explanation

- `useState<number>(0)` defines the state as a number.
- `count` stores the current value.
- `setCount()` updates the value.
- TypeScript helps prevent assigning incompatible values to the state.

## When to Use TypeScript

- When building large React applications.
- When multiple developers work on the same project.
- When you want type checking for component props and state.
- When you need better editor autocomplete and refactoring support.
- When maintaining complex data structures and API integrations.

---

# Zod

**Zod** is a schema validation library designed for TypeScript and JavaScript. It allows developers to define schemas that describe the expected structure of data and validate actual values at runtime.

Zod can also infer TypeScript types from schemas, reducing the need to maintain separate type definitions and validation rules.

## Key Features

- **Runtime Validation:** Checks actual data against defined rules.
- **Schema Definition:** Defines the expected structure of objects and other values.
- **Type Inference:** Generates TypeScript types from schemas.
- **Error Reporting:** Provides detailed validation errors.
- **Object Validation:** Checks the types and requirements of object properties.
- **Form Integration:** Works with form libraries such as React Hook Form.
- **API Validation:** Can validate data received from APIs.

## Installation

```bash
npm install zod
```

## Example 1: Basic Zod Validation

```typescript
import { z } from "zod";

const userSchema = z.object({
  name: z.string(),
  age: z.number(),
  email: z.email(),
});

const user = {
  name: "Kamesh",
  age: 25,
  email: "kamesh@example.com",
};

const result = userSchema.safeParse(user);

if (result.success) {
  console.log("Valid user:", result.data);
} else {
  console.log("Validation errors:", result.error.issues);
}
```

### Explanation

**1. Define the schema**

```typescript
const userSchema = z.object({
  name: z.string(),
  age: z.number(),
  email: z.email(),
});
```

This schema expects an object containing:

- `name`: A string.
- `age`: A number.
- `email`: A valid email address.

**2. Validate the data**

```typescript
const result = userSchema.safeParse(user);
```

`safeParse()` checks whether the supplied data matches the schema without throwing an exception for ordinary validation failures.

**3. Check the result**

```typescript
if (result.success) {
  console.log(result.data);
} else {
  console.log(result.error.issues);
}
```

- If validation succeeds, `result.data` contains the validated data.
- If validation fails, `result.error.issues` contains information about the validation errors.

## Example 2: Zod with TypeScript

One of Zod's main advantages is that it can infer a TypeScript type from a schema.

```typescript
import { z } from "zod";

const userSchema = z.object({
  name: z.string(),
  age: z.number(),
  email: z.email(),
});

type User = z.infer<typeof userSchema>;

const user: User = {
  name: "Kamesh",
  age: 25,
  email: "kamesh@example.com",
};
```

### Explanation

```typescript
type User = z.infer<typeof userSchema>;
```

This generates the TypeScript type from the schema.

You do not need to separately write the same structure in a TypeScript interface or type definition.

**Important:** Type inference provides compile-time type information, while `safeParse()` performs runtime validation. Both serve different purposes.

## Example 3: Zod with React Form Validation

Zod can validate form input before the application processes the submitted data.

```tsx
import { useState } from "react";
import { z } from "zod";

const loginSchema = z.object({
  email: z.email("Enter a valid email address"),
  password: z.string().min(6, "Password must contain at least 6 characters"),
});

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = loginSchema.safeParse({
      email,
      password,
    });

    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }

    setError("");
    console.log("Valid form data:", result.data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      {error && <p>{error}</p>}

      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
```

### Explanation

1. React state stores the email and password.
2. `loginSchema` defines the validation rules.
3. When the user submits the form, `safeParse()` validates the values.
4. If validation fails, the first error message is displayed.
5. If validation succeeds, the validated data is available in `result.data`.

**Note:** This example uses React state to collect input values and Zod to validate them. Zod can also be integrated with React Hook Form to manage form state and validation together.

## When to Use Zod

- When validating form inputs.
- When validating API request or response data.
- When you want runtime validation and TypeScript types from one schema.
- When validating configuration objects.
- When working with React Hook Form and schema-based validation.

---

# Valibot

**Valibot** is a modular, type-safe schema validation library for JavaScript and TypeScript.

It provides functions for defining validation rules, checking data at runtime, and inferring TypeScript types from schemas. Its modular design allows developers to import the specific validation functions they need.

Valibot is useful when you want schema-based validation with a focus on a small bundle size and a modular API.

## Key Features

- **Runtime Validation:** Checks whether data matches a schema.
- **Type Safety:** Supports TypeScript and inferred types.
- **Modular Design:** Allows individual validation functions to be imported.
- **Schema-Based Validation:** Defines rules for strings, numbers, objects, and other data.
- **Error Handling:** Returns structured validation results.
- **Form Integration:** Can be used with compatible React form libraries.
- **API Validation:** Helps validate data received from external services.

## Installation

```bash
npm install valibot
```

## Example 1: Basic Valibot Validation

```typescript
import * as v from "valibot";

const UserSchema = v.object({
  name: v.pipe(v.string(), v.minLength(1, "Name is required")),

  age: v.pipe(v.number(), v.minValue(18, "Age must be at least 18")),

  email: v.pipe(v.string(), v.email("Enter a valid email address")),
});

const user = {
  name: "Kamesh",
  age: 25,
  email: "kamesh@example.com",
};

const result = v.safeParse(UserSchema, user);

if (result.success) {
  console.log("Valid user:", result.output);
} else {
  console.log("Validation errors:", result.issues);
}
```

### Explanation

**1. Define the schema**

```typescript
const UserSchema = v.object({
  name: v.pipe(v.string(), v.minLength(1, "Name is required")),
});
```

`v.object()` defines the expected object structure.

`v.pipe()` combines validation steps into a pipeline.

In this example:

- `v.string()` checks that the value is a string.
- `v.minLength(1)` checks that the string contains at least one character.

**2. Validate the data**

```typescript
const result = v.safeParse(UserSchema, user);
```

`v.safeParse()` checks whether the supplied data satisfies the schema.

**3. Handle the result**

```typescript
if (result.success) {
  console.log(result.output);
} else {
  console.log(result.issues);
}
```

- `result.output` contains the validated data when validation succeeds.
- `result.issues` contains validation details when validation fails.

## Example 2: Valibot with TypeScript

Valibot can infer TypeScript types from its schemas.

```typescript
import * as v from "valibot";

const UserSchema = v.object({
  name: v.string(),
  age: v.number(),
  email: v.pipe(v.string(), v.email()),
});

type User = v.InferOutput<typeof UserSchema>;

const user: User = {
  name: "Kamesh",
  age: 25,
  email: "kamesh@example.com",
};
```

### Explanation

```typescript
type User = v.InferOutput<typeof UserSchema>;
```

This derives the output TypeScript type from the Valibot schema.

The schema defines the expected data structure, and TypeScript uses the inferred type to check how the data is used in the application.

## Example 3: Valibot with React Form Validation

The following example uses React state and Valibot to validate form input.

```tsx
import { useState } from "react";
import * as v from "valibot";

const LoginSchema = v.object({
  email: v.pipe(v.string(), v.email("Enter a valid email address")),

  password: v.pipe(
    v.string(),
    v.minLength(6, "Password must contain at least 6 characters"),
  ),
});

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = v.safeParse(LoginSchema, {
      email,
      password,
    });

    if (!result.success) {
      setError(result.issues[0].message);
      return;
    }

    setError("");
    console.log("Valid form data:", result.output);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      {error && <p>{error}</p>}

      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
```

### Explanation

1. The `LoginSchema` defines the expected email and password values.
2. React state stores the user's input.
3. `v.safeParse()` validates the submitted values.
4. If validation fails, the first error message is displayed.
5. If validation succeeds, the validated data is available in `result.output`.

## When to Use Valibot

- When you need runtime validation with TypeScript.
- When you prefer a modular validation library.
- When bundle size is an important consideration.
- When validating forms, API data, or configuration objects.
- When you want to infer TypeScript types from validation schemas.

---

# TypeScript vs Zod vs Valibot

| Feature                          | TypeScript                                     | Zod                               | Valibot                           |
| -------------------------------- | ---------------------------------------------- | --------------------------------- | --------------------------------- |
| Main purpose                     | Static type checking                           | Runtime schema validation         | Runtime schema validation         |
| Checks types during development  | Yes                                            | Through inferred TypeScript types | Through inferred TypeScript types |
| Validates actual data at runtime | No, not by itself                              | Yes                               | Yes                               |
| Defines schemas                  | Type definitions and interfaces                | Yes                               | Yes                               |
| Infers TypeScript types          | Native type system                             | Yes                               | Yes                               |
| Validates API responses          | Requires runtime validation for untrusted data | Yes                               | Yes                               |
| Validates form input             | Type checking alone is insufficient            | Yes                               | Yes                               |
| Modular validation functions     | Not applicable                                 | Schema-based API                  | Modular API                       |
| Common use case                  | Props, state, and function types               | Forms and API validation          | Forms and API validation          |

## Zod vs Valibot

| Feature              | Zod                            | Valibot                                        |
| -------------------- | ------------------------------ | ---------------------------------------------- |
| API style            | Schema-oriented                | Modular, function-oriented                     |
| Validation approach  | Schema definitions and parsing | Schema definitions and parsing                 |
| Type inference       | `z.infer<typeof Schema>`       | `v.InferOutput<typeof Schema>`                 |
| Validation method    | `safeParse(schemaData)`        | `safeParse(schema, data)`                      |
| Error information    | `result.error.issues`          | `result.issues`                                |
| Bundle size approach | Comprehensive schema API       | Modular design focused on reducing bundle size |

---

# Final Summary

- **TypeScript:** Helps catch type-related mistakes during development. It does not automatically validate external data at runtime.
- **Zod:** Defines schemas, validates actual data at runtime, and infers TypeScript types from schemas.
- **Valibot:** Provides modular, type-safe schema validation with runtime checks and TypeScript type inference.

## Recommended Approach

For a React application, you can combine TypeScript with either Zod or Valibot.

For example:

1. Use **TypeScript** to define component props, state, and function parameters.
2. Use **Zod or Valibot** to validate form input and external API data at runtime.
3. Use the inferred schema types to reduce duplication between validation rules and TypeScript definitions.

**Important:** TypeScript checks your code, while Zod and Valibot check actual data. Combining static type checking with runtime validation provides stronger protection against unexpected data.

# Error Boundaries

An **Error Boundary** is a React component that catches JavaScript errors thrown by its child components during rendering, lifecycle methods, and constructors of descendant components.

It prevents errors in one part of the component tree from crashing the entire application. Instead of displaying a broken UI, an error boundary can show a **fallback UI**, such as an error message or a retry option.

Error boundaries are useful for building reliable React applications because they allow developers to handle rendering errors gracefully.

## Key Features

- **Error Handling:** Catches errors in descendant components during rendering.
- **Fallback UI:** Displays an alternative UI when an error occurs.
- **Application Stability:** Prevents a rendering error in one section from taking down the entire component tree.
- **Error Logging:** Allows developers to log errors for debugging.
- **Component Isolation:** Different sections of an application can have separate error boundaries.

## How Does an Error Boundary Work?

1. React renders a component and its child components.
2. If a descendant component throws an error during rendering, React looks for an error boundary above that component.
3. The error boundary catches the error.
4. React displays the fallback UI defined by the error boundary.
5. The rest of the application outside that boundary can continue working.

### Example Flow

```text
App
 |
 |--- Header
 |
 |--- Error Boundary
 |       |
 |       |--- User Profile
 |       |
 |       |--- Dashboard (Throws an Error)
 |                    |
 |                    X Error Occurs
 |
 |--- Fallback UI
       "Something went wrong!"
```

The error boundary displays its fallback UI instead of the failed section.

---

# Creating an Error Boundary

React error boundaries are traditionally implemented using **class components**.

The two important lifecycle methods are:

- **`getDerivedStateFromError()`**: Updates the component state to display the fallback UI.
- **`componentDidCatch()`**: Receives information about the error and can be used to log it.

## Example: Basic Error Boundary

```jsx
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught:", error);
    console.error("Error information:", errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong!</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

## Explanation

### 1. `hasError` State

```jsx
this.state = {
  hasError: false,
};
```

This state determines whether the normal UI or fallback UI should be displayed.

- `false`: Display the child components.
- `true`: Display the fallback UI.

### 2. `getDerivedStateFromError()`

```jsx
static getDerivedStateFromError(error) {
  return {
    hasError: true,
  };
}
```

React calls this method when a descendant component throws an error that the boundary can catch.

It updates the state so that the boundary renders the fallback UI.

**Important:** This method should remain pure. Use `componentDidCatch()` for error logging rather than logging inside `getDerivedStateFromError()`.

### 3. `componentDidCatch()`

```jsx
componentDidCatch(error, errorInfo) {
  console.error("Error caught:", error);
  console.error("Error information:", errorInfo);
}
```

This method receives:

- **`error`**: The error that occurred.
- **`errorInfo`**: Additional information about the component tree where the error occurred.

You can use this method to log errors or send them to an error-monitoring service.

### 4. Fallback UI

```jsx
if (this.state.hasError) {
  return <h2>Something went wrong!</h2>;
}
```

If an error occurs, the boundary displays the fallback UI instead of its children.

### 5. Rendering Child Components

```jsx
return this.props.children;
```

If no error has been caught, the boundary renders its child components normally.

---

# Using an Error Boundary in React

After creating the error boundary, wrap the components that you want to protect.

## Example: App Component

```jsx
import ErrorBoundary from "./ErrorBoundary";
import UserProfile from "./UserProfile";

function App() {
  return (
    <div>
      <h1>My Application</h1>

      <ErrorBoundary>
        <UserProfile />
      </ErrorBoundary>
    </div>
  );
}

export default App;
```

### Explanation

- `App` renders the application heading.
- `ErrorBoundary` wraps the `UserProfile` component.
- If `UserProfile` throws a render-time error, the boundary displays its fallback UI.
- The heading outside the boundary can remain visible.

**Best practice:** Place error boundaries around important application sections, such as dashboards, user profiles, and independent widgets, so one section's error does not unnecessarily affect the others.

---

# Example: A Component That Throws an Error

```jsx
function UserProfile() {
  throw new Error("Failed to load user profile");

  return <h2>User Profile</h2>;
}

export default UserProfile;
```

When React tries to render `UserProfile`, the component throws an error.

The surrounding error boundary catches the rendering error and displays:

```text
Something went wrong!
```

**Note:** This is an intentionally simplified example for learning. In a real application, handle expected failures, such as API errors, through appropriate loading and error states rather than deliberately throwing errors.

---

# What Error Boundaries Do Not Catch

Error boundaries do not catch every type of error.

They generally do not catch errors in:

- **Event handlers:** Errors thrown when a user clicks a button.
- **Asynchronous code:** Errors thrown later in callbacks such as `setTimeout`.
- **Promise rejections:** Rejected promises that are not handled by an error boundary.
- **Server-side rendering:** Errors thrown while rendering on the server.
- **The error boundary itself:** Errors thrown while the boundary is handling its own fallback UI are not caught by that same boundary.

## Example: Error in an Event Handler

```jsx
function Button() {
  const handleClick = () => {
    throw new Error("Button click failed");
  };

  return <button onClick={handleClick}>Click Me</button>;
}

export default Button;
```

An error thrown by `handleClick` is not caught by a surrounding React error boundary.

Handle such errors directly inside the event handler when necessary.

```jsx
function Button() {
  const handleClick = () => {
    try {
      // Perform an operation that might fail.
      throw new Error("Button click failed");
    } catch (error) {
      console.error("Click error:", error);
    }
  };

  return <button onClick={handleClick}>Click Me</button>;
}

export default Button;
```

Here, the `try...catch` block handles the error within the event handler.

---

# Resetting an Error Boundary

Once an error boundary catches an error, it normally continues displaying its fallback UI until its state is reset or the boundary is remounted.

You can provide a retry button that resets the error state.

## Example: Error Boundary with Reset

```jsx
import React from "react";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({
      hasError: false,
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong!</h2>

          <button onClick={this.handleReset}>Try Again</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

### Explanation

- When an error occurs, `hasError` becomes `true`.
- The fallback UI appears with a **Try Again** button.
- Clicking the button resets `hasError` to `false`.
- React attempts to render the children again.

**Important:** Resetting the boundary does not guarantee that the underlying error is fixed. If the child component still throws the same error, the fallback UI will appear again.

---

# Error Boundaries with Functional Components

React does not provide a built-in hook that turns a function component into an error boundary.

You can use a class component to implement the boundary and wrap functional components inside it.

Alternatively, libraries such as `react-error-boundary` provide reusable components and hooks for error handling.

## Installation

```bash
npm install react-error-boundary
```

## Example

```jsx
import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <h2>Something went wrong!</h2>

      <p>{error.message}</p>

      <button onClick={resetErrorBoundary}>Try Again</button>
    </div>
  );
}

function UserProfile() {
  // Replace this with your actual component logic.
  return <h2>User Profile</h2>;
}

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <UserProfile />
    </ErrorBoundary>
  );
}

export default App;
```

### Explanation

- **`ErrorBoundary`** catches errors from descendant components.
- **`FallbackComponent`** defines the UI displayed when an error occurs.
- **`error`** provides information about the error.
- **`resetErrorBoundary`** resets the boundary so the children can be rendered again.

The example above does not throw an error, so `UserProfile` renders normally. If it throws an error during rendering, the fallback component appears.

---

# Best Practices

- Use error boundaries around important sections of your application.
- Display a helpful fallback UI instead of exposing technical details to users.
- Log errors so that developers can investigate them.
- Provide a retry option when retrying is appropriate.
- Use `try...catch` for errors in event handlers and asynchronous operations where needed.
- Handle expected API failures through explicit error states.
- Avoid placing the entire application inside only one boundary if independent sections should remain usable.
- Do not assume that resetting a boundary will fix the underlying problem.

---

# Final Summary

- **Error Boundary:** A React component that catches errors in descendant components during rendering and related lifecycle processing.
- **`getDerivedStateFromError()`:** Updates state to display the fallback UI.
- **`componentDidCatch()`:** Allows errors to be logged or reported.
- **Fallback UI:** The alternative interface shown when an error occurs.
- **Class Components:** React's traditional built-in way to implement error boundaries.
- **`react-error-boundary`:** A library that provides reusable error-boundary components and related utilities.

## Interview Question

**Q: What is an Error Boundary in React, and why do we use it?**

**Answer:** An error boundary is a React component that catches JavaScript errors thrown by its child components during rendering and displays a fallback UI instead of allowing the affected part of the component tree to fail without recovery. It is commonly implemented using `getDerivedStateFromError()` and `componentDidCatch()` in a class component.

# Server APIs

**Server APIs** in React are APIs provided by `react-dom/server` that allow developers to render React components into HTML on the server.

Instead of rendering the entire application in the browser, React can generate HTML on the server and send it to the browser. The browser can display this HTML before the client-side JavaScript finishes loading.

These APIs are mainly used when implementing **Server-Side Rendering (SSR)** and **Static Site Generation (SSG)**.

Most React components do not need to import or use these APIs directly because frameworks such as Next.js handle server rendering internally.

## Key Features

- **Server-Side Rendering:** Converts React components into HTML on the server.
- **Initial HTML Generation:** Generates HTML that can be sent to the browser.
- **Performance:** Allows the browser to display rendered content before client-side JavaScript finishes loading.
- **SEO Support:** Makes page content available in the initial HTML response.
- **Framework Integration:** Frameworks can use these APIs internally to handle rendering.
- **Static HTML Generation:** Supports generating HTML files during a build process.

## Available Server APIs

React provides several APIs through `react-dom/server`.

| API                          | Description                                                |
| ---------------------------- | ---------------------------------------------------------- |
| `renderToString()`           | Renders a React tree into an HTML string.                  |
| `renderToStaticMarkup()`     | Generates HTML that is not intended for React hydration.   |
| `renderToPipeableStream()`   | Streams HTML using Node.js streams.                        |
| `renderToReadableStream()`   | Streams HTML using Web Streams APIs.                       |
| `renderToStaticNodeStream()` | Legacy API for generating a static HTML stream in Node.js. |
| `renderToNodeStream()`       | Legacy API for rendering HTML to a Node.js stream.         |

**Important:** `renderToNodeStream()` and `renderToStaticNodeStream()` are legacy APIs. For modern streaming server rendering, use the appropriate streaming API for your environment.

---

# 1. renderToString()

**`renderToString()`** renders a React component tree into an HTML string on the server.

The generated HTML can be sent to the browser as part of an HTTP response.

## Example

```jsx
import React from "react";
import { renderToString } from "react-dom/server";

function App() {
  return (
    <div>
      <h1>Welcome to React</h1>
      <p>This HTML was generated on the server.</p>
    </div>
  );
}

const html = renderToString(<App />);

console.log(html);
```

## Output

```html
<div>
  <h1>Welcome to React</h1>
  <p>This HTML was generated on the server.</p>
</div>
```

## Explanation

1. `App` defines the React component.
2. `renderToString(<App />)` renders the component into an HTML string.
3. The generated HTML can be included in a server response.
4. The browser can display the HTML without waiting for React to render the page on the client.

**Note:** `renderToString()` does not stream the response. It also does not wait for asynchronous data or Suspense content to finish loading; use the appropriate streaming API when streaming rendering is required.

## When to Use

- When you need to generate HTML on the server.
- When integrating React into a custom server.
- When building a simple server-rendering implementation.

---

# 2. renderToStaticMarkup()

**`renderToStaticMarkup()`** generates an HTML string from React components without the additional markup intended to support React hydration.

It is useful when you need static HTML that will not become an interactive React application on the client.

## Example

```jsx
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

function App() {
  return (
    <div>
      <h1>Product Details</h1>
      <p>Product: Laptop</p>
      <p>Price: ₹50,000</p>
    </div>
  );
}

const html = renderToStaticMarkup(<App />);

console.log(html);
```

## Output

```html
<div>
  <h1>Product Details</h1>
  <p>Product: Laptop</p>
  <p>Price: ₹50,000</p>
</div>
```

## Explanation

1. `App` defines the static content.
2. `renderToStaticMarkup()` converts the component into HTML.
3. The generated HTML can be saved to a file or included in a response.
4. The output is not intended to be hydrated into an interactive React tree.

## When to Use

- When generating static HTML.
- When rendering React components for emails or other HTML output.
- When the generated content does not need React interactivity.

---

# 3. renderToPipeableStream()

**`renderToPipeableStream()`** renders a React component tree and streams the generated HTML through a Node.js writable stream.

Streaming allows the server to send HTML progressively rather than waiting for the entire page to finish rendering.

It is particularly useful for applications that use Suspense and need to progressively deliver content.

## Example

```jsx
import React, { Suspense } from "react";
import { renderToPipeableStream } from "react-dom/server";
import { PassThrough } from "node:stream";

function App() {
  return (
    <html>
      <body>
        <h1>My Application</h1>

        <Suspense fallback={<p>Loading content...</p>}>
          <p>Welcome to the application!</p>
        </Suspense>
      </body>
    </html>
  );
}

const stream = new PassThrough();

const { pipe } = renderToPipeableStream(<App />, {
  onShellReady() {
    stream.setEncoding("utf8");

    stream.on("data", (chunk) => {
      console.log(chunk);
    });

    pipe(stream);
  },

  onError(error) {
    console.error("Rendering error:", error);
  },
});
```

## Explanation

- **`renderToPipeableStream()`** starts server-side rendering.
- **`onShellReady()`** runs when the initial shell of the page is ready.
- **`pipe()`** sends the rendered HTML into a Node.js writable stream.
- **`Suspense`** allows a fallback to be displayed while suspended content is waiting to become available.
- **`onError()`** provides a place to report rendering errors.

This example demonstrates the streaming API. In a real HTTP server, the stream would normally be piped to the HTTP response, with appropriate status codes, headers, and error handling.

## When to Use

- When building a custom Node.js server.
- When rendering pages with Suspense.
- When you want to send HTML progressively.
- When working with streaming SSR.

---

# 4. renderToReadableStream()

**`renderToReadableStream()`** renders React components into a Web Readable Stream.

It is designed for environments that support Web Streams, including modern web runtimes and supported server environments.

## Example

```jsx
import React from "react";
import { renderToReadableStream } from "react-dom/server";

function App() {
  return (
    <div>
      <h1>Server Rendering</h1>
      <p>Rendered using a Web Readable Stream.</p>
    </div>
  );
}

async function renderApp() {
  const stream = await renderToReadableStream(<App />);

  const response = new Response(stream, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });

  return response;
}

renderApp().then(async (response) => {
  console.log(await response.text());
});
```

## Explanation

1. `renderToReadableStream()` starts rendering the React component tree.
2. It returns a promise that resolves to a readable stream when the shell is ready.
3. The stream can be used as the body of a web `Response`.
4. The response contains the generated HTML.

**Note:** The example uses the Web Streams and `Response` APIs, which are available in modern web runtimes. Streaming errors and Suspense completion can require additional handling in production.

## When to Use

- When building applications on Web Streams-compatible runtimes.
- When working with serverless or edge environments that support the required APIs.
- When you need streaming server-side rendering.

---

# How Server APIs Work

The basic server-rendering process follows these steps:

1. A request reaches the server.
2. The server renders the React component tree using an appropriate server API.
3. React generates HTML.
4. The server sends the HTML to the browser.
5. The browser displays the HTML.
6. If the application uses client-side React, the browser can load JavaScript and hydrate the HTML to enable interactivity.

## Example Flow

```text
Browser Request
      |
      v
React Application on Server
      |
      v
react-dom/server API
      |
      v
Generated HTML
      |
      v
HTML Response to Browser
      |
      v
Browser Displays the Page
      |
      v
React Hydration (when applicable)
      |
      v
Interactive Application
```

**Hydration** is the process through which React attaches client-side behaviour to HTML that was already rendered on the server.

Not every use of a server rendering API requires hydration. For example, static HTML generated with `renderToStaticMarkup()` is not intended to be hydrated.

---

# Server APIs vs Client Rendering

| Feature                 | Server APIs                               | Client Rendering                                        |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------- |
| Where rendering happens | Server                                    | Browser                                                 |
| Main purpose            | Generate HTML on the server               | Render and update UI in the browser                     |
| Common API              | `renderToString()`                        | `createRoot()`                                          |
| Initial HTML            | Can be generated on the server            | Usually generated by client-side JavaScript             |
| Hydration               | Can be used with hydratable server output | Not required when creating a fresh client-rendered root |
| Common use case         | SSR and static HTML generation            | Interactive single-page applications                    |

## Example: Client Rendering

Client-side rendering typically uses `createRoot()` from `react-dom/client`.

```jsx
import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")).render(<App />);
```

This renders the React application in the browser.

By comparison, server APIs generate HTML on the server.

---

# Best Practices

- Use the server API appropriate for your runtime and rendering requirements.
- Prefer streaming APIs when progressive HTML delivery is beneficial.
- Use `renderToStaticMarkup()` when the generated HTML does not need React hydration.
- Handle rendering errors and HTTP responses appropriately.
- Avoid manually implementing server rendering when a framework already provides the required functionality.
- Remember that server-rendered HTML does not automatically make browser-side event handlers interactive; hydration or client-side rendering is needed for interactivity.

---

# Final Summary

- **Server APIs:** Render React components into HTML on the server.
- **`renderToString()`:** Generates an HTML string.
- **`renderToStaticMarkup()`:** Generates static HTML that is not intended for hydration.
- **`renderToPipeableStream()`:** Streams HTML using Node.js streams.
- **`renderToReadableStream()`:** Streams HTML using Web Streams.
- **Hydration:** Makes server-rendered HTML interactive by attaching React to it on the client.

**Interview Tip:** The main difference between `renderToString()` and `renderToStaticMarkup()` is that `renderToString()` produces HTML intended to support React hydration, while `renderToStaticMarkup()` produces HTML for static output that is not intended to be hydrated.

# Suspense in React

## What is Suspense?

**Suspense** is a React feature that allows a component to wait for something before displaying its content. While waiting, React displays a **fallback UI**, such as a loading message or spinner.

Suspense is commonly used for:

- **Code splitting** with `React.lazy()`.
- **Displaying loading indicators** while lazy-loaded components load.
- **Handling data loading** when supported by a React framework or library.
- **Streaming server-rendered content**.

> **Important:** Suspense does not automatically detect data fetching in every `useEffect()` or API call. Data fetching must use a Suspense-compatible framework or library.

---

## 1. How Suspense Works

Suspense uses a component called a **Suspense boundary** to define which part of the UI should display a fallback while waiting.

### Example

```jsx
import { Suspense, lazy } from "react";

const Dashboard = lazy(() => import("./Dashboard"));

function App() {
  return (
    <div>
      <h1>My Application</h1>

      <Suspense fallback={<p>Loading dashboard...</p>}>
        <Dashboard />
      </Suspense>
    </div>
  );
}

export default App;
```

### Explanation

- `lazy()` loads the `Dashboard` component when it is needed.
- `<Suspense>` defines the boundary for the loading UI.
- `fallback` specifies what to display while the component's code is loading.
- Once the component finishes loading, React displays the `Dashboard` component.

**Output while loading:**

```text
My Application
Loading dashboard...
```

After loading, the dashboard content appears.

---

## 2. Suspense with React.lazy()

`React.lazy()` allows you to load a component dynamically instead of including its code in the initial JavaScript bundle.

### Without Lazy Loading

```jsx
import Dashboard from "./Dashboard";

function App() {
  return <Dashboard />;
}
```

The `Dashboard` component is imported normally.

### With Lazy Loading

```jsx
import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("./Dashboard"));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Dashboard />
    </Suspense>
  );
}

export default App;
```

### Benefits

- Reduces the amount of JavaScript loaded initially.
- Loads components when they are needed.
- Can improve the initial loading performance of large applications.
- Works well for pages that users may not visit immediately.

**Note:** The fallback appears when the lazy-loaded component's code has not finished loading. If the code is already available, the fallback may not be visible.

---

## 3. Suspense Fallback UI

The `fallback` prop defines the UI displayed while a child component is waiting.

You can display text, a spinner, or a custom loading component.

### Example: Loading Message

```jsx
import { Suspense, lazy } from "react";

const Profile = lazy(() => import("./Profile"));

function App() {
  return (
    <Suspense fallback={<h3>Loading profile...</h3>}>
      <Profile />
    </Suspense>
  );
}

export default App;
```

### Example: Reusable Loading Component

```jsx
import { Suspense, lazy } from "react";

const Profile = lazy(() => import("./Profile"));

function Loader() {
  return <div>Please wait, loading...</div>;
}

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Profile />
    </Suspense>
  );
}

export default App;
```

Using a separate loading component makes the code easier to maintain and reuse.

---

## 4. Multiple Suspense Boundaries

You can use multiple Suspense boundaries to handle loading states for different parts of an application independently.

### Example

```jsx
import { Suspense, lazy } from "react";

const Header = lazy(() => import("./Header"));
const Dashboard = lazy(() => import("./Dashboard"));
const Footer = lazy(() => import("./Footer"));

function App() {
  return (
    <div>
      <Suspense fallback={<p>Loading header...</p>}>
        <Header />
      </Suspense>

      <Suspense fallback={<p>Loading dashboard...</p>}>
        <Dashboard />
      </Suspense>

      <Suspense fallback={<p>Loading footer...</p>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
```

### Explanation

- Each boundary manages its own fallback.
- Different sections can finish loading at different times.
- A slow-loading section does not necessarily require the entire page to show one loading message.

**Best practice:** Choose Suspense boundaries based on meaningful sections of your UI, rather than adding a boundary around every small component.

---

## 5. Suspense for Data Fetching

Suspense can also be used while data is loading, but the data source must support Suspense.

React does **not** automatically activate Suspense when you fetch data using ordinary `fetch()` calls inside `useEffect()`.

### Example: Traditional Data Fetching

```jsx
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  if (loading) {
    return <p>Loading users...</p>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default Users;
```

In this example, the component manages its own loading state. **Suspense does not handle this loading state automatically.**

Suspense-based data loading is available through supported frameworks and libraries. Follow the relevant library's documentation for its specific API.

---

## 6. Suspense and Error Boundaries

Suspense and Error Boundaries serve different purposes.

- **Suspense:** Displays a fallback while a supported operation is waiting.
- **Error Boundary:** Displays fallback UI when a descendant component throws an error during rendering.

### Example

```jsx
import { Component, Suspense, lazy } from "react";

const Dashboard = lazy(() => import("./Dashboard"));

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong.</p>;
    }

    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<p>Loading dashboard...</p>}>
        <Dashboard />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
```

### Explanation

- Suspense displays `Loading dashboard...` while the lazy-loaded component is loading.
- The Error Boundary can display `Something went wrong.` if an error is thrown during rendering or lazy component loading.
- Suspense itself is not an error-handling mechanism.

---

## 7. Suspense in Server Rendering

Suspense also works with React's server-rendering capabilities.

It can help React stream parts of a page as they become ready instead of waiting for every part to finish before sending any HTML.

### Example

```jsx
import { Suspense } from "react";

function Comments() {
  return <p>Comments section</p>;
}

function App() {
  return (
    <main>
      <h1>Blog Post</h1>

      <Suspense fallback={<p>Loading comments...</p>}>
        <Comments />
      </Suspense>
    </main>
  );
}

export default App;
```

This example demonstrates a Suspense boundary. The `Comments` component above is synchronous, so it does not actually trigger the fallback.

In a real server-rendered application, a Suspense boundary can be used with supported asynchronous rendering patterns and React server-rendering APIs.

---

## 8. Suspense vs. useEffect

| Feature                | Suspense                                               | useEffect                                        |
| ---------------------- | ------------------------------------------------------ | ------------------------------------------------ |
| Main purpose           | Coordinates loading fallbacks for supported operations | Runs side effects after rendering                |
| Loading UI             | Can display a fallback through a Suspense boundary     | Usually managed using component state            |
| Lazy component loading | Works with `React.lazy()`                              | Not required for this                            |
| Data fetching          | Requires Suspense-compatible support                   | Can run ordinary API requests                    |
| Error handling         | Does not replace error handling                        | Errors need appropriate handling                 |
| Common use             | Lazy loading and supported Suspense-based data loading | API calls, subscriptions, and other side effects |

**Key point:** Suspense and `useEffect()` solve different problems. You can use either approach depending on the requirements of your application.

---

## 9. Best Practices

- **Always provide a useful fallback** for lazy-loaded components.
- Use meaningful loading messages or skeleton screens.
- Place boundaries around logical UI sections.
- Use Error Boundaries when you need to handle rendering errors.
- Do not assume that every API request automatically activates Suspense.
- Use a framework or library that explicitly supports Suspense-based data fetching when required.
- Avoid unnecessarily splitting every small component into a separate lazy-loaded module.

---

## 10. Key Points to Remember

- **Suspense** allows React to display fallback UI while supported operations are waiting.
- `React.lazy()` is a common way to use Suspense for code splitting.
- The `fallback` prop defines what users see while waiting.
- Multiple Suspense boundaries can manage different sections independently.
- Suspense does not automatically handle ordinary API calls made inside `useEffect()`.
- Suspense and Error Boundaries have different responsibilities.
- Suspense can be used with React server rendering and supported asynchronous rendering patterns.

---

## Interview Question

**Q: What is Suspense in React?**

**Answer:** Suspense is a React feature that allows a component to display a fallback UI while waiting for a supported operation, such as loading a component with `React.lazy()`. It can also support data loading through compatible frameworks and libraries.

**Q: Does Suspense automatically handle all API calls?**

**Answer:** No. Ordinary API calls inside `useEffect()` do not automatically trigger Suspense. The data-fetching mechanism must support Suspense.

**Q: What is the difference between Suspense and an Error Boundary?**

**Answer:** Suspense handles waiting states by displaying fallback UI, while an Error Boundary handles certain rendering errors by displaying error fallback UI.
