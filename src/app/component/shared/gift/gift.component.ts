import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../../service/shared.service';
import {ICategoryGift} from '../../../models/ICategoryGift';
import {TokenStorageService} from '../../../service/security/token-storage.service';
import {FormControl, FormGroup} from '@angular/forms';
import {IGift} from '../../../models/IGift';
import {IAccount} from '../../../models/IAccount';

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.css']
})
export class GiftComponent implements OnInit {
  @Input() tempGeust: number;
  @Input() tempFridend: number;
  categoryList: ICategoryGift[] = [];
  giftList: IGift[] = [];
  pageNumber: number;
  selectId: number;
  flagClick = false;
  activeProjectIndex: number;
  currentGift: IGift;
  account: IAccount;
  giftGuest: FormGroup;

  constructor(private giftService: SharedService, tokenStorageService: TokenStorageService) {
    this.account = tokenStorageService.getUser();
    this.giftGuest = new FormGroup({
      sender: new FormControl(''),
      guest: new FormControl(''),
      gift: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.giftService.getAllCategory().subscribe(data => {
      console.log(data);
      this.categoryList = data;
      this.giftService.getAllGift().subscribe(res => {
        this.pageNumber = res.pageable.pageNumber;
        this.giftList = res.content;
      });
    });
    alert(this.tempGeust);
    console.log(this.tempFridend);
  }
  chooseCategory(id: number) {
    this.selectId = id;
    this.giftService.getAllCategory().subscribe(data => {
      this.categoryList = data;
      this.giftService.getAllGiftWithCategory(this.pageNumber, id).subscribe(res => {
        this.pageNumber = res.pageable.pageNumber;
        this.giftList = res.content;
      });
    });
  }

  isSelected(category: ICategoryGift) {
    // tslint:disable-next-line:triple-equals
    if (category.id == this.selectId) {
      return true;
    }
    return false;
  }

  chooseGift(index: number, gift: IGift) {
    // tslint:disable-next-line:triple-equals
    if (this.activeProjectIndex != index) {
      this.flagClick = true;
      this.activeProjectIndex = index;
      this.currentGift = gift;
    } else {
      this.flagClick = !this.flagClick;
      this.currentGift = null;
    }
    if (this.flagClick) {
      this.currentGift = gift;
    } else {
      this.currentGift = null;
    }
  }

  saveGiveGift(e) {
    this.giftGuest.controls.gift.setValue(this.currentGift);
    this.giftGuest.controls.sender.setValue(this.tempGeust);
    this.giftGuest.controls.guest.setValue(this.tempFridend);
    this.giftService.saveGift(this.giftGuest.value).subscribe(data => {
      e.click();
    } , error => {
      alert('loi')
    });

  }
}

