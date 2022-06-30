import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GuestFriendService} from "../../../service/guest-friend.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Friend} from "../model/friend";
import {Guest} from "../model/guest";
import {GuestFriend} from "../model/guest-friend";
import {Post} from "../model/post";

@Component({
  selector: 'app-friend-profile',
  templateUrl: './friend-profile.component.html',
  styleUrls: ['./friend-profile.component.css']
})
export class FriendProfileComponent implements OnInit {

  @ViewChild("errorModalBtn") openErrModal: ElementRef;
  @ViewChild("errorModalCloseBtn") closeErrModal: ElementRef;

  @ViewChild("errorBtn") openErr: ElementRef;
  @ViewChild("errorCloseBtn") closeErr: ElementRef;

  @ViewChild("successModalOpen") successModalOpen: ElementRef;
  @ViewChild("successModalClose") successModalClose: ElementRef;

  guest: Guest = {id: 2};
  friend: Friend = {};
  guestFriend: GuestFriend;
  posts: Post[] = [];

  constructor(private guestFriendService: GuestFriendService, private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      let id = +param.get('id');
      this.guestFriendService.getFriend(id).subscribe(data => {
        this.friend = data;
        this.guestFriendService.findAllGuestPost(this.friend.id).subscribe(data => {
          this.posts = data;
          this.guestFriendService.getGuest(this.guest.id).subscribe(data => {
            this.guest = data;
            this.guestFriendService.findGuestFriendByGuestIdAndFriendId(this.guest.id, this.friend.id).subscribe(data => {
              this.guestFriend = data;
            })
          })
        }, err => {
          console.log(err);
        });

      }, err => {
        this.openErrModal.nativeElement.click();
      })
    })

  }

  reload() {
    this.closeErrModal.nativeElement.click();
    this.router.navigate(['/']);
  }

  addFriend() {
    if (this.guest.id != this.friend.id) {
      let guestFriendDto: GuestFriend = {
        guestDto: this.guest,
        friendDto: this.friend
      }
      this.guestFriendService.addFriend(guestFriendDto).subscribe(() => {
        this.successModalOpen.nativeElement.click();
      }, err => {
        this.openErrModal.nativeElement.click();
      });
    }
  }

  // deleteFriend() {
  //   this.guestFriendService.deleteFriend(this.guestFriend.id).subscribe(() => {
  //     this.guestFriend = null;
  //     this.deleteModalClose.nativeElement.click();
  //   }, error => {
  //     this.openErr.nativeElement.click();
  //   });
  // }
  //
  // openDeleteModal() {
  //   this.deleteModalOpen.nativeElement.click();
  // }
  closeModalSuccess() {
    this.successModalClose.nativeElement.click();
    window.location.reload();
  }
}
