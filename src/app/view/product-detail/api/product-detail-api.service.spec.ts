import { TestBed } from '@angular/core/testing';

import { ProductDetailApiService } from './product-detail-api.service';

describe('ProductDetailApiService', () => {
  let service: ProductDetailApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductDetailApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
