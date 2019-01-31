/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SatisyapComponent } from './satisyap.component';

describe('SatisyapComponent', () => {
  let component: SatisyapComponent;
  let fixture: ComponentFixture<SatisyapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatisyapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatisyapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
