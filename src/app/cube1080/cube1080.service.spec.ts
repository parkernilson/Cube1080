import { TestBed } from '@angular/core/testing';

import { Cube1080Service } from './cube1080.service';

describe('Cube1080Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Cube1080Service = TestBed.get(Cube1080Service);
    expect(service).toBeTruthy();
  });
});
