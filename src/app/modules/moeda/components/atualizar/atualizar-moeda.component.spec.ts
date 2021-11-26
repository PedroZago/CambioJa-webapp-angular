import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AtualizarMoedaComponent } from './atualizar-moeda.component';
import { MoedaService } from '../../../moeda';

describe('AtualizarMoedaComponent', () => {
  let component: AtualizarMoedaComponent;
  let fixture: ComponentFixture<AtualizarMoedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtualizarMoedaComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [MoedaService]
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
