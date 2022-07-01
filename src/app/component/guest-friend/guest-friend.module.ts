import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestFriendRoutingModule } from './guest-friend-routing.module';
import { FriendRequestsComponent } from './friend-requests/friend-requests.component';
import { FriendSuggestionsComponent } from './friend-suggestions/friend-suggestions.component';


@NgModule({
  declarations: [FriendRequestsComponent, FriendSuggestionsComponent],
  imports: [
    CommonModule,
    GuestFriendRoutingModule
  ]
})
export class GuestFriendModule { }
