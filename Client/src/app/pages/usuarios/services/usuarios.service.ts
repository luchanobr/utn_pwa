import { Injectable } from "@angular/core";
import { environment } from "@env/environment";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UsuariosApi } from "../../../core/models/usuariosApi.interface";
import { Usuario } from "@app/core/models";

@Injectable()
export class UsuariosServices {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    }),
    withCredentials: true
  };

  url: string = `${environment.apiUrl}usuarios`;

  findAll() {
    return this.http.get<UsuariosApi>(`${this.url}`, this.httpOptions);
  }

  create(data: Usuario) {
    return this.http.post(`${this.url}`, data, this.httpOptions);
  }

  edit(data: Usuario, id) {
    return this.http.put(`${this.url}/${id}`, data, this.httpOptions);
  }

  delete(id) {
    return this.http.delete(`${this.url}/${id}`, this.httpOptions);
  }
}
