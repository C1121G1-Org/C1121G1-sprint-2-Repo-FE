import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalletRoutingModule } from './wallet-routing.module';
import { MoneyChargeComponent } from './money-charge/money-charge.component';


@NgModule({
  declarations: [MoneyChargeComponent],
  imports: [
    CommonModule,
    WalletRoutingModule
  ]
})
export class WalletModule { }
