import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonalProfileComponent} from "./personal-profile/personal-profile.component";
import {FriendProfileComponent} from "./friend-profile/friend-profile.component";


const routes: Routes = [
  {path: 'profile-personal/:id', component: PersonalProfileComponent},
  {path: 'profile-friend/:id', component: FriendProfileComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
