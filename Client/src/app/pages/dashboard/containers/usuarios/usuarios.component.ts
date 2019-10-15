import { Component, OnInit, ViewChild } from "@angular/core";
import { DashboardFacade } from "@dashboard/dashboard.facade";
import { Observable } from "rxjs";
import { Usuario } from "@models";
import { Paginador } from "../../models/paginador.class";
import { MatPaginator } from "@angular/material/paginator";
import { CoreFacade } from "@app/core";

@Component({
  selector: "app-usuarios",
  templateUrl: "./usuarios.component.html",
  styleUrls: ["./usuarios.component.scss"]
})
export class UsuariosComponent implements OnInit {
  usuarios$: Observable<Array<Usuario>> | null;
  paginador$: Observable<Paginador> | null;
  columnas = ["nombre", "email", "telefono", "acciones"];
  isAdmin$: Observable<boolean>;
  superAdmin$: Observable<boolean>;
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
