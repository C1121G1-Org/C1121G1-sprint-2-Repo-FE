import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GuestFriendService} from "../../../service/guest-friend.service";
import {Guest} from "../model/guest";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-personal-profile',
  templateUrl: './personal-profile.component.html',
  styleUrls: ['./personal-profile.component.css']
})
export class PersonalProfileComponent implements OnInit {

  @ViewChild("errorModalBtn") openErrModal: ElementRef;
  @ViewChild("errorModalCloseBtn") closeErrModal: ElementRef;
  guest: Guest = {};

  constructor(private guestFriendService: GuestFriendService, private activatedRoute: ActivatedRoute,private router:Router) {
    // this.guest = this.headerComponent.sendGuestFromHeader();
    // console.log(this.guest);
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      let id = +param.get('id');
      this.guestFriendService.getGuest(id).subscribe(data => {
        this.guest = data;
      }, err => {
        this.openErrModal.nativeElement.click();
      })
    })
  }

  reload() {
    this.closeErrModal.nativeElement.click();
    this.router.navigate(['/']);
  }

}
