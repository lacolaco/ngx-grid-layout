import { Observable } from 'rxjs/Observable';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export type Select<T, R> = (state: T) => R;
export type Reduce<T> = (state: T) => T;
export type StateHandler = (state: any) => any;
export type Middleware = (next: StateHandler) => StateHandler;

export class Store<T> extends BehaviorSubject<T> {
  private handler: StateHandler;

  constructor(initialState: T, middlewares: Middleware[] = []) {
    super(initialState);
    this.handler = middlewares.reduceRight(
      (next: StateHandler, middleware: Middleware) => middleware(next),
      state => {
        this.next(state);
        return state;
      },
    );
  }

  dispatch(fn: Reduce<T>): void {
    this.handler(fn(this.getValue()));
  }

  select<R>(fn: Select<T, R>): Observable<R> {
    return this.pipe(map(fn), distinctUntilChanged());
  }
}
