import { Injectable } from '@angular/core';
import { Reward } from '../models/reward';

@Injectable({
  providedIn: 'root'
})
export class RewardsService {
  path: string = "assets/"
  private rewards: Reward[] = [
    {
      id: 1,
      name: 'Gift Card',
      description: 'Redeemable for gift items',
      points: 1000,
      image: this.path + "GiftCard.jpg",
      redeemed: false
    },
    {
      id: 2,
      name: 'Movie Ticket',
      description: 'Redeemable for a movie ticket',
      points: 500,
      image: this.path + "MovieTicket.jpg",
      redeemed: false
    },
    {
      id: 3,
      name: 'Vacation Package',
      description: 'Redeemable for a vacation',
      points: 5000,
      image: this.path + "VacationPackage.jpg",
      redeemed: false
    },
    {
      id: 4,
      name: 'Food Voucher',
      description: 'Redeemable for food & beverages',
      points: 520,
      image: this.path + "Food.jpg",
      redeemed: false
    },
    {
      id: 5,
      name: 'Arcade Pass',
      description: 'Redeemable for a free arcade pass worth 500 credits',
      points: 540,
      image: this.path + "ArcadePass.jpg",
      redeemed: false
    }
  ];
  constructor() { }
  
  getRewards() {
    return this.rewards.slice();
  }
}
