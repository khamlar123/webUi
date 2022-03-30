import { TestBed } from '@angular/core/testing';

import { NewDetailApiService } from './new-detail-api.service';

describe('NewDetailApiService', () => {
  let service: NewDetailApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewDetailApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
