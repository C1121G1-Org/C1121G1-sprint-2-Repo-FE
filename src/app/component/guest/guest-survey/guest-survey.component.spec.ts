import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestSurveyComponent } from './guest-survey.component';

describe('GuestSurveyComponent', () => {
  let component: GuestSurveyComponent;
  let fixture: ComponentFixture<GuestSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
