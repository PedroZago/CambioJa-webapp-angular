import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AlterarSenhaService } from './alterar-senha.service';

describe('AlterarSenhaService', () => {
  let service: AlterarSenhaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AlterarSenhaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
