import { Component, OnInit } from '@angular/core';
import {Report} from '../../../models/report';
import {ReportService} from '../../../service/report.service';

@Component({
  selector: 'app-report-create',
  templateUrl: './report-create.component.html',
  styleUrls: ['./report-create.component.css']
})
export class ReportCreateComponent implements OnInit {
  reportList: Report[] = [];
  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.reportService.getAll().subscribe( data => {
      this.reportList = data;
      console.log(data);
    });
  }
}
