import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  createPost(post: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8080/api/post/create', post);
  }

// create bt longNHL0
  getAllPost(number:number,idAccount: number): Observable<any> {
    return this.httpClient.get<any>(`http://localhost:8080/api/post/list?guestId=${idAccount}&page=${number}`);
  }
// create bt longNHL
  likePost(idPost: number, idAccount: number): Observable<any> {
    return this.httpClient.post<any>(`http://localhost:8080/api/post/like/${idAccount}`,idPost);

  }
// create bt longNHL
  updatePost(data: any): Observable<any> {
    return  this.httpClient.patch(`http://localhost:8080/api/post/update/${data.id}`,data);
  }


}
