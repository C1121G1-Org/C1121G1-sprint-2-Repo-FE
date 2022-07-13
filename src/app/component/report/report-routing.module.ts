import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GetFeedbackComponent} from './get-feedback/get-feedback.component';
import {GuestWarningComponent} from '../guest/guest-warning/guest-warning.component';
import {ReportCreateComponent} from './report-create/report-create.component';


const routes: Routes = [
  {path: 'post-report', component: GetFeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
