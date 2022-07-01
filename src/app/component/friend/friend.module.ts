import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FriendRoutingModule } from './friend-routing.module';
import { FriendListComponent } from './friend-list/friend-list.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [FriendListComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    FriendRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FriendModule { }
