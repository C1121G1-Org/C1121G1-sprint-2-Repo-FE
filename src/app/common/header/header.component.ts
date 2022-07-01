import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TokenStorageService} from "../../service/security/token-storage.service";
import {ShareService} from "../../service/security/share.service";
import {Router} from "@angular/router";

import {GuestFriendService} from "../../service/guest-friend.service";
import {Guest} from "../../component/profile/model/guest";
import {Friend} from "../../component/profile/model/friend";
import {GuestFriend} from "../../component/profile/model/guest-friend";
import {GuestDto} from "../../dto/guest-dto";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  /*
    Created by ChienLV
    Date: 15:00 29/06/2022
    Desc: friendRequests: list lời mời kết bạn; friendSuggestions: list gợi ý kết bạn
          flagRequest: biến cờ để hiện thông báo khi list lời mời kết bạn rỗng;
          flagSuggestion: biến cờ để hiện thông báo khi list gợi ý kết bạn rỗng;
  */
  friendRequests: GuestFriend[] = [];
  friendSuggestions: GuestFriend[] = [];
  flagRequest = false;
  flagSuggestion = false;
  guest: Guest = {id: 1};
  friend: Friend = {};
  guestFriend: GuestFriend;

  checkGuestFriend = false ;

  /*
     Created by TuanPA
     Date: 09:30 26/06/2022
   */

  username: string;
  imageLink: string;
  idPatient: number;
  currentUser: string;
  role: string;
  isLoggedIn = true;

  /*
     Created by TuanPA
     Date: 09:30 26/06/2022
   */
  constructor(private tokenStorageService: TokenStorageService,
              private shareService: ShareService,
              private router: Router,
              private guestFriendService: GuestFriendService) {
    this.shareService.getClickEvent().subscribe(() => {
      this.loadHeader();
    });
  }

  ngOnInit(): void {
    /*
   Created by ChienLV
   Date: 15:00 29/06/2022
   Desc: getFriendRequests(id) và getFriendSuggestions(id) => Lấy id của guest khi đăng nhập vào;
 */
    this.getFriendRequests(1);
    this.getFriendSuggestions(1);

    this.loadHeader();

  }


  /*
     Created by TuanPA
     Date: 09:30 26/06/2022
   */
  loadHeader(): void {
    if (this.tokenStorageService.getToken()) {
      this.currentUser = this.tokenStorageService.getUser().username;
      this.role = this.tokenStorageService.getUser().roles[0];
      this.username = this.tokenStorageService.getUser().username;
      this.imageLink = this.tokenStorageService.getUser().imageLink;
    }
    this.isLoggedIn = this.username != null;
  }

  /*
     Created by TuanPA
     Date: 09:30 26/06/2022
   */
  logOut() {
    this.tokenStorageService.signOut();
    this.isLoggedIn = !this.isLoggedIn;
    this.router.navigate(['/']);
  }


  /*
      Created by ChienLV
      Date: 15:00 29/06/2022
      Desc: getFriendRequests(id) => Lấy list lời mời kết bạn dựa vào id của guest khi đăng nhập vào;
    */
  getFriendRequests(id: number) {
    this.guestFriendService.getFriendRequests(id).subscribe((data) => {
      this.flagRequest = false;
      this.friendRequests = data;
      if (this.friendRequests.length === 0) {
        this.flagRequest = true;
        alert(this.flagRequest);
      }
    }, error => {
      console.log(error);
      this.flagRequest = true;
    })
  }

  /*
     Created by ChienLV
     Date: 15:00 29/06/2022
     Desc: acceptFriendRequest(id) => Chấp nhận lời mời kết bạn dựa vào id của bảng guest_friend;
   */
  acceptFriendRequest(id: number) {
    this.guestFriendService.acceptFriend(id).subscribe(() => {
      // this.ngOnInit();
      window.location.reload();
    }, error => {
      console.log(error);
    })
  }

  /*
     Created by ChienLV
     Date: 15:00 29/06/2022
     Desc: refuseFriendRequest(id) => Từ chối lời mời kết bạn dựa vào id của bảng guest_friend;
   */
  refuseFriendRequest(id: number) {
    this.guestFriendService.refuseFriend(id).subscribe(() => {
      // this.ngOnInit();
      window.location.reload();
    }, error => {
      console.log(error);
    })
  }

  /*
     Created by ChienLV
     Date: 15:00 29/06/2022
     Desc: getFriendSuggestions(id) => Lấy list gợi ý kết bạn dựa vào id của guest khi đăng nhập vào;
   */
  getFriendSuggestions(id: number) {
    this.guestFriendService.getFriendSuggestions(id).subscribe((data) => {
      this.flagSuggestion = false;
      this.friendSuggestions = data;
      if (this.friendSuggestions.length === 0) {
        this.flagSuggestion = true;
      }
    }, error => {
      console.log(error);
      this.flagSuggestion = true;
    })
  }

  /*
     Created by ChienLV
     Date: 15:00 29/06/2022
     Desc: removeSuggestion(id) => Từ chối lời gợi ý kết bạn dựa vào id của bảng guest_friend;
   */
  removeSuggestion(id: number) {
    this.guestFriendService.removeSuggestion(id).subscribe(() => {
      window.location.reload();
    }, error => {
      console.log(error);
    })
  }

  /*
    Created by ChienLV
    Date: 15:00 29/06/2022
    Desc: removeSuggestion(id) => Từ chối lời gợi ý kết bạn dựa vào id của bảng guest_friend;
  */
  addFriend(idGuest: number, idFriend: number) {
    idGuest = this.guest.id;
    console.log(`idGuest:${idGuest},idFriend:${idFriend}`);
    if (idGuest != idFriend) {
      this.guestFriendService.getGuest(idGuest).subscribe(data => {
        this.guest = data;
        this.guestFriendService.getFriend(idFriend).subscribe(data => {
          this.friend = data;
          this.guestFriend = {
            guestDto: this.guest,
            friendDto : this.friend
          }
          this.guestFriendService.addFriend(this.guestFriend).subscribe(()=>{
            alert('ok');
            this.removeSuggestion(this.guest.id);
          })
        })
      })
    }
  }
}
