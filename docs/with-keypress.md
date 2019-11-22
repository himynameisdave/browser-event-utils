### withKeyPress

Used for creating functions which are called when certain keys are invoked.

**Vanilla**

```js
import { withKeyPress } from "browser-event-utils";

const withEscapeKeyPress = withKeyPress('Escape');

document.addEventListener(
  "click",
  withEscapeKeyPress(event => { // 👈 Note that you still get the event object if you need it
    //  ...handle click event...
  })
);
```

**React**

```jsx
import React, { Component } from "react";
import { withKeyPress } from "browser-event-utils";

const withEscapeKeyPress = withKeyPress('Escape');

const MyButton = () => {
  const handleClick = withEscapeKeyPress(event => {
    console.log("Button was clicked, and Escape key was pressed!");
  });
  return <button onClick={handleClick}>My Button</button>;
};
```

[![Edit with-keypress (React)](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/with-keypress-react-9344c?fontsize=14&hidenavigation=1&theme=dark)
