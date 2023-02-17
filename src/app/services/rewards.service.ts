import { Injectable } from '@angular/core';
import { Reward } from '../models/reward';

@Injectable({
  providedIn: 'root'
})
export class RewardsService {
  private rewards: Reward[] = [
    {
      id: 1,
      name: 'Gift Card',
      description: 'Redeemable for gift items',
      points: 1000
    },
    {
      id: 2,
      name: 'Movie Ticket',
      description: 'Redeemable for a movie ticket',
      points: 500
    },
    {
      id: 3,
      name: 'Vacation Package',
      description: 'Redeemable for a vacation package',
      points: 5000
    }
  ];
  constructor() { }
  
  getRewards() {
    return this.rewards.slice();
  }
}
