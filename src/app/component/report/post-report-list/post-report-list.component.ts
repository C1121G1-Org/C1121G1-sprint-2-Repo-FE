import {Component, OnInit} from '@angular/core';
import {PostReportService} from '../../../service/post-report.service';
import {Observable} from 'rxjs';
import {PostReportDto} from '../../../dto/post-report-dto';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-report-list',
  templateUrl: './post-report-list.component.html',
  styleUrls: ['./post-report-list.component.css']
})
export class PostReportListComponent implements OnInit {
  postReportList: PostReportDto[];
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
  constructor(private postReportService: PostReportService,
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
    this.postReportService.getAllPostReport(guestName, reportName, dateReport, reportPeopleName, pageable).subscribe(data => {
      this.postReportList = data.content;
      // this.totalPagination = data.totalPages - 1;
      // this.totalPostReportRecord = data.totalElements;
    });
  }
  // previous() {
  //   if (this.pageable > 0) {
  //     this.postReportService.getAll( this.guestName, this.reportName, this.dateReport, this.reportPeopleName , this.pageable - 1).subscribe(
  //       data => {
  //         this.postReportList = data.content;
  //         this.pageable = data.number;
  //         this.firsts = data.first;
  //         this.last = (data.pageable.offset + data.pageable.pageSize) >= data.totalElements;
  //       }, err => {
  //         console.log(err);
  //       }
  //     );
  //   }
  // }

  search() {
    const input = this.searchForm.get('inputSearch').value;
    const type = this.searchForm.get('typeSearch').value;
    if (type === 'guestName' && input.trim() !== '') {
      // tslint:disable-next-line:max-line-length
      this.postReportService.getAllPostReport(this.guestName = input.trim(), this.reportName = '', this.dateReport = '', this.reportPeopleName = '', this.pageable).subscribe(
        (data: any) => {
          this.message = false;
          this.postReportList = data.content;
          this.pageable = data.number;
          this.totalPostReport = data.totalPostReport;
          this.first = data.first;
          this.last = (data.pageable.offset + data.pageable.pageSize) >= data.totalElements;
        }, err => {
          this.message = true;
          this.postReportList = null;
          this.pageable = 0;
          this.totalPostReport = 0;
          console.log(err);
        }
      );
    }else if (type === 'reportName' && input.trim() !== '') {
      // tslint:disable-next-line:max-line-length
      this.postReportService.getAllPostReport(this.guestName = '', this.reportName = input.trim(), this.dateReport = '', this.reportPeopleName = '', this.pageable).subscribe(
        (data: any) => {
          this.message = false;
          this.postReportList = data.content;
          this.pageable = data.number;
          this.totalPostReport = data.totalPostReport;
          this.first = data.first;
          this.last = (data.pageable.offset + data.pageable.pageSize) >= data.totalElements;
        }, err => {
          this.message = true;
          this.postReportList = null;
          this.pageable = 0;
          this.totalPostReport = 0;
          console.log(err);
        }
      );
    }else if (type === 'dateReport' && input.trim() !== '') {
      // tslint:disable-next-line:max-line-length
      this.postReportService.getAllPostReport(this.guestName = '', this.reportName = '', this.dateReport = input.trim(), this.reportPeopleName = '', this.pageable).subscribe(
        (data: any) => {
          this.message = false;
          this.postReportList = data.content;
          this.pageable = data.number;
          this.totalPostReport = data.totalPostReport;
          this.first = data.first;
          this.last = (data.pageable.offset + data.pageable.pageSize) >= data.totalElements;
        }, err => {
          this.message = true;
          this.postReportList = null;
          this.pageable = 0;
          this.totalPostReport = 0;
          console.log(err);
        }
      );
    }else if (type === 'reportPeopleName' && input.trim() !== '') {
      // tslint:disable-next-line:max-line-length
      this.postReportService.getAllPostReport(this.guestName = '', this.reportName = '', this.dateReport = '', this.reportPeopleName = input.trim(), this.pageable).subscribe(
        (data: any) => {
          this.message = false;
          this.postReportList = data.content;
          this.pageable = data.number;
          this.totalPostReport = data.totalPostReport;
          this.first = data.first;
          this.last = (data.pageable.offset + data.pageable.pageSize) >= data.totalElements;
        }, err => {
          this.message = true;
          this.postReportList = null;
          this.pageable = 0;
          this.totalPostReport = 0;
          console.log(err);
        }
      );
    }
  }

  clearAll() {
    this.searchForm.reset();
    this.guestName = '';
    this.reportName = '';
    this.dateReport = '';
    this.reportPeopleName = '';
    this.ngOnInit();
  }
}
