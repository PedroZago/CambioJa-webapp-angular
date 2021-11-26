import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CambioService } from './cambio.service';

describe('CambioService', () => {
  let service: CambioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CambioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
