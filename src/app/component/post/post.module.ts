import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostListComponent } from './post-list/post-list.component';
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {NgxSpinnerModule} from "ngx-spinner";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CKEditorModule} from "ckeditor4-angular";


@NgModule({
  declarations: [PostListComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule
  ]
})
export class PostModule { }
