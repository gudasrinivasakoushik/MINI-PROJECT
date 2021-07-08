import { TestBed } from '@angular/core/testing';

import { JavajavaService } from './javajava.service';

describe('JavajavaService', () => {
  let service: JavajavaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JavajavaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
