import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor(private storage: Storage) {}

  public setTokenToStorage(token: string) {
    this.storage.set('token', token);
  }

  public getTokenFromStorage(): Observable<any> {
    return from(this.storage.get('token'));
  }

  public removeTokenFromStorage(): Observable<any> {
    return from(this.storage.remove('token'));
  }
}
