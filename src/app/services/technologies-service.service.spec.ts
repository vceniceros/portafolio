import { TestBed } from '@angular/core/testing';

import { TechnologiesServiceService } from './technologies-service.service';

describe('TechnologiesServiceService', () => {
  let service: TechnologiesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechnologiesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
