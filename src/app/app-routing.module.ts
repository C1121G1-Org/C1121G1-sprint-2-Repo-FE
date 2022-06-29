import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchByNameComponent} from './component/homepage/search-by-name/search-by-name.component';
import {GuestCreateComponent} from './component/guest/guest-create/guest-create.component';
import {GuestSurveyComponent} from './component/guest/guest-survey/guest-survey.component';
import {LoginComponent} from './component/security/login/login.component';
import {ProfileModule} from "./component/profile/profile.module";

const routes: Routes = [
  {path: '', component: SearchByNameComponent},
  {path: 'login', component: LoginComponent},
  {path: 'guest/create', component: GuestCreateComponent},
  {path: 'guest/survey/:userName', component: GuestSurveyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
