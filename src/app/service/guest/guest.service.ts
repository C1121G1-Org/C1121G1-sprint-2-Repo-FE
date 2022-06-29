import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

/*
  Created by khoaVC
  Role: Guest
  Time: 10:00 21/06/2022
  Service: GuestService
*/

export class GuestService {

  constructor(private http: HttpClient) { }

  create(data: any) {
    return this.http.post<any>('http://localhost:8080/api/guest/create', data);
  }

  update(data: any, username: string) {
    return this.http.patch<any>('http://localhost:8080/api/guest/update/' + username, data);
  }

  listTarget() {
    return this.http.get<any>('http://localhost:8080/api/guest/listTarget');
  }

  listFavorite() {
    return this.http.get<any>('http://localhost:8080/api/guest/listFavorite');
  }
}
