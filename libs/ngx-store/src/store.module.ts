import { Inject, InjectionToken, NgModule, Optional, forwardRef } from '@angular/core';

import { Store, Middleware } from '@lacolaco/store';

export const INITIAL_STATE_TOKEN = new InjectionToken<string>('INITIAL_STATE');

/**
 * Should be used with `multi: true` option.
 * ```
 * providers: [
 *   { provide: STORE_MIDDLEWARE, useValue: loggingMiddleware, multi: true },
 * ],
 * ```
 */
export const STORE_MIDDLEWARE = new InjectionToken<Middleware[]>('STORE_MIDDLEWARE');

export class NgxStore<T> extends Store<T> {
  constructor(
    @Inject(INITIAL_STATE_TOKEN) initialState: T,
    @Optional()
    @Inject(STORE_MIDDLEWARE)
    middlewares: Middleware[] | null,
  ) {
    super(initialState, middlewares || []);
  }
}

@NgModule({})
export class StoreModule {
  static forRoot<T>(initialState: T) {
    return {
      ngModule: StoreModule,
      providers: [{ provide: INITIAL_STATE_TOKEN, useValue: initialState }, { provide: Store, useClass: NgxStore }],
    };
  }
}
