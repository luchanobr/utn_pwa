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

  findAll(data) {
    return this.http.get<ProductosApi>(this.url, {
      params: data,
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
      withCredentials: true
    });
  }
}
