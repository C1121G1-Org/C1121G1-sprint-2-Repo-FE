import {Guest} from "./guest";
import {Friend} from "./friend";

export interface GuestFriend {
  id?: number;
  isAccept?: boolean;
  isSuggest?: boolean;
  guestDto?: Guest;
  friendDto?: Friend;
}
