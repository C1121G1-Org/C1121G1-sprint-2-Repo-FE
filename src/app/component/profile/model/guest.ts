import {Wallet} from "./wallet";

export interface Guest {
  id?: number;
  name?: string;
  dateOfBirth?: string;
  gender?: boolean;
  career?: string;
  address?: string;
  email?: string;
  favorite?: string;
  image?: string;
  maritalStatus?: boolean;
  deleteFlag?: boolean;
  wallet?: Wallet;
  account?: Account;
}
