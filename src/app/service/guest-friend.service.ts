import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GuestFriend} from "../component/profile/model/guest-friend";

@Injectable({
  providedIn: 'root'
})
export class GuestFriendService {
  /*
   Created by ChienLV
   Date: 15:00 29/06/2022
 */
  guestFriendApi = 'http://localhost:8080/api/guest-friend/';


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

  /*
    Created by ChienLV
    Date: 15:00 29/06/2022
  */
  deleteFriend(id: number): Observable<any> {
    return this.http.delete(`${this.URL}/profile/delete-friend/${id}`);
  }

  getFriendRequests(id: number): Observable<any> {
    return this.http.get<any>(this.guestFriendApi + 'list-friend-requests/' + id);
  }

  getFriendSuggestions(id: number): Observable<any> {
    return this.http.get<any>(this.guestFriendApi + 'list-friend-suggestions/' + id);
  }

  acceptFriend(id: number): Observable<void> {
    return this.http.get<void>(this.guestFriendApi + 'accept-friend-request/' + id);
  }

  refuseFriend(id: number): Observable<void> {
    return this.http.get<void>(this.guestFriendApi + 'refuse-friend-request/' + id);
  }

  removeSuggestion(id: number): Observable<void> {
    return this.http.get<void>(this.guestFriendApi + 'remove-friend-suggestion/' + id);
  }
}
