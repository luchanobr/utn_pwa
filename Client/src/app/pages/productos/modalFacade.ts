import { Injectable } from "@angular/core";
import { ProductoModalComponent } from "@productos/containers/index";
import { ConfirmModalComponent } from "@shared/containers";
import { MatDialog } from "@angular/material/dialog";
import { Producto } from "@models";
@Injectable()
export class ModalFacade {
  constructor(private dialogServices: MatDialog) {}

  productoModal(data) {
    const dialogUsuario = this.dialogServices.open(ProductoModalComponent, {
      data: data
    });
  }

  confirmModal(data: { type: string; titulo: string; subtitulo: string; producto?: Producto }) {
    const dialogConfirm = this.dialogServices.open(ConfirmModalComponent, {
      data: data
    });
  }
}
