import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Producto } from "@app/core/models";

@Component({
  selector: "producto-card",
  templateUrl: "producto-card.component.html"
})
export class ProductoCardComponent implements OnInit {
  @Input() producto: Producto;
  @Output() setProducto = new EventEmitter<Producto>();
  constructor() {}

  ngOnInit() {}

  agregarProducto() {
    this.setProducto.emit(this.producto);
  }
}
