# @lacolaco/ngx-store

Angular module for [@lacolaco/reactive-store](https://github.com/lacolaco/reactive-store)

https://yarn.pm/@lacolaco/ngx-store

[![@lacolaco/ngx-store Dev Token](https://badge.devtoken.rocks/@lacolaco/ngx-store)](https://devtoken.rocks/package/@lacolaco/ngx-store)

## Install

```
$ npm i @lacolaco/ngx-store
```

## How to Use

### Add to AppModule

```ts
import { ReactiveStoreModule, STORE_MIDDLEWARE } from '@lacolaco/ngx-store';
import { Middleware } from '@lacolaco/reactive-store';

export function loggingMiddleware(next: Middleware) {
  return state => {
    state = next(state);
    console.log(`[State Update]`, state);
    return state;
  };
}

@NgModule({
  imports: [
    BrowserModule,
    ReactiveStoreModule.forRoot(
      { count: 0 },
    ),
  ],
  providers: [
    { provide: STORE_MIDDLEWARE, useValue: loggingMiddleware, multi: true },
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

### Inject `Store` at a component

```ts
import { Component, OnInit } from '@angular/core';
import { Store } from '@lacolaco/reactive-store';

@Component({
  selector: 'app-root',
  template: '{{count$ | async}}',
})
export class AppComponent implements OnInit {
  count$ = this.store.select(state => state.count);
  constructor(private store: Store<any>) {}

  ngOnInit() {
    setInterval(() => {
      this.store.patch(state => ({ count: state.count + 1 }));
    }, 1000);
  }
}
```

Learn more about `Store` API: [@lacolaco/reactive-store](https://github.com/lacolaco/reactive-store)
