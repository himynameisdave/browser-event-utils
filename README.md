<div align="center" margin="0 auto 20px">
    <h1>browser-event-utils</h1>
    <p style="font-style: italic;">🎟 A collection of higher-order functions for invoking common browser event methods.</p>
    <div>
        <a href='https://travis-ci.org/himynameisdave/browser-event-utils'>
            <img src="https://api.travis-ci.org/himynameisdave/browser-event-utils.svg?branch=master" alt="Travis Badge" />
        </a>
        <a href='https://coveralls.io/github/himynameisdave/browser-event-utils?branch=master'>
            <img src='https://coveralls.io/repos/github/himynameisdave/browser-event-utils/badge.svg?branch=master' alt='Coverage Status' />
        </a>
        <a href="https://bundlephobia.com/result?p=browser-event-utils">
            <img src="https://img.shields.io/bundlephobia/min/browser-event-utils.svg" alt="Bundle size (minified)" />
        </a>
        <a href="https://www.npmjs.com/package/browser-event-utils">
            <img src="https://img.shields.io/npm/dt/browser-event-utils.svg" alt="Downloads">
        </a>
    </div>
</div>

---

### Motivation

How often do you call stuff like `event.preventDefault` or `event.stopPropagation` when handling events in client-side JavaScript? I bet it's pretty often.

This ([< 1kb](https://bundlephobia.com/result?p=browser-event-utils)) package aims to provide you with a set of [higher-order functions](https://eloquentjavascript.net/05_higher_order.html) which handle these things for you.

Could you survive without this library? Absolutely. But I've found that in larger codebases, it can become cumbersome to always sprinkle `e.stopImmediatePropagation()` calls all over the place. It adds complexity to your event handlers, which violates the [**Do One Thing (DOT)**](https://www.oreilly.com/library/view/programming-javascript-applications/9781491950289/ch02.html) principal, plus it (in theory) it makes your unit tests more complicated (if you care about asserting that event methods are called).


### Installation

This package is available on NPM, and you can install it with `npm` or `yarn`:

```
npm install browser-event-utils

yarn add browser-event-utils
```

Add the `-S` flag if you want to save it to the `"dependencies"` section of your `package.json`.

**Browser/UMD**

If you want to just import this library directly in the browser, you can add the following script tag:

```html
<script src="https://unpkg.com/browser-event-utils/bin/index.umd.js" />

```

This will expose a `browserEventUtils` global, on which you will find all of the utility methods.

### Usage

These utilities are designed to "wrap" around your regular event handlers (ie: they return your event handler with some kind of super power). They can be used with vanilla Javascript, or with pretty much any framework which deals with DOM events.

1. [`withPreventDefault`](#withPreventDefault)
1. [`withStopPropagation`](#withStopPropagation)
1. [`withStopImmediatePropagation`](#withStopImmediatePropagation)
1. [`withTargetValue`](#withTargetValue)

### withPreventDefault

Calls `event.preventDefault`, then passes the event along to your provided event handler function.

**Vanilla**

```js
import { withPreventDefault } from 'browser-event-utils';

document.addEventListener('click', withPreventDefault(event => { // 👈 Note that you still get the event object if you need it
    //  ...handle click event...
}));
```

**React**

```jsx
import React, { Component } from 'react';
import { withPreventDefault } from 'browser-event-utils';

class MyButton extends Component {

    handleClick = withPreventDefault((event) => {
        console.log('Button was clicked, and preventDefault has been called!');
    });

    render() {
        return (
            <button onClick={this.handleClick}>
                My Button
            </button>
        );
    }
}
```
### withStopPropagation

Calls `event.stopPropagation`, then passes the event along to your provided event handler function.

**Vanilla**

```js
import { withStopPropagation } from 'browser-event-utils';

document.addEventListener('click', withStopPropagation(event => { // 👈 Note that you still get the event object if you need it
    //  ...handle click event...
}));
```

**React**

```jsx
import React, { Component } from 'react';
import { withStopPropagation } from 'browser-event-utils';

class MyButton extends Component {

    handleClick = withStopPropagation((event) => {
        console.log('Button was clicked, and preventDefault has been called!');
    });

    render() {
        return (
            <button onClick={this.handleClick}>
                My Button
            </button>
        );
    }
}
```

### withStopImmediatePropagation

Calls `event.stopImmediatePropagation`, then passes the event along to your provided event handler function.

**Vanilla**

```js
import { withStopImmediatePropagation } from 'browser-event-utils';

document.addEventListener('click', withStopImmediatePropagation(event => { // 👈 Note that you still get the event object if you need it
    //  ...handle click event...
}));
```

**React**

```jsx
import React, { Component } from 'react';
import { withStopImmediatePropagation } from 'browser-event-utils';

class MyButton extends Component {

    handleClick = withStopImmediatePropagation((event) => {
        console.log('Button was clicked, and preventDefault has been called!');
    });

    render() {
        return (
            <button onClick={this.handleClick}>
                My Button
            </button>
        );
    }
}
```

### withTargetValue

Calls your provided event handler function with `event.target.value` as the first value (if it exists).

**Vanilla**

```js
import { withTargetValue } from 'browser-event-utils';


myInputNode.addEventListener('change', withTargetValue((value, event) => { // 👈 Note that you still get the event object if you need it
    //  ...handle input change event...
}));
```

**React**

```jsx
import React, { Component } from 'react';
import { withTargetValue } from 'browser-event-utils';

class MyInput extends Component {

    handleChange = withTargetValue((value, event) => {
        console.log(`Value changed! ${value}`);
    });

    render() {
        return (
            <input onChange={this.handleChange} />
        );
    }
}
```

### Contributing

Feel free to [file an issue](https://github.com/himynameisdave/browser-event-utils/issues/new) or open a pull request.

---

_👌 Built by [Dave Lunny](http://himynameisdave.com) in the wonderful year 2019._
