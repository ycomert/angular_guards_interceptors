import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { formGuardGuard } from './form-guard.guard';

describe('formGuardGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => formGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
