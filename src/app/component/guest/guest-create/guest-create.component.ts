import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Guest} from '../../../models/guest';
import {Router} from '@angular/router';
import {GuestService} from '../../../service/guest/guest.service';
import {GuestValidatorService} from '../../../service/guest/guest-validator.service';
import {GuestDto} from '../../../dto/guest-dto';

/*
  Created by khoaVC
  Role: Guest
  Time: 10:00 21/06/2022
  Component: GuestCreateComponent
  Function: all function
*/

@Component({
  selector: 'app-guest-create',
  templateUrl: './guest-create.component.html',
  styleUrls: ['./guest-create.component.css']
})
export class GuestCreateComponent implements OnInit {

  createForm: FormGroup;
  guests: Guest[] = [];
  image = 'https://uniquartz.co.nz/wp-content/uploads/2018/06/image_large.png';
  check: boolean;
  flagShow: boolean;
  @ViewChild('btnSuccess', {static: true}) btnSuccess: ElementRef;
  @ViewChild('btnFailed', {static: true}) btnFailed: ElementRef;
  @ViewChild('btnCloseSuccess', {static: true}) btnCloseSuccess: ElementRef;
  @ViewChild('btnSubmit', {static: true}) btnSubmit: ElementRef;
  @ViewChild('btnClose', {static: true}) btnClose: ElementRef;
  @ViewChild('btnCloseConfirm', {static: true}) btnCloseConfirm: ElementRef;
  @ViewChild('btnConfirm', {static: true}) btnConfirm: ElementRef;
  @ViewChild('inputPassword', {static: true}) inputPassword: ElementRef;
  dict: { key, value }[];
  id: number;
  today: string;
  createFlag: boolean;
  showPassword: boolean;
  showRePassword: boolean;
  constructor(private fb: FormBuilder, private router: Router, private personService: GuestService) {
  }


