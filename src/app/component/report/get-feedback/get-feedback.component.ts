import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ReportService} from '../../../service/report.service';
import {Router} from '@angular/router';
import {IMemberDto} from '../../../dto/IMemberDto';
import {MatDialog} from '@angular/material/dialog';
import {GuestWarningComponent} from '../../guest/guest-warning/guest-warning.component';
import {MatSnackBar} from '@angular/material/snack-bar';

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
  pageable = 0;
  searchForm: FormGroup;
  message: boolean;

  indexPagination: number = 0;

  totalPagination: number;

  totalMemberRecord: number;

  name: string = '';

  members: IMemberDto[] = [];

  checkNull: boolean = false;

  findForm = new FormGroup({
    name: new FormControl('')
  });
  constructor(private reportService: ReportService,
              private dialog: MatDialog,
              private snackBar: MatSnackBar) {
    this.searchForm = new FormGroup({
      typeSearch: new FormControl(''),
      inputSearch: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.reportService.getAllPostReport(0).subscribe(data => {
      this.postReportList = data.content;
      this.totalPagination = data['totalPages'] - 1;
      this.totalMemberRecord = data['totalElements'];
    });
  }

  Search(guestName: string, reportName: string, dateReport: string, reportPeopleName: string, pageable: number) {

    this.reportService.getSearchPostReport(guestName, reportName, dateReport, reportPeopleName, pageable).subscribe(data => {
      this.postReportList = data.content;
    });
  }



  warning(id) {
    this.reportService.getMemberById(id).subscribe(data => {
      console.log(this.reportService.getMemberById(id));
      const dialogRef = this.dialog.open(GuestWarningComponent, {
        width: '60%',
        height: 'auto',
        data: {data1: data}
      });
      dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit();
      });
    });
  };


  // <<
  firstPage(guestName: string, reportName: string, dateReport: string, reportPeopleName: string) {
    this.indexPagination = 0;
    this.reportService.getSearchPostReport(guestName.trim(), reportName.trim(), dateReport.trim(), reportPeopleName.trim(), this.indexPagination).subscribe(data => {
      this.members = data['content'];
    });
  }

  // >
  nextPage(guestName: string, reportName: string, dateReport: string, reportPeopleName: string) {
    this.indexPagination = this.indexPagination + 1;
    if (this.indexPagination > this.totalPagination) {
      this.indexPagination = this.indexPagination - 1;
    } else {
      this.reportService.getSearchPostReport(guestName.trim(), reportName.trim(), dateReport.trim(), reportPeopleName.trim(), this.indexPagination).subscribe(data => {
        this.members = data['content'];
      });
    }
  }

  // <
  previousPage(guestName: string, reportName: string, dateReport: string, reportPeopleName: string) {
    this.indexPagination = this.indexPagination - 1;
    if (this.indexPagination < 0) {
      this.indexPagination = 0;
    } else {
      this.reportService.getSearchPostReport(guestName.trim(), reportName.trim(), dateReport.trim(), reportPeopleName.trim(), this.indexPagination).subscribe(data => {
        this.members = data['content'];
      });
    }
  }

  // >>
  lastPage(guestName: string, reportName: string, dateReport: string, reportPeopleName: string) {
    this.indexPagination = this.totalPagination;
    this.reportService.getSearchPostReport(guestName.trim(), reportName.trim(), dateReport.trim(), reportPeopleName.trim(), this.totalPagination).subscribe(data => {
      this.members = data['content'];
    });
  }

  findPage(guestName: string, reportName: string, dateReport: string, reportPeopleName: string, page: number) {
    if (this.totalPagination >= (page - 1)) {
      this.indexPagination = page - 1;
      this.reportService.getSearchPostReport(guestName.trim(), reportName.trim(), dateReport.trim(), reportPeopleName.trim(), this.indexPagination).subscribe(data => {
        this.members = data['content'];
      });
    } else {
      this.members = [];
      this.checkNull = true;
      this.indexPagination = 0;
      this.snackBar.open('Không có trang phù hợp!', '', {
        duration: 2000,
        verticalPosition: 'top'
      });
    }
  }


}
