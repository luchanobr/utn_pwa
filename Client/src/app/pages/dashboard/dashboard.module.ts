import { NgModule } from "@angular/core";
import { AngularCommonModule } from "@app/shared";
import { DashboardComponent } from "./view/dashboard.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardFacade } from "./dashboard.facade";

// angular material
import { MatTabsModule } from "@angular/material/tabs";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatPaginatorModule } from "@angular/material/paginator";

// components
import {
  UsuariosComponent,
  ProductosComponent,
  ComprasComponent,
  SettingsComponent
} from "@dashboard/containers/index";

// services
import { UsuariosServices } from "./services";
import { DashboardStore } from "./dashboard.store";

@NgModule({
  declarations: [
    DashboardComponent,
    UsuariosComponent,
    ProductosComponent,
    ComprasComponent,
    SettingsComponent
  ],
  imports: [
    AngularCommonModule,
    DashboardRoutingModule,
    MatTabsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule
  ],
  providers: [DashboardFacade, UsuariosServices, DashboardStore]
})
export class DashboardModule {}
