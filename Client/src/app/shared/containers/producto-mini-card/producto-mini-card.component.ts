import { Component, OnInit, Input } from "@angular/core";
import { Producto } from "@app/core/models";

@Component({
  selector: "producto-mini-card",
  templateUrl: "producto-mini-card.component.html"
})
export class ProductoMiniCardComponent implements OnInit {
  @Input() producto: Producto;
  constructor() {}

  ngOnInit() {}
}
