import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "@env/environment";
import { Observable } from "rxjs";
import { Producto, ProductosApi } from "@models";

@Injectable()
export class ProductosService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    }),
    withCredentials: true
  };

  url: string = `${environment.apiUrl}productos`;

  findAll(filter) {
    return this.http.get<ProductosApi>(this.url, {
      params: filter,
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
      withCredentials: true
    });
  }

  create(data: Producto) {
    return this.http.post(this.url, data, this.httpOptions);
  }

  edit(data: Producto, id) {
    return this.http.put(`${this.url}/${id}`, data, this.httpOptions);
  }

  delete(id) {
    return this.http.delete(`${this.url}/${id}`, this.httpOptions);
  }
}
