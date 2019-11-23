import { Component, OnInit } from "@angular/core";
import { CarritoFacade } from "@app/core/carrito.facade";
import { Producto, FilterProducto } from "@models";

import { MarketFacade } from "../market.facade";

@Component({
  selector: "market-home",
  templateUrl: "market-home.component.html"
})
export class MarketHomeComponent implements OnInit {
  constructor(
    private carritoFacade: CarritoFacade,
    private marketFacade: MarketFacade
  ) {}

  ngOnInit() {}

  agregarProducto(producto: Producto) {
    this.carritoFacade.setCarrito = producto;
  }

  filterProductos(filter: FilterProducto) {
    this.marketFacade.fetchProductos$(filter);
  }

  get productos$() {
    return this.marketFacade.getProductos$;
  }

  get categorias$() {
    return this.marketFacade.getCategorias$;
  }

  buy(e) {
    this.carritoFacade.buy();
  }
}
