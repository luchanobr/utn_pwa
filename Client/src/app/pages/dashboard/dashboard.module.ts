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
import { MatSnackBarModule } from "@angular/material/snack-bar";

// components
import { ComprasComponent, SettingsComponent } from "@dashboard/containers/index";

import { ConfirmModalComponent } from "@shared/containers/confirm-modal/confirm-modal.component";
import { AlertComponent } from "@app/shared/containers/alert/alert.component";

// services
import { UsuariosServices } from "../usuarios/services";
import { DashboardStore } from "./dashboard.store";

@NgModule({
  declarations: [
    DashboardComponent,
    ComprasComponent,
    SettingsComponent,
    ConfirmModalComponent,
    AlertComponent
  ],
  entryComponents: [ConfirmModalComponent, AlertComponent],
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
    MatSelectModule,
    MatSnackBarModule
  ],
  providers: [DashboardFacade, UsuariosServices, DashboardStore]
})
export class DashboardModule {}
