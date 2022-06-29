/*
  Created by khoaVC
  Role: Guest
  Time: 10:00 21/06/2022
  Interface: GuestDto => used to send data from sign in form (GuestCreateComponent) to server
*/
export  interface GuestDto {
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
}
