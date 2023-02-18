import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { RewardsCatalogComponent } from './components/rewards-catalog/rewards-catalog.component';
import { RewardsTrackingComponent } from './components/rewards-tracking/rewards-tracking.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RewardsTrackerComponent } from './components/rewards-tracker/rewards-tracker.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    RewardsCatalogComponent,
    RewardsTrackingComponent,
    LandingPageComponent,
    RewardsTrackerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
