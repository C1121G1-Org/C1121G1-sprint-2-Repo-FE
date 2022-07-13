import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import {ReportService} from '../../../service/report.service';
import {IMemberDto} from '../../../dto/IMemberDto';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-guest-warning',
  templateUrl: './guest-warning.component.html',
  styleUrls: ['./guest-warning.component.css']
})
export class GuestWarningComponent implements OnInit {
  postReportList: IMemberDto[];
  postId: number;
  id: any;
  dateReport: any;
  reportName: any;
  reportedPeopleName: any;
  guestName: any;

  constructor(public dialogRef: MatDialogRef<GuestWarningComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private reportService: ReportService,
              private snackBar: MatSnackBar,
              private router: Router) {


  }


  ngOnInit(): void {
    this.postReportList = this.data.data1;
    this.guestName = this.data.data1[0].guestName;
    // this.id = this.data.data1.idTicket;
  }


  onNoClick() {
    this.dialogRef.close();
  }


}
