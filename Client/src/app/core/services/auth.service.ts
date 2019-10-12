import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoginResponse } from '../models/login-response';
import { Credential } from '../models';

@Injectable()
export class AuthServices {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    withCredentials: true,
    observe: 'response' as 'body'
  };

  url: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(credential: Credential): Observable<HttpResponse<LoginResponse>> {
    return this.http
      .post(`${this.url}login`, credential, this.httpOptions)
      .pipe(tap((res: HttpResponse<LoginResponse>) => localStorage.setItem('wyxicToken', res.body.token)));
  }
}
