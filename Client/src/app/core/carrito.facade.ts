import { Injectable } from "@angular/core";
import { CarritoStore } from "./carrito.store";
import { Producto } from "./models";
import { Router } from "@angular/router";

@Injectable()
export class CarritoFacade {
  constructor(private carritoStore: CarritoStore, private router: Router) {}

  get getCarrito$() {
    return this.carritoStore.getCarrito$;
  }

  set setCarrito(producto: Producto) {
    this.carritoStore.addCarrito = producto;
  }

  buy() {
    this.router.navigate(["/market", "buy"]);
  }
}
