import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "@core/index";
import { AuthGuard } from "@guards";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "home",
    component: HomeComponent,
    data: {}
  },
  {
    path: "dashboard",
    data: {},
    loadChildren: () =>
      import("./pages/dashboard/dashboard.module").then(
        mod => mod.DashboardModule
      ),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: "login",
    loadChildren: () =>
      import("./pages/login/login.module").then(m => m.LoginModule)
  },
  {
    path: "market",
    loadChildren: () =>
      import("./pages/market/market.module").then(m => m.MarketModule)
  },
  {
    path: "**",
    redirectTo: "home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
