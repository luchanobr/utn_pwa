import { Component, OnInit, Inject, Output, EventEmitter, Optional } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { UsuariosFacade } from "@usuarios/usuarios.facade";
import { ProductosFacade } from "@productos/productos.facade";

@Component({
  selector: "app-confirm-modal",
  templateUrl: "./confirm-modal.component.html",
  styleUrls: ["./confirm-modal.component.scss"]
})
export class ConfirmModalComponent implements OnInit {
  @Output() agree = new EventEmitter<boolean>(true);
  constructor(
    public dialogRef: MatDialogRef<ConfirmModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    @Optional() private usuariosFacade: UsuariosFacade,
    @Optional() private productosFacade: ProductosFacade
  ) {}

  ngOnInit() {}

  confirmar() {
    switch (this.data.type) {
      case "usuario":
        this.usuariosFacade.deleteUsuario(this.data.usuario._id, this.dialogRef.id);
        break;

      case "producto":
        this.productosFacade.deleteProducto(this.data.producto._id, this.dialogRef.id);
        break;
    }
  }

  volver(): void {
    this.dialogRef.close();
  }
}
