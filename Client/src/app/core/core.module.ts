// angular core and common modules
import { NgModule, Optional, SkipSelf, ModuleWithProviders } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

// modules
import { AngularCommonModule } from "@shared/index";

//angular material
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSnackBarModule } from "@angular/material/snack-bar";

// 3rd party libraries
import { LoadingBarHttpClientModule } from "@ngx-loading-bar/http-client";
import { LoadingBarRouterModule } from "@ngx-loading-bar/router";
import { LoadingBarModule } from "@ngx-loading-bar/core";

// components
import { HomeComponent } from "@core/view/home.component";
import { HeaderComponent, FooterComponent, SideNavComponent } from "@core/containers/index";
import { LoginFormComponent } from "@shared/containers/login-form/login-form.component";

// services
import { CoreFacade } from "@app/core/core.facade";
import { AuthInterceptorService, AuthServices } from "@services";
import { CoreStore } from "@core/core.store";
import { AuthGuard } from "./guards/auth.guard";

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    LoginFormComponent
  ],
  imports: [
    AngularCommonModule,
    LoadingBarHttpClientModule,
    LoadingBarModule,
    LoadingBarRouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  exports: [
    LoadingBarHttpClientModule,
    LoadingBarModule,
    LoadingBarRouterModule,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSnackBarModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error("CoreModule ya fue importado");
    }
  }
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        CoreFacade,
        CoreStore,
        AuthServices,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
        AuthGuard
      ]
    };
  }
}
