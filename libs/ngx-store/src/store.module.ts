import { Injectable, Inject, InjectionToken, NgModule, Optional, forwardRef, Injector } from '@angular/core';

import { Store, Middleware } from '@lacolaco/reactive-store';

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

export function storeFactory<T>(initialState: T, injector: Injector): Store<T> {
  const middlewares = injector.get(STORE_MIDDLEWARE, []);
  return new Store(initialState, middlewares);
}

@NgModule({})
export class ReactiveStoreModule {
  static forRoot<T>(initialState: T) {
    return {
      ngModule: ReactiveStoreModule,
      providers: [
        { provide: INITIAL_STATE_TOKEN, useValue: initialState },
        { provide: Store, useFactory: storeFactory, deps: [INITIAL_STATE_TOKEN, Injector] },
      ],
    };
  }
}

/**
 * @deprecated use ReactiveStoreModule
 */
export const StoreModule = ReactiveStoreModule;
