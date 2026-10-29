# React State Management

## 1. State Management

**State management** is the process of storing, updating, and sharing
the data that determines what an application displays and how it
behaves.

State can include: - The currently logged-in user - A shopping cart -
Form input values - Theme preferences - API loading and error states -
Filters, sorting, and pagination

For example, when a user adds a product to a shopping cart, the
application updates its state. React then re-renders the relevant UI to
show the updated cart count.

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount((current) => current + 1)}>
      Count: {count}
    </button>
  );
}
```

### Types of state

- **Local state:** Used by one component, usually with `useState` or
  `useReducer`.
- **Shared state:** Used by multiple components, such as a theme or
  current user.
- **Server state:** Data fetched from a server, such as products or
  customer details. Libraries such as TanStack Query help manage
  caching and synchronization.
- **URL state:** Information represented in the URL, such as search
  terms, filters, and page numbers.
- **Form state:** Input values, validation errors, and submission
  status.

### Why do we need state management?

As an application grows, multiple components may need the same data.
Passing props through many intermediate components can become difficult
to maintain. A state management approach gives the application a clear
way to share and update that data.

---

## 2. React Context API

**Context** is a built-in React feature that lets components share a
value without passing it through props at every level of the component
tree.

Context is useful for values such as: - Theme - Current user or
authentication information - Language preference - Application-wide
configuration

Context provides a value; it does not automatically manage all state
updates for you. It is commonly combined with `useState` or
`useReducer`.

### How Context works

1.  Create a context with `createContext`.
2.  Place a provider above the components that need the value.
3.  Read the value in a child component using `useContext`.
4.  Update the provider's state to make consumers receive the new value.

### Example: Theme Context

#### Step 1: Create the context

`ThemeContext.jsx`

```jsx
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}
```

#### Step 2: Wrap the application

`main.jsx` (or the root of your app)

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./ThemeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
```

#### Step 3: Read and update the context

`ThemeButton.jsx`

```jsx
import { useTheme } from "./ThemeContext";

export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div data-theme={theme}>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
}
```

Any component rendered under `ThemeProvider` can call `useTheme()` to
access the theme and its update function.

### Context API: Advantages

- Built into React; no additional state library is required.
- Avoids passing props through many intermediate components.
- Works well for relatively stable shared values.
- Can be combined with `useReducer` for more structured updates.

### Context API: Limitations

- Consumers re-render when the context value they read changes,
  subject to React's normal rendering behavior.
- A large context containing unrelated values can cause unnecessary
  consumer re-renders.
- It does not provide Redux-style action history, middleware, or a
  standard global update architecture.
- It is not automatically a server-state cache or data-fetching
  solution.

### Context best practices

- Keep unrelated values in separate contexts when that improves
  clarity or rendering behavior.
- Memoize provider values and callbacks when profiling shows avoidable
  re-renders.
- Keep component-specific state local instead of putting everything in
  Context.
- Use a custom hook to provide a clear interface to context consumers.

---

## 3. Redux

**Redux** is a predictable state management library. It stores shared
application state in a central store and updates that state through
dispatched actions and reducer functions.

In modern React applications, **Redux Toolkit (RTK)** is the recommended
way to write Redux code. It reduces boilerplate and includes common best
practices.

### Core Redux concepts

- **Store:** Holds the application's Redux state.
- **Action:** An object describing what happened. It commonly has a
  `type` and may include a `payload`.
- **Dispatch:** Sends an action to the store.
- **Reducer:** A function that calculates the next state from the
  current state and an action.
- **Selector:** A function that reads a particular value from the
  store.
- **Slice:** A Redux Toolkit concept that groups a feature's initial
  state, reducers, and generated actions.
- **Middleware:** Code that runs in the dispatch pipeline and can add
  capabilities such as logging or asynchronous workflows.

### Redux data flow

1.  A user interacts with the UI.
2.  The component dispatches an action.
3.  Middleware may process the action.
4.  A reducer calculates the next state.
5.  The store saves the new state.
6.  Components subscribed to relevant state update their UI.

### Example: Counter with Redux Toolkit

Install the packages:

```bash
npm install @reduxjs/toolkit react-redux
```

#### Step 1: Create a slice

`counterSlice.js`

```jsx
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
```

**Important:** The reducer syntax looks like it mutates state, but Redux
Toolkit uses Immer internally to produce an immutable update. Do not
mutate Redux state directly outside these reducer helpers.

#### Step 2: Configure the store

`store.js`

```jsx
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

#### Step 3: Provide the store to React

`main.jsx`

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
```

#### Step 4: Use Redux state and actions

`Counter.jsx`

```jsx
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <section>
      <h2>Count: {count}</h2>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Add 5</button>
    </section>
  );
}
```

### What do `useSelector` and `useDispatch` do?

- **`useSelector`** reads data from the Redux store and subscribes the
  component to changes in the selected value.
- **`useDispatch`** returns the store's dispatch function, which you
  use to send actions.

### When should you use Redux?

Redux can be a good choice when: - Many components need to read and
update the same data. - State updates are complex or involve multiple
features. - You want a consistent, inspectable update flow. -
Middleware, debugging tools, and predictable state transitions are
valuable. - The team needs established conventions for shared
application state.

Redux is not required for every React application. Local state and
Context may be enough for smaller applications.

---

## 4. Redux Thunk

**Redux Thunk** is middleware that lets you dispatch functions (thunks)
instead of only plain action objects. A thunk can perform asynchronous
work, such as an API request, and dispatch actions when the work starts,
succeeds, or fails.

Redux Thunk is included by default in the store setup created with Redux
Toolkit's `configureStore`. You generally do not need to install or add
it separately when using that setup.

### Why do we need Redux Thunk?

