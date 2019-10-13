import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuariosApi } from '../models/usuariosApi.interface';

@Injectable()
export class UsuariosServices {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    withCredentials: true,
    observe: 'response' as 'body'
  };

  url: string = `${environment.apiUrl}usuarios`;

  findAll(): Observable<UsuariosApi> {
    return this.http.get<UsuariosApi>(`${this.url}`, this.httpOptions);
  }
}
