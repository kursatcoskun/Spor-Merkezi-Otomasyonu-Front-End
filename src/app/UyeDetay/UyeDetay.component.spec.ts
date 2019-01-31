/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UyeDetayComponent } from './UyeDetay.component';

describe('UyeDetayComponent', () => {
  let component: UyeDetayComponent;
  let fixture: ComponentFixture<UyeDetayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UyeDetayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UyeDetayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
