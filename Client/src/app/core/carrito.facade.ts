import { Injectable } from "@angular/core";
import { CarritoStore } from "./carrito.store";
import { Producto } from "./models";

@Injectable()
export class CarritoFacade {
  constructor(private carritoStore: CarritoStore) {}

  get getCarrito$() {
    return this.carritoStore.getCarrito$;
  }

  set setCarrito(producto: Producto) {
    this.carritoStore.addCarrito = producto;
  }
}
