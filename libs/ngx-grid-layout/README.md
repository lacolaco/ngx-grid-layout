# ngx-grid-layout

An Angular module to construct layout with CSS Grid Layout

https://yarn.pm/@lacolaco/ngx-grid-layout

## Install

```
$ npm i @lacolaco/ngx-grid-layout
```

## Demo

Demo is available at https://lacolaco.github.io/grid-layout/ .

## How to Use

 1. Import `GridLayoutModule` into your NgModule

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridLayoutModule } from '@lacolaco/ngx-grid-layout';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GridLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

 2. Use directives

```html
<grid-layout id="container" 
    [areas]="[['a', 'a', 'b'],['c', 'd', 'e']]" 
    [columns]="['100px', '1fr', '200px']" 
    [rows]="['100px', 'auto']">
    <div gridArea="a" [style.background]="'red'">1</div>
    <div gridArea="b" [style.background]="'blue'">2</div>
    <div gridArea="c" [style.background]="'green'">3</div>
    <div gridArea="d" [style.background]="'purple'">4</div>
    <div gridArea="e" [style.background]="'orange'">5</div>
</grid-layout>
```
