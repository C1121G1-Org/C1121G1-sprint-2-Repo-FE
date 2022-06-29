import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchByNameComponent} from "./component/homepage/search-by-name/search-by-name.component";
import {MoneyChargeComponent} from "./component/wallet/money-charge/money-charge.component";
import {GuestTop100Component} from "./component/guest/guest-top100/guest-top100.component";


const routes: Routes = [
  {path: '', component: SearchByNameComponent},
  {path: 'wallet', component:MoneyChargeComponent},
  {path: 'top100', component: GuestTop100Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
