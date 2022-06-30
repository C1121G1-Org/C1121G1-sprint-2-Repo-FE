import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAllPost(number:number,idAccount: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/post/list/${idAccount}?page=${number}`);
  }

  likePost(idPost: number, idAccount: number): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/post/like/${idAccount}`,idPost);

  }

  updatePost(data: any): Observable<any> {
    return  this.http.patch(`http://localhost:8080/api/post/update/${data.id}`,data);

  }

}
