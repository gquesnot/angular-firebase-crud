import { TestBed } from '@angular/core/testing';

import { FirebaseService } from './firebase.service';

describe('Firebase2Service', () => {
  let service: FirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
