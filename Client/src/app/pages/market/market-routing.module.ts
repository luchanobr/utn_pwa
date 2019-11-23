import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MarketHomeComponent } from "./view/market-home.component";
import { ComprasFormComponent } from "./containers/compras-form/compras-form.component";

const routes: Routes = [
  {
    path: "",
    component: MarketHomeComponent
  },
  {
    path: "buy",
    component: ComprasFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: []
})
export class MarketRoutingModule {}
