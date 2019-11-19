### withEscapeKeyPress

Calls provided function if `event.key === 'Escape'`.

**Vanilla**

```js
import { withEscapeKeyPress } from "browser-event-utils";

document.addEventListener(
  "keydown",
  withEscapeKeyPress(event => {
    // 👈 Note that you still get the event object if you need it
    //  ...handle click event...
  })
);
```

**React**

```jsx
import React, { Component } from "react";
import { withEscapeKeyPress } from "browser-event-utils";

class MyButton extends Component {
  handleKeyDown = withEscapeKeyPress(event => {
    console.log("Escape key was pressed!");
  });

  render() {
    return <input onKeyDown={this.handleKeyDown}>My Button</button>;
  }
}
```

[![Edit with-escape-keypress (React)](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/with-escape-keypress-react-7pe3o?fontsize=14&hidenavigation=1&theme=dark)
