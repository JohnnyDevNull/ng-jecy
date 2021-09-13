import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../../auth/auth.service';
import { LoginComponent } from './login.component';

class BlankComponent {}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'dashboard', component: BlankComponent }
        ]),
        FormsModule
      ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should call the service functions', () => {
    expect.assertions(2);

    const authService = TestBed.inject(AuthService);
    jest.spyOn(authService, 'setIsLoggedIn');

    const router = TestBed.inject(Router);
    jest.spyOn(router, 'navigate');

    component.onLogin({valid: true, value: { email: 'test@test' }} as any);

    expect(authService.setIsLoggedIn).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalled();
  });
});
