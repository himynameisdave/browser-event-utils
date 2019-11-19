### withEnterKeyPress

Calls provided function if `event.key === 'Enter'`.

**Vanilla**

```js
import { withEnterKeyPress } from "browser-event-utils";

document.addEventListener(
  "keydown",
  withEnterKeyPress(event => {
    // 👈 Note that you still get the event object if you need it
    //  ...handle click event...
  })
);
```

**React**

```jsx
import React, { Component } from "react";
import { withEnterKeyPress } from "browser-event-utils";

class MyButton extends Component {
  handleKeyDown = withEnterKeyPress(event => {
    console.log("Enter key was pressed!");
  });

  render() {
    return <input onKeyDown={this.handleKeyDown}>My Button</button>;
  }
}
```

[![Edit with-enter-keypress (React)](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/with-escape-keypress-react-nhx07?fontsize=14&hidenavigation=1&theme=dark)
