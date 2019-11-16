import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginHomeComponent } from "./view/login-home.component";

const routes: Routes = [
  {
    path: "",
    component: LoginHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: []
})
export class LoginRouringModule {}
