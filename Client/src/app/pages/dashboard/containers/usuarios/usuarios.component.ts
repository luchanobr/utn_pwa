import { Component, OnInit, ViewChild } from "@angular/core";
import { DashboardFacade } from "@dashboard/dashboard.facade";
import { Observable } from "rxjs";
import { Usuario } from "@models";
import { Paginador } from "../../models/paginador.class";
import { MatPaginator } from "@angular/material/paginator";
import { CoreFacade } from "@app/core";
import { animate, state, style, transition, trigger } from "@angular/animations";
@Component({
  selector: "app-usuarios",
  templateUrl: "./usuarios.component.html",
  styleUrls: ["./usuarios.component.scss"],
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0" })),
      state("expanded", style({ height: "*" })),
      transition("expanded <=> collapsed", animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))
    ])
  ]
})
export class UsuariosComponent implements OnInit {
  usuarios$: Observable<Array<Usuario>> | null;
  paginador$: Observable<Paginador> | null;
  columnas = ["nombre", "email", "telefono", "acciones"];
  isAdmin$: Observable<boolean>;
  superAdmin$: Observable<boolean>;
  expandedUsuario: Usuario | null;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(private dashboardFacade: DashboardFacade, private coreFacade: CoreFacade) {}

  ngOnInit() {
    this.dashboardFacade.fechtUsuarios();
    this.paginador$ = this.dashboardFacade.getPaginador;
    this.usuarios$ = this.dashboardFacade.getUsuarios;
    this.isAdmin$ = this.coreFacade.isAdmin;
    this.superAdmin$ = this.coreFacade.isSuperAdmin;
  }
}
