import {ICategoryGift} from './ICategoryGift';

export interface IGift {
  id: number;
  name: string;
  amountCoin: number;
  image: string;
  categoryGift: ICategoryGift;
}
