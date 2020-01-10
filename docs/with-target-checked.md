### withTargetChecked

Calls your provided event handler function with `event.target.checked` as the first value (if it exists). Passes the `event` along as the second argument in case you need it. 

**Vanilla**

```js
import { withTargetChecked } from "browser-event-utils";

myInputNode.addEventListener(
  "change",
  withTargetChecked((checked, event) => {
    // 👈 Note that you still get the event object if you need it
    //  ...handle input change event...
  })
);
```

**React**

```jsx
import React, { Component } from "react";
import { withTargetChecked } from "browser-event-utils";

const handleCheck = withTargetChecked((checked, event) => {
  console.log(`Checked! ${checked}`);
});

function MyInput() {
  return <input type="checkbox" onChange={handleCheck} />;
}
```

[![Edit with-target-value (React)](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/with-stop-immediate-propagation-react-st3fz?fontsize=14)
