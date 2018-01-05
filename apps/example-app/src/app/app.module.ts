import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';

import { GridLayoutModule } from '@lacolaco/ngx-grid-layout';

@NgModule({
  imports: [BrowserModule, NxModule.forRoot(), GridLayoutModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
