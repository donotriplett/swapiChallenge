import { TestBed } from '@angular/core/testing';

import { FetchSWAPIService } from './fetch-swapi.service';

describe('FetchSWAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchSWAPIService = TestBed.get(FetchSWAPIService);
    expect(service).toBeTruthy();
  });
});
