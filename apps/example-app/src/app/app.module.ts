import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

import { GridLayoutModule } from '@lacolaco/ngx-grid-layout';

@NgModule({
  imports: [BrowserModule, GridLayoutModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
