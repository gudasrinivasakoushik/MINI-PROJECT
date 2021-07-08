import { TestBed } from '@angular/core/testing';

import { WebwebService } from './webweb.service';

describe('WebwebService', () => {
  let service: WebwebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebwebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
