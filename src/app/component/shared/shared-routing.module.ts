import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostCreateComponent} from './post-create/post-create.component';


const routes: Routes = [
  {path:'post/create', component: PostCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
