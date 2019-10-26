import { NgModule } from "@angular/core";

// Components
import {
  UsuarioDialogComponent,
  UsuariosAdminComponent,
  UsuariosTableComponent
} from "./containers";
import { DireccionFormComponent } from "./components";

// Modules
import { UsuariosRoutingModule } from "./usuarios-routing.module";
import { AngularCommonModule } from "@app/shared";

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
import { UsuariosFacade } from "./usuarios.facade";
import { UsuariosServices } from "./services";

@NgModule({
  declarations: [
    UsuariosAdminComponent,
    UsuarioDialogComponent,
    UsuariosTableComponent,
    DireccionFormComponent
  ],
  entryComponents: [UsuarioDialogComponent],
  imports: [
    UsuariosRoutingModule,
    AngularCommonModule,
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
  exports: [],
  providers: [UsuariosFacade, UsuariosServices]
})
export class UsuariosModule {}
