/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RateProductComponent } from './rate-product.component';

describe('RateProductComponent', () => {
  let component: RateProductComponent;
  let fixture: ComponentFixture<RateProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
