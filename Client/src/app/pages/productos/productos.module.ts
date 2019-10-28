import { NgModule } from "@angular/core";
import { ProductosAdminComponent } from "./view/productos-admin.component";
import { ProductosRoutingModule } from "./productos-routing.module";

@NgModule({
  declarations: [ProductosAdminComponent],
  imports: [ProductosRoutingModule],
  exports: [],
  providers: []
})
export class ProductosModule {}
