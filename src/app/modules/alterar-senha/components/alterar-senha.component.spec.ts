import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AlterarSenhaComponent } from './alterar-senha.component';
import { AlterarSenhaService } from '../services';
import { AuthCookieService } from '../../../services';

describe('AlterarSenhaComponent', () => {
  let component: AlterarSenhaComponent;
  let fixture: ComponentFixture<AlterarSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlterarSenhaComponent],
      imports: [HttpClientTestingModule],
      providers: [AlterarSenhaService, AuthCookieService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
