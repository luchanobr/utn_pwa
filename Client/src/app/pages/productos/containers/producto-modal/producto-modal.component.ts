import { Component, OnInit, Inject } from "@angular/core";
import { ProductosFacade } from "../../productos.facade";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormGroup } from "@angular/forms";
import { Producto } from "@app/core/models";

@Component({
  selector: "app-producto-modal",
  templateUrl: "./producto-modal.component.html"
})
export class ProductoModalComponent implements OnInit {
  productoForm: FormGroup;
  constructor(
    private productosFacade: ProductosFacade,
    @Inject(MAT_DIALOG_DATA) public data: { type: string; producto: Producto },
    private dialogRef: MatDialogRef<ProductoModalComponent>
  ) {}

  ngOnInit(): void {
    this.productoForm = this.productosFacade.productoForm;
  }

  volver(): void {
    this.productoForm.reset();
    this.dialogRef.close();
  }

  submitProducto(producto: Producto) {
    this.data.type === "create"
      ? this.productosFacade.createProducto(producto, this.dialogRef.id)
      : this.productosFacade.editProducto(producto, this.data.producto._id, this.dialogRef.id);
  }
}
