import { TestBed } from '@angular/core/testing';

import { BannerAPIService } from './banner-api.service';

describe('BannerAPIService', () => {
  let service: BannerAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BannerAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
