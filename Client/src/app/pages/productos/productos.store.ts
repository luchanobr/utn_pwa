import { Injectable } from "@angular/core";
import { Producto, Paginador, Categoria } from "@models";
import { BehaviorSubject, Observable } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

@Injectable()
export class ProductosStore {
  constructor() {}

  private productos$ = new BehaviorSubject<Array<Producto>>(null);
  private paginador$ = new BehaviorSubject<Paginador>(null);
  private categorias$ = new BehaviorSubject<Array<Categoria>>(null);

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

  set setCategorias(categorias: Array<Categoria>) {
    this.categorias$.next(categorias);
  }

  get getCategorias(): Observable<Array<Categoria>> {
    return this.categorias$.asObservable().pipe(distinctUntilChanged());
  }
}
