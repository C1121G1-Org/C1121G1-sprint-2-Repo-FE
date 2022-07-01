import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendSuggestionsComponent } from './friend-suggestions.component';

describe('FriendSuggestionsComponent', () => {
  let component: FriendSuggestionsComponent;
  let fixture: ComponentFixture<FriendSuggestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendSuggestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
