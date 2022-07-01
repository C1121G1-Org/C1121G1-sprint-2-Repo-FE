import { Injectable } from '@angular/core';
import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

/*
  Created by khoaVC
  Role: Guest
  Time: 10:00 21/06/2022
  Service: GuestValidatorService
*/

export class GuestValidatorService {

  constructor() { }

/*
  Created by khoaVC
  Role: Guest
  Time: 10:00 21/06/2022
  Function: comparePassword = compare password and rePassword
*/
  static comparePassword(c: AbstractControl) {
    const v = c.value;
    return (v.password == v.rePassword) ? null : { rePassword: true, inValidMessage: 'Mật khẩu chưa khớp.' };
  }

/*
  Created by khoaVC
  Role: Guest
  Time: 10:00 21/06/2022
  Function: compareEmail = compare email and reEmail
*/
  static compareEmail(c: AbstractControl) {
    const v = c.value;
    return (v.email == v.reEmail) ? null : { reEmail: true, inValidMessage: 'Email chưa khớp.' };
  }

/*
  Created by khoaVC
  Role: Guest
  Time: 10:00 21/06/2022
  Function: validateDateOfBirth = validate date of birth
*/
  static validateDateOfBirth(control: AbstractControl): ValidationErrors | null {
    const v = control.value;
    const pickedDate = new Date(v);
    const todayDate = new Date();
    const minDate = new Date('01-01-1800');
    if (pickedDate > todayDate) {
      return { dateOfBirth: true, inValidMessage: 'Bạn phải chọn ngày nhỏ hơn hoặc bằng ngày hiện tại.' };
    }
    if (pickedDate < minDate) {
      return { dateOfBirth: true, inValidMessage: 'Bạn phải chọn ngày lớn hơn hoặc bằng ngày 01-01-1800.' };
    }
    if (GuestValidatorService.getAge(v) <= 18) {
      return { dateOfBirth: true, inValidMessage: 'Bạn phải chọn ngày sao cho tuổi của bạn phải lớn hơn 18 tuổi.'  };
    }
    return null;
  }

/*
  Created by khoaVC
  Role: Guest
  Time: 10:00 21/06/2022
  Function: validateCreateDate = validate create date
*/
  static validateCreateDate(control: AbstractControl): ValidationErrors | null {
    const v = control.value;
    const pickedDate = new Date(v).setHours(0, 0, 0, 0);
    const todayDate = new Date().setHours(0, 0, 0, 0);
    const maxDate = new Date('01-01-3000').setHours(0, 0, 0, 0);
    if (pickedDate < todayDate) {
      return { createDate: true, inValidMessage: 'Bạn phải chọn ngày lớn hơn hoặc bằng ngày hiện tại.' };
    }
    if (pickedDate > maxDate) {
      return { createDate: true, inValidMessage: 'Bạn phải chọn ngày nhỏ hơn hoặc bằng ngày 01-01-3000.' };
    }
    return null;
  }

  static ageCheck(controls: AbstractControl): ValidationErrors | null {
    if (controls?.errors && !controls.errors.under18) {
      return null;
    }

    if (GuestValidatorService.getAge(controls?.value) <= 18) {
      return { under18: true };
    } else {
      return null;
    }
  }

/*
  Created by khoaVC
  Role: Guest
  Time: 10:00 21/06/2022
  Function: getAge = calculate age from a date
*/
  private static getAge(date: string): number {
    const today = new Date();
    const birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    console.log('Age: ' + age + '\nBirthday: ' + birthDate);
    return age;
  }
}
