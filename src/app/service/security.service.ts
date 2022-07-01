import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  isLoggedIn: boolean;

  constructor(private http: HttpClient) {
  }
  /*
    Created by TuanPA
    Date: 09:30 26/06/2022
  */
  login(obj: any): Observable<any> {
    return this.http.post('http://localhost:8080/api/public/login', obj);
  }
}
