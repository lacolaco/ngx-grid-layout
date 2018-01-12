# @lacolaco/ngx-store

Angular module for [@lacolaco/store](https://github.com/lacolaco/ngx/tree/master/libs/store)

https://yarn.pm/@lacolaco/ngx-store

## Install

```
$ npm i @lacolaco/ngx-store
```

## How to Use

### Add to AppModule

```ts
import { StoreModule } from '@lacolaco/ngx-store';
import { Middleware } from '@lacolaco/store';

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
    StoreModule.forRoot(
      { count: 0 },
      { 
        middlewares: [ loggingMiddleware ],
      },
    ),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

### Inject `Store` at a component

```ts
import { Component, OnInit } from '@angular/core';
import { Store } from '@lacolaco/store';

@Component({
  selector: 'app-root',
  template: '{{count$ | async}}',
})
export class AppComponent implements OnInit {
  count$ = this.store.select(state => state.count);
  constructor(private store: Store<any>) {}

  ngOnInit() {
    setInterval(() => {
      this.store.dispatch(state => ({ count: state.count + 1 }));
    }, 1000);
  }
}
```

Learn more about `Store` API: [@lacolaco/store](https://github.com/lacolaco/ngx/tree/master/libs/store)