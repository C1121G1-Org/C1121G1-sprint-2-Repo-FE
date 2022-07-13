import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { GiftComponent } from './gift/gift.component';
import { PostCreateComponent } from './post-create/post-create.component';
import {CKEditorModule} from "ckeditor4-angular";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [GiftComponent, PostCreateComponent],
  exports: [
    GiftComponent,
    PostCreateComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    HttpClientModule,
    FormsModule,
    CKEditorModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
