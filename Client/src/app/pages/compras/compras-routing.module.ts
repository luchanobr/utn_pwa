import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ComprasAdminComponent } from "./view/compras-admin.component";

const routes: Routes = [
  {
    path: "",
    component: ComprasAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: []
})
export class ComprasRoutingModule {}
