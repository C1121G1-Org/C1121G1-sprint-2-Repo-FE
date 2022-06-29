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

  getAllMember(name: string, page: number): Observable<any> {
    return this.http.get<any>(`${API_GUEST}/list/member?nameMember=` + name + '&page=' + page);
  }

}
