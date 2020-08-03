import { TestBed } from '@angular/core/testing';

import { TodayGuard } from './today.guard';

describe('TodayGuard', () => {
  let guard: TodayGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TodayGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
