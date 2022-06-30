import {Guest} from "./guest";
import {Friend} from "./friend";

export interface GuestFriend {
  id?: number;
  isAccept?: boolean;
  isSuggest?: boolean;
  guest?: Guest;
  friend?: Friend;
}
