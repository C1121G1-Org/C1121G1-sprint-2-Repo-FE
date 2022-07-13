import {Guest} from "./guest";
import {Friend} from "./friend";

export interface GuestFriendDto {
  id?: number;
  isAccept?: boolean;
  isSuggest?: boolean;
  guestDto?: Guest;
  friendDto?: Friend;
}
