import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridLayoutContainer, GridLayoutArea } from './directives';

@NgModule({
  imports: [],
  declarations: [GridLayoutContainer, GridLayoutArea],
  exports: [GridLayoutContainer, GridLayoutArea],
})
export class GridLayoutModule {}
