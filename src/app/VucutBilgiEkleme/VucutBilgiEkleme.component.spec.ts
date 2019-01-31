/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VucutBilgiEklemeComponent } from './VucutBilgiEkleme.component';

describe('VucutBilgiEklemeComponent', () => {
  let component: VucutBilgiEklemeComponent;
  let fixture: ComponentFixture<VucutBilgiEklemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VucutBilgiEklemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VucutBilgiEklemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
