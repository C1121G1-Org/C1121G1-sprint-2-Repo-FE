import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { GuestCreateComponent } from './guest-create/guest-create.component';
import { GuestSurveyComponent } from './guest-survey/guest-survey.component';
import { GuestTop100Component } from './guest-top100/guest-top100.component';
import { GuestSearchComponent } from './guest-search/guest-search.component';
import { GuestListComponent } from './guest-list/guest-list.component';
import { GuestWarningComponent } from './guest-warning/guest-warning.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {HttpClientModule} from '@angular/common/http';
import {GuestChangeImageComponent} from './guest-change-image/guest-change-image.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {NgxSpinnerModule} from 'ngx-spinner';

@NgModule({
  declarations: [GuestCreateComponent, GuestChangeImageComponent, GuestSurveyComponent, GuestTop100Component, GuestSearchComponent, GuestListComponent, GuestWarningComponent],

  imports: [
    CommonModule,
    GuestRoutingModule,
    FormsModule,
    MatSnackBarModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    MatProgressSpinnerModule,
    NgxSpinnerModule
  ]
})
export class GuestModule { }
