import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ReportService} from '../../../service/report.service';
import {Router} from '@angular/router';
import {IMemberDto} from '../../../dto/IMemberDto';

@Component({
  selector: 'app-get-feedback',
  templateUrl: './get-feedback.component.html',
  styleUrls: ['./get-feedback.component.css']
})
export class GetFeedbackComponent implements OnInit {
  postReportList: IMemberDto[];
  checkSearch: any;
  formSearch: FormGroup;
  searchValue: any;
  totalPostReport = 0 ;
  first = false;
  last = false;
  flag = false;
  guestName = '';
  reportName = '';
  dateReport = '';
  reportPeopleName = '';
  pageable = 0;
  searchForm: FormGroup;
  message: boolean;
  constructor(private reportService: ReportService,
              private router: Router) {
    this.searchForm = new FormGroup({
      typeSearch: new FormControl(''),
      inputSearch: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.getAll('', '', '', '', 0);
  }

  getAll(guestName: string, reportName: string, dateReport: string, reportPeopleName: string, pageable: number) {
    this.reportService.getAllPostReport(guestName, reportName, dateReport, reportPeopleName, pageable).subscribe(data => {
      this.postReportList = data.content;
      // this.totalPagination = data.totalPages - 1;
      // this.totalPostReportRecord = data.totalElements;
    });
  }

}
