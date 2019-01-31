/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SatislarComponent } from './satislar.component';

describe('SatislarComponent', () => {
  let component: SatislarComponent;
  let fixture: ComponentFixture<SatislarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatislarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatislarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
