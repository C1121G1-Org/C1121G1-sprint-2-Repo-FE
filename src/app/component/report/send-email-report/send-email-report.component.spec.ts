import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendEmailReportComponent } from './send-email-report.component';

describe('SendEmailReportComponent', () => {
  let component: SendEmailReportComponent;
  let fixture: ComponentFixture<SendEmailReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendEmailReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendEmailReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
