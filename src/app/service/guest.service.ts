import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_GUEST = 'http://localhost:8080/api/guest';

@Injectable({
  providedIn: 'root'
})
export class GuestService {


  constructor(private http: HttpClient) {

  }

  getAllMember(page: number): Observable<any> {
    return this.http.get<any>(`${API_GUEST}/list/member` + '?page=' + page);
  }

  getSearchMember(name:string,page: number): Observable<any> {
    return this.http.get<any>(`${API_GUEST}/search?nameMember=` + name + '&page=' + page);
  }

  getVipMember(page: number): Observable<any> {
    return this.http.get<any>(`${API_GUEST}/vip` + '?page=' + page);
  }

  getNormalMember(page: number): Observable<any> {
    return this.http.get<any>(`${API_GUEST}/normal` + '?page=' + page);
  }

}
