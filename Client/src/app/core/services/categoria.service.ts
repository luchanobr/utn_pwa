import { Injectable } from "@angular/core";
import { Categoria } from "@models";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "@env/environment";
import { map } from "rxjs/operators";
@Injectable()
export class CategoriaService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    }),
    withCredentials: true
  };

  url: string = `${environment.apiUrl}categorias`;

  findAll() {
    return this.http.get<{ data: Array<Categoria> }>(
      this.url,
      this.httpOptions
    );
  }
}
