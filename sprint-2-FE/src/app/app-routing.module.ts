import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchByNameComponent} from "./component/homepage/search-by-name/search-by-name.component";


const routes: Routes = [
  {path: '', component: SearchByNameComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
