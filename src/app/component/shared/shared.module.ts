import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { GiftComponent } from './gift/gift.component';
import { PostCreateComponent } from './post-create/post-create.component';


@NgModule({
  declarations: [GiftComponent, PostCreateComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
