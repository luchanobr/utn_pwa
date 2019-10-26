import { Component, OnInit, Inject, Injector } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Usuario, Direccion } from "@models";
import { FormGroup } from "@angular/forms";
import { UsuariosFacade } from "@usuarios/usuarios.facade";

@Component({
  selector: "app-usuario-dialog",
  templateUrl: "./usuario-dialog.component.html",
  styleUrls: ["./usuario-dialog.component.scss"]
})
export class UsuarioDialogComponent implements OnInit {
  permisosLista = ["ver", "edit", "crear"];
  usuarioForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<UsuarioDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { type: string },
    private injector: Injector
  ) {}

  ngOnInit() {
    this.usuarioForm = this.injector.get(UsuariosFacade).usuarioForm;
  }

  volver(): void {
    this.usuarioForm.reset();
    this.dialogRef.close();
  }

  agregarDireccion() {
    this.injector.get(UsuariosFacade).agregarDireccion();
  }

  quitarDireccion(index) {
    this.injector.get(UsuariosFacade).quitarDireccion(index);
  }
  submitUsuario(usuario: Usuario) {
    this.data.type === "create"
      ? this.injector.get(UsuariosFacade).postUsuario(usuario, this.dialogRef.id)
      : this.injector.get(UsuariosFacade).putUsuario(usuario, usuario._id, this.dialogRef.id);
  }
}
