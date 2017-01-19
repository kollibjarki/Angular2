/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RatingShowComponent } from './rating-show.component';

describe('RatingShowComponent', () => {
  let component: RatingShowComponent;
  let fixture: ComponentFixture<RatingShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
