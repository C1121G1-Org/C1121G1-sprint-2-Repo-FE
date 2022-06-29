import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ChargeMoneyDto} from "../dto/ChargeMoneyDto";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class WalletService {
  private readonly URL = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) {
  }
  /*
         Created by SonDCM
         Role: GUEST
         Time: 15:20 19/06/2022
         Function: chargeMoney() = chargeMoney
         Class:
 */
  chargeMoney (chargeMoneyDto : ChargeMoneyDto) : Observable<any> {
    return this.httpClient.patch(this.URL+'wallet/updateWallet',chargeMoneyDto );
  }

}
