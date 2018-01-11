import { NgModule } from '@angular/core';
import { async, inject, TestBed } from '@angular/core/testing';

import { Store } from '@lacolaco/store';

import { StoreModule } from './store.module';

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
});
