import { TestBed, inject } from '@angular/core/testing';

import { ShowPieceService } from './show-piece.service';

describe('ShowPieceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowPieceService]
    });
  });

  it('should be created', inject([ShowPieceService], (service: ShowPieceService) => {
    expect(service).toBeTruthy();
  }));
});
