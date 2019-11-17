import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Producto } from "./models";
import { distinctUntilChanged } from "rxjs/operators";

@Injectable()
export class CarritoStore {
  private carrito$ = new BehaviorSubject<Array<Producto>>(null);
  constructor() {}

  get getCarrito$() {
    return this.carrito$.asObservable().pipe(distinctUntilChanged());
  }

  get getCarrito() {
    return this.carrito$.getValue();
  }

  set setCarrito(productos: Array<Producto>) {
    this.carrito$.next(productos);
  }

  set addCarrito(producto: Producto) {
    let oldCarrito = this.carrito$.getValue();
    oldCarrito === null ? (oldCarrito = []) : oldCarrito;
    this.carrito$.next([...oldCarrito, producto]);
    console.log(this.carrito$.getValue());
  }

  removeProducto(id: string) {
    const oldCarrito = this.carrito$.getValue();
    const index = oldCarrito.findIndex(producto => (producto._id = id));
    const newcarrito = oldCarrito.splice(index, 1);
    this.setCarrito = newcarrito;
  }
}
