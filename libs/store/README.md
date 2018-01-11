# store

```ts
const log = [];
const store = new Store(1, [
    // modify state pre-dispatch (earlier)
    next => {
        return state => {
        return next(state * 2);
        };
    },
    // modify state pre-dispatch (later)
    next => {
        return state => {
        return next(state + 1);
        };
    },
    // logging after post-dispatch
    next => {
        return state => {
        state = next(state);
        log.push(state);
        return state;
        };
    },
]);
store.dispatch(state => 2); // 2 => 4 => 5
store.dispatch(state => 3); // 3 => 6 => 7
expect(log).toEqual([5, 7]);
```