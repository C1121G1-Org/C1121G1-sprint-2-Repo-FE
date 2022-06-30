import { Component, OnInit } from '@angular/core';
import {PostService} from "../../../service/post.service";
import {IPostDto} from "../../../Dto/IPostDto";
import {NgxSpinnerService} from "ngx-spinner";
import {ILikePostDto} from "../../../Dto/ILikePostDto";
import {FormGroup} from "@angular/forms";


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  idAccount: number = 1;
  posts : IPostDto[]=[];
  postUpdate: IPostDto;
  like: ILikePostDto;
  pageNumber=0;
  notEmptyPost:boolean = true;
  notScroll :boolean = true;
  private newPost: any;
  updatePostForm: FormGroup;


  constructor(private postService: PostService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getAlPostById(this.pageNumber, this.idAccount)
  }

  getAlPostById(pageNumber:number,idAccount: number){
    this.postService.getAllPost(pageNumber,idAccount).subscribe((data:any) => {
      console.log(data)
      this.pageNumber = data.number;
      this.getLoadNextPost();
    });
  }

  onScroll() {
    if (this.notEmptyPost && this.notScroll){
      this.spinner.show();
      this.notScroll = false;
      this.pageNumber = this.pageNumber + 1;
      console.log(this.pageNumber);
      this.getLoadNextPost();
    }

  }

  getLoadNextPost() {
    // const lastPost = this.posts[this.posts.length-1];
    // console.log(lastPost)
    // const lastPostId = this.pageNumber;
    const dataToSend = new FormData();


    // @ts-ignore
    dataToSend.append('numberPage', dataToSend);
    this.postService.getAllPost(this.pageNumber, this.idAccount).subscribe(data =>{
      this.newPost = data.content;
      console.log(this.newPost.image);
      console.log(data)
      this.spinner.hide();
      if (this.newPost.size === 0){
        this.notEmptyPost = false;
      }
      this.posts = this.posts.concat(this.newPost);
      this.notScroll= true
    });
  }

  likePost(idPost: number) {
    this.postService.likePost(idPost, this.idAccount).subscribe(() => {
      // this.postService.getAllPost(this.pageNumber,this.idAccount).subscribe((data:any) => {
      //   this.posts = data.content ;
      //   this.pageNumber = data.number;
      //   this.getLoadNextPost();
      // });
    });
  }

  update(postObject: IPostDto) {
    this.postUpdate = postObject;
  }

  edit(closeBtn: HTMLButtonElement) {

  }
}
