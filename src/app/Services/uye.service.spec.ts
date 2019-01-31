/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UyeService } from './uye.service';

describe('Service: Uye', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UyeService]
    });
  });

  it('should ...', inject([UyeService], (service: UyeService) => {
    expect(service).toBeTruthy();
  }));
});
