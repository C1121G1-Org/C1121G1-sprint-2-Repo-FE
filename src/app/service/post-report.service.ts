import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostReportService {
  url = 'http://localhost:8080/api/postReport';
  constructor(private http: HttpClient) { }
  getAllPostReport(guestName: string, reportName: string, dateReport: string, reportPeopleName: string, pageable: number): Observable<any>{
    return this.http.get<any>(this.url + '/list?guestName=' + guestName + '&reportName=' + reportName + '&dateReport=' + dateReport + '&reportPeopleName=' + reportPeopleName + '&page=' + pageable);
  }


  // getAll(guestName: string, reportName: string, dateReport: string, reportPeopleName: string, pageable: number) {
  //   return this.http.get<any>(this.url + )
  // }
}
