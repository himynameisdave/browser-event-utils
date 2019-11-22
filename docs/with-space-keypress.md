### withSpaceKeyPress

Calls provided function if `event.key === 'Escape'`.

**Vanilla**

```js
import { withSpaceKeyPress } from "browser-event-utils";

document.addEventListener(
  "keydown",
  withSpaceKeyPress(event => { // 👈 Note that you still get the event object if you need it
    //  ...handle click event...
  })
);
```

**React**

```jsx
import React, { Component } from "react";
import { withSpaceKeyPress } from "browser-event-utils";

class MyButton extends Component {
  handleKeyDown = withSpaceKeyPress(event => {
    console.log("Space key was pressed!");
  });

  render() {
    return <input onKeyDown={this.handleKeyDown}>My Button</button>;
  }
}
```

[![Edit with-space-keypress (React)](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/with-escape-keypress-react-om8uy?fontsize=14&hidenavigation=1&theme=dark)
