import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@core/view/home.component';

const routes: Routes = [
  {
    path: 'Home',
    component: HomeComponent,
    data: {}
  },
  {
    path: '**',
    redirectTo: 'Home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
