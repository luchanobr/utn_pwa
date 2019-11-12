import { NgModule } from "@angular/core";
import { ComprasRoutingModule } from "./compras-routing.module";
import { ComprasAdminComponent } from "./view/compras-admin.component";
import { ComprasFacade } from "./compras.facade";
import { ComprasStore } from "./compras.store";

@NgModule({
  imports: [ComprasRoutingModule],
  exports: [],
  declarations: [ComprasAdminComponent],
  providers: [ComprasFacade, ComprasStore]
})
export class ComprasModule {}
