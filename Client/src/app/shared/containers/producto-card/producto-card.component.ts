import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from "@angular/core";
import { Producto } from "@app/core/models";

@Component({
  selector: "producto-card",
  templateUrl: "producto-card.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductoCardComponent implements OnInit {
  @Input() producto: Producto;
  @Output() setProducto = new EventEmitter<Producto>();
  @Output() buy = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit() {}

  agregarProducto() {
    this.setProducto.emit(this.producto);
  }

  buyProducto() {
    this.buy.emit(true);
  }
}
