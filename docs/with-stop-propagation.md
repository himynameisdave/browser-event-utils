### withStopPropagation

Calls `event.stopPropagation`, then passes the event along to your provided event handler function.

**Vanilla**

```js
import { withStopPropagation } from "browser-event-utils";

document.addEventListener(
  "click",
  withStopPropagation(event => {
    // 👈 Note that you still get the event object if you need it
    //  ...handle click event...
  })
);
```

**React**

```jsx
import React, { Component } from "react";
import { withStopPropagation } from "browser-event-utils";

class MyButton extends Component {
  handleClick = withStopPropagation(event => {
    console.log("Button was clicked, and preventDefault has been called!");
  });

  render() {
    return <button onClick={this.handleClick}>My Button</button>;
  }
}
```
