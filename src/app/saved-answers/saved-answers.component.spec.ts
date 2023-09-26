import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedAnswersComponent } from './saved-answers.component';

describe('SavedAnswersComponent', () => {
  let component: SavedAnswersComponent;
  let fixture: ComponentFixture<SavedAnswersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavedAnswersComponent]
    });
    fixture = TestBed.createComponent(SavedAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
