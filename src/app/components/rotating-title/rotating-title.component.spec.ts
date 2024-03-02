import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotatingTitleComponent } from './rotating-title.component';

describe('RotatingTitleComponent', () => {
  let component: RotatingTitleComponent;
  let fixture: ComponentFixture<RotatingTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotatingTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RotatingTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
