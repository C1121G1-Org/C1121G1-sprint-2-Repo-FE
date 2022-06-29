import {Guest} from "./guest";

export interface Wallet {
  id?: number;
  value?: number;
  coin?: number;
  totalMoney?: number;
  guest?: Guest;
}
