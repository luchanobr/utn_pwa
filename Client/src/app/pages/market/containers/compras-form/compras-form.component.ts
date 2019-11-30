import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { CarritoFacade } from "@app/core/carrito.facade";
import { CoreFacade } from "@app/core";
import { MarketFacade } from "../../market.facade";

@Component({
  selector: "compras-form",
  templateUrl: "compras-form.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComprasFormComponent implements OnInit {
  constructor(
    private carritoFacade: CarritoFacade,
    private coreFacade: CoreFacade,
    private marketFacade: MarketFacade
  ) {}

  ngOnInit() {}

  get getUser$() {
    return this.coreFacade.getUser;
  }

  get getCarrito$() {
    return this.carritoFacade.getCarrito$;
  }
}
