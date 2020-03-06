import { TestBed } from '@angular/core/testing';

import { ColumnDefsService } from './column-defs.service';

describe('ColumnDefsService', () => {
  let service: ColumnDefsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColumnDefsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
