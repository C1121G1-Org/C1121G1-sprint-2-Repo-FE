import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostListComponent} from "./post-list/post-list.component";

import {ReactiveFormsModule} from "@angular/forms";
import {CKEditorModule} from "ckeditor4-angular";


const routes: Routes = [
  {path:'postList', component: PostListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule, CKEditorModule],

    exports: [RouterModule]
})
export class PostRoutingModule { }
