import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPostDto} from "../Dto/IPostDto";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  // @ts-ignore
  getAllPost(number:number,idAccount: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/post/list/${idAccount}?page=${number}`);
  }

  likePost(idPost: number, idAccount: number): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/post/like/${idAccount}`,idPost);

  }
}
