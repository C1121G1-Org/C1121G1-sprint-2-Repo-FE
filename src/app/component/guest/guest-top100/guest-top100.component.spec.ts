import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestTop100Component } from './guest-top100.component';

describe('GuestTop100Component', () => {
  let component: GuestTop100Component;
  let fixture: ComponentFixture<GuestTop100Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestTop100Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestTop100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
