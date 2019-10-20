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
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

import { MatSelectModule } from "@angular/material/select";

// components
import {
  UsuariosComponent,
  ProductosComponent,
  ComprasComponent,
  SettingsComponent,
  UsuarioDialogComponent
} from "@dashboard/containers/index";
import { DireccionFormComponent } from "@dashboard/index";

// services
import { UsuariosServices } from "./services";
import { DashboardStore } from "./dashboard.store";

@NgModule({
  declarations: [
    DashboardComponent,
    UsuariosComponent,
    ProductosComponent,
    ComprasComponent,
    SettingsComponent,
    UsuarioDialogComponent,
    DireccionFormComponent
  ],
  entryComponents: [UsuarioDialogComponent],
  imports: [
    AngularCommonModule,
    DashboardRoutingModule,
    MatTabsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatSelectModule
  ],
  providers: [DashboardFacade, UsuariosServices, DashboardStore]
})
export class DashboardModule {}
