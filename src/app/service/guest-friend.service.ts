import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {GuestFriend} from "../component/profile/model/guest-friend";

@Injectable({
  providedIn: 'root'
})
export class GuestFriendService {

  URL = "http://localhost:8080";

  constructor(private http: HttpClient) {
  }

  getFriend(id: number): Observable<any> {
    return this.http.get(`${this.URL}/profile/friend/${id}`);
  }

  getGuest(id: number): Observable<any> {
    return this.http.get(`${this.URL}/profile/guest/${id}`)
  }

  addFriend(guestFriendDto: GuestFriend): Observable<any> {
    return this.http.post(`${this.URL}/profile/add-friend`, guestFriendDto);
  }

  listFriend(guestId: number): Observable<any> {
    return this.http.get(`${this.URL}/profile/list-friend/${guestId}`);
  }

  findGuestFriendByGuestIdAndFriendId(guestId: number, friendId: number): Observable<any> {
    return this.http.get(`${this.URL}/profile/guest-friend/${guestId}/${friendId}`);
  }

  deleteFriend(id: number): Observable<any> {
    return this.http.delete(`${this.URL}/profile/delete-friend/${id}`);
  }

  findGuestByUsername(username: string): Observable<any> {
    return this.http.get(`${this.URL}/profile/get-guest-by-username/${username}`)
  }

  findAllGuestPost(id: number):Observable<any> {
    return this.http.get(`${this.URL}/profile/guest-post/${id}`);
  }
}
