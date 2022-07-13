import { Component, OnInit } from '@angular/core';
import {Form, FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {GuestService} from "../../../service/guest/guest.service";
// @ts-ignore
import {UpdateGuestAndAccountDto} from "../../../dto/updateGuestAndAccountDto";
import {AngularFireStorage} from '@angular/fire/storage';
import {Observable} from 'rxjs';
import {formatDate} from '@angular/common';
import {finalize} from 'rxjs/operators';
import {UpdateGuestAndAccount} from '../../../models/updateGuestAndAccount';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-guest-change-image',
  templateUrl: './guest-change-image.component.html',
  styleUrls: ['./guest-change-image.component.css']
})
export class GuestChangeImageComponent implements OnInit {
  editForm: FormGroup;
  id=1;
  updateGuestAndAccountDto: UpdateGuestAndAccountDto;
  imageUrl: string;
  url: string;
  selectedImage: any = '';
  dowloadUrl: Observable<any>;
  numberOfFile = 0;
  private urlTest: '';
  public checkSubmit: number;


  constructor(private guestService: GuestService,private storage: AngularFireStorage,
              private router: Router,private SpinnerService:NgxSpinnerService,
              private activeRoute: ActivatedRoute) {
  this.editForm=new FormGroup({
  image: new FormControl(''),
  isLogin: new FormControl(''),
});

  }

  ngOnInit(): void {
    this.guestService.getImgAndIsLogin(this.id).subscribe((data:any) =>{
        this.updateGuestAndAccountDto=data;
        console.log(data);
        this.editForm.patchValue(this.updateGuestAndAccountDto);
        this.imageUrl=this.editForm.get('image').value;
        console.log(this.editForm);
      console.log('aloha');
    })};

  private static getCurrentDateTime(): string {
    return formatDate(new Date(), 'dd-MM-yyyy', 'en-US');
  }

  uploadFirebase(selectedImage: any): string {
    const nameImg = GuestChangeImageComponent.getCurrentDateTime() + this.selectedImage.name;
    const fileRef = this.storage.ref(nameImg);
    const task = this.storage.upload(nameImg, this.selectedImage);
    this.SpinnerService.show();
    task.snapshotChanges().pipe(
      finalize(() => {
        this.dowloadUrl = fileRef.getDownloadURL();
        this.dowloadUrl.subscribe(url => {
          this.imageUrl=url;
          this.SpinnerService.hide();
        });
      })
    ).subscribe();
    return this.imageUrl;
  }


  updateGuestAndAccount() {
    this.SpinnerService.show();
    this.editForm.patchValue({
      image: this.imageUrl
    })
    this.guestService.updateImgAndIsLogin(this.id,this.editForm.value).subscribe((res: any) => {
      this.SpinnerService.hide();
    });
  }

  showPreview(event: any) {
    if (event.target.files.length > 0) {
      this.selectedImage = event.target.files[0];
      this.numberOfFile = event.target.files.length;
    }
    this.url= this.uploadFirebase(this.selectedImage);
  }
}
