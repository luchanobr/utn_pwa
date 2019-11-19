import { NgModule } from "@angular/core";
import { AngularCommonModule } from "@app/shared";
import { MarketHomeComponent } from "./view/market-home.component";
import { MarketRoutingModule } from "./market-routing.module";
import { MarketFacade } from "./market.facade";
import { MarketStore } from "./market.store";
import { ProductoFilterComponent } from "./containers/producto-filter/producto-filter.component";
import { MatSelectModule } from "@angular/material/select";
import { CategoriaService } from "@app/core/services";

@NgModule({
  imports: [AngularCommonModule, MarketRoutingModule, MatSelectModule],
  exports: [],
  declarations: [MarketHomeComponent, ProductoFilterComponent],
  providers: [MarketFacade, MarketStore, CategoriaService]
})
export class MarketModule {}
