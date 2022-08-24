import { TestBed } from '@angular/core/testing';

import { ProductGGuard } from './product-g.guard';

describe('ProductGGuard', () => {
  let guard: ProductGGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProductGGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
