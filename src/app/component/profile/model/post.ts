import {Guest} from "../../../models/guest";

export interface Post {
  id?: number;
  image?: string;
  postDate?: string;
  privacy?: string;
  feeling?: string;
  content?: string;
  guest: Guest;
}
