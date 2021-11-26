import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

import { MoedaService } from './moeda.service';

describe('MoedaService', () => {
  let service: MoedaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MoedaService]
    });
    service = TestBed.inject(MoedaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
