import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FriendListComponent} from "./friend-list/friend-list.component";


const routes: Routes = [{
  path: 'friend/list', component: FriendListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FriendRoutingModule { }
