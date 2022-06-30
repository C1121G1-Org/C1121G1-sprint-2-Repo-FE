import {Component, Inject, OnInit} from '@angular/core';
import {PostService} from "../../../service/post.service";
import {NgxSpinnerService} from "ngx-spinner";
import {ILikePostDto} from "../../../Dto/ILikePostDto";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IPostDto} from "../../../dto/IPostDto";
import {AngularFireStorage} from "@angular/fire/storage";
import {finalize} from "rxjs/operators";



@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  idAccount: number = 1;
  posts: IPostDto[] = [];
  postUpdate: IPostDto;
  like: ILikePostDto;
  pageNumber = 0;
  notEmptyPost: boolean = true;
  notScroll: boolean = true;
  private newPost: any;
  updatePostForm: FormGroup;
  hidden: boolean = true;
  selectedImage: any;
  alertImage: string;
  imgVip: string = 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg';
  hiddenFeeling: boolean;
  feeling1: string;


  constructor(private postService: PostService, private spinner: NgxSpinnerService,
              @Inject(AngularFireStorage) private storage: AngularFireStorage) {

    this.updatePostForm = new FormGroup({
      id: new FormControl(''),
      image: new FormControl(),
      postDate: new FormControl(''),
      privacy: new FormControl(''),
      feeling: new FormControl(),
      content: new FormControl('', Validators.required),
      guestId: new FormControl('')
    })
  }

  get image() {
    return this.updatePostForm.get('image');
  }

  get postDate() {
    return this.updatePostForm.get('postDate');
  }

  get privacy() {
    return this.updatePostForm.get('privacy');
  }

  get feeling() {
    return this.updatePostForm.get('feeling');
  }

  get content() {
    return this.updatePostForm.get('content');
  }

  get guestId() {
    return this.updatePostForm.get('guestId');
  }

  ngOnInit(): void {
    this.getAlPostById(this.pageNumber, this.idAccount)
  }

  getAlPostById(pageNumber: number, idAccount: number) {
    this.postService.getAllPost(pageNumber, idAccount).subscribe((data: any) => {
      console.log(data)
      this.pageNumber = data.number;
      this.getLoadNextPost();
    });
  }

  onScroll() {
    if (this.notEmptyPost && this.notScroll) {
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
    this.postService.getAllPost(this.pageNumber, this.idAccount).subscribe(data => {
      this.newPost = data.content;
      console.log(this.newPost.image);
      console.log(data)
      this.spinner.hide();
      if (this.newPost.size === 0) {
        this.notEmptyPost = false;
      }
      this.posts = this.posts.concat(this.newPost);
      this.notScroll = true
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
    this.updatePostForm = new FormGroup({
      id: new FormControl(postObject.id),
      image: new FormControl(postObject.image),
      postDate: new FormControl(postObject.postDate),
      privacy: new FormControl(postObject.privacy),
      feeling: new FormControl(postObject.feeling),
      content: new FormControl(postObject.content),
      guestId: new FormControl(postObject.guestId)
    })
  }

  edit(closeBtn: HTMLButtonElement) {

  }

  showPreview(event: any) {
    this.hidden = false;

    this.selectedImage = event.target.files[0];
    if (this.selectedImage) {
      this.alertImage = '';
    }
    const reader = new FileReader();
    reader.readAsDataURL(this.selectedImage);
    reader.onload = e => {
      this.imgVip = reader.result as string;
    };

  }

  showFeeling(element: HTMLInputElement) {
    console.log(element.value);
    this.hiddenFeeling = false;
    this.feeling1 = element.value;
  }



  updatePost(closeBtn: HTMLButtonElement) {
    if (this.selectedImage){
      this.alertImage = '';
      const nameImg = '/PD-' + this.selectedImage.name + '.jpg';
      const fileRef = this.storage.ref(nameImg);
      this.storage.upload(nameImg, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            this.updatePostForm.patchValue({image: url});
            this.postUpdate = this.updatePostForm.value;
            console.log(this.postUpdate);
            this.postService.updatePost(this.postUpdate).subscribe(() => {
                this.updatePostForm.reset();

                // successButton.click();
                // .then(r => this.alertService.showMessage("Thêm mới thành công!"));
                console.log('success');
                this.hiddenFeeling = true;
                closeBtn.click();
              }, error => {
                console.log(this.updatePostForm.value);
                // errorModalBtn.click();
                // this.errorProductName = error.error.errorMap.name;
              }
            );
          });
        })
      ).subscribe();
    }

  }
}
