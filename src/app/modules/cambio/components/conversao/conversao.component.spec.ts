import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ConversaoComponent } from './conversao.component';
import { AuthCookieService } from '../../../../services';
import { MoedaService } from '../../../moeda';
import { CambioService } from '../../services';

describe('ConversaoComponent', () => {
  let component: ConversaoComponent;
  let fixture: ComponentFixture<ConversaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConversaoComponent],
      imports: [HttpClientTestingModule],
      providers: [MoedaService, AuthCookieService, CambioService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
