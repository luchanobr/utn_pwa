import { Injectable } from "@angular/core";
import { CoreFacade } from "@app/core";
import { User, Usuario } from "@models";
import { UsuariosServices } from "@dashboard/services/index";
import { Observable, of } from "rxjs";
import { DashboardStore } from "./dashboard.store";
import { Paginador } from "./models/paginador.class";
import { UsuariosApi } from "./models/usuariosApi.interface";

@Injectable()
export class DashboardFacade {
  constructor(
    private coreFacade: CoreFacade,
    private usuariosServices: UsuariosServices,
    private dashboardStore: DashboardStore
  ) {}

  setLinks(user: User) {}

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
}
