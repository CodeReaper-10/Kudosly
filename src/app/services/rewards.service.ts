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
      image: this.path + "GiftCards.png"
    },
    {
      id: 2,
      name: 'Movie Ticket',
      description: 'Redeemable for a movie ticket',
      points: 500,
      image: this.path + "GiftCards.png"
    },
    {
      id: 3,
      name: 'Vacation Package',
      description: 'Redeemable for a vacation package',
      points: 5000,
      image: this.path + "GiftCards.png"
    },
    {
      id: 4,
      name: 'Demo 1',
      description: 'Redeemable for demo 1',
      points: 520,
      image: this.path + "GiftCards.png"
    },
    {
      id: 5,
      name: 'Demo 2',
      description: 'Redeemable for demo 2',
      points: 540,
      image: this.path + "GiftCards.png"
    }
  ];
  constructor() { }
  
  getRewards() {
    return this.rewards.slice();
  }
}
