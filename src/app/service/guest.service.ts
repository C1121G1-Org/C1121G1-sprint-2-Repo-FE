import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GuestService {
  private readonly API_URL = 'http://localhost:8080/api/';
  constructor(private httpClient: HttpClient) { }
  viewTop100(page: number) :Observable<any>{
    return this.httpClient.get(this.API_URL +'guest/listTop100?page='+page)
  }
}
