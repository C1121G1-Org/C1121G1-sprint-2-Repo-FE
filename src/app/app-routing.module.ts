import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchByNameComponent} from './component/homepage/search-by-name/search-by-name.component';
import {GuestCreateComponent} from './component/guest/guest-create/guest-create.component';
import {GuestSurveyComponent} from './component/guest/guest-survey/guest-survey.component';
import {LoginComponent} from './component/security/login/login.component';
import {ProfileModule} from "./component/profile/profile.module";
import {MoneyChargeComponent} from "./component/wallet/money-charge/money-charge.component";
import {GuestTop100Component} from "./component/guest/guest-top100/guest-top100.component";
import {GuestChangeImageComponent} from "./component/guest/guest-change-image/guest-change-image.component";
import {CommentListComponent} from "./component/comment/comment-list/comment-list.component";

const routes: Routes = [
  {path: '', component: SearchByNameComponent},
  {path: 'login', component: LoginComponent},
  {path: 'guest/create', component: GuestCreateComponent},
  {path: 'guest/survey/:userName', component: GuestSurveyComponent},
  {path: 'wallet', component:MoneyChargeComponent},
  {path: 'top100', component: GuestTop100Component},
  {path: 'changeImg', component: GuestChangeImageComponent},
  {path: 'commentList', component: CommentListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ProfileModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
