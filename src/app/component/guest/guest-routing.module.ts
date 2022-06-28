import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GuestListComponent} from './guest-list/guest-list.component';


const routes: Routes = [
  {path: 'guest-member', component: GuestListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule {
}
