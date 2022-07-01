import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FriendDto} from "../dto/friend-dto";
import {Friend} from "../models/friend";


export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api/friend'
};
const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  constructor(private http: HttpClient) { }


  getAll(name: any, page: number, id: number): Observable<any> {
    return this.http.get<any>(API_URL + `/list/` + `${5}` + `?page=${page}&keyName=${name}`);
  }

  deleteFriend(a: Friend): Observable<Friend> {
    // @ts-ignore
    return this.http.patch<Friend>(API_URL + `/delete/` + `${a.id}`);
  }
}
