import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-direccion-form",
  templateUrl: "./direccion-form.component.html",
  styleUrls: ["./direccion-form.component.scss"]
})
export class DireccionFormComponent implements OnInit {
  @Input() direccionGroup: FormGroup;
  @Input() index: number;
  @Output() deletDireccion = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  quitarDireccion() {
    this.deletDireccion.emit(this.index);
  }
}
