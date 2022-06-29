import {Component, OnInit} from '@angular/core';
import {GuestService} from '../../../service/guest.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {IMemberDto} from '../../../dto/IMemberDto';
import {MatSnackBarConfig} from '@angular/material/snack-bar/snack-bar-config';
import {MatSnackBarRef} from '@angular/material/snack-bar/snack-bar-ref';
import {SimpleSnackBar} from '@angular/material/snack-bar/simple-snack-bar';
import {GuestCreateComponent} from '../guest-create/guest-create.component';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css']
})
export class GuestListComponent implements OnInit {

  indexPagination: number = 0;

  totalPagination: number;

  name: string = '';

  members: IMemberDto[] = [];

  checkNull: boolean = false;

  constructor(private guestService: GuestService,
              private router: Router,
              private dialog: MatDialog,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.getAll(0);
  }

  /**
   Created by TuanPD
   Time: 17:00 29/06/2022
   Function: get all Member
   **/
  getAll(page = 0) {
    this.guestService.getAllMember(this.name.trim(), page).subscribe(data => {
      this.members = data['content'];
      this.indexPagination = 0;
      this.totalPagination = data['totalPages'] - 1;
      this.checkNull = false;
      this.snackBar.openFromComponent(GuestCreateComponent,  {
        duration: 2000
      })
    }, () => {
      this.members = [];
      this.checkNull = true;
      this.indexPagination = 0;
      this.snackBar.open('Không tìm thấy!', 'Error', {
        duration: 2000
      });
    });
  }

  nameSearch(target: any) {
    this.name = target.value;
  }
}
