import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { GridLayoutModule } from './grid-layout.module';

@Component({
  template: `
    <grid-layout id="container"
                 [areas]="[['a', 'b'],['c', 'd']]"
                 [columns]="['100px', '200px']"
                 [rows]="['100px', 'auto']">
      <span id="item1" gridArea="a">1</span>
      <span id="item2" gridArea="b">2</span>
      <span id="item3" gridArea="d">3</span>
      <span id="item4" gridArea="c">4</span>
    </grid-layout>
  `,
})
class TestComponent {}

describe('GridLayout directives', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [GridLayoutModule],
        declarations: [TestComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('GridLayout', () => {
    it(`should add 'display: grid'`, () => {
      const container = fixture.nativeElement.querySelector('#container') as HTMLElement;
      expect(container.style.display).toEqual('grid');
    });
    it(`should add grid-template-areas`, () => {
      const container = fixture.nativeElement.querySelector('#container') as HTMLElement;
      expect(container.style['grid-template-areas']).toEqual('"a b" "c d"');
    });
  });

  describe('GridArea', () => {
    it(`should add grid-area`, () => {
      {
        const target = fixture.nativeElement.querySelector('#item1') as HTMLElement;
        expect(target.style['grid-area']).toEqual('a / a / a / a');
      }
    });
  });
});
