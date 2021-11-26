import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AdicionarMoedaComponent } from './adicionar-moeda.component';
import { MoedaService } from '../../../moeda';

describe('AdicionarMoedaComponent', () => {
  let component: AdicionarMoedaComponent;
  let fixture: ComponentFixture<AdicionarMoedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdicionarMoedaComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [MoedaService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarMoedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
