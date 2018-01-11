import { Injectable, InjectionToken, NgModule } from '@angular/core';

import { Store, Middleware } from '@lacolaco/store';

export const INITIAL_STATE_TOKEN = new InjectionToken<string>('INITIAL_STATE');
export const STORE_CONFIG_TOKEN = new InjectionToken<StoreConfig>('STORE_CONFIG');

export interface StoreConfig {
  middlewares?: Middleware[];
}

export function rootStoreFactory<T>(initialState: T, storeConfig: StoreConfig) {
  const store = new Store(initialState, storeConfig.middlewares);
  return store;
}

@NgModule({})
export class StoreModule {
  static forRoot<T>(initialState: T, config: StoreConfig = {}) {
    return {
      ngModule: StoreModule,
      providers: [
        { provide: INITIAL_STATE_TOKEN, useValue: initialState },
        { provide: STORE_CONFIG_TOKEN, useValue: config },
        { provide: Store, useFactory: rootStoreFactory, deps: [INITIAL_STATE_TOKEN, STORE_CONFIG_TOKEN] },
      ],
    };
  }
}
