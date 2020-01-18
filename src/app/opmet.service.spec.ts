import { TestBed } from '@angular/core/testing';

import { OpmetService } from './opmet.service';

describe('OpmetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpmetService = TestBed.get(OpmetService);
    expect(service).toBeTruthy();
  });
});
