### withKeyPress

Used for creating functions which are called when certain keys are invoked.

**Vanilla**

```js
import { withKeyPress } from "browser-event-utils";

const withEscapeKeyPress = withKeyPress('Escape');

inputElement.addEventListener(
  "keydown",
  withEscapeKeyPress(event => { // 👈 Note that you still get the event object if you need it
    //  ...handle keydown...
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

Although this library doesn't export handlers for specific keys, you could use this method to build out your own suite of key event handlers:

```js
// /utils/keyboard.js
const withEscapeKeyPress = withKeyPress('Escape');
const withEnterKeyPress = withKeyPress('Enter');
const withTabKeyPress = withKeyPress('Tab');
const withShiftKeyPress = withKeyPress('Shift');
//  ...etc
```


[![Edit with-keypress (React)](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/with-keypress-react-9344c?fontsize=14&hidenavigation=1&theme=dark)
