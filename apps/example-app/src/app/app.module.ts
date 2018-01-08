import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';

import { GridLayoutModule } from '@lacolaco/ngx-grid-layout';
import { StoreModule } from '@lacolaco/ngx-store';

@NgModule({
  imports: [BrowserModule, NxModule.forRoot(), GridLayoutModule, StoreModule.forRoot({}, {
    onStateChanged: (state, store) => {
      console.log(`[State Update]`, state);
    },
  })],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
