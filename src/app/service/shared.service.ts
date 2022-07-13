import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private url = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {
  }

  private subject = new Subject<any>();

  sendClickEvent() {
    this.subject.next();
  }

  getClickEvent(): Observable<any> {
    return this.subject.asObservable();
  }

  getAllCategory(): Observable<any> {
    return this.http.get<any>(`${this.url}/gift/category`);
  }

  getAllGift(): Observable<any> {
    return this.http.get(`${this.url}/gift/list`);
  }

  getAllGiftWithCategory(pageable: number, id: number): Observable<any> {
    return this.http.get(`${this.url}/gift/list?page=${pageable}&categoryId=${id}`);
  }

  saveGift(guestGift): Observable<any> {
    return this.http.post(`${this.url}/gift/update`, guestGift);
  }
}
