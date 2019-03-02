## browser-event-utils
> _🎟 A collection of utilities for calling common browser event methods._

How often do you call stuff like `event.preventDefault` or `event.stopPropagation` when handling events in client-side JavaScript? I bet it's pretty often.

This package aims to provide you with a set of [higher-order functions](https://eloquentjavascript.net/05_higher_order.html) which handle these things for you.

Could you survive without this library? Absolutely. But I've found that in larger codebases, it can become cumbersome to always sprinkle `e.stopImmediatePropagation()` calls all over the place. It adds complexity to your event handlers, which violates the [**Do One Thing (DOT)**](https://www.oreilly.com/library/view/programming-javascript-applications/9781491950289/ch02.html) principal, plus it (in theory) it makes your unit tests more complicated (if you care about asserting that event methods are called).


### Installation

This package is available on NPM, and you can install it with `npm` or `yarn`:

```
npm install browser-event-utils

yarn add browser-event-utils
```

Add the `-S` flag if you want to save it to the `"dependencies"` section of your `package.json`.

### Usage


```js
import { withStopPropagation } from 'browser-event-utils';

document.addEventListener('click', withStopPropagation(event => { // 👈 Note that you still get the event object if you need it
    //  ...handle click event...
}));
```

You can use this with React like so:

```js
import { withPreventDefault } from 'browser-event-utils';

//  Doing it directly in a function component
const Button = ({ onClick }) => {
    <button onClick={withPreventDefault(onClick)}>
        My Button
    </button>
};

//  Storing it as a class method
class MyButton extends Component {

    handleClick = withPreventDefault(() => {
        console.log('Button was clicked!');
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

### Contributing

Feel free to [file an issue](https://github.com/himynameisdave/browser-event-utils/issues/new) or open a pull request.

---

> _👌 Built by [Dave Lunny](http://himynameisdave.com) in the glorious year 2019._
