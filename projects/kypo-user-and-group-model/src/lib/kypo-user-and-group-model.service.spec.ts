import { TestBed } from '@angular/core/testing';

import { KypoUserAndGroupModelService } from './kypo-user-and-group-model.service';

describe('KypoUserAndGroupModelService', () => {
  let service: KypoUserAndGroupModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KypoUserAndGroupModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
