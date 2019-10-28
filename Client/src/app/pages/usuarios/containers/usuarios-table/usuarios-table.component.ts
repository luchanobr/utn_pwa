import { Component, OnInit, ViewChild } from "@angular/core";
import { UsuariosFacade } from "@usuarios/usuarios.facade";
import { Observable } from "rxjs";
import { Usuario, Paginador } from "@models";

import { MatPaginator } from "@angular/material/paginator";
import { CoreFacade } from "@app/core";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { ModalFacade } from "@usuarios/modal.facade";

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
  columnas = ["acciones", "nombre", "email", "telefono"];
  expandedUsuario: Usuario | null;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(
    private usuariosFacade: UsuariosFacade,
    private coreFacade: CoreFacade,
    private modalFacade: ModalFacade
  ) {}

  ngOnInit() {
    this.usuariosFacade.fechtUsuarios();
  }

  get paginador$(): Observable<Paginador> {
    return this.usuariosFacade.getPaginador;
  }

  get usuarios$(): Observable<Array<Usuario>> {
    return this.usuariosFacade.getUsuarios;
  }

  get isAdmin$(): Observable<boolean> {
    return this.coreFacade.isAdmin;
  }

  get superAdmin$(): Observable<boolean> {
    return this.coreFacade.isSuperAdmin;
  }

  crearUsuario() {
    this.modalFacade.usuarioModal("create");
  }

  editUsuario(usuario: Usuario) {
    this.modalFacade.usuarioModal({ type: "edit", usuario: usuario });
    this.usuariosFacade.editUsuario(usuario);
  }

  removeUsuario(usuario: Usuario) {
    this.modalFacade.confirmModal({
      type: "delete",
      titulo: "borrar usuario",
      subtitulo: "Confirma borrar el siguiente usuario:",
      usuario: usuario
    });
  }

  pageChange($event) {
    let data = {
      page: $event.pageIndex + 1
    };
    this.usuariosFacade.fechtUsuarios(data);
  }
}
