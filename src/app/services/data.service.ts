import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Reward } from '../models/reward';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private redeemedRewards$: BehaviorSubject<Reward[]> = new BehaviorSubject<Reward[]>([]);
  constructor() { }

  getRedeemedRewards(): Observable<Reward[]> {
    return this.redeemedRewards$.asObservable();
  }

  addRedeemedReward(reward: Reward) {
    const currentRedeemedRewards = this.redeemedRewards$.getValue();
    const newRedeemedRewards = [reward, ...currentRedeemedRewards];
    this.redeemedRewards$.next(newRedeemedRewards);
  }
}
