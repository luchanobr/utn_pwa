import { NgModule } from '@angular/core';
import { AngularCommonModule } from '@app/shared';
import { DashboardComponent } from './view/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardFacade } from './dashboard.facade';

// angular material
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';

// components
import {
  UsuariosComponent,
  ProductosComponent,
  ComprasComponent,
  SettingsComponent
} from '@dashboard/containers/index';

// services
import { UsuariosServices } from './services';

@NgModule({
  declarations: [DashboardComponent, UsuariosComponent, ProductosComponent, ComprasComponent, SettingsComponent],
  imports: [AngularCommonModule, DashboardRoutingModule, MatTabsModule, MatTableModule],
  providers: [DashboardFacade, UsuariosServices]
})
export class DashboardModule {}
