import { Injectable } from '@angular/core';
import { RestService } from 'src/app/shared/utils';
import { HttpClient } from '@angular/common/http';
import { LoginForm } from '@library/app/models/forms';
import { IUserLogin } from '@library/app/models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends RestService {
  constructor(http: HttpClient) {
    super(http);
  }
  login(credentials: LoginForm) {
    return this.post<LoginForm, IUserLogin>(this.userUrls.login, credentials).pipe(
      map((res: IUserLogin) => {
        return res;
      })
    );
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
