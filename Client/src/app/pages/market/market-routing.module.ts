import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MarketHomeComponent } from './view/market-home.component';

const routes: Routes = [
    {
        path: "",
        component: MarketHomeComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: []
})
export class MarketRoutingModule {}
