/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OdemeAlComponent } from './odemeAl.component';

describe('OdemeAlComponent', () => {
  let component: OdemeAlComponent;
  let fixture: ComponentFixture<OdemeAlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdemeAlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdemeAlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
