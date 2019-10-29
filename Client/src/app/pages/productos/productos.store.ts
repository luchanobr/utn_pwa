import { Injectable } from "@angular/core";
import { Producto, Paginador } from "@models";
import { BehaviorSubject, Observable } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

@Injectable()
export class ProductosStore {
  constructor() {}

  private productos$ = new BehaviorSubject<Array<Producto>>(null);
  private paginador$ = new BehaviorSubject<Paginador>(null);

  set setProductos(producto: Array<Producto>) {
    this.productos$.next(producto);
  }

  get getProductos(): Observable<Array<Producto>> {
    return this.productos$.asObservable().pipe(distinctUntilChanged());
  }

  set setPaginador(paginador: Paginador) {
    this.paginador$.next(paginador);
  }

  get getPaginador(): Observable<Paginador> {
    return this.paginador$.asObservable().pipe(distinctUntilChanged());
  }
}
