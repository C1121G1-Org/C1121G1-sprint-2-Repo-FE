import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PostService} from "../../../service/post.service";
import {AngularFireStorage} from '@angular/fire/storage'
import {finalize} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls:['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  createPostForm: FormGroup;
  selectedImage: any;
  alertImage: '';

  feeling1: string;

  imgVip = 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg';
  hidden = true;
  hiddenFeeling: boolean = true;

  constructor(private postService: PostService, private router: Router,
              @Inject(AngularFireStorage) private storage: AngularFireStorage) {
  }

  ngOnInit(): void {
    this.createPostForm = new FormGroup({
        id: new FormControl(''),
        image: new FormControl(),
        postDate: new FormControl(''),
        privacy: new FormControl('Công khai'),
        feeling: new FormControl(),
        content: new FormControl('', Validators.required),
        guestId: new FormControl('1')
      }
    )
  }

  // get image() {
  //   return this.createPostForm.get('image');
  // }
  //
  // get postDate() {
  //   return this.createPostForm.get('postDate');
  // }
  //
  // get privacy() {
  //   return this.createPostForm.get('privacy');
  // }
  //
  // get feeling() {
  //   return this.createPostForm.get('feeling');
  // }
  //
  // get content() {
  //   return this.createPostForm.get('content');
  // }
  //
  // get guestId() {
  //   return this.createPostForm.get('guestId');
  // }

  // create(successButton: HTMLButtonElement, errorModalBtn: HTMLButtonElement) {
  create(closeBtn: HTMLButtonElement) {
    this.createPostForm.controls.feeling.setValue(this.feeling1);
    if (!this.selectedImage) {
      this.postService.createPost(this.createPostForm.value).subscribe(() => {
        // console.log(this.createPostForm.controls.feeling);
        this.ngOnInit();
        // successButton.click();
        // .then(r => this.alertService.showMessage("Thêm mới thành công!"));
        console.log('success');
        this.hiddenFeeling = true;
        closeBtn.click();
      }, error => {
        console.log(this.createPostForm.controls.feeling);
        console.log(this.createPostForm.value);
      })

    } else {
      this.alertImage = '';
      const nameImg = '/PD-' + this.selectedImage.name + '.jpg';
      const fileRef = this.storage.ref(nameImg);
      this.storage.upload(nameImg, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            this.createPostForm.patchValue({image: url});
            this.postService.createPost(this.createPostForm.value).subscribe(() => {
                this.createPostForm.reset();

                // successButton.click();
                // .then(r => this.alertService.showMessage("Thêm mới thành công!"));
                console.log('success');
                this.hiddenFeeling = true;
                closeBtn.click();
              }, error => {
                console.log(this.createPostForm.value);
                // errorModalBtn.click();
                // this.errorProductName = error.error.errorMap.name;
              }
            );
          });
        })
      ).subscribe();
    }

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

  showFeeling(element: any) {
    console.log(element.value);
    this.hiddenFeeling = false;
    this.feeling1 = element.value;
  }
}
