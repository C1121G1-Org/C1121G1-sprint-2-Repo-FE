import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { GuestCreateComponent } from './guest-create/guest-create.component';
import { GuestSurveyComponent } from './guest-survey/guest-survey.component';
import { GuestTop100Component } from './guest-top100/guest-top100.component';
import { GuestSearchComponent } from './guest-search/guest-search.component';
import { GuestListComponent } from './guest-list/guest-list.component';
import { GuestWarningComponent } from './guest-warning/guest-warning.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [GuestCreateComponent, GuestSurveyComponent, GuestTop100Component, GuestSearchComponent, GuestListComponent, GuestWarningComponent],
    imports: [
        CommonModule,
        GuestRoutingModule,
        ReactiveFormsModule
    ]
})
export class GuestModule { }
