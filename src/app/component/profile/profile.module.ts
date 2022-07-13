import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { PersonalProfileComponent } from './personal-profile/personal-profile.component';
import { FriendProfileComponent } from './friend-profile/friend-profile.component';
import {CKEditorModule} from 'ckeditor4-angular';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [PersonalProfileComponent, FriendProfileComponent],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        CKEditorModule,
        SharedModule
    ]
})
export class ProfileModule { }
