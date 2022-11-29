import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiesComponentComponent } from './technologies-component.component';

describe('TechnologiesComponentComponent', () => {
  let component: TechnologiesComponentComponent;
  let fixture: ComponentFixture<TechnologiesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologiesComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologiesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
