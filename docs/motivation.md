### Motivation

How often do you call stuff like `event.preventDefault` or `event.stopPropagation` when handling events in client-side JavaScript? I bet it's pretty often.

This ([~1kb](https://bundlephobia.com/result?p=browser-event-utils)) package aims to provide you with a set of [higher-order functions](https://eloquentjavascript.net/05_higher_order.html) which handle these things for you.

Could you survive without this library? Absolutely. But I've found that in larger codebases, it can become cumbersome to always sprinkle `e.stopImmediatePropagation()` calls all over the place. It adds complexity to your event handlers, which violates the [**Do One Thing (DOT)**](https://www.oreilly.com/library/view/programming-javascript-applications/9781491950289/ch02.html) principal, plus it (in theory) it makes your unit tests more complicated (if you care about asserting that event methods are called).
