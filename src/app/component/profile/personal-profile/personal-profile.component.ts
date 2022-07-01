import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {GuestFriendService} from "../../../service/guest-friend.service";
import {Guest} from "../model/guest";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {TokenStorageService} from "../../../service/security/token-storage.service";
import {Post} from "../model/post";

@Component({
  selector: 'app-personal-profile',
  templateUrl: './personal-profile.component.html',
  styleUrls: ['./personal-profile.component.css']
})
export class PersonalProfileComponent implements OnInit {

  @ViewChild("errorModalBtn") openErrModal: ElementRef;
  @ViewChild("errorModalCloseBtn") closeErrModal: ElementRef;

  guest: Guest = {};
  posts: Post[] = [];

  constructor(private guestFriendService: GuestFriendService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private tokenStorageService: TokenStorageService) {

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      let id = +param.get('id');
      this.guestFriendService.getGuest(id).subscribe(data => {
        this.guest = data;
        this.guestFriendService.findAllGuestPost(this.guest.id).subscribe(data => {
          this.posts = data;
        })
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
