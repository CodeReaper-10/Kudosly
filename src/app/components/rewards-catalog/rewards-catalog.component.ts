import { Component, OnInit } from '@angular/core';
import { RewardsService } from 'src/app/services/rewards.service';
import { Reward } from 'src/app/models/reward';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-rewards-catalog',
  templateUrl: './rewards-catalog.component.html',
  styleUrls: ['./rewards-catalog.component.css'],
})
export class RewardsCatalogComponent implements OnInit {
  rewards: Reward[] = [];
  totalPoints: number = 4000;

  constructor(
    private rewardsService: RewardsService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    localStorage.setItem('totalPoints', '4000');
    this.rewards = this.rewardsService.getRewards();

    // get totalPoints value from localStorage, or set it to the initialized value
    const storedPoints = localStorage.getItem('totalPoints');
    this.totalPoints = storedPoints ? parseInt(storedPoints) : 4000;
  }

  redeem(reward: Reward) {
    if (reward.points > this.totalPoints) {
      alert("You don't have enough points to redeem this reward.");
      return;
    }

    this.totalPoints -= reward.points;
    reward.redeemed = true;
    this.dataService.addRedeemedReward(reward);
    alert('Reward redeemed successfully!');
    console.log('Reward redeemed successfully!', reward);
    console.log(`Redeeming reward: ${reward.name}, ${reward.points} points`);

    // save the updated totalPoints value to localStorage
    localStorage.setItem('totalPoints', this.totalPoints.toString());
  }
}
