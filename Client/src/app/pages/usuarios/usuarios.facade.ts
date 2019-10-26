import { Injectable } from "@angular/core";
import { CoreFacade } from "@app/core";
import { User, Usuario } from "@models";
import { UsuariosServices } from "@app/pages/usuarios/services/index";
import { Observable } from "rxjs";
import { DashboardStore } from "@dashboard/index";
import { Paginador, UsuariosApi } from "@models";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AlertComponent } from "@app/shared/containers/alert/alert.component";

@Injectable()
export class UsuariosFacade {
  constructor(
    private coreFacade: CoreFacade,
    private usuariosServices: UsuariosServices,
    private dashboardStore: DashboardStore,
    private dialogServices: MatDialog,
    private snackbar: MatSnackBar
  ) {}
  fechtUsuarios() {
    this.usuariosServices.findAll().subscribe((res: UsuariosApi) => {
      this.dashboardStore.setUsuarios = res.data.docs;
      this.dashboardStore.setPaginador = new Paginador(res.data);
    });
  }

  get getUsuarios(): Observable<Array<Usuario>> {
    return this.dashboardStore.getUsuarios;
  }

  get getPaginador(): Observable<Paginador> {
    return this.dashboardStore.getPaginador;
  }

  createUsuario(data: Usuario) {
    this.usuariosServices.create(data).subscribe(res => console.log(res));
  }

  postUsuario(data: Usuario, id, dialog) {
    this.usuariosServices.edit(data, id).subscribe(res => {
      this.dialogServices.getDialogById(dialog).close();
      this.snackbar.openFromComponent(AlertComponent, {
        duration: 3000,
        data: { msg: "Usuario editado correctamente", type: "success" }
      });
    });
  }

  deleteUsuario(id) {
    this.usuariosServices.delete(id).subscribe(res => console.info(res));
  }
}
