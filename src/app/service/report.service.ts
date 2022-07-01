import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  url = 'http://localhost:8080/api/repost';

  constructor(private http: HttpClient) { }
  getAllPostReport(guestName: string, reportName: string, dateReport: string, reportPeopleName: string, pageable: number): Observable<any>{
    return this.http.get<any>(this.url + '/list-report?guestName=' + guestName + '&reportName=' + reportName + '&dateReport=' + dateReport + '&reportPeopleName=' + reportPeopleName + '&page=' + pageable);
  }

}
