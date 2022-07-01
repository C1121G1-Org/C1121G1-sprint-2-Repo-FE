import {Component, OnInit} from "@angular/core";
import {ChargeMoneyDto} from "../../../dto/ChargeMoneyDto";
import {WalletService} from "../../../service/wallet.service";
import {ICreateOrderRequest, IPayPalConfig} from "ngx-paypal";


@Component({
  selector: 'app-money-charge',
  templateUrl: './money-charge.component.html',
  styleUrls: ['./money-charge.component.css']
})
export class MoneyChargeComponent implements OnInit {
  chargeMoneyDto ?: ChargeMoneyDto;
  public amountMoney: string = '1';
  payPalConfig ?: IPayPalConfig;
  constructor(private walletService: WalletService) {
  }

  ngOnInit(): void {
    this.initConfig();
  }
  private initConfig(): void {
    this.payPalConfig = {
      currency: 'USD',
      clientId: 'AY8iHeM-hNFaN3HcVG3M4n51ayP-Y2SuWqwLNc4pI3BajndKrmOsXaeaj9z9eMjA6Wt8G2ZYXtO0zmy_',
      createOrderOnClient: (data) => < ICreateOrderRequest > {
        intent: 'CAPTURE',
        purchase_units: [{
          amount: {
            currency_code: 'USD',
            value: this.amountMoney,
            breakdown: {
              item_total: {
                currency_code: 'USD',
                value: this.amountMoney
              }
            }
          },
          items: [{
            name: 'Enterprise Subscription',
            quantity: '1',
            category: 'DIGITAL_GOODS',
            unit_amount: {
              currency_code: 'USD',
              value: this.amountMoney,
            },
          }]
        }]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then(details => {
          console.log('onApprove - you can get full order details inside onApprove: ', details)
          this.chargeMoneyDto = {
            value : this.amountMoney,
            id : '1'
          };
          this.walletService.chargeMoney(this.chargeMoneyDto).subscribe(
            data => {
              console.log('Thanh Toán Thành Công')
            }
          );
        });

      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
        console.log('Đã Hủy Thanh Toán')
      },
      onError: err => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      }
    };
  }
  charge50() {
    this.amountMoney = '50'
    console.log(this.amountMoney)
  }

  charge100() {
    this.amountMoney = '100'
    console.log(this.amountMoney)
  }

  charge500() {
    this.amountMoney = '500'
    console.log(this.amountMoney)
  }
}
