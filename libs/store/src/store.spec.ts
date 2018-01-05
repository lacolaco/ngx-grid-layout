import { Store } from './store';

describe('Store', () => {
  interface TestState {
    foo: string | null;
  }

  class TestStore extends Store<TestState> {
    constructor() {
      super({
        foo: null,
      });
    }
  }

  let store: TestStore;

  beforeEach(() => {
    store = new TestStore();
  });

  describe('initialState', () => {
    it('should return initial state', () => {
      const state = store.getValue();
      expect(state.foo).toEqual(null);
    });
  });

  describe('select', () => {
    it('should return an observable', async () => {
      const foo$ = store.select(state => state.foo);
      store.next({ foo: '1' });
      const foo = await foo$.toPromise();
      expect(foo).toEqual('1');
    });
  });

  describe('selectSync', () => {
    it('should return a value', () => {
      {
        const foo = store.selectSync(state => state.foo);
        expect(foo).toEqual(null);
      }
      store.next({ foo: '1' });
      {
        const foo = store.selectSync(state => state.foo);
        expect(foo).toEqual('1');
      }
    });
  });

  describe('dispatch', () => {
    it('should be able to reduce state', async () => {
      const foo$ = store.select(state => state.foo);
      store.dispatch(state => ({
        foo: '1',
      }));
      expect(await foo$.toPromise()).toEqual('1');
      store.dispatch(state => ({
        foo: `${state.foo}+1`,
      }));
      expect(await foo$.toPromise()).toEqual('1+1');
    });
  });
});
