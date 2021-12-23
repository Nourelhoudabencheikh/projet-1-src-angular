import { TestBed } from '@angular/core/testing';

import { CategoriemockService } from './categoriemock.service';

describe('CategoriemockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoriemockService = TestBed.get(CategoriemockService);
    expect(service).toBeTruthy();
  });
});
