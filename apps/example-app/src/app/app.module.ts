import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';

import { GridLayoutModule } from '@lacolaco/ngx-grid-layout';
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
    NxModule.forRoot(),
    GridLayoutModule,
    StoreModule.forRoot(
      {},
      {
        middlewares: [loggingMiddleware],
      },
    ),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
