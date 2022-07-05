import { Component, OnInit } from '@angular/core';
import {Form, FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {GuestService} from "../../../service/guest/guest.service";
// @ts-ignore
import {UpdateGuestAndAccountDto} from "../../../dto/updateGuestAndAccountDto";

@Component({
  selector: 'app-guest-change-image',
  templateUrl: './guest-change-image.component.html',
  styleUrls: ['./guest-change-image.component.css']
})
export class GuestChangeImageComponent implements OnInit {
  editForm: FormGroup;
  updateGuestAndAccountDto: UpdateGuestAndAccountDto;
  image: string;


  constructor(private guestService: GuestService,
              private router: Router,
              private activeRoute: ActivatedRoute) {
this.editForm=new FormGroup({
  image: new FormControl(''),
  isLogin: new FormControl(''),
});

  }

  ngOnInit(): void {
    this.guestService.getImgAndIsLogin(1).subscribe((data:any) =>{
        this.updateGuestAndAccountDto=data;
        this.editForm.patchValue(this.updateGuestAndAccountDto);
        console.log(this.editForm);
    })};


  updateGuestAndAccount() {

  }
}
