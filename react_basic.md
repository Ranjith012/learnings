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
