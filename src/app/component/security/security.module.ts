import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { LoginComponent } from './login/login.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [LoginComponent, ErrorPageComponent],
    imports: [
        CommonModule,
        SecurityRoutingModule,
        ReactiveFormsModule
    ]
})
export class SecurityModule { }
