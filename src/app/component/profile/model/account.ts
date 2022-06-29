import {Guest} from "./guest";

export interface Account {
  id?: number;
  userName?: string;
  encryptPassword?: string;
  isEnabled?: boolean;
  isLogin?: boolean;
  verificationCode?: string;
  guest?: Guest;
}
