import { Component, OnInit } from "@angular/core";
import { CoreFacade } from "../core.facade";
import { Observable } from "rxjs";
import { Producto } from "../models";
import { CarritoFacade } from "../carrito.facade";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  productosDestacados$: Observable<Array<Producto>>;
  constructor(
    private coreFacade: CoreFacade,
    private carritoFacade: CarritoFacade
  ) {}

  ngOnInit() {
    this.productosDestacados$ = this.coreFacade.getProductosDestacados;
  }

  agregarProducto(producto: Producto) {
    this.carritoFacade.setCarrito = producto;
  }

  buy() {
    this.carritoFacade.buy();
  }
}
