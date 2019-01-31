/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GiderleriGosterComponent } from './giderleriGoster.component';

describe('GiderleriGosterComponent', () => {
  let component: GiderleriGosterComponent;
  let fixture: ComponentFixture<GiderleriGosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiderleriGosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiderleriGosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