  ngOnInit(): void {
    this.getToday();
    this.createForm = this.fb.group({
      userName: ['', [Validators.required,
        Validators.pattern('^[^!@#$%^&*()_+\\-=\\[\\]{};\':\"\\\\|,.<>\\/?~`]*$'),
        Validators.minLength(6), Validators.maxLength(32)]],
      pw: this.fb.group({
        password: ['', [Validators.required,
          Validators.pattern('^[^!@#$%^&*()_+\\-=\\[\\]{};\':\"\\\\|,.<>\\/?~`]*$'),
          Validators.minLength(6), Validators.maxLength(32)]],
        rePassword: ['', [Validators.required,
          Validators.pattern('^[^!@#$%^&*()_+\\-=\\[\\]{};\':\"\\\\|,.<>\\/?~`]*$'),
          Validators.minLength(6), Validators.maxLength(32)]]
      }, {
        validator: GuestValidatorService.comparePassword
      }),
      dateOfBirth: ['', [Validators.required, GuestValidatorService.validateDateOfBirth]],
      createDate: [this.today, [Validators.required, GuestValidatorService.validateCreateDate]],
      gender: ['', Validators.required],
      career: ['', Validators.required],
      name: ['', [Validators.required,
        Validators.pattern('^[^!@#$%^&*()_+\\-=\\[\\]{};\':\"\\\\|,.<>\\/?~`]*$'),
        Validators.minLength(6), Validators.maxLength(32)]],
      address: ['', Validators.required],
      em: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        reEmail: ['', [Validators.required, Validators.email]]
      }, {
        validator: GuestValidatorService.compareEmail
      }),
      isAgree: ['', Validators.required]
    });
    // this.getEmployee();
    this.image = 'https://uniquartz.co.nz/wp-content/uploads/2018/06/image_large.png';
    this.flagShow = true;
    this.createFlag = false;
    this.showPassword = false;
    this.showRePassword = false;

  }
  get name(){
    return this.createForm.get('name');
  }
  get createDate(){
    return this.createForm.get('createDate');
  }
  get userName(){
    return this.createForm.get('userName');
  }
  get dateOfBirth(){
    return this.createForm.get('dateOfBirth');
  }
  get gender(){
    return this.createForm.get('gender');
  }
  get career(){
    return this.createForm.get('career');
  }
  get address(){
    return this.createForm.get('address');
  }
  get pw(){
    return this.createForm.get('pw');
  }
  get password(){
    return this.createForm.get('pw.password');
  }
  get rePassword(){
    return this.createForm.get('pw.rePassword');
  }
  get em(){
    return this.createForm.get('em');
  }
  get email(){
    return this.createForm.get('em.email');
  }
  get reEmail(){
    return this.createForm.get('em.reEmail');
  }
  get isAgree(){
    return this.createForm.get('isAgree');
  }

  // GET TODAY
  getToday() {
    const todayTemp = new Date();
    const todayDate = todayTemp.getUTCDate();
    const todayMonth = todayTemp.getUTCMonth() + 1;
    const todayFullYear = todayTemp.getUTCFullYear();
    let todayDateString: any;
    let todayMonthString: any;
    if (todayDate < 10) {
      todayDateString = '0' + todayDate;
    } else {
      todayDateString = todayDate;
    }
    if (todayMonth < 10) {
      todayMonthString = '0' + todayMonth;
    } else {
      todayMonthString = todayMonth;
    }
    this.today = todayFullYear + '-' + todayMonthString + '-' + todayDateString;
  }

  create() {
    if (this.createForm.invalid) {
      if (this.name.value == ''){
        this.name.setErrors({name: true, inValidMessage: 'Bạn phải nhập tên.'});
      }
      if (this.userName.value == ''){
        this.userName.setErrors({userName: true, inValidMessage: 'Bạn phải nhập tên đăng nhập.'});
      }
      if (this.password.value == ''){
        this.password.setErrors({password: true, inValidMessage: 'Bạn phải nhập mật khẩu.'});
      }
      if (this.rePassword.value == ''){
        this.pw.setErrors({rePassword: true, inValidMessage: 'Bạn phải xác nhận lại mật khẩu.'});
      }
      if (this.dateOfBirth.value == ''){
        this.dateOfBirth.setErrors({dateOfBirth: true, inValidMessage: 'Bạn phải chọn ngày sinh.'});
      }
      if (this.createDate.value == ''){
        this.createDate.setErrors({createDate: true, inValidMessage: 'Bạn phải chọn ngày tạo mới.'});
      }
      if (this.gender.value == ''){
        this.gender.setErrors({gender: true, inValidMessage: 'Bạn phải chọn giới tính.'});
      }
      if (this.career.value == ''){
        this.career.setErrors({career: true, inValidMessage: 'Bạn phải nhập nghề nghiệp.'});
      }
      if (this.address.value == ''){
        this.address.setErrors({address: true, inValidMessage: 'Bạn phải nhập địa chỉ.'});
      }
      if (this.email.value == ''){
        this.email.setErrors({email: true, inValidMessage: 'Bạn phải nhập email.'});
      }
      if (this.reEmail.value == ''){
        this.em.setErrors({reEmail: true, inValidMessage: 'Bạn phải xác nhận lại email.'});
      }
      if (this.isAgree.value == ''){
        this.isAgree.setErrors({isAgree: true, inValidMessage: 'Bạn phải đọc và đồng ý theo Điều khoản.'});
      }
    } else {
      this.btnConfirm.nativeElement.click();
    }
  }

  mappingFormToObject(form: FormGroup, guestDto: GuestDto) {
    guestDto.name = form.controls.name.value;
    guestDto.userName = form.controls.userName.value;
    guestDto.password = form.get('pw.password').value;
    guestDto.address = form.controls.address.value;
    guestDto.career = form.controls.career.value;
    guestDto.dateOfBirth = form.controls.dateOfBirth.value;
    guestDto.createDate = form.controls.createDate.value;
    guestDto.gender = form.controls.gender.value;
    guestDto.email = form.get('em.email').value;
  }

  confirmCreate() {
    this.createFlag = true;
    if (this.createFlag) {
      this.submitCreate();
    } else {
      this.btnCloseConfirm.nativeElement.click();
    }
  }

  submitCreate(){
    let guestDto: GuestDto = {};
    this.mappingFormToObject(this.createForm, guestDto);
    this.personService.create(guestDto).subscribe(
      (response) => {
        this.btnCloseConfirm.nativeElement.click();
        this.btnSuccess.nativeElement.click();
      },
      (error) => {
        if (!error.error.status) {
          this.dict = Object.entries(error.error.errorMap).map(([k, v]) => {
            return {key: k, value: v};
          });
          if (this.dict.length > 0) {
            for (const a of this.dict) {
              this.createForm.get(a.key)?.setErrors({[a.key]: true, inValidMessage: a.value});
            }
          }
        }
      }
    );
  }

  confirmSuccess() {
    this.btnCloseSuccess.nativeElement.click();
    this.router.navigate(['/guest/survey/', this.userName.value]);
  }

  changePasswordType() {
    this.showPassword = !this.showPassword;
  }
  changeRePasswordType() {
    this.showRePassword = !this.showRePassword;
  }
}
