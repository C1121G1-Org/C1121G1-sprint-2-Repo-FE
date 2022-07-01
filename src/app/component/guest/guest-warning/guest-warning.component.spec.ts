import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestWarningComponent } from './guest-warning.component';

describe('GuestWarningComponent', () => {
  let component: GuestWarningComponent;
  let fixture: ComponentFixture<GuestWarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestWarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
