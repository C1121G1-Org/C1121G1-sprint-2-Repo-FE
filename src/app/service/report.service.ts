import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  url = 'http://localhost:8080/api/report';

  constructor(private http: HttpClient) {
  }

  getSearchPostReport(guestName: string, reportName: string, dateReport: string, reportPeopleName: string, pageable: number): Observable<any> {
    return this.http.get<any>(this.url + '/list-report?guestName=' + guestName + '&reportName=' + reportName + '&dateReport=' + dateReport + '&reportPeopleName=' + reportPeopleName + '&page=' + pageable);
  }


  getAllPostReport(pageable: number): Observable<any> {
    return this.http.get<any>(this.url + '/list-report'+'?page=' + pageable);
  }

  getMemberById(id) {
    return this.http.get<any>(this.url +`/warning/${id}`);
  }

  getAll(): Observable<any> {
    return this.http.get<any>(this.url + `/list`);
  }
}
