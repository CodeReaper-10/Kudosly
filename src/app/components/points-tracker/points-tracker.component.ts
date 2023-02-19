import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Reward } from 'src/app/models/reward';

@Component({
  selector: 'app-points-tracker',
  templateUrl: './points-tracker.component.html',
  styleUrls: ['./points-tracker.component.css']
})
export class PointsTrackerComponent implements OnInit {
  rewards: Reward[] = [];
  redeemedRewards: Reward[] = [];

  constructor(public dataService: DataService) {
    this.redeemedRewards = [
      { id: 1, name: 'Azure Certification', description: 'Wohoo! You have received 1000 iCoins for completing your Azure Certification.', points: 1000, image: '', redeemed: false },
      { id: 2, name: 'AWS Certification', description: 'Wohoo! You have received 1800 iCoins for completing your AWS Certification.', points: 1800, image: '', redeemed: false },
      { id: 3, name: 'GCP Certification', description: 'Wohoo! You have received 1200 iCoins for completing your GCP Certification.', points: 1200, image: '', redeemed: false }
    ];
  }

  ngOnInit() {
    this.dataService.getRedeemedRewards().subscribe(redeemedRewards => {
      this.rewards = redeemedRewards;
    // this.redeemedRewards = this.rewards
    });
  }
  trackByIdx(index: number, item: Reward) {
    return item.id;
  }
}
