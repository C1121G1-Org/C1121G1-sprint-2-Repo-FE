import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostReportListComponent} from './post-report-list/post-report-list.component';
import {ReportCreateComponent} from './report-create/report-create.component';


const routes: Routes = [
  {
    path: 'post-report',
    component: PostReportListComponent
  }, {
  path: 'report',
    component: ReportCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
