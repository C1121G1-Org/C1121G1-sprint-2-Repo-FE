
import {Friend} from "./friend";
import {Guest} from "../component/profile/model/guest";

export interface GuestFriend {
  id?: number;
  isAccept?: boolean;
  isSuggest?: boolean;
  guest?: Guest;
  friend?: Friend;
}
