import { Injectable } from '@angular/core';
import { RestService } from 'src/app/shared/utils';
import { HttpClient } from '@angular/common/http';
import { LoginForm } from '@library/app/models/forms';
import { IUserLogin, IUser, UserRoles } from '@library/app/models';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends RestService {
  emptyUser = {
    id: null,
    email: null,
    dateOfBirth: null,
    fullName: null,
    address: null,
    accessToken: null,
    roles: null
  };
  private user$ = new BehaviorSubject<IUser>(
    JSON.parse(localStorage.getItem('user')) || this.emptyUser
  );
  get userSubject() {
    return this.user$;
  }
  private role$: BehaviorSubject<UserRoles>;
  get roleSubject() {
    return this.role$;
  }
  get user() {
    return this.user$.asObservable();
  }
  get role() {
    return this.role$.asObservable();
  }
  constructor(http: HttpClient, private router: Router) {
    super(http);
    const user = JSON.parse(localStorage.getItem('user'));
    this.role$ = user ? new BehaviorSubject<UserRoles>(user) : new BehaviorSubject<UserRoles>(null);
  }
  isAuthenticated() {
    return !!this.user$.value.accessToken;
  }
  login(credentials: LoginForm) {
    return this.post<LoginForm, IUser>(this.userUrls.login, credentials).pipe(
      tap((res: IUser) => {
        this.user$.next(res);
        localStorage.setItem('user', JSON.stringify(res));
        this.role$.next(res.roles[0]);
      })
    );
  }
  logout() {
    this.router.navigate(['auth/login']);
    localStorage.removeItem('user');
  }
  sigUp(credentials: any) {
    return this.post<any, any>(this.userUrls.signup, credentials).pipe(
      map((res: any) => {
        console.log(res);
        return res;
      })
    );
  }
}
