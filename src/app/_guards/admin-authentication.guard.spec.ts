import { TestBed } from '@angular/core/testing';

import { AdminAuthenticationGuard } from './admin-authentication.guard';

describe('AdminAuthenticationGuard', () => {
  let guard: AdminAuthenticationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminAuthenticationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
