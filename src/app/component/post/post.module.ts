import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostListComponent } from './post-list/post-list.component';
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {NgxSpinnerModule} from "ngx-spinner";
import {CKEditorModule} from "ckeditor4-angular";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [PostListComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    CKEditorModule,
    ReactiveFormsModule
  ]
})
export class PostModule { }
