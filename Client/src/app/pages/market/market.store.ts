import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import {
  Producto,
  Paginador,
  FilterProducto,
  Categoria
} from "@app/core/models";
import { distinctUntilChanged } from "rxjs/operators";

@Injectable()
export class MarketStore {
  private producto$ = new BehaviorSubject<Array<Producto>>(null);
  private paginador$ = new BehaviorSubject<Paginador>(null);
  private filter$ = new BehaviorSubject<FilterProducto>(null);
  private categorias$ = new BehaviorSubject<Categoria[]>(null);
  constructor() {}

  set setProductos(productos: Producto[]) {
    this.producto$.next(productos);
  }

  get getProductos$() {
    return this.producto$.asObservable().pipe(distinctUntilChanged());
  }

  set setPaginador(paginador: Paginador) {
    this.paginador$.next(paginador);
  }

  get getPaginador$() {
    return this.paginador$.asObservable().pipe(distinctUntilChanged());
  }

  set setFilter(filter: FilterProducto) {
    this.filter$.next(filter);
  }

  get gerFilter$() {
    return this.filter$.asObservable().pipe(distinctUntilChanged());
  }

  set setCategorias(categorias: Categoria[]) {
    this.categorias$.next(categorias);
  }

  get getCategorias$() {
    return this.categorias$.asObservable().pipe(distinctUntilChanged());
  }
}
