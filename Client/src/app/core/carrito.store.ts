import { Injectable } from "@angular/core";
import { BehaviorSubject, of, Observable } from "rxjs";
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
    let newcarrito = oldCarrito.splice(index, 1);
    newcarrito.length == 0 ? (newcarrito = null) : null;
    this.setCarrito = newcarrito;
  }

  get total(): number {
    let total: number = 0;

    if (this.getCarrito != null) {
      (total = this.getCarrito
        .map(prod => prod.precio)
        .reduce((acc, next) => acc + next)),
        0;
    }

    return total;
  }

  get total$(): Observable<number> {
    let total: number = 0;

    if (this.getCarrito != null) {
      (total = this.getCarrito
        .map(prod => prod.precio)
        .reduce((acc, next) => acc + next)),
        0;
    }

    return of(total);
  }
}
