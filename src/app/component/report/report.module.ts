import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { ReportCreateComponent } from './report-create/report-create.component';
import { ReportListComponent } from './report-list/report-list.component';
import { GetFeedbackComponent } from './get-feedback/get-feedback.component';


@NgModule({
  declarations: [ReportCreateComponent, ReportListComponent, GetFeedbackComponent],
  imports: [
    CommonModule,
    ReportRoutingModule
  ]
})
export class ReportModule { }
