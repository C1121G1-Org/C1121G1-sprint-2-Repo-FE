import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FriendRoutingModule } from './friend-routing.module';
import { FriendListComponent } from './friend-list/friend-list.component';


@NgModule({
  declarations: [FriendListComponent],
  imports: [
    CommonModule,
    FriendRoutingModule
  ]
})
export class FriendModule { }
