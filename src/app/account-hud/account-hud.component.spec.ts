/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AccountHudComponent } from './account-hud.component';

describe('AccountHudComponent', () => {
  let component: AccountHudComponent;
  let fixture: ComponentFixture<AccountHudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountHudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountHudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
