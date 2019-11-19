import { NgModule } from "@angular/core";
import { ProductosRoutingModule } from "./productos-routing.module";
//servicios
import { ProductosStore } from "./productos.store";
import { ProductosFacade } from "./productos.facade";
import { ModalFacade } from "./modalFacade";
import { CategoriaService } from "@services";

//componentes
import { ProductosAdminComponent } from "./view/productos-admin.component";
import { ProductosTableComponent, ProductoModalComponent } from "./containers";

//modulos
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

@NgModule({
  declarations: [
    ProductosAdminComponent,
    ProductosTableComponent,
    ProductoModalComponent
  ],
  entryComponents: [ProductoModalComponent],
  imports: [
    ProductosRoutingModule,
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
  providers: [ProductosStore, ProductosFacade, ModalFacade, CategoriaService]
})
export class ProductosModule {}
