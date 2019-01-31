/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AktifUyelerComponent } from './aktifUyeler.component';

describe('AktifUyelerComponent', () => {
  let component: AktifUyelerComponent;
  let fixture: ComponentFixture<AktifUyelerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AktifUyelerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AktifUyelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
