import { TestBed } from '@angular/core/testing';

import { LoginAuthenticationGuard } from './login-authentication.guard';

describe('LoginAuthenticationGuard', () => {
  let guard: LoginAuthenticationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginAuthenticationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
