import { TestBed, inject } from '@angular/core/testing';

import { ArtWorksService } from './art-works.service';

describe('ArtWorksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArtWorksService]
    });
  });

  it('should be created', inject([ArtWorksService], (service: ArtWorksService) => {
    expect(service).toBeTruthy();
  }));
});
