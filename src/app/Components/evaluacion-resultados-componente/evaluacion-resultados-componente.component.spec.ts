import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionResultadosComponenteComponent } from './evaluacion-resultados-componente.component';

describe('EvaluacionResultadosComponenteComponent', () => {
  let component: EvaluacionResultadosComponenteComponent;
  let fixture: ComponentFixture<EvaluacionResultadosComponenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvaluacionResultadosComponenteComponent]
    });
    fixture = TestBed.createComponent(EvaluacionResultadosComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