A normal reducer must remain synchronous and should not perform API
requests. API calls need to happen outside reducers. A thunk can perform
the request and dispatch actions to update the store with loading,
success, or error information.

A typical flow is:

1.  Dispatch a thunk.
2.  Set loading state.
3.  Request data from an API.
4.  Dispatch success or failure actions.
5.  Update the store in reducers.
6.  Render the latest state in the UI.

### Example: Fetch users from an API

This example uses Redux Toolkit's `createAsyncThunk`, which creates the
lifecycle actions for a thunk.

#### Step 1: Create an async thunk and slice

`usersSlice.js`

```jsx
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "Something went wrong",
      );
    }
  },
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload ?? action.error.message;
      });
  },
});

export default usersSlice.reducer;
```

`createAsyncThunk` generates three action types: - **`pending`:** The
request has started. - **`fulfilled`:** The request completed
successfully. - **`rejected`:** The request failed.

The `extraReducers` builder responds to those generated actions. It does
not create the API request itself; the async function inside
`createAsyncThunk` performs the request.

#### Step 2: Add the reducer to the store

`store.js`

```jsx
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
```

If your store already contains other reducers, add `users: usersReducer`
alongside them.

#### Step 3: Dispatch the thunk from a component

`Users.jsx`

```jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./usersSlice";

export default function Users() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.users);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <p>Loading users...</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  if (status === "succeeded") {
    return (
      <ul>
        {items.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  }

  return <p>Waiting to load users...</p>;
}
```

The component dispatches the thunk when the state is idle, then displays
a loading message, the users, or an error.

**Production note:** Consider retry behavior, cancellation, duplicate
requests, and error handling where required. For server data with
caching, automatic refetching, and request deduplication, Redux Toolkit
Query or TanStack Query may be a better fit than manually managing
request state.

### Writing a manual thunk

Redux Thunk also allows you to write a function directly:

```jsx
export const fetchUsersManually = () => {
  return async (dispatch) => {
    dispatch({ type: "users/loading" });

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const users = await response.json();

      dispatch({
        type: "users/succeeded",
        payload: users,
      });
    } catch (error) {
      dispatch({
        type: "users/failed",
        payload: error instanceof Error ? error.message : "Unknown error",
      });
    }
  };
};
```

This illustrates the middleware concept. In a Redux Toolkit application,
prefer `createAsyncThunk` for common async workflows because it
standardizes lifecycle actions and error handling. The manual example
requires matching reducers for the action types shown.

---

## 5. Context API vs Redux vs Redux Thunk

These are related but not identical concepts: - **Context API** shares
values through the React component tree. - **Redux** provides a
centralized store and predictable state updates. - **Redux Thunk**
enables asynchronous logic in Redux's dispatch flow.

---

Feature Context API Redux Toolkit Redux Thunk

---

What is it? Built-in React State management Redux middleware
feature library/toolkit

Main purpose Share values Manage shared Run async logic
across components state and updates and dispatch
actions

Stores state by No; usually Yes, in the Redux No; works with
itself? combined with store Redux
React state

API requests Can be written Can use thunks or Supports async
with RTK Query workflows
hooks/effects

DevTools and Not built in like Strong Redux Its actions can
action history Redux DevTools support be inspected
through Redux
DevTools

Best use Theme, locale, Complex shared Async workflows
simple shared client state in Redux
values

---

### Which should you choose?

- Use **`useState` or `useReducer`** for component-local state.
- Use **Context API** for simple shared values such as themes or
  locale.
- Use **Redux Toolkit** when shared client state and coordinated
  updates become complex.
- Use **Redux Thunk / `createAsyncThunk`** when you need asynchronous
  workflows within Redux.
- Use **TanStack Query or RTK Query** when the main challenge is
  server-state caching and synchronization.

---

## 6. Common Interview Questions

### What is state management?

It is the process of storing and updating application data so that the
UI reflects the current condition of the application.

### What is the Context API?

It is a React feature that shares values across a component tree without
passing props through every intermediate component.

### Is Context API a replacement for Redux?

Not always. Context is useful for sharing values, while Redux provides a
more structured state update flow, middleware, and debugging tools. The
right choice depends on the application's complexity.

### What is Redux?

Redux is a state management library that stores shared state centrally
and updates it through dispatched actions and reducers.

### What is a reducer?

A reducer calculates the next state from the current state and an
action. Reducers should be predictable and should not perform side
effects such as network requests.

### What is Redux Thunk?

It is middleware that allows Redux to dispatch functions for
asynchronous work and other logic before dispatching normal actions.

### What is `createAsyncThunk`?

It is a Redux Toolkit utility that creates a thunk and generates
`pending`, `fulfilled`, and `rejected` lifecycle actions for an
asynchronous operation.

### Why should API calls not be made inside reducers?

Reducers should be predictable state calculations. API calls are
asynchronous side effects and belong in thunks, middleware, or a
server-state library.

### What is the difference between Redux and Redux Thunk?

Redux manages shared state. Redux Thunk adds support for dispatching
functions, allowing asynchronous work to interact with that state.

### Does Redux Toolkit require Redux Thunk to be installed separately?

No. `configureStore` includes Redux Thunk by default unless you change
the middleware configuration.

---

## 7. Summary

- **State management** keeps track of application data and updates.
- **Context API** shares values across React components.
- **Redux Toolkit** provides a structured and predictable way to
  manage shared application state.
- **Redux Thunk** supports asynchronous logic in Redux.
- **`createAsyncThunk`** simplifies common API request workflows.
- **TanStack Query and RTK Query** are useful when caching and
  synchronizing server data are the main requirements.

Start with local React state, learn Context API, and then learn Redux
Toolkit and async thunks for more complex applications.
