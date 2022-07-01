import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {
  }

  createPost(post: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8080/api/post/create', post);
  }
}
