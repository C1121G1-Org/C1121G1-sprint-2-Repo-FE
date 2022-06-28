import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyChargeComponent } from './money-charge.component';

describe('MoneyChargeComponent', () => {
  let component: MoneyChargeComponent;
  let fixture: ComponentFixture<MoneyChargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyChargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
