import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Target} from '../../../models/target';
import {GuestService} from '../../../service/guest/guest.service';
import {Favorite} from '../../../models/favorite';
import {AngularFireStorage} from '@angular/fire/storage';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ExtraInforDto} from '../../../dto/extra-infor-dto';
import {finalize} from 'rxjs/operators';

/*
  Created by khoaVC
  Role: Guest
  Time: 10:00 21/06/2022
  Component: GuestSurveyComponent
  Function: all function
*/

declare var $: any;

@Component({
  selector: 'app-guest-survey',
  templateUrl: './guest-survey.component.html',
  styleUrls: ['./guest-survey.component.css']
})
export class GuestSurveyComponent implements OnInit {
  updateForm: FormGroup;
  targets: Target[];
  favorites: Favorite[];
  targetResult: number[] = [];
  imageFB: string;
  selectedImage: string;
  userName: string;
  extraInforDto: ExtraInforDto;
  @ViewChild('btnSuccess', {static: true}) btnSuccess: ElementRef;
  @ViewChild('btnCloseSuccess', {static: true}) btnCloseSuccess: ElementRef;

  constructor(private fb: FormBuilder,
              private guestService: GuestService,
              private activeRoute: ActivatedRoute,
              private router: Router,
              @Inject(AngularFireStorage) private fireStorage: AngularFireStorage) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.userName = paramMap.get('userName');
    });
    this.updateForm = this.fb.group({
      image: ['https://romanroadtrust.co.uk/wp-content/uploads/2018/01/profile-icon-png-898-300x300.png'],
      favoriteList: this.fb.array([]),
      maritalStatus: [''],
      targetList: this.fb.array([]),
      // checkArray: this.fb.array([])
    });
    this.getAllTarget();
    this.getAllFavorite();
  }

  get targetList(): FormArray{
    return this.updateForm.get('targetList') as FormArray;
  }
  get favoriteList(): FormArray{
    return this.updateForm.get('favoriteList') as FormArray;
  }
  get image(){
    return this.updateForm.get('image');
  }

  // private getTarget(){
  //   return this.fb.group({
  //     id: []
  //   });
  // }
  //
  // private addTarget(){
  //   const control = this.updateForm.controls.target as FormArray;
  //   control.push(this.getTarget());
  // }
  //
  // private removeTarget(i: number){
  //   const control = this.updateForm.controls.target as FormArray;
  //   control.removeAt(i);
  // }

  getAllTarget(){
    this.guestService.listTarget().subscribe(
      (response) => {
        this.targets = response;
      },
      (error) => { alert('FAILED'); },
      );
  }
  getAllFavorite(){
    this.guestService.listFavorite().subscribe(
      (response) => {
        this.favorites = response;
      },
      (error) => { alert('FAILED'); },
    );
  }

  update() {
    if (this.updateForm.invalid){
    } else {
          const nameImg = '/GUEST-' + this.userName + '.jpg';
          const fileRef = this.fireStorage.ref(nameImg);
          this.fireStorage.upload(nameImg, this.selectedImage).snapshotChanges().pipe(
            finalize(() => {
              fileRef.getDownloadURL().subscribe((url) => {
                this.updateForm.patchValue({image: url});
                this.guestService.update(this.updateForm.value, this.userName).subscribe(
                  (response) => {
                  this.btnSuccess.nativeElement.click();
                  }, (error) => {
                  }
                );
              });
            })
          ).subscribe();
    }
  }

  onCheckboxTargetChange(idString: any, isChecked: boolean) {
    const target = (this.updateForm.controls.targetList as FormArray);
    // tslint:disable-next-line:radix
    let id = parseInt(idString);
    if (isChecked) {
      target.push(new FormControl(id));
    } else {
      const index = target.controls.findIndex(x => x.value === id);
      target.removeAt(index);
    }
  }
  onCheckboxFavoriteChange(idString: any, isChecked: boolean) {
    const favorite = (this.updateForm.controls.favoriteList as FormArray);
    // tslint:disable-next-line:radix
    let id = parseInt(idString);
    if (isChecked) {
      favorite.push(new FormControl(id));
    } else {
      const index = favorite.controls.findIndex(x => x.value === id);
      favorite.removeAt(index);
    }
  }

  // readURL(input) {
  //   if (input.files && input.files[0]) {
  //     let reader = new FileReader();
  //     reader.onload = e => {
  //       $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
  //       // tslint:disable-next-line:no-unused-expression
  //       $('#imagePreview').hide;
  //       $('#imagePreview').fadeIn(650);
  //     };
  //     // reader.onload = function (e) {
  //     //   $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
  //     //   $('#imagePreview').hide;
  //     //   $('#imagePreview').fadeIn(650);
  //     // };
  //     reader.readAsDataURL(input.files[0]);
  //   }
  // }

  onImageChange(event: any) {
    this.selectedImage = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = e => {
      $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
      // tslint:disable-next-line:no-unused-expression
      $('#imagePreview').hide;
      $('#imagePreview').fadeIn(650);
      this.imageFB = reader.result as string;
      // this.imageFB = `/avatar_${event.target.files[0].name.split('.')[0]}.jpg`;
    };
  }

  confirmSuccess() {
    this.btnCloseSuccess.nativeElement.click();
    this.router.navigate(['']);
  }
}
