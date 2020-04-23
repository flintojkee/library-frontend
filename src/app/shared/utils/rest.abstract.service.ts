import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserUrls, BookUrls } from '@library/app/config/api.config';
export abstract class RestService {
  protected userUrls = UserUrls;
  protected bookUrls = BookUrls;
  protected apiUrl = environment.apiUrl;

  constructor(protected http: HttpClient) {}

  protected get<R>(relativeUrl: string): Observable<R> {
    return this.http.get<R>(this.apiUrl + relativeUrl);
  }

  protected post<T, R>(relativeUrl: string, data: T, options?): Observable<any> {
    return this.http.post<R>(this.apiUrl + relativeUrl, data, options);
  }
  protected delete(relativeUrl: string) {
    return this.http.delete(this.apiUrl + relativeUrl);
  }
  protected put<T = {}, R = {}>(relativeUrl: string, data: T): Observable<R> {
    return this.http.put<R>(this.apiUrl + relativeUrl, data);
  }
}
