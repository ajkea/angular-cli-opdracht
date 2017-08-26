import { TestBed, inject } from '@angular/core/testing';

import { KunstenaarsService } from './kunstenaars.service';

describe('KunstenaarsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KunstenaarsService]
    });
  });

  it('should be created', inject([KunstenaarsService], (service: KunstenaarsService) => {
    expect(service).toBeTruthy();
  }));
});
