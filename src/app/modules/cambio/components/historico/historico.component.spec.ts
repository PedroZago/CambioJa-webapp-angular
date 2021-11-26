import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HistoricoComponent } from './historico.component';
import { AuthCookieService } from '../../../../services';
import { MoedaService } from '../../../moeda';
import { CambioService } from '../../services';

describe('HistoricoComponent', () => {
  let component: HistoricoComponent;
  let fixture: ComponentFixture<HistoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoricoComponent],
      imports: [HttpClientTestingModule],
      providers: [AuthCookieService, MoedaService, CambioService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
