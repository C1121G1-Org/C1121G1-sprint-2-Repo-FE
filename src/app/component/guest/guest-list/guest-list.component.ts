import {Component, OnInit} from '@angular/core';
import {GuestService} from '../../../service/guest.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {IMemberDto} from '../../../dto/IMemberDto';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css']
})
export class GuestListComponent implements OnInit {

  indexPagination: number = 0;

  totalPagination: number;

  totalMemberRecord: number;

  name: string = '';

  members: IMemberDto[] = [];

  checkNull: boolean = false;

  findForm = new FormGroup({
    name: new FormControl('')
  });

  constructor(private guestService: GuestService,
              private router: Router,
              private dialog: MatDialog,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.guestService.getAllMember(0).subscribe(data => {
      this.members = data['content'];
      this.totalPagination = data['totalPages'] - 1;
      this.totalMemberRecord = data['totalElements'];
    }, () => {
      this.members = [];
      this.checkNull = true;
      this.indexPagination = 0;
      this.snackBar.open('Không tìm thấy!', 'Error', {
        duration: 2000
      });
    });
  }

  // <<
  firstPage(name: string) {
    this.indexPagination = 0;
    this.guestService.getSearchMember(name.trim(), this.indexPagination).subscribe(data => {
      this.members = data['content'];
    });
  }

  // >
  nextPage(name: string) {
    this.indexPagination = this.indexPagination + 1;
    if (this.indexPagination > this.totalPagination) {
      this.indexPagination = this.indexPagination - 1;
    } else {
      this.guestService.getSearchMember(name.trim(), this.indexPagination).subscribe(data => {
        this.members = data['content'];
      });
    }
  }

  // <
  previousPage(name: string) {
    this.indexPagination = this.indexPagination - 1;
    if (this.indexPagination < 0) {
      this.indexPagination = 0;
    } else {
      this.guestService.getSearchMember(name.trim(), this.indexPagination).subscribe(data => {
        this.members = data['content'];
      });
    }
  }

  // >>
  lastPage(name: string) {
    this.indexPagination = this.totalPagination;
    this.guestService.getSearchMember(name.trim(), this.totalPagination).subscribe(data => {
      this.members = data['content'];
    });
  }

  findPage(name: string, page: number) {
    if (this.totalPagination >= (page - 1)) {
      this.indexPagination = page - 1;
      this.guestService.getSearchMember(name.trim(), this.indexPagination).subscribe(data => {
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

  searchMember(name: string, page = 0) {
    this.guestService.getSearchMember(name.trim(), page).subscribe(data => {
        this.members = data['content'];
        if(this.members.length == 0) {
          this.checkNull = true;
          this.snackBar.open('Tìm kiếm thất bại!', 'error', {
            duration: 2000
          });
        }
        this.indexPagination = 0;
        this.totalPagination = data['totalPages'] - 1;
        this.totalMemberRecord = data['totalElements'];
        this.checkNull = false;
        this.snackBar.open('Tìm kiếm thành công!', 'ok', {
          duration: 2000,
          verticalPosition: 'top'
        });
      }, () => {
        this.members = [];
        this.checkNull = true;
        this.indexPagination = 0;
        this.snackBar.open('Tìm kiếm thất bại!', 'error', {
          duration: 2000,
          verticalPosition: 'top'
        });
      });
  }

  getVip(){
    this.guestService.getVipMember(0).subscribe(data => {
      this.members = data['content'];
      this.totalPagination = data['totalPages'] - 1;
      this.totalMemberRecord = data['totalElements'];
    });
  }

  getNormal(){
    this.guestService.getNormalMember(0).subscribe(data => {
      this.members = data['content'];
      this.totalPagination = data['totalPages'] - 1;
      this.totalMemberRecord = data['totalElements'];
    });
  }
}
