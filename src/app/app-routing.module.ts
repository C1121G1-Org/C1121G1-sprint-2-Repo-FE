import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchByNameComponent} from './component/homepage/search-by-name/search-by-name.component';
import {LoginComponent} from './component/security/login/login.component';
import {GuestCreateComponent} from './component/guest/guest-create/guest-create.component';
import {GuestSurveyComponent} from './component/guest/guest-survey/guest-survey.component';
import {GuestTop100Component} from './component/guest/guest-top100/guest-top100.component';

const routes: Routes = [
  {path: '', component: SearchByNameComponent},
  {path: 'login', component: LoginComponent},
  {path: 'guest/create', component: GuestCreateComponent},
  {path: 'guest/survey/:userName', component: GuestSurveyComponent},
  {path: 'top100', component: GuestTop100Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
