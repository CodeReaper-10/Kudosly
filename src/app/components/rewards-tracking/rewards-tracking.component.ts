import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Reward } from 'src/app/models/reward';

@Component({
  selector: 'app-rewards-tracking',
  templateUrl: './rewards-tracking.component.html',
  styleUrls: ['./rewards-tracking.component.css']
})
export class RewardsTrackingComponent implements OnInit {
  rewards: Reward[] = [];
  redeemedRewards: Reward[] = [];
  
  constructor(public dataService: DataService) { 
    this.redeemedRewards = [
      { id: 1, name: 'Azure Certfication', description: 'Wohoo! You have received 500 iCoins for completing your Azure Certification.', points: 500, image: '', redeemed: false },
      { id: 2, name: 'AWS Certification', description: 'Wohoo! You have received 200 iCoins for completing your AWS Certification.', points: 200, image: '', redeemed: false },
      { id: 3, name: 'GCP Certification', description: 'Wohoo! You have received 800 iCoins for completing your GCP Certification.', points: 800, image: '', redeemed: false }
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
