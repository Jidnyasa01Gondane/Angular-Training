import { TestBed } from '@angular/core/testing';

import { DemodataService } from './demodata.service';

describe('DemodataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemodataService = TestBed.get(DemodataService);
    expect(service).toBeTruthy();
  });
});
