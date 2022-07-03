import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { ReportCreateComponent } from './report-create/report-create.component';
import { ReportListComponent } from './report-list/report-list.component';
import { PostReportListComponent } from './post-report-list/post-report-list.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ReportCreateComponent, ReportListComponent, PostReportListComponent],
    imports: [
        CommonModule,
        ReportRoutingModule,
        ReactiveFormsModule
    ]
})
export class ReportModule { }
