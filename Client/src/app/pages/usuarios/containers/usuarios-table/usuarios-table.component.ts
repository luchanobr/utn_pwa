import { Component, OnInit, ViewChild } from "@angular/core";
import { UsuariosFacade } from "@usuarios/index";
import { Observable } from "rxjs";
import { Usuario, Paginador } from "@models";

import { MatPaginator } from "@angular/material/paginator";
import { CoreFacade } from "@app/core";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmModalComponent } from "@app/shared/containers/confirm-modal/confirm-modal.component";
@Component({
  selector: "app-usuarios-table",
  templateUrl: "./usuarios-table.component.html",
  styleUrls: ["./usuarios-table.component.scss"],
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0" })),
      state("expanded", style({ height: "*" })),
      transition("expanded <=> collapsed", animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))
    ])
  ]
})
export class UsuariosTableComponent implements OnInit {
  usuarios$: Observable<Array<Usuario>> | null;
  paginador$: Observable<Paginador> | null;
  columnas = ["nombre", "email", "telefono", "acciones"];
  isAdmin$: Observable<boolean>;
  superAdmin$: Observable<boolean>;
  expandedUsuario: Usuario | null;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(
    private usuariosFacade: UsuariosFacade,
    private coreFacade: CoreFacade,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.usuariosFacade.fechtUsuarios();
    this.paginador 
    this.usuarios$ = this.usuariosFacade.getUsuarios;
    this.isAdmin$ = this.coreFacade.isAdmin;
    this.superAdmin$ = this.coreFacade.isSuperAdmin;
  }

  get paginador(): Observable<Paginador>{
    return this.usuariosFacade.getPaginador
  }

  /*   crearUsuario(): void {
    const dialogUsuario = this.dialog.open(UsuarioDialogComponent, {
      data: {
        type: "create",
        usuario: {
          permisos: {},
          direcccion: []
        }
      }
    });
  } */
  /*  editUsuario(data: Usuario): void {
    const dialogUsuario = this.dialog.open(UsuarioDialogComponent, {
      data: {
        type: "edit",
        usuario: data
      }
    });
    dialogUsuario.afterClosed().subscribe(data => {
      console.log(data);
      this.dashboardFacade.fechtUsuarios();
    });
  } */
  deleteUsuario(usuario: Usuario): void {
    const dialogConfirm = this.dialog.open(ConfirmModalComponent, {
      data: {
        type: "delete",
        titulo: "borrar usuario",
        subtitulo: "Confirma borrar el siguiente usuario:",
        usuario: usuario
      }
    });
  }
}
