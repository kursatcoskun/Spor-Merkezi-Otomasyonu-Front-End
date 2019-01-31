/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GiderEkleComponent } from './giderEkle.component';

describe('GiderEkleComponent', () => {
  let component: GiderEkleComponent;
  let fixture: ComponentFixture<GiderEkleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiderEkleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiderEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
