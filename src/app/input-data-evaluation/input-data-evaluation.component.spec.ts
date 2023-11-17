import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDataEvaluationComponent } from './input-data-evaluation.component';

describe('InputDataEvaluationComponent', () => {
  let component: InputDataEvaluationComponent;
  let fixture: ComponentFixture<InputDataEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputDataEvaluationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputDataEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
