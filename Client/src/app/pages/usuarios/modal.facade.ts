import { Injectable } from "@angular/core";
import { UsuarioDialogComponent } from "@usuarios/containers/usuario-dialog/usuario-dialog.component";
import { ConfirmModalComponent } from "@shared/containers";
import { MatDialog } from "@angular/material/dialog";
import { Usuario } from "@app/core/models";
@Injectable()
export class ModalFacade {
  constructor(private dialogServices: MatDialog) {}

  usuarioModal(data) {
    const dialogUsuario = this.dialogServices.open(UsuarioDialogComponent, {
      data: data
    });
  }

  confirmModal(data: { type: string; titulo: string; subtitulo: string; usuario?: Usuario }) {
    const dialogConfirm = this.dialogServices.open(ConfirmModalComponent, {
      data: data
    });
  }
}
