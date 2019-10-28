import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//components
import { ProductosAdminComponent } from "./view/productos-admin.component";

const routes: Routes = [{ path: "", component: ProductosAdminComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule {}
