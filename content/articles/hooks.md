---
title: How to Use React Hooks
date: "2021-05-08"
---

React hooks allows us to use state and other react features on functional components.

## State Hook

State hook lets us use state on functional components.

```jsx
import React, { useState } from "react";
function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

useState is a hook all hooks start with use. It returns a pair one for accessing to value other for changing it. the value we give to the useState hook is the initial value of that state.

We can also use multiple states

```javascript
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
```

### Reading State

Reading a state is trivial with hooks. We just need to reference state name directly.

```jsx
<p>You clicked {count} times</p>
```

### Updating State

Updating a state is not much different. just call setStatename.

```jsx
<button onClick={() => setCount(count + 1)}>Click me</button>
```
