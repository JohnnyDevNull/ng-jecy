import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private userName = new BehaviorSubject<string | null>(null);
  public userName$ = this.userName.asObservable();

  private isLoggedIn = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = this.isLoggedIn.asObservable();

  public setIsLoggedIn(v: boolean): void {
    this.isLoggedIn.next(v);
  }

  public setUserName(v: string): void {
    this.userName.next(v);
  }
}
