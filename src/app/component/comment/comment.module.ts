import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import { CommentCreateComponent } from './comment-create/comment-create.component';
import { CommentListComponent } from './comment-list/comment-list.component';


@NgModule({
  declarations: [CommentCreateComponent, CommentListComponent],
  imports: [
    CommonModule,
    CommentRoutingModule
  ]
})
export class CommentModule { }
