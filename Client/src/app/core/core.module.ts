// angular core and common modules
import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//  angular flex loyout
import { FlexLayoutModule } from '@angular/flex-layout';

//angular material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

// 3rd party libraries
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';

// components
import { HomeComponent } from '@core/view/home.component';
import { HeaderComponent, FooterComponent, SideNavComponent } from '@core/containers/index';
import { LoginFormComponent } from '@shared/containers/login-form/login-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';

// services
import { CoreFacade } from '@core/core-facade';
import { AuthInterceptorService, AothServices } from '@services/index';
import { CoreStore } from '@core/core.store';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent, SideNavComponent, LoginFormComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    LoadingBarHttpClientModule,
    LoadingBarModule,
    LoadingBarRouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
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
    MatButtonModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule ya fue importado');
    }
  }
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        CoreFacade,
        CoreStore,
        AothServices,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
      ]
    };
  }
}