import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { PersonalProfileComponent } from './personal-profile/personal-profile.component';
import { FriendProfileComponent } from './friend-profile/friend-profile.component';



@NgModule({
  declarations: [PersonalProfileComponent, FriendProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
