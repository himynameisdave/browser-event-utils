### withTargetValue

Calls your provided event handler function with `event.target.value` as the first value (if it exists). Passes the `event` along as the second argument in case you need it.

**Vanilla**

```js
import { withTargetValue } from "browser-event-utils";

myInputNode.addEventListener(
  "change",
  withTargetValue((value, event) => {
    // 👈 Note that you still get the event object if you need it
    //  ...handle input change event...
  })
);
```

**React**

```jsx
import React, { Component } from "react";
import { withTargetValue } from "browser-event-utils";

const handleChange = withTargetValue((value, event) => {
  console.log(`Value changed! ${value}`);
});

function MyInput() {
  return <input type="text" onChange={handleChange} />;
}
```

[![Edit with-target-value (React)](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/with-stop-immediate-propagation-react-st3fz?fontsize=14)
