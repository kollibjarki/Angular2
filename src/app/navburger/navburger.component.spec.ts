/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavburgerComponent } from './navburger.component';

describe('NavburgerComponent', () => {
  let component: NavburgerComponent;
  let fixture: ComponentFixture<NavburgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavburgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavburgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
