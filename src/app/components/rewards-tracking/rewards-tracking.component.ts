import { Component, OnInit } from '@angular/core';
import { RewardsService } from 'src/app/services/rewards.service';
import { Reward } from 'src/app/models/reward';

@Component({
  selector: 'app-rewards-tracking',
  templateUrl: './rewards-tracking.component.html',
  styleUrls: ['./rewards-tracking.component.css']
})
export class RewardsTrackingComponent implements OnInit {
  rewards!:Reward[];
  totalPoints: number =  0;
  constructor(private rewardsService: RewardsService) { }

  ngOnInit() {
    this.rewards = this.rewardsService.getRewards();
    this.calculateTotalPoints();
  }

  calculateTotalPoints() {
    this.totalPoints = this.rewards.reduce((total, reward) => total + reward.points, 0);
  }

}
