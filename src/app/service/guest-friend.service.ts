import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {GuestFriendDto} from '../component/profile/model/guest-friend-dto';

@Injectable({
  providedIn: 'root'
})
export class GuestFriendService {

  /*
   Created by ChienLV
   Date: 15:00 29/06/2022
 */
  guestFriendApi = 'http://localhost:8080/api/guest-friend/';


  URL = "http://localhost:8080/api";

  constructor(private http: HttpClient) {
  }

  getFriend(id: number): Observable<any> {
    return this.http.get(`${this.URL}/profile/friend/${id}`);
  }

  getGuest(id: number): Observable<any> {
    return this.http.get(`${this.URL}/profile/guest/${id}`)
  }

  addFriend(guestFriendDto: GuestFriendDto): Observable<any> {
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


  findGuestByUsername(username: string): Observable<any> {
    return this.http.get(`${this.URL}/profile/get-guest-by-username/${username}`)
  }

  findAllGuestPost(id: number): Observable<any> {
    return this.http.get(`${this.URL}/profile/guest-post/${id}`);
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
