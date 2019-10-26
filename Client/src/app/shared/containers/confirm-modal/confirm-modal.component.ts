import { Component, OnInit, Inject, Output, EventEmitter, Optional } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { UsuariosFacade } from "@usuarios/usuarios.facade";

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
    @Optional() private usuariosFacade: UsuariosFacade
  ) {}

  ngOnInit() {}

  confirmar() {
    this.usuariosFacade.deleteUsuario(this.data.usuario._id);
  }

  volver(): void {
    this.dialogRef.close();
  }
}
