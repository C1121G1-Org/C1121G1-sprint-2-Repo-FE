import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestChangeImageComponent } from './guest-change-image.component';

describe('GuestChangeImageComponent', () => {
  let component: GuestChangeImageComponent;
  let fixture: ComponentFixture<GuestChangeImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestChangeImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestChangeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
