### withSelectOnFocus

Calls `event.target.select` (if it exists), then passes the `target` and `event` along to your optional event handler function.

**Vanilla**

```js
import { withSelectOnFocus } from "browser-event-utils";

document.addEventListener(
  "focus",
  withSelectOnFocus((target, event) => {
    //  ...optionally handle focus event...
  })
);
```

**React**

```jsx
import React, { Component } from "react";
import { withSelectOnFocus } from "browser-event-utils";

const MyInput = () => (
  <input
    type="text"
    onFocus={withSelectOnFocus(() => console.log('Input is now in focus!'))}
  />
);
```

<!-- 
[![Edit with-prevent-default (React)](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/competent-breeze-kmhf6?fontsize=14&hidenavigation=1) -->
