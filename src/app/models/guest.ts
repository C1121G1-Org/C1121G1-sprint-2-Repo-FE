import {Wallet} from "../component/profile/model/wallet";

/*
  Created by khoaVC
  Role: Guest
  Time: 10:00 21/06/2022
  Interface: Guest
*/
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

