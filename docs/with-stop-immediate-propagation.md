### withStopImmediatePropagation

Calls `event.stopImmediatePropagation`, then passes the event along to your provided event handler function.

**Vanilla**

```js
import { withStopImmediatePropagation } from "browser-event-utils";

document.addEventListener(
  "click",
  withStopImmediatePropagation(event => {
    // 👈 Note that you still get the event object if you need it
    //  ...handle click event...
  })
);
```

**React**

_Note: Technically this will not do anything in React, as Sythetic events [do not have](https://reactjs.org/docs/events.html) a `stopImmediatePropagation` method._

```jsx
import React, { Component } from "react";
import { withStopImmediatePropagation } from "browser-event-utils";

class MyButton extends Component {
  handleClick = withStopImmediatePropagation(event => {
    console.log("Button was clicked, and stopImmediatePropagation has been called!");
  });

  render() {
    return <button onClick={this.handleClick}>My Button</button>;
  }
}
```

[![Edit with-stop-immediate-propagation (React)](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/with-stop-propagation-react-qnbb0?fontsize=14)
