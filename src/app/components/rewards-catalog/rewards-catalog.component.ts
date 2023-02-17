import { Component, OnInit } from '@angular/core';
import { RewardsService } from 'src/app/services/rewards.service';
import { Reward } from 'src/app/models/reward';

@Component({
  selector: 'app-rewards-catalog',
  templateUrl: './rewards-catalog.component.html',
  styleUrls: ['./rewards-catalog.component.css']
})
export class RewardsCatalogComponent implements OnInit {
  rewards!: Reward[];

  constructor(private rewardsService: RewardsService) { }

  ngOnInit() {
    this.rewards = this.rewardsService.getRewards();
  }

}
