import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SecurityService} from "../../../service/security.service";
import {Router} from "@angular/router";
import {ShareService} from "../../../service/security/share.service";
import {TokenStorageService} from "../../../service/security/token-storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    password: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    remember_me: new FormControl()
  });

  roles: string[] = [];
  errorMessage = '';
  username: string;
  showPassword: any;

  constructor(private securityService: SecurityService,
              private tokenStorageService: TokenStorageService,
              private shareService: ShareService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  login(errorModalBtn: HTMLButtonElement, closeErrorModal: HTMLButtonElement) {
    console.log('haha');
    this.securityService.login(this.loginForm.value).subscribe(data => {
      if (this.loginForm.value.remember_me) {
        this.tokenStorageService.saveTokenLocal(data.token);
        this.tokenStorageService.saveUserLocal(data);
        this.tokenStorageService.setRememberFlag();
      } else {
        // this.tokenStorageService.saveTokenLocal(data.token);
        // this.tokenStorageService.saveUserLocal(data);
        // this.tokenStorageService.setNoRememberFlag();
        this.tokenStorageService.saveTokenSession(data.token);
        this.tokenStorageService.saveUserSession(data);
      }
      this.securityService.isLoggedIn = true;
      this.username = this.tokenStorageService.getUser().username;
      this.roles = this.tokenStorageService.getUser().roles;
      this.loginForm.reset();
      this.shareService.sendClickEvent();
      this.router.navigate(['postList']);
    }, error => {
      if (error.status === 403) {
        this.errorMessage = 'Sai tên đăng nhập hoặc mật khẩu.';
        // if (this.password?.valueChanges) {
        //   this.errorMessage = '';
        // }
        this.securityService.isLoggedIn = false;
      } else if (error.status === 0) {
        errorModalBtn.click();
        // tslint:disable-next-line:only-arrow-functions
        setTimeout(function () {
          closeErrorModal.click();
        }, 3000);
        this.securityService.isLoggedIn = false;
      }
    });
  }

  get usernameForm() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
