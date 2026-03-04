## 1. What is JSX and why is it used?

**JSX (JavaScript XML)** is a syntax extension for JavaScript that allows writing HTML-like code inside JavaScript files.  

- JSX makes the code cleaner and easier to understand, showing clearly what the UI will look like.  

**Example:**
```javascript
const element = <h1>Hello, React!</h1>;
```

## 2. What is the difference between State and Props?

Both State and Props are important for managing data in React.

- Props: Passed from parent component to child component. Read-only (cannot be modified by the child). used to send data from one component to another.

- State: Local data for a component.

Its Mutable.

Used to update the UI in response to user actions or data changes.

## 3. What is the useState hook and how does it work?

Ans: The useState hook is a built-in React function that allows functional components to have state.

Returns an array with two elements:

Current value – displayed in the UI.
Setter function – updates the value and triggers a re-render.
```javascript
import React, { useState } from 'react';

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

## 4. How can you share state between components?

State can be shared between components in several ways:

Lifting State Up: Move the state to the closest common parent component and pass it down as props.

Context API: Avoid prop-drilling when you need to send data deep into the component tree.


## 5. How is event handling done in React?

- Event handling in React is slightly different from HTML:

- Use CamelCase: HTML onclick becomes onClick in React.
- Pass functions: Instead of strings, pass a function or arrow function.