/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GelirGiderDurumuComponent } from './GelirGiderDurumu.component';

describe('GelirGiderDurumuComponent', () => {
  let component: GelirGiderDurumuComponent;
  let fixture: ComponentFixture<GelirGiderDurumuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GelirGiderDurumuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GelirGiderDurumuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
