### Motivation

How often do you call stuff like `event.preventDefault` or `event.stopPropagation` when handling events in client-side JavaScript? I bet it's pretty often.

This ([~1kb](https://bundlephobia.com/result?p=browser-event-utils)) package aims to provide you with a set of [higher-order functions](https://eloquentjavascript.net/05_higher_order.html) which handle these things for you.

Could you survive without this library? Absolutely. But I've found that in larger codebases, it can become cumbersome to always sprinkle `e.preventDefault()` calls all over the place. It adds complexity to your event handlers, which violates the [**Do One Thing (DOT)**](https://en.wikipedia.org/wiki/Unix_philosophy#Do_One_Thing_and_Do_It_Well) principal, plus it _(in theory)_ could make your unit tests more complicated (if you care about asserting that event methods are called).

This library can also help aleviate some of the pains surrounding [event pooling](https://reactjs.org/docs/events.html#event-pooling) in React.
