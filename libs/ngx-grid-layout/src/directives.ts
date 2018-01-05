/* tslint:disable:directive-selector directive-class-suffix */

import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'grid-layout',
})
export class GridLayoutContainer {
  @HostBinding('style.display') display = 'grid';

  @Input() areas: string[][] | null = null;
  @Input() columns: string[] | null = null;
  @Input() rows: string[] | null = null;

  @HostBinding('style.grid-template-columns')
  get gridTemplateColumns() {
    return this.columns ? this.columns.join(' ') : null;
  }
  @HostBinding('style.grid-template-rows')
  get gridTemplateRows() {
    return this.rows ? this.rows.join(' ') : null;
  }
  @HostBinding('style.grid-template-areas')
  get gridTemplateAreas() {
    return this.areas ? this.areas.map(rows => `"${rows.join(' ')}"`).join(' ') : null;
  }

  @HostBinding('style.grid-column-gap')
  @Input()
  columnGap: string | null = null;

  @HostBinding('style.grid-row-gap')
  @Input()
  rowGap: string | null = null;

  @Input()
  @HostBinding('style.justify-content')
  justifyContent: string | null = null;

  @Input()
  @HostBinding('style.align-content')
  alignContent: string | null = null;

  @Input()
  @HostBinding('style.justify-items')
  justifyItems: string | null = null;

  @Input()
  @HostBinding('style.align-items')
  alignItems: string | null = null;
}

@Directive({
  selector: '[gridArea]',
})
export class GridLayoutArea {
  @Input()
  @HostBinding('style.grid-area')
  gridArea: string | null = null;

  @Input()
  @HostBinding('style.justify-self')
  justifySelf: string | null = null;

  @Input()
  @HostBinding('style.align-self')
  alignSelf: string | null = null;
}
