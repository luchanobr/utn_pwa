import { NgModule } from "@angular/core";
import { LoginRouringModule } from "./login-routing.module";

import { AuthServices } from "@app/core/services";
import { AngularCommonModule } from "@app/shared";
import { LoginHomeComponent } from "./view/login-home.component";

@NgModule({
  imports: [LoginRouringModule, AngularCommonModule],
  exports: [],
  declarations: [LoginHomeComponent],
  providers: [AuthServices]
})
export class LoginModule {}
