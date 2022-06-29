<<<<<<< HEAD
import {Wallet} from "../component/profile/model/wallet";


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
=======
/*
  Created by khoaVC
  Role: Guest
  Time: 10:00 21/06/2022
  Interface: Guest
*/
export  interface Guest {
  id?: number;

  userName?: string;

  name?: string;

  password?: string;

  createDate?: string;

  dateOfBirth?: string;

  gender?: boolean;

  career?: string;

  address?: string;

  email?: string;

  image?: string;

  maritalStatus?: number;
>>>>>>> 3b67fb1d4318a0569cbb7487479c23a5f01285ef
}
