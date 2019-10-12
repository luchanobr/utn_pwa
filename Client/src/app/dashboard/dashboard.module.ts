import { NgModule } from '@angular/core';
import { AngularCommonModule } from '@app/shared';
import { DashboardComponent } from './view/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardFacade } from './dashboard.facade';

import { MatTabsModule } from '@angular/material/tabs';
import { UsuariosComponent } from './containers/usuarios/usuarios.component';
import { ProductosComponent } from './containers/productos/productos.component';
import { ComprasComponent } from './containers/compras/compras.component';
import { SettingsComponent } from './containers/settings/settings.component';

@NgModule({
  declarations: [DashboardComponent, UsuariosComponent, ProductosComponent, ComprasComponent, SettingsComponent],
  imports: [AngularCommonModule, DashboardRoutingModule, MatTabsModule],
  providers: [DashboardFacade]
})
export class DashboardModule {}
