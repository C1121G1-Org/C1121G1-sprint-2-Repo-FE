import { Component, OnInit } from '@angular/core';
import {FriendDto} from "../../../dto/friend-dto";
import {FriendService} from "../../../service/friend.service";
import {Friend} from "../../../models/friend";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {
  friends : FriendDto[] = [];
  message: boolean;
  page: any;
  totalPages = 0;
  pageSize: 0;
  firsts: boolean;
  last: boolean;
  name: any = '';
  check: boolean;
  deleteFriend: Friend;

  constructor(private friendService: FriendService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.message = false;
    this.friendService.getAll('', this.page).subscribe(data => {
      // @ts-ignore
      this.friends = data.content;
      this.page = data.number;
      this.totalPages = data.totalPages;
      this.pageSize  = data.pageable.pageSize;
      this.firsts = data.first;
      this.last = (data.pageable.offset + data.pageable.pageSize) >= data.totalElements;
    }, error => {
      this.message = true;
    });
  }

  /*
      Created by HuyNH
      Time: 09:40 28/06/2022
      Function: pagination previous
   */

  previous() {
    if (this.page > 0) {
      this.friendService.getAll(this.name, this.page - 1).subscribe(
        data => {
          this.friends = data.content;
          this.page = data.number;
          this.firsts = data.first;
          this.last = (data.pageable.offset + data.pageable.pageSize) >= data.totalElements;
        }, err => {
          console.log(err);
        }
      );
    }
  }

  /*
     Created by HuyNH
      Time: 09:40 28/06/2022
     Function: pagination next
  */


  next() {
    if (this.page < this.totalPages - 1) {
      this.friendService.getAll(this.name, this.page + 1).subscribe(
        data => {
          this.friends = data.content;
          this.page = data.number;
          this.firsts = data.first;
          this.last = (data.pageable.offset + data.pageable.pageSize) >= data.totalElements;
        }, err => {
          console.log(err);
        }
      );
    }
  }

  onOpenDeleteModal(a: Friend) {
    this.deleteFriend = a;
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#exampleModal');
    container.appendChild(button);
    this.check = true;
    button.click();
  }

  delete(event) {
    this.friendService.deleteFriend(this.deleteFriend).subscribe(() => {
      event.click();
      this.ngOnInit();
    }, (error: HttpErrorResponse) => {
      alert('error');
    });
  }

  search(name: string) {
    this.page = 0;
    name = name.trim();
    this.friendService.getAll(name, this.page).subscribe(data => {
      this.friends = data.content;
      this.totalPages = data.totalPages;
      this.page = data.number;
      if (this.friends.length < 1) {
        this.message = false;
      }
    }, err => {
      this.message = true;
    });
  }
}
