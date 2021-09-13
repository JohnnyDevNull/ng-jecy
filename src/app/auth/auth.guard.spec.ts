import { TestBed } from '@angular/core/testing';
import { UrlTree } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      providers: [ AuthService ]
    });
    authService = TestBed.inject(AuthService);
    guard = TestBed.inject(AuthGuard);
  });

  test('should be created', () => {
    expect(guard).toBeTruthy();
  });

  test('canActivate should return UrlTree', done => {
    expect.assertions(1);
    guard.canActivate(null as any, null as any).subscribe(v => {
      expect(v).toBeInstanceOf(UrlTree);
      done();
    });
  });

  test('canActivate should return true', done => {
    expect.assertions(1);
    authService.setIsLoggedIn(true);
    guard.canActivate(null as any, null as any).subscribe(v => {
      expect(v).toBeTruthy();
      done();
    });
  });
});
