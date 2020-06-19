### withNumericTargetValue

Calls your provided event handler function with `event.target.value`, cast to a Number, as the first value (if it exists). Passes the `event` along as the second argument in case you need it.

**Vanilla**

```js
import { withNumericTargetValue } from "browser-event-utils";

myInputNode.addEventListener(
  "change",
  withNumericTargetValue((value, event) => {
    // Note that you still get the event object as the 2nd arg, if you need it
    console.log(value); // 0 -> Always a Number, never NaN
  })
);
```

**React**

```jsx
import React, { Component } from "react";
import { withNumericTargetValue } from "browser-event-utils";

const handleChange = withNumericTargetValue((value, event) => {
  // Note that you still get the event object as the 2nd arg, if you need it
  console.log(value); // 0 -> Always a Number, never NaN
});

const MyInput = () => {
  return <input type="number" onChange={handleChange} />
};
```

<!-- 
[![Edit with-numeric-target-value (React)](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/competent-breeze-kmhf6?fontsize=14&hidenavigation=1)
-->
