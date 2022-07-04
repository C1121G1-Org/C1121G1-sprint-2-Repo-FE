import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TokenStorageService} from "../../service/security/token-storage.service";
import {ShareService} from "../../service/security/share.service";
import {Router} from "@angular/router";
import {GuestFriendService} from "../../service/guest-friend.service";
import {Guest} from "../../models/guest";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  /*
     Created by TuanPA
     Date: 09:30 26/06/2022
   */
  @Output()
  sendGuestFromHeader = new EventEmitter<Guest>();
  username: string;
  imageLink: string;
  idPatient: number;
  currentUser: string;
  role: string;
  isLoggedIn = false;
  guest: Guest = {};

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
      this.guestFriendService.findGuestByUsername(this.username).subscribe(data => {
          this.guest = data;
          this.sendGuestFromHeader.emit(this.guest);
        }, error => {
          console.log(error);
        }
      )
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
    this.router.navigate(['/login']);
  }
}
