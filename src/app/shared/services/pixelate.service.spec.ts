import { TestBed } from '@angular/core/testing';

import { PixelateService } from './pixelate.service';

describe('PixelateService', () => {
  let service: PixelateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PixelateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
