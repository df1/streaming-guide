import { TestBed } from '@angular/core/testing';

import { EntityResolverService } from './entity-resolver.service';

describe('EntityResolverService', () => {
  let service: EntityResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntityResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
