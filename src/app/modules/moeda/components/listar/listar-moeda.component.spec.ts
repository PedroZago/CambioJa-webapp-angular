import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ListarMoedaComponent } from './listar-moeda.component';
import { MoedaService } from '../../services';

describe('ListarMoedaComponent', () => {
  let component: ListarMoedaComponent;
  let fixture: ComponentFixture<ListarMoedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarMoedaComponent],
      imports: [HttpClientTestingModule],
      providers: [MoedaService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMoedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
