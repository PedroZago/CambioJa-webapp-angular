import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AuthCookieService } from './auth-cookie.service';

describe('AuthCookieService', () => {
  let service: AuthCookieService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
    });
    service = TestBed.inject(AuthCookieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
