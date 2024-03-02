import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingSubtitleComponent } from './typing-subtitle.component';

describe('TypingSubtitleComponent', () => {
  let component: TypingSubtitleComponent;
  let fixture: ComponentFixture<TypingSubtitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypingSubtitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypingSubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
