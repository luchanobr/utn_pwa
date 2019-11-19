import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginFormComponent } from "./containers";

import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatDividerModule } from "@angular/material/divider";
import { MatBadgeModule } from "@angular/material/badge";
import { MatTooltipModule } from "@angular/material/tooltip";
import { ProductoCardComponent } from "./containers/producto-card/producto-card.component";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [LoginFormComponent, ProductoCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatDividerModule,
    MatBadgeModule,
    MatTooltipModule,
    MatIconModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginFormComponent,
    ProductoCardComponent,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatDividerModule,
    MatBadgeModule,
    MatTooltipModule,
    MatIconModule
  ]
})
export class AngularCommonModule {}
