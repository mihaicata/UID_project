import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginPageSmartComponent} from './containers/login-page-smart/login-page-smart.component';
import {HomepageSmartComponent} from './containers/homepage-smart/homepage-smart.component';
import {StudentPageSmartComponent} from './containers/student-page-smart/student-page-smart.component';
import {SecretaryPageSmartComponent} from './containers/secretary-page-smart/secretary-page-smart.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomepageSmartComponent},
  {path: 'login', component: LoginPageSmartComponent},
  {path: 'Student', component: StudentPageSmartComponent},
  {path: 'Secretary', component: SecretaryPageSmartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
