import {Component, OnInit} from '@angular/core';
import {GuestService} from '../../../service/guest.service';
import {GuestInterfaceDto} from '../../../dto/GuestInterfaceDto';



@Component({
  selector: 'app-guest-search',
  templateUrl: './guest-search.component.html',
  styleUrls: ['./guest-search.component.css']
})
export class GuestSearchComponent implements OnInit {
  guests: GuestInterfaceDto[] = [];
  message: boolean;
  page: any;
  totalPages = 0;
  pageSize: 0;
  firsts: boolean;
  last: boolean;
  flag = false;
  name: any = '';
  hidden = true;
  a = 0;

  checkNull: boolean = false;

  public labels: any = {
    previousLabel: 'Trước',
    nextLabel: 'Sau',
  };

  constructor(private guestService: GuestService) {
  }

  ngOnInit(): void {
    if (this.a == 0 ){
      this.checkNull = true;
    }else {
      this.checkNull = false ;
    }
  }

  search(name: string, gender: string, career: string, address: string, yearOfBirth: string, favorite: string) {
    console.log(gender);
    return this.guestService.getAll(name.trim(), gender, career.trim(), address.trim(), yearOfBirth.trim(), favorite.trim())
      .subscribe(data => {
        this.guests = data;
        console.log(this.guests);
      });

  }


  searchName(name: string) {
    this.page = 0;
    name = name.trim();
    this.guestService.getAllName(name, this.page).subscribe(data => {
      this.guests = data.content;
      this.totalPages = data.totalPages;
      this.page = data.number;
      if (this.guests.length < 1) {
        this.message = false;
      }
    }, err => {
      this.message = true;
    });
  }

  chose() {
    this.hidden = !this.hidden;
  }

  previous() {
    if (this.page > 0) {
      // @ts-ignore
      this.guestService.getAll('', this.page - 1).subscribe(
        data => {
          this.guests = data.content;
          this.page = data.number;
          this.firsts = data.first;
          this.last = (data.pageable.offset + data.pageable.pageSize) >= data.totalElements;
        }, err => {
          console.log(err);
        }
      );
    }
  }

  next() {
    if (this.page < this.totalPages - 1) {
      // @ts-ignore
      this.guestService.getAll('', this.page + 1).subscribe(
        data => {
          this.guests = data.content;
          this.page = data.number;
          this.firsts = data.first;
          this.last = (data.pageable.offset + data.pageable.pageSize) >= data.totalElements;
        }, err => {
          console.log(err);
        }
      );
    }
  }



}
