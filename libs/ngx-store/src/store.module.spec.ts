import { NgModule } from '@angular/core';
import { async, inject, TestBed } from '@angular/core/testing';

import { Store, Middleware } from '@lacolaco/store';

import { StoreModule, STORE_MIDDLEWARE } from './store.module';

interface TestState {
  count: number;
}

describe('StoreModule', () => {
  describe('forRoot', () => {
    beforeEach(
      async(() => {
        TestBed.configureTestingModule({
          imports: [StoreModule.forRoot({ count: 1 })],
        });
      }),
    );

    it(
      'should provide the root store',
      inject([Store], (store: Store<TestState>) => {
        expect(store).toBeDefined();
        expect(store.getValue().count).toEqual(1);
      }),
    );
  });

  describe('Middleware', () => {
    beforeEach(
      async(() => {
        TestBed.configureTestingModule({
          imports: [StoreModule.forRoot({ count: 1 })],
          providers: [
            {
              provide: 'foo',
              useValue: 'foo',
            },
            {
              provide: STORE_MIDDLEWARE,
              useFactory: (foo: string): Middleware => {
                return next => s => next(foo);
              },
              deps: ['foo'],
              multi: true,
            },
          ],
        });
      }),
    );

    it(
      'should handle injected middleware',
      inject([Store], (store: Store<TestState>) => {
        expect(store).toBeDefined();
        // trigger middleware
        store.dispatch(state => ({ ...state }));
        expect(store.getValue() as any).toEqual('foo');
      }),
    );
  });
});
