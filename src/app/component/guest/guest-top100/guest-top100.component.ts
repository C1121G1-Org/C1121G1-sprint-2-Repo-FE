import { Component, OnInit } from '@angular/core';
import {Guest100DTO} from "../../../dto/guest100DTO";
import {ListGuest100DTO} from "../../../dto/listGuest100DTO";
import {GuestService} from "../../../service/guest.service";

@Component({
  selector: 'app-guest-top100',
  templateUrl: './guest-top100.component.html',
  styleUrls: ['./guest-top100.component.css']
})
export class GuestTop100Component implements OnInit {
  indexPagination: number = 0;
  totalPagination: number;
  guest100 : Guest100DTO[] = [];
  totalGuestRecord: number;
  listGuest100 : ListGuest100DTO[]  = [];
  checkNullData: boolean = false;
  pageNumber: number;
  constructor(private guestService: GuestService) { }

  ngOnInit(): void {
    this.viewTop100();
  }

  private viewTop100() {
    this.guestService.viewTop100(this.indexPagination).subscribe(data =>{
      this.guest100 = data['content'];
      this.totalPagination = data['totalPages']
      this.pageNumber= data.pageable.pageNumber;
      console.log(this.pageNumber)
    })
  }
  nextPage(){

    this.indexPagination = this.indexPagination +1;
    if(this.indexPagination > this.totalPagination){
      this.indexPagination = this.indexPagination-1;
    }
    this.viewTop100()
  }
  previousPage(){
    this.indexPagination = this.indexPagination -1;
    if(this.indexPagination <= 0 ){
      this.indexPagination = 0;
    }
      this.viewTop100()
  }

}
