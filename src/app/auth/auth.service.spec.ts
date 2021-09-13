import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('is logged in should be initally false', done => {
    service.isLoggedIn$.subscribe(v => {
      expect(v).toBeFalsy();
      done();
    })
  });

  test('is logged in should be true after setting true', done => {
    service.setIsLoggedIn(true);
    service.isLoggedIn$.subscribe(v => {
      expect(v).toBeTruthy();
      done();
    })
  });

  test('is logged in should be false after resetting', done => {
    service.setIsLoggedIn(true);
    service.setIsLoggedIn(false);
    service.isLoggedIn$.subscribe(v => {
      expect(v).toBeFalsy();
      done();
    })
  });
});
