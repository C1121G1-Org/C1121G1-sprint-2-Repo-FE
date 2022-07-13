import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GuestListComponent} from './guest-list/guest-list.component';
import {GuestSearchComponent} from './guest-search/guest-search.component';
import {GuestChangeImageComponent} from './guest-change-image/guest-change-image.component';
import {GuestCreateComponent} from './guest-create/guest-create.component';


const routes: Routes = [
  {path: 'searchList', component: GuestSearchComponent},
  {path: 'guest-member', component: GuestListComponent},
  {path: 'change-image', component: GuestChangeImageComponent},
  {path: 'singUp', component: GuestCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule {
}
