/*
  Created by khoaVC
  Role: Guest
  Time: 10:00 21/06/2022
  Interface: ExtraInforDto => used to send data from survey form (GuestSurveyComponent) to server
*/
export interface ExtraInforDto {
  image: string;
  maritalStatus: boolean;
  targetList: number[];
  favoriteList: number[];
}
