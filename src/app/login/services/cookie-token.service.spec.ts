import { TestBed } from '@angular/core/testing';

import { CookieTokenService } from './cookie-token.service';

describe('CookieTokenService', () => {
  let service: CookieTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CookieTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
