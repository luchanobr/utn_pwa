import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { UsuariosAdminComponent } from "./view/usuarios-admin.component";

const routes: Routes = [
  {
    path: "",
    component: UsuariosAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule {}
