import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SaldoComponent } from './saldo.component';
import { AuthCookieService } from '../../../../services';
import { MoedaService } from '../../../moeda';
import { CambioService } from '../../services';

describe('SaldoComponent', () => {
  let component: SaldoComponent;
  let fixture: ComponentFixture<SaldoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaldoComponent],
      imports: [HttpClientTestingModule],
      providers: [MoedaService, AuthCookieService, CambioService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
