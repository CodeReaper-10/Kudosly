import { Component, OnInit } from '@angular/core';
import { RewardsService } from 'src/app/services/rewards.service';
import { Reward } from 'src/app/models/reward';

@Component({
  selector: 'app-rewards-catalog',
  templateUrl: './rewards-catalog.component.html',
  styleUrls: ['./rewards-catalog.component.css']
})
export class RewardsCatalogComponent implements OnInit {
  rewards: Reward[]=[];
  totalPoints: number = 2000;

  constructor(private rewardsService: RewardsService) { }

  ngOnInit() {
    this.rewards = this.rewardsService.getRewards();
  }

  redeem(reward: Reward){
    if (reward.points > this.totalPoints) {
      alert("You don't have enough points to redeem this reward.");
      return;
    }

    this.totalPoints -= reward.points;
    reward.redeemed = true;
    alert("Reward redeemed successfully!");
    console.log(`Redeeming reward: ${reward.name}, ${reward.points} points`);
  }
}
