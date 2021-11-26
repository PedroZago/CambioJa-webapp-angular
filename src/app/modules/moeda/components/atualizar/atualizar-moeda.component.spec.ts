import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarMoedaComponent } from './atualizar-moeda.component';

describe('AtualizarMoedaComponent', () => {
  let component: AtualizarMoedaComponent;
  let fixture: ComponentFixture<AtualizarMoedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarMoedaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarMoedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
