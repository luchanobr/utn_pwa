import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//components
import { DashboardComponent } from "./view/dashboard.component";
import { ComprasComponent } from "./containers/compras/compras.component";
import { SettingsComponent } from "./containers/settings/settings.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    data: {},
    children: [
      {
        path: "usuarios",
        loadChildren: () => import("../usuarios/usuarios.module").then(mod => mod.UsuariosModule)
      },
      {
        path: "productos",
        loadChildren: () => import("../productos/productos.module").then(mod => mod.ProductosModule)
      },
      {
        path: "compras",
        component: ComprasComponent
      },
      {
        path: "settings",
        component: SettingsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
