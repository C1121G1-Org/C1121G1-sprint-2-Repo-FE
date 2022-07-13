import {Account} from './account';

export interface IMember {
  id?: number;

  name: string;

  dateOfBirth: string;

  createDate: string;

  gender: boolean;

  career: string;

  address: string;

  email: string;

  image: string;

  maritalStatus: boolean;

  account: Account;

  // wallet;
  //
  // guestTargetSet;
  //
  // giftSet;
  //
  // likePostSet;
  //
  // postSet;
  //
  // likeCommentSet;
  //
  // postReports;
}
